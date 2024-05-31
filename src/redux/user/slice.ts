// Packages
import { createDraftSafeSelector as createSelector, createSlice } from '@reduxjs/toolkit';

// Utilities
import { updateProfileAction } from './thunks';

// Interfaces
import { RootState } from '@app/store';
import { UserInitialState } from './types';

export const initialState: UserInitialState = {
  data: {},
  error: null,
  loading: false
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

export const selectUser = createSelector(_user, (data) => data.data);

export const selectUserError = createSelector(_user, (data) => data.error);

export const selectUserId = createSelector(_user, (data) => data?.data?._id);

export const selectUserRole = createSelector(_user, (data) => data?.data?.role);

export const selectUserSubmitting = createSelector(_user, (data) => data.loading);
