import { TravelOptionProps } from './TravelOption';

export interface TripPayloadProps {
  _id?: string;
  user: string;
  destination: string;
  periodType: string;
  noOfDays: number;
  selectedMonth?: string;
  fromDate: string;
  toDate: string;
  byDate?: boolean;
  location: object;
  duration?: number;
  interests: string | string[];
  traveler: TravelOptionProps;
  budget: TravelOptionProps;
}
