// Interfaces
import { ItineraryItemProps } from '@shared/types/Itinerary';

export interface ItineraryInitialState {
  isLoading: boolean;
  isLoadingTrip: boolean;
  isLoadingPlaces: boolean;
  places: ItineraryItemProps[];
  isLoadingItineraries: boolean;
  error: unknown | string | null;
  trip: ItineraryItemProps | null;
  itineraries: ItineraryItemProps[];
  itinerary: ItineraryItemProps | null;
}
