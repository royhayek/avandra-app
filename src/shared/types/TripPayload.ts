import { TravelOptionProps } from './TravelOption';

export interface TripPayloadProps {
  user: string;
  destination: string;
  periodType: string;
  noOfDays: number;
  selectedMonth: string;
  fromDate: string;
  toDate: string;
  byDate?: boolean;
  duration?: number;
  socketId: string | undefined;
  interests: string | string[];
  traveler: TravelOptionProps;
  budget: TravelOptionProps;
}
