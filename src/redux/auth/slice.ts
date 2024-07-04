// Packages
import { createDraftSafeSelector as createSelector, createSlice } from '@reduxjs/toolkit';

// Utilities
import { loginAction, registerAction } from './thunks';

// Interfaces
import { RootState } from '@app/store';
import { AuthInitialState } from './types';

export const initialState: AuthInitialState = {
  token: null,
  error: null,
  guest: false,
  loading: false,
  loggedOut: false,
  refreshToken: null,
  authenticated: false
};

export const authSlice = createSlice({
  name: 'auth',
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
    builder.addCase(registerAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.error = null;
      state.guest = false;
      state.loading = false;
      state.jwtExpired = false;
      state.authenticated = true;
      state.token = action.payload.token;
    });

    builder.addCase(registerAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.error = null;
      state.guest = false;
      state.loading = false;
      state.jwtExpired = false;
      state.authenticated = true;
      state.token = action.payload.token;
    });

    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

// Action creators are generated for each case reducer function
export const authActions = authSlice.actions;

export default authSlice.reducer;

// ------------------------------------------------------------ //
// ------------------------ Selectors ------------------------- //
// ------------------------------------------------------------ //
const _auth = (state: RootState) => state.auth;

export const selectAuth = createSelector(_auth, (data) => data);

export const selectIsGuest = createSelector(_auth, (data) => data?.guest);

export const selectAuthLoading = createSelector(_auth, (data) => data.loading);

export const selectIsAuthenticated = createSelector(_auth, (data) => data?.authenticated);
