import { TravelOptionProps } from './TravelOption';
import { DatePickerStateProps } from './DatePickerState';

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
  budget: TravelOptionProps;
  traveler: TravelOptionProps;
  interests: string | string[];
  pickerState: DatePickerStateProps;
}
