import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

// Define the initial state using that type
const initialState: SuitesSelectionProps = {
  projectPath: undefined,
  suitesInfo: [],
};

export const suitesSlice = createSlice({
  name: 'suites',
  initialState,
  reducers: {
    getSuitesInfo: (state) => {
      getSuitesDetails().then((suitesDetails) => {
        state.projectPath = suitesDetails.projectPath;
        state.suitesInfo = suitesDetails.suitesInfo;
      });
    },
  },
});

export const { getSuitesInfo } = suitesSlice.actions;

export default suitesSlice.reducer;
