import { createSlice } from '@reduxjs/toolkit';

export interface LayoutState {}

const initialState: LayoutState = {};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {},
});

export const {} = layoutSlice.actions;
export default layoutSlice.reducer;
