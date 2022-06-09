import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { getSuitesDetails } from './suites';

export interface SuitesRowData {
  suite: string;
  path: string;
  file: string;
  tests: string;
  id: string;
}

export interface SuitesSelectionProps {
  projectPath: string | undefined;
  suitesInfo: SuitesRowData[] | [];
}

export const getSuitesInfoByPath = createAsyncThunk(
  'getSuitesInfoByPath',
  async (basePath: string) => {
    return await getSuitesDetails(basePath);
  }
);

// Define the initial state using that type
const initialState: SuitesSelectionProps = {
  projectPath: undefined,
  suitesInfo: [],
};

export const suitesSlice = createSlice({
  name: 'suites',
  initialState,
  reducers: {
    resetSuitesInfo: (state) => {
      state.projectPath = undefined;
      state.suitesInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSuitesInfoByPath.fulfilled, (state, action) => {
      state.projectPath = action.payload.projectPath;
      state.suitesInfo = action.payload.suitesInfo;
    });
  },
});

export const { resetSuitesInfo } = suitesSlice.actions;

export default suitesSlice.reducer;
