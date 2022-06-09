import React from 'react';
import type { NextPage } from 'next';
import { SuiteTableContent } from '../components/suites/table/Table';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../data/hooks';
import { TestsTableContent } from '../components/test/table/TestsTable';
import {
  getTestInfoBySuiteAndPath,
  resetTestsInfo,
  updateTestsInfo,
} from '../data/tests/testsSlice';
import { getSuitesInfoByPath } from '../data/suites/suitesSlice';

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
  { label: 'Actions', name: 'actions' },
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

      dispatch(
        getTestInfoBySuiteAndPath({
          filePath: filePath.toString(),
          suiteName: suiteName.toString(),
        })
      );
    } else {
      dispatch(getSuitesInfoByPath(props.basePath));
      dispatch(resetTestsInfo());
    }
  }, [suiteName, filePath, dispatch, props.basePath]);

  if (suiteName && filePath) {
    return (
      <div>
        {testsInfo.length > 0 && (
          <TestsTableContent
            headers={testHeaders}
            suite={suiteName.toString()}
            data={testsInfo}
          />
        )}
      </div>
    );
  } else {
    return (
      <div>
        {suitesInfo.length > 0 && (
          <SuiteTableContent headers={suiteHeaders} data={suitesInfo} />
        )}
      </div>
    );
  }
};

import path from 'path';

export const getStaticProps = () => {
  const filePath = process.cwd();
  return {
    props: {
      basePath: filePath,
    },
  };
};

export default Suites;
