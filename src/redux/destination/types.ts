// Packages
import { Moment } from 'moment';

// Interfaces
import { DestinationProps } from '@shared/types/Destination';
import { TravelOptionProps } from '@shared/types/TravelOption';

export interface DestinationInitialState {
  isLoading: boolean;
  loadingOptions: boolean;
  lastRefresh: Moment | null;
  destinations: any[] | null;
  details: DestinationProps | null;
  error: string | null | undefined;
  budgets: TravelOptionProps[] | null;
  interests: TravelOptionProps[] | null;
  travelers: TravelOptionProps[] | null;
  popularDestinations: DestinationProps[] | null;
}
