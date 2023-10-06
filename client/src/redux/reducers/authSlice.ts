import { createSlice } from '@reduxjs/toolkit';

export interface authState {
  token?: string;
}

const initialState: authState = {
  token: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
