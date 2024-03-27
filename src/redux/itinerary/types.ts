// Interfaces
import { ItineraryItemProps } from '@shared/types/Itinerary';

export interface ItineraryInitialState {
  isLoading: boolean;
  itinerary: ItineraryItemProps | null;
  error: unknown | string | null;
}
