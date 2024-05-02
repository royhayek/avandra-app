// Interfaces
import { ItineraryItemProps } from '@shared/types/Itinerary';

export interface ItineraryInitialState {
  isLoading: boolean;
  isLoadingItineraries: boolean;
  itineraries: ItineraryItemProps[];
  itinerary: ItineraryItemProps | null;
  error: unknown | string | null;
}
