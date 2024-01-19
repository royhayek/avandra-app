// Interfaces
import { Moment } from 'moment';
import { Destination } from '@shared/types/Destination';
import { TripPayload } from '@shared/types/TripPayload';

export interface DestinationsInitialState {
  isLoading: boolean;
  tips: string | null;
  summary: string | null;
  lastRefresh: Moment | null;
  destinations: any[] | null;
  payload: TripPayload | null;
  error: string | null | undefined;
  popularDestinations: Destination[] | null;
}
