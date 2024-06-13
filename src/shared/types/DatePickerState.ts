import { MarkedDates } from 'react-native-calendars/src/types';

export interface DatePickerStateProps {
  fromDate?: string;
  holidayList?: object;
  isToDatePicked: boolean;
  markedDates: MarkedDates;
  isFromDatePicked: boolean;
}
