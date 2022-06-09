import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useAppSelector, useAppDispatch } from '../data/hooks';
import {
  getStepsInfoBySuiteAndPath,
  resetTestInfo,
  updateTestInfo,
} from '../data/tests/test/testSlice';

const Test: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { testName, suiteName, filePath } = router.query;

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
  return <div>test</div>;
};

export default Test;
