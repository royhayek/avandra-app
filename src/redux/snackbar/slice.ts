// Packages
import { createSelector, createSlice } from '@reduxjs/toolkit';

// Interfaces
import { RootState } from '@app/store';
import { SnackbarInitialState } from './types';

// Slice
const initialState: SnackbarInitialState = {
  title: '',
  message: '',
  type: '',
  show: false,
  delay: 1200,
  autohide: true
};

const snackbarSlice = createSlice({
  name: 'snackbarSlice',
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.show = true;
      state.type = action.payload.type;
      state.title = action.payload.title;
      state.message = action.payload.message;
    },
    hideSnackbar: (state) => {
      state.show = false;
    }
  }
});

export const snackbarActions = snackbarSlice.actions;

export default snackbarSlice.reducer;

// Selectors
const _snackbar = (state: RootState) => state.snackbar;

export const selectSnackBar = createSelector(_snackbar, (data) => data);
