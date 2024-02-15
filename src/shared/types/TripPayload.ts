import { TravelOptionProps } from './TravelOption';

export interface TripPayloadProps {
  destination: string;
  periodType: string;
  noOfDays: number;
  selectedMonth: string;
  fromDate: string;
  toDate: string;
  interests: string[];
  traveler: TravelOptionProps;
  budget: TravelOptionProps;
}
