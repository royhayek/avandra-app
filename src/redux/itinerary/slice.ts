// Packages
import _ from 'lodash';
import { createSelector, createSlice } from '@reduxjs/toolkit';

// Utilities
import { RootState } from '@app/store';

// Interfaces
import { ItineraryInitialState } from './types';

// Slice
const initialState: ItineraryInitialState = {
  error: null,
  itinerary: null,
  isLoading: false
};

// Define the destination slice using createSlice
export const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState,
  reducers: {
    // Reducer function for the fetchItineraryStart action
    fetchItineraryStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    // Reducer function for the fetchItinerarySuccess action
    fetchItinerarySuccess: (state, action) => {
      state.isLoading = false;
      state.itinerary = action.payload;
    },
    // Reducer function for the fetchItineraryFailure action
    fetchItineraryFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

// Export the action creators
export const { fetchItineraryStart, fetchItinerarySuccess, fetchItineraryFailure } = itinerarySlice.actions;

// Export the destination reducer
export default itinerarySlice.reducer;

// Selectors
const _itinerary = (state: RootState) => state.itinerary;

export const selectItinerary = createSelector(_itinerary, (data) => data);
