// Packages
import { createDraftSafeSelector as createSelector, createSlice } from '@reduxjs/toolkit';

// Utilities
import { RootState } from '@app/store';
import { UserInitialState } from './types';
import { updateProfileAction } from './thunks';

export const initialState: UserInitialState = {
  data: {},
  loading: false,
  error: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state, action) => {
      return { ...state, ...action.payload };
    },
    reset: () => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(updateProfileAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateProfileAction.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload.result;
    });

    builder.addCase(updateProfileAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions;

export default userSlice.reducer;

// ------------------------------------------------------------ //
// ------------------------ Selectors ------------------------- //
// ------------------------------------------------------------ //
const _user = (state: RootState) => state.user;

export const getUser = createSelector(_user, (data) => data.data);

export const getUserId = createSelector(_user, (data) => data?.data?._id);

export const getUserRole = createSelector(_user, (data) => data?.data?.role);

export const getUserError = createSelector(_user, (data) => data.error);

export const getUserSubmitting = createSelector(_user, (data) => data.loading);
