import { readTextFile } from '@tauri-apps/api/fs';
import { StepRowData } from './testSlice';

export const getTestDetails = async (
  testName: string,
  suiteName: string,
  filePath: string
) => {
  let stepsInfo: StepRowData[] = [];
  let testString = undefined;
  const suiteData = await readTextFile(filePath);
  const testDataStringRegex = (testName: string, suiteName: string) =>
    RegExp(
      `(test.describe)([\\n\\r\\s]+||)(\\()([\\n\\r\\s]+||)('||")(${suiteName})('||")([\\n\\r\\s]+||)(([\\n\\r\\s]||.)*?)(test)([\\n\\r\\s]+||)(\\()('||")(${testName})('||")(([\\n\\r\\s]||.)*?)(=>)([\\n\\r\\s]+||)({)(([\\n\\r\\s]||.)*?)(}([\\n\\r\\s]+||)\\);)([\\n\\r\\s]+||)((test.describe\\()||(test.\\()||(}([\\n\\r\\s]+||)\\);))`,
      'g'
    );
  const testDataString = suiteData
    .toString()
    .match(testDataStringRegex(testName, suiteName));

  const testsMatch = testDataStringRegex(testName, suiteName).exec(
    suiteData.toString()
  );
  testString =
    testsMatch && testsMatch.length > 1 && testsMatch[0] && testsMatch[0];
  let testSteps =
    testsMatch && testsMatch.length > 1 && testsMatch[22] && testsMatch[22];
  if (testSteps) {
    const stepsDataRegex = /(\r\n|\r|\n)(.*?)(;)/g;
    const stepsMatchList = testSteps.toString().match(stepsDataRegex);

    for (let _ of stepsMatchList ? stepsMatchList : []) {
      const stepMatch = stepsDataRegex.exec(testSteps.toString());

      const step = stepMatch && stepMatch.length > 0 ? stepMatch[2] : '';

      stepsInfo.push({
        imports: getImportsInfo(step, suiteData.toString()),
        step,
        variableInfo: getVariableInfo(step),
        usage: [],
        id: `${stepsInfo.length + 1}`,
      });
    }
  }
  return {
    stepsInfo,
    testString: testString ? testString.toString() : '',
  };
};

const getVariableInfo = (step: string) => {
  const varRegex = /(.*?)(=)([\n\r\s||])(?!(>|=))/g;
  const stepMatch = varRegex.exec(step);
  if (stepMatch && stepMatch.length > 0 && stepMatch[1]) {
    const variableMatch = stepMatch[1].trim();
    return {
      name: variableMatch.split(' ')[1],
      type: undefined,
      declaration: variableMatch.split(' ')[0],
    };
  } else return undefined;
};

const getImportsInfo = (step: string, suiteData: string) => {
  let importsInfo = [];
  const importRegex =
    /(import)([\n\r\s]+||)(([\n\r\s]||.)*?)({)(([\n\r\s]||.)*?)(})([\n\r\s]+||)(from)([\n\r\s]+||)('||")(([\n\r\s]||.)*?)('||")(;)/g;
  const importDataString = suiteData.toString().match(importRegex);
  for (let _ in importDataString ? importDataString : []) {
    const importMatch = importRegex.exec(suiteData);
    const pathTemp = importMatch && importMatch.length > 0 && importMatch[13];
    const defaultImports =
      importMatch && importMatch.length > 0 && importMatch[3];
    const imports = importMatch && importMatch.length > 0 && importMatch[6];
    let members = [];
    for (let defaultImport of defaultImports
      ? defaultImports.toString().split(',')
      : []) {
      if (defaultImport.trim() !== '' && step.includes(defaultImport.trim())) {
        members.push({
          import: defaultImport.trim(),
          default: true,
        });
      }
    }
    for (let importTemp of imports ? imports.toString().split(',') : []) {
      if (importTemp.trim() !== '' && step.includes(importTemp.trim())) {
        members.push({
          import: importTemp.trim(),
          default: false,
        });
      }
    }
    if (members.length > 0)
      importsInfo.push({
        members: members,
        path: pathTemp ? pathTemp.toString() : undefined,
      });
  }
  return importsInfo;
};
