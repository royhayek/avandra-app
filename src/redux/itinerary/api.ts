// Packages
import axios from 'axios';

// Interfaces
import { TripPayloadProps } from '@shared/types/TripPayload';

// Calls

export const generateTrip = (payload: TripPayloadProps) => axios.post('trip/generate', payload);

export const getUserTrips = (userId: string) => axios.get(`trip/list/user/${userId}`);

export const deleteTrip = (tripId: string) => axios.delete(`trip/delete/${tripId}`);
