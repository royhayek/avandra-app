// Packages
import _ from 'lodash';
import { createSelector, createSlice } from '@reduxjs/toolkit';

// Utilities
import { generateTripAction, getTripAction, getTripPlacesAction, getUserTripsAction } from './thunks';

// Interfaces
import { RootState } from '@app/store';
import { ItineraryInitialState } from './types';

// Slices
const initialState: ItineraryInitialState = {
  error: null,
  places: [],
  trip: null,
  itinerary: null,
  itineraries: [],
  isLoading: false,
  isLoadingTrip: false,
  isLoadingPlaces: false,
  isLoadingItineraries: false
};

// Define the destination slice using createSlice
export const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState,
  reducers: {
    setPlaces: (state, action) => {
      const { date, places } = action.payload;
      const index = state.places?.findIndex((item) => item.date === date);

      if (index !== undefined && index !== -1) {
        state.places[index].list = places;
      }
    },
    reset: () => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(generateTripAction.pending, (state) => {
      state.itinerary = null;
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(generateTripAction.fulfilled, (state, action) => {
      state.itinerary = action.payload.result;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(generateTripAction.rejected, (state, action) => {
      state.itinerary = null;
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getUserTripsAction.pending, (state) => {
      state.itineraries = [];
      state.isLoadingItineraries = true;
      state.error = null;
    });

    builder.addCase(getUserTripsAction.fulfilled, (state, action) => {
      state.itineraries = action.payload.result;
      state.isLoadingItineraries = false;
      state.error = null;
    });

    builder.addCase(getUserTripsAction.rejected, (state, action) => {
      state.itineraries = [];
      state.isLoadingItineraries = false;
      state.error = action.error.message;
    });

    builder.addCase(getTripPlacesAction.pending, (state) => {
      state.places = [];
      state.isLoadingPlaces = true;
      state.error = null;
    });

    builder.addCase(getTripPlacesAction.fulfilled, (state, action) => {
      state.places = action.payload.result;
      state.isLoadingPlaces = false;
      state.error = null;
    });

    builder.addCase(getTripPlacesAction.rejected, (state, action) => {
      state.places = [];
      state.isLoadingPlaces = false;
      state.error = action.error.message;
    });

    builder.addCase(getTripAction.pending, (state) => {
      state.trip = null;
      state.isLoadingTrip = true;
      state.error = null;
    });

    builder.addCase(getTripAction.fulfilled, (state, action) => {
      state.trip = action.payload.result;
      state.isLoadingTrip = false;
      state.error = null;
    });

    builder.addCase(getTripAction.rejected, (state, action) => {
      state.trip = null;
      state.isLoadingTrip = false;
      state.error = action.error.message;
    });
  }
});

// Export the action creators
export const itineraryActions = itinerarySlice.actions;

// Export the destination reducer
export default itinerarySlice.reducer;

// Selectors
const _itinerary = (state: RootState) => state.itinerary;

export const selectTrip = createSelector(_itinerary, (data) => data.trip);

export const selectTripPlaces = createSelector(_itinerary, (data) => data.places);

export const selectItinerary = createSelector(_itinerary, (data) => data.itinerary);

export const selectTripLoading = createSelector(_itinerary, (data) => data.isLoadingTrip);

export const selectUserItineraries = createSelector(_itinerary, (data) => data.itineraries);

export const selectTripPlacesLoading = createSelector(_itinerary, (data) => data.isLoadingPlaces);

export const selectUserItinerariesLoading = createSelector(_itinerary, (data) => data.isLoadingItineraries);
