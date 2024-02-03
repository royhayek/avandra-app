// Interfaces
import { TripPayload } from '@shared/types/TripPayload';

export interface PlannerInitialState {
  plannerStep: number;
  payload: TripPayload | null;
}
