// Interfaces
import { Moment } from 'moment';
import { DestinationProps } from '@shared/types/Destination';
import { TripPayloadProps } from '@shared/types/TripPayload';

export interface DestinationsInitialState {
  isLoading: boolean;
  tips: string | null;
  summary: string | null;
  lastRefresh: Moment | null;
  destinations: any[] | null;
  payload: TripPayloadProps | null;
  error: string | null | undefined;
  popularDestinations: DestinationProps[] | null;
}
