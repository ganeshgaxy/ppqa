import { readTextFile } from '@tauri-apps/api/fs';

export const getTestsDetails = async (suiteName: string, filePath: string) => {
  let testsList = [];
  const suiteData = await readTextFile(filePath);
  const suiteDataStringRegex = (suite: string) =>
    RegExp(
      `(test.describe)([\\n\\r\\s]+||)(\\()([\\n\\r\\s]+||)('||")(${suite})('||")([\\n\\r\\s]+||)(([\\n\\r\\s]||.)*?)(}([\\n\\r\\s]+||)\\);)([\\n\\r\\s]+||)(}([\\n\\r\\s]+||)\\);)`,
      'g'
    );
  const suiteDataString = suiteData
    .toString()
    .match(suiteDataStringRegex(suiteName));
  const testsRegex =
    /(test)(?!.describe)([\n\r\s]+||)(\()([\n\r\s]+||)('||")(.*?)('||")([\n\r\s]+||)(,)/g;
  if (suiteDataString) {
    const testsAllMatch = suiteDataString[0].match(testsRegex);
    for (let _ of testsAllMatch ? testsAllMatch : []) {
      const testsMatch = testsRegex.exec(suiteDataString[0]);
      let test =
        testsMatch && testsMatch.length > 1 && testsMatch[6] && testsMatch[6];
      if (test)
        testsList.push({
          test,
          suite: suiteName,
          path: filePath,
          id: `${testsList.length + 1}`,
        });
    }
  }
  return testsList;
};
