import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useAppSelector, useAppDispatch } from '../data/hooks';
import {
  getStepsInfoBySuiteAndPath,
  resetTestInfo,
  updateTestInfo,
} from '../data/tests/test/testSlice';
import { Stage } from 'react-konva';
import { TestView } from '../components/test/view/TestView';

const Test: NextPage = () => {
  const router = useRouter();
  const testString = useAppSelector((state) => state.test.testString);
  const stepsInfo = useAppSelector((state) => state.test.stepsInfo);
  const dispatch = useAppDispatch();
  const { testName, suiteName, filePath } = router.query;

  //console.log(testString);
  console.log(stepsInfo);

  React.useEffect(() => {
    if (testName && suiteName && filePath) {
      dispatch(
        updateTestInfo({
          filePath: filePath.toString(),
          testName: testName.toString(),
          suiteName: suiteName.toString(),
        })
      );

      dispatch(
        getStepsInfoBySuiteAndPath({
          testName: testName.toString(),
          filePath: filePath.toString(),
          suiteName: suiteName.toString(),
        })
      );
    } else {
      dispatch(resetTestInfo());
    }
  }, [testName, suiteName, filePath, dispatch]);
  return (
    <div>
      <Stage fill width={window.innerWidth} height={window.innerHeight}>
        <TestView />
      </Stage>
    </div>
  );
};

const processStep = (step: string) => {
  let variables;
};

export default Test;
