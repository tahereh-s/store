// store/slices/cakeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CakeState {
  numSlices: number;
}

const initialState: CakeState = {
  numSlices: 0,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    addSlice(state) {
      state.numSlices += 1;
    },
    removeSlice(state) {
      if (state.numSlices > 0) {
        state.numSlices -= 1;
      }
    },
    resetCake(state) {
      state.numSlices = 0;
    },
  },
});

// Export actions and reducer
export const { addSlice, removeSlice, resetCake } = cakeSlice.actions;
export default cakeSlice.reducer;
