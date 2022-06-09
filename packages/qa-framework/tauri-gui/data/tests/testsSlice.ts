import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { getTestsDetails } from './tests';

export interface TestsRowData {
  suite: string;
  path: string;
  test: string;
  id: string;
}

export interface TestsSelectionProps {
  suiteName: string | undefined;
  filePath: string | undefined;
  testsInfo: TestsRowData[] | [];
}

// Define the initial state using that type
const initialState: TestsSelectionProps = {
  suiteName: undefined,
  filePath: undefined,
  testsInfo: [],
};

export const testsSlice = createSlice({
  name: 'suites',
  initialState,
  reducers: {
    updateTestsInfo: (
      state,
      action: PayloadAction<{ suiteName: string; filePath: string }>
    ) => {
      getTestsDetails(action.payload.suiteName, action.payload.filePath).then(
        (testsDetails) => {
          state.testsInfo = testsDetails;
        }
      );
    },
  },
});

export const { updateTestsInfo } = testsSlice.actions;

export default testsSlice.reducer;
