// Packages
import _ from 'lodash';
import { createSelector, createSlice } from '@reduxjs/toolkit';

// Utilities
import { generateTripAction, getUserTripsAction } from './thunks';

// Interfaces
import { RootState } from '@app/store';
import { ItineraryInitialState } from './types';

// Slice
const initialState: ItineraryInitialState = {
  error: null,
  itinerary: null,
  itineraries: [],
  isLoading: false,
  isLoadingItineraries: false
};

// Define the destination slice using createSlice
export const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState,
  reducers: {},
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
  }
});

// Export the action creators
export const itineraryActions = itinerarySlice.actions;

// Export the destination reducer
export default itinerarySlice.reducer;

// Selectors
const _itinerary = (state: RootState) => state.itinerary;

export const selectItinerary = createSelector(_itinerary, (data) => data.itinerary);

export const selectUserItineraries = createSelector(_itinerary, (data) => data.itineraries);

export const selectUserItinerariesLoading = createSelector(_itinerary, (data) => data.isLoadingItineraries);
