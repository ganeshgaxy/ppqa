import React from 'react';
import type { NextPage } from 'next';
import { SuiteTableContent } from '../components/suites/table/Table';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../data/hooks';
import { TestsTableContent } from '../components/test/table/TestsTable';
import { updateTestsInfo } from '../data/tests/testsSlice';

const suiteHeaders = [
  {
    label: 'Suite',
    name: 'suite',
  },
  { label: 'File', name: 'file' },
  { label: 'Tests', name: 'tests' },
];

const testHeaders = [
  {
    label: 'Test',
    name: 'test',
  },
  { label: 'Suite', name: 'suite' },
  { label: 'Steps', name: 'steps' },
];

const Suites: NextPage = (props: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const suitesInfo = useAppSelector((state) => state.suites.suitesInfo);
  const testsInfo = useAppSelector((state) => state.tests.testsInfo);
  const { suiteName, filePath } = router.query;

  React.useEffect(() => {
    if (suiteName && filePath) {
      dispatch(
        updateTestsInfo({
          filePath: filePath.toString(),
          suiteName: suiteName.toString(),
        })
      );
    }
  }, [suiteName, filePath, dispatch]);

  if (suiteName && filePath) {
    return (
      <div>
        {testsInfo && (
          <TestsTableContent headers={testHeaders} data={testsInfo} />
        )}
      </div>
    );
  } else {
    return (
      <div>
        {suitesInfo && (
          <SuiteTableContent headers={suiteHeaders} data={suitesInfo} />
        )}
      </div>
    );
  }
};

export default Suites;
