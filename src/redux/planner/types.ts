// Interfaces
import { TripPayloadProps } from '@shared/types/TripPayload';

export interface PlannerInitialState {
  plannerStep: number;
  payload: TripPayloadProps | null;
}
