import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { getTestDetails } from './test';

export interface StepRowData {
  imports: string[] | [];
  steps: string;
  variableInfo: { type: string; var: string } | undefined;
  usage: string[] | [];
  id: string;
}

export interface TestSelectionProps {
  testName: string | undefined;
  suiteName: string | undefined;
  filePath: string | undefined;
  testString: string | undefined;
  stepsInfo: StepRowData[] | [];
}

export const getStepsInfoBySuiteAndPath = createAsyncThunk(
  'getStepsInfoBySuiteAndPath',
  async (testInfo: {
    testName: string;
    suiteName: string;
    filePath: string;
  }) => {
    return await getTestDetails(
      testInfo.testName,
      testInfo.suiteName,
      testInfo.filePath
    );
  }
);

// Define the initial state using that type
const initialState: TestSelectionProps = {
  testName: undefined,
  suiteName: undefined,
  filePath: undefined,
  testString: undefined,
  stepsInfo: [],
};

export const testsSlice = createSlice({
  name: 'suites',
  initialState,
  reducers: {
    updateTestInfo: (
      state,
      action: PayloadAction<{
        testName: string;
        suiteName: string;
        filePath: string;
      }>
    ) => {
      state.testName = action.payload.testName;
      state.suiteName = action.payload.suiteName;
      state.filePath = action.payload.filePath;
    },
    resetTestInfo: (state) => {
      state.testName = undefined;
      state.suiteName = undefined;
      state.filePath = undefined;
      state.testString = undefined;
      state.stepsInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStepsInfoBySuiteAndPath.fulfilled, (state, action) => {
      state.testString = action.payload.testString;
      state.stepsInfo = action.payload.stepsInfo;
    });
  },
});

export const { updateTestInfo, resetTestInfo } = testsSlice.actions;

export default testsSlice.reducer;
