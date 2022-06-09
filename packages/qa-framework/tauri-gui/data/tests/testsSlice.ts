import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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

export const getTestInfoBySuiteAndPath = createAsyncThunk(
  'getTestInfoBySuiteAndPath',
  async (suiteInfo: { suiteName: string; filePath: string }) => {
    return await getTestsDetails(suiteInfo.suiteName, suiteInfo.filePath);
  }
);

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
      state.suiteName = action.payload.suiteName;
      state.filePath = action.payload.filePath;
    },
    resetTestsInfo: (state) => {
      state.suiteName = undefined;
      state.filePath = undefined;
      state.testsInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTestInfoBySuiteAndPath.fulfilled, (state, action) => {
      state.testsInfo = action.payload;
    });
  },
});

export const { updateTestsInfo, resetTestsInfo } = testsSlice.actions;

export default testsSlice.reducer;
