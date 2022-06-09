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
      `(test.describe)([\\n\\r\\s]+||)(\\()([\\n\\r\\s]+||)('||")(${suiteName})('||")([\\n\\r\\s]+||)(([\\n\\r\\s]||.)*?)(test)([\\n\\r\\s]+||)(\\()('||")(${testName})('||")(([\\n\\r\\s]||.)*?)(}([\\n\\r\\s]+||)\\);)([\\n\\r\\s]+||)((test)||(}([\\n\\r\\s]+||)\\);))`,
      'g'
    );
  const testDataString = suiteData
    .toString()
    .match(testDataStringRegex(testName, suiteName));

  /*const suitesMatch = testDataStringRegex(testName, suiteName).exec(
    suiteData.toString()
  );
  console.log(suitesMatch);*/
  return {
    stepsInfo,
    testString,
  };
};
