// Packages
import _ from 'lodash';
import moment from 'moment';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Utilities
import {
  deleteTrip,
  deleteTripPlace,
  generateTrip,
  getTrip,
  getTripPlaces,
  getTripPopularPlaces,
  getUserTrips,
  saveAdditionalEvents,
  updateTripPlaces
} from './api';

// Interfaces
import { TripPayloadProps } from '@shared/types/TripPayload';

// This thunk will make a POST request to the OenAI API with the provided payload
export const generateTripAction = createAsyncThunk(
  'itinerary/generate',
  async (payload: TripPayloadProps, { rejectWithValue }) => {
    try {
      const { _id, periodType, noOfDays, fromDate, toDate, interests, traveler, budget } = payload;

      // Process payload
      const byDate = _.isEqual(periodType, 'date');
      const joinedInterests = _.map(interests as string[], (i) => i.title).join(', ');
      const duration = noOfDays || moment(toDate, 'YYYY-MM-DD').diff(moment(fromDate, 'YYYY-MM-DD'), 'days');

      const requestData = {
        ...payload,
        _id,
        byDate,
        duration,
        budget: budget._id,
        traveler: traveler._id,
        interests: joinedInterests
      };

      // console.debug('[generateTripAction - requestData] :: ', requestData);
      const response = await generateTrip(requestData);

      // console.debug('[generateTripAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.debug('[generateTripAction - error] :: ', error.response?.data?.message);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getUserTripsAction = createAsyncThunk(
  'itinerary/getUserTrips',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await getUserTrips(userId);

      // console.debug('[getUserTripsAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.debug('[getUserTripsAction - error] :: ', error.response?.data?.message);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const deleteTripAction = createAsyncThunk(
  'itinerary/delete',
  async ({ tripId, userId }: { tripId: string; userId: string }, { rejectWithValue, dispatch }) => {
    try {
      const response = await deleteTrip(tripId);

      // Refresh user trips after deleting the trip
      dispatch(getUserTripsAction(userId));

      // console.debug('[deleteTripAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.debug('[deleteTripAction - error] :: ', error.response?.data?.message);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const saveAdditionalEventsAction = createAsyncThunk(
  'itinerary/saveAdditionalEvents',
  async ({ tripId, payload }: { tripId: string; payload: any }, { rejectWithValue }) => {
    try {
      // console.debug('[saveAdditionalEventsAction - requestData] :: ', payload);
      const response = await saveAdditionalEvents(tripId, payload);

      // console.debug('[saveAdditionalEventsAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.debug('[saveAdditionalEventsAction - error] :: ', error.response?.data?.message);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getTripPlacesAction = createAsyncThunk(
  'itinerary/getTripPlaces',
  async (tripId: string, { rejectWithValue }) => {
    try {
      const response = await getTripPlaces(tripId);

      // console.debug('[getTripPlacesAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.debug('[getTripPlacesAction - error] :: ', error.response?.data?.message);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const deleteTripPlaceAction = createAsyncThunk(
  'itinerary/deleteTripPlace',
  async ({ tripId, placeId, date }: { tripId: string; placeId: string; date: string }, { rejectWithValue }) => {
    try {
      const response = await deleteTripPlace(tripId, placeId, date);

      // console.debug('[deleteTripPlaceAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.debug('[deleteTripPlaceAction - error] :: ', error.response?.data?.message);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getTripAction = createAsyncThunk('itinerary/getTrip', async (tripId: string, { rejectWithValue }) => {
  try {
    const response = await getTrip(tripId);

    // console.debug('[getTripAction - response] :: ', response.data);

    return response.data;
  } catch (error: any) {
    console.debug('[getTripAction - error] :: ', error.response?.data?.message);

    return rejectWithValue(error.response?.data?.message);
  }
});

export const updateTripPlacesAction = createAsyncThunk(
  'itinerary/updateTripPlaces',
  async ({ tripId, places }: { tripId: string; places: TripPayloadProps[] }, { rejectWithValue }) => {
    try {
      // console.debug('[updateTripPlacesAction - requestData] :: ', { tripId, places });
      const response = await updateTripPlaces(tripId, places);

      // console.debug('[updateTripPlacesAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.debug('[updateTripPlacesAction - error] :: ', error.response?.data?.message);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getTripPopularPlacesAction = createAsyncThunk(
  'itinerary/getTripPopularPlaces',
  async (tripId: string, { rejectWithValue }) => {
    try {
      const response = await getTripPopularPlaces(tripId);

      // console.debug('[getTripPopularPlacesAction - response] :: ', response.data);

      return response.data.result;
    } catch (error: any) {
      console.debug('[getTripPopularPlacesAction - error] :: ', error.response?.data?.message);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);
