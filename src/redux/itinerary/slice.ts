// Packages
import _ from 'lodash';
import axios from 'axios';
import { createSelector, createSlice } from '@reduxjs/toolkit';

// Thunks
// import { fetchItineraryPlaces } from '../places/thunks';
// import { fetchTravelDestinations, fetchTravelSummaryAndTips } from './thunks';

// Actions
import { logQuery } from '../queryLog/slice';
import { clearPlaces } from '../places/slice';
import { snackbarActions } from '../snackbar/slice';
import { destinationsActions } from '../destinations/slice';
import { AppThunkDispatch, RootState, store } from '@app/store';

// Interfaces
import { ItineraryInitialState } from './types';
import { TripPayload } from '@shared/types/TripPayload';

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

// Action creator that fetches client's IP address and dispatches both submitForm and logQuery actions

// Define an async action creator to submit the form data
// export const submitForm = (payload: TripPayload) => async (dispatch: AppThunkDispatch) => {
//   // Clear saved itinerary in redux
//   dispatch(destinationsActions.clearDestinations());
//   dispatch(clearPlaces());
//   dispatch(fetchItineraryStart());

//   // Here, you can access any global state value (Not able to get recent state change)
//   const state = store.getState();

//   // Fetch the client's IP address using an external API
//   const response = await axios.get('https://api.ipify.org?format=json');
//   const ipAddress = response.data.ip;

//   try {
//     // Make a request to the OpenAI server with the form data
//     const itineraryResponse = await dispatch(fetchTravelDestinations(payload));
//     const itineraryError = itineraryResponse.error?.message;

//     const summaryAndTipsResponse = await dispatch(fetchTravelSummaryAndTips(payload));
//     const summaryAndTipsError = summaryAndTipsResponse.error?.message;

//     const places = _.flatMap(itineraryResponse?.payload);
//     const placesResponse = dispatch(fetchItineraryPlaces(places));
//     const placesError = placesResponse.error?.message;

//     // Dispatch logQuery action with the appropriate payload
//     dispatch(logQuery({ ipAddress, payload, createdBy: 'user' }));
//     // Dispatch the fetchItinerarySuccess action with the response data
//     dispatch(fetchItinerarySuccess(response.data));

//     if (itineraryError) {
//       // Dispatch the showSnackbar action with a success message
//       dispatch(snackbarActions.showSnackbar({ type: 'error', title: 'Error', message: itineraryError }));
//     } else if (itineraryError) {
//       dispatch(snackbarActions.showSnackbar({ type: 'error', title: 'Error', message: summaryAndTipsError }));
//     } else if (placesError) {
//       dispatch(snackbarActions.showSnackbar({ type: 'error', title: 'Error', message: placesError }));
//     }
//   } catch (error) {
//     console.error('[submitForm] :: ', error.message);
//     // Dispatch the fetchItineraryFailure action with the error message
//     dispatch(fetchItineraryFailure(error.message));
//     // Dispatch the showSnackbar action with an error message
//     dispatch(snackbarActions.showSnackbar({ type: 'error', title: 'Error', message: error.message }));
//   } finally {
//     // Hide the snackbar message after 3 seconds
//     setTimeout(() => {
//       dispatch(snackbarActions.hideSnackbar());
//     }, state.toast.delay);
//   }
// };

// Export the destination reducer
export default itinerarySlice.reducer;

// Selectors
const _itinerary = (state: RootState) => state.itinerary;

export const selectItinerary = createSelector(_itinerary, (data) => data);
