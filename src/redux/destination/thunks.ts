// Packages
import _ from 'lodash';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Utilities
import {
  getBudgets,
  getTravelers,
  getInterests,
  getDestinations,
  incrementSearches,
  getRecentSearches,
  getDestinationDetails
} from './api';

// Interfaces
import { DestinationProps } from '@shared/types/Destination';

// Actions

export const getPopularDestinationsAction = createAsyncThunk(
  'destinations/list',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getDestinations();

      // console.debug('[getPopularDestinationsAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.error('[getPopularDestinationsAction - error] :: ', error);

      rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getDestinationDetailsAction = createAsyncThunk(
  'destination/details',
  async (_id: string, { rejectWithValue }) => {
    try {
      const response = await getDestinationDetails(_id);

      // console.debug('[getDestinationsAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.error('[getDestinationsAction - error] :: ', error);

      rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getTravelersAction = createAsyncThunk('traveler/list', async (payload, { rejectWithValue }) => {
  try {
    const response = await getTravelers();

    // console.debug('[getTravelersAction - response] :: ', response.data);

    return response.data;
  } catch (error: any) {
    console.error('[getTravelersAction - error] :: ', error);

    rejectWithValue(error.response?.data?.message);
  }
});

export const getInterestsAction = createAsyncThunk('interest/list', async (payload, { rejectWithValue }) => {
  try {
    const response = await getInterests();

    // console.debug('[getInterestsAction - response] :: ', response.data);

    return response.data;
  } catch (error: any) {
    console.error('[getInterestsAction - error] :: ', error);

    rejectWithValue(error.response?.data?.message);
  }
});

export const getBudgetsAction = createAsyncThunk('budget/list', async (payload, { rejectWithValue }) => {
  try {
    const response = await getBudgets();

    // console.debug('[getBudgetsAction - response] :: ', response.data);

    return response.data;
  } catch (error: any) {
    console.error('[getBudgetsAction - error] :: ', error);

    rejectWithValue(error.response?.data?.message);
  }
});

export const getTravelPreferencesAction = createAsyncThunk(
  'travel/preferences',
  async (payload, { rejectWithValue, dispatch, getState }) => {
    try {
      let response = null;

      const { destination } = getState();
      const { travelers, interests, budgets } = destination;

      if (_.isEmpty(travelers) || _.isEmpty(interests) || _.isEmpty(budgets)) {
        response = await Promise.all([
          dispatch(getTravelersAction()),
          dispatch(getInterestsAction()),
          dispatch(getBudgetsAction())
        ]);
      }

      console.debug('[getTravelPreferencesAction - response] :: ', response);

      return response;
    } catch (error: any) {
      console.error('[getTravelersAction - error] :: ', error);

      rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getRecentSearchesAction = createAsyncThunk('search/recent', async (payload, { rejectWithValue }) => {
  try {
    const response = await getRecentSearches();

    // console.debug('[getRecentSearchesAction - response] :: ', response.data);

    return response.data.data;
  } catch (error: any) {
    console.error('[getRecentSearchesAction - error] :: ', error);

    rejectWithValue(error.response?.data?.message);
  }
});

export const incrementSearchesAction = createAsyncThunk(
  'search/increment',
  async (payload: DestinationProps, { rejectWithValue }) => {
    try {
      const response = await incrementSearches(payload);

      // console.debug('[getRecentSearchesAction - response] :: ', response.data);

      return response.data.data;
    } catch (error: any) {
      console.error('[getRecentSearchesAction - error] :: ', error);

      rejectWithValue(error.response?.data?.message);
    }
  }
);
