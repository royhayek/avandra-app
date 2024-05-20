// Packages
import { createSelector, createSlice } from '@reduxjs/toolkit';

// Utilities
import { RootState } from '@app/store';
import { getConfigurationAction, getWalkthroughAction } from './thunks';

// Interfaces
import { AppInitialState } from './types';

// Slice
const initialState: AppInitialState = {
  config: {
    privacyPolicy: '',
    termsAndConditions: ''
  },
  language: 'en',
  plannerStep: 0,
  walkthrough: [],
  deviceUuid: null,
  messagesCount: 0,
  subscriptions: [],
  deepLinkData: null,
  lastSentDate: null,
  networkError: null,
  themeMode: 'default',
  lastRewardedDate: null,
  ownedSubscription: null
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
    setMessagesCount: (state, action) => {
      state.messagesCount = action.payload;
    },
    setLastSentDate: (state, action) => {
      state.lastSentDate = action.payload;
    },
    setLastRewardedDate: (state, action) => {
      state.lastRewardedDate = action.payload;
    },
    setPaidSubscriptions: (state, action) => {
      state.subscriptions = action.payload;
    },
    setOwnedSubscription: (state, action) => {
      state.ownedSubscription = action.payload;
    },
    setDeviceUuid: (state, action) => {
      state.deviceUuid = action.payload;
    },
    updatePlannerStep: (state, action) => {
      state.plannerStep = action.payload;
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

export const getLanguage = createSelector(_app, (data) => data.language);

export const getThemeMode = createSelector(_app, (data) => data.themeMode);

export const getConfiguration = createSelector(_app, (data) => data.config);

export const getDeviceUuid = createSelector(_app, (data) => data.deviceUuid);

export const getPlannerStep = createSelector(_app, (data) => data.plannerStep);

export const getWalkthrough = createSelector(_app, (data) => data.walkthrough);

export const getMessagesCount = createSelector(_app, (data) => data.messagesCount);

export const getSubscriptions = createSelector(_app, (data) => data.subscriptions);

export const selectDeepLinkData = createSelector(_app, (data) => data.deepLinkData);

export const selectNetworkError = createSelector(_app, (data) => data.networkError);

export const getOwnedSubscription = createSelector(_app, (data) => data.ownedSubscription);
