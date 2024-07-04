// Packages
import { createSelector, createSlice } from '@reduxjs/toolkit';

// Utilities
import { RootState } from '@app/store';
import { getConfigurationAction, getWalkthroughAction } from './thunks';

// Interfaces
import { AppInitialState } from './types';

// Slice
const initialState: AppInitialState = {
  language: 'en',
  plannerStep: 0,
  walkthrough: [],
  deepLinkData: null,
  networkError: null,
  themeMode: 'default',
  currentOffering: null,
  subscriptionState: {
    userId: '',
    active: true,
    isAnonymous: false
  },
  config: {
    appleAppId: '',
    privacyPolicy: '',
    googlePackageName: '',
    termsAndConditions: ''
  }
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setConfig: (state, action) => {
      state.config = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
    updatePlannerStep: (state, action) => {
      state.plannerStep = action.payload;
    },
    setCurrentOffering: (state, action) => {
      state.currentOffering = action.payload;
    },
    setSubscriptionState: (state, action) => {
      state.subscriptionState = action.payload;
    },
    resetSubscriptionState: (state) => {
      state.subscriptionState = initialState.subscriptionState;
    },
    setNetworkError: (state, action) => {
      state.networkError = action.payload;
    },
    clearNetworkError: (state) => {
      state.networkError = null;
    },
    setDeepLinkData: (state, action) => {
      state.deepLinkData = action.payload;
    },
    clearDeepLinkData: (state) => {
      state.deepLinkData = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getWalkthroughAction.fulfilled, (state, action) => {
      state.walkthrough = action.payload?.result;
    });

    builder.addCase(getConfigurationAction.fulfilled, (state, action) => {
      state.config = action.payload?.data;
    });
  }
});

// Action creators are generated for each case reducer function
export const appActions = appSlice.actions;

export default appSlice.reducer;

// Selectors
const _app = (state: RootState) => state.app;

export const selectLanguage = createSelector(_app, (data) => data.language);

export const selectThemeMode = createSelector(_app, (data) => data.themeMode);

export const selectConfiguration = createSelector(_app, (data) => data.config);

export const selectPlannerStep = createSelector(_app, (data) => data.plannerStep);

export const selectWalkthrough = createSelector(_app, (data) => data.walkthrough);

export const selectDeepLinkData = createSelector(_app, (data) => data.deepLinkData);

export const selectNetworkError = createSelector(_app, (data) => data.networkError);

export const selectCurrentOfferings = createSelector(_app, (data) => data.currentOffering);

export const selectSubscriptionState = createSelector(_app, (data) => data.subscriptionState);
