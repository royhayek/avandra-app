// Interfaces
import { ItineraryItemProps } from '@shared/types/Itinerary';

export interface ItineraryInitialState {
  isLoading: boolean;
  isLoadingPlaces: boolean;
  places: ItineraryItemProps[];
  isLoadingItineraries: boolean;
  error: unknown | string | null;
  itineraries: ItineraryItemProps[];
  itinerary: ItineraryItemProps | null;
}
