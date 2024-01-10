// Interfaces
import { Itinerary } from "@shared/types/Itinerary";

export interface ItineraryInitialState {
  isLoading: boolean;
  itinerary: Itinerary | null;
  error: unknown | string | null;;
}
