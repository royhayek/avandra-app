// Packages
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBudgets, getDestinationDetails, getDestinations, getInterests, getTravelers } from './api';

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
