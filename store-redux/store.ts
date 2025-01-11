// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './slices/cakeSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    // Add more reducers here as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
