import { readTextFile, readDir } from '@tauri-apps/api/fs';
import path from 'path';

export interface FileListProps {
  fileName: string;
  filePath: string;
}

export const getSuitesDetails = async () => {
  const filePath = process.cwd();
  let fileList: FileListProps[] = [];

  const projectPath = path.resolve(
    filePath.split('packages\\qa-framework\\tauri-gui')[0]
  );

  const checkIfPathExists = async (pathString: string) => {
    return (await readDir(pathString)) ? true : false;
  };

  const readTestsFolder = async (pathString: string) => {
    const testsDir = await readDir(pathString);
    for (let file of testsDir) {
      const filePath = path.join(file.path);
      if (await checkIfPathExists(filePath)) {
        await readTestsFolder(filePath);
      } else {
        if (file.name) {
          fileList.push({
            fileName: file.name,
            filePath: filePath,
          });
        }
      }
    }
  };

  const getTestFiles = async () => {
    const testPath = path.join(projectPath, 'tests');
    const testsDirFound = await checkIfPathExists(testPath);
    if (testsDirFound) {
      await readTestsFolder(testPath);
      return {
        count: fileList.length,
        files: fileList,
      };
    } else {
      return { error: 'TESTS folders not found!' };
    }
  };

  const testsInfo = await getTestFiles();

  const suitesInfo = await getSuitesInfo(testsInfo);

  return { projectPath, suitesInfo };
};

const getSuitesInfo = async (testsInfo: any) => {
  let suitesInfo = [];
  if (testsInfo && testsInfo.files) {
    for (let file of testsInfo.files) {
      const suiteData = await readTextFile(file.filePath);
      const suiteNamesRegex =
        /(test.describe)([\n\r\s]+||)(\()([\n\r\s]+||)('||")(.*?)('||")([\n\r\s]+||)(,)/g;
      const testsRegex =
        /(test)(?!.describe)([\n\r\s]+||)(\()([\n\r\s]+||)('||")(.*?)('||")([\n\r\s]+||)(,)/g;
      const suitesAllMatch = suiteData.toString().match(suiteNamesRegex);
      for (let _ of suitesAllMatch ? suitesAllMatch : []) {
        let testsList = [];
        const suitesMatch = suiteNamesRegex.exec(suiteData.toString());
        let suite =
          suitesMatch &&
          suitesMatch.length > 1 &&
          suitesMatch[6] &&
          suitesMatch[6];
        if (suite) {
          const suiteDataStringRegex = (suite: string) =>
            RegExp(
              `(test.describe)([\\n\\r\\s]+||)(\\()([\\n\\r\\s]+||)('||")(${suite})('||")([\\n\\r\\s]+||)(([\\n\\r\\s]||.)*?)(}([\\n\\r\\s]+||)\\);)([\\n\\r\\s]+||)(}([\\n\\r\\s]+||)\\);)`,
              'g'
            );
          const suiteDataString = suiteData
            .toString()
            .match(suiteDataStringRegex(suite));
          if (suiteDataString) {
            const testsAllMatch = suiteDataString[0].match(testsRegex);
            for (let _ of testsAllMatch ? testsAllMatch : []) {
              const testsMatch = testsRegex.exec(suiteDataString[0]);
              let test =
                testsMatch &&
                testsMatch.length > 1 &&
                testsMatch[6] &&
                testsMatch[6];
              testsList.push(test);
            }
          }
          suitesInfo.push({
            suite: suite,
            tests: `${testsList.length}`,
            path: file.filePath,
            file: file.fileName,
            id: `${suitesInfo.length + 1}`,
          });
        }
      }
    }
  }
  return suitesInfo;
};
