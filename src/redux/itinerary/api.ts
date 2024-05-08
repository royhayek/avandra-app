// Packages
import axios from 'axios';

// Interfaces
import { TripPayloadProps } from '@shared/types/TripPayload';

// Calls

export const generateTrip = (payload: TripPayloadProps) => axios.post('trip/generate', payload);

export const getUserTrips = (userId: string) => axios.get(`trip/list/user/${userId}`);

export const deleteTrip = (tripId: string) => axios.delete(`trip/delete/${tripId}`);

export const getTripPlaces = (tripId: string) => axios.get(`trip/places/${tripId}`);

export const saveAdditionalEvents = (tripId: string, payload: any) => axios.post(`trip/additional/${tripId}`, payload);

export const deleteTripPlace = (tripId: string, placeId: string, date: string) =>
  axios.delete(`trip/place/${tripId}/${placeId}/${date}`);

export const updateTripPlaces = (tripId: string, places: TripPayloadProps[]) =>
  axios.patch(`trip/places/${tripId}`, { places });

export const getTripPopularPlaces = (tripId: string) => axios.get(`trip/places/popular/${tripId}`);

export const getTrip = (tripId: string) => axios.get(`trip/read/${tripId}`);
