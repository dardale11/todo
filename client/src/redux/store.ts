import { configureStore, combineReducers } from '@reduxjs/toolkit';
import layoutSlice from './reducers/layoutSlice';
import authSlice from './reducers/authSlice';
import notesSlice from './reducers/notesSlice';

export const rootReducer = combineReducers({
  layout: layoutSlice,
  auth: authSlice,
  notes: notesSlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;

export type RootState = ReturnType<typeof store.getState>;
