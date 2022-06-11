import { configureStore } from '@reduxjs/toolkit';
import suitesReducer from './suites/suitesSlice';
import testsReducer from './tests/testsSlice';
import testReducer from './tests/test/testSlice';

export const store = configureStore({
  reducer: {
    suites: suitesReducer,
    tests: testsReducer,
    test: testReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
