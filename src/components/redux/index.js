import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/sliceCount';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
