// Packages
import XDate from 'xdate';
import moment from 'moment';
import { ms } from 'react-native-size-matters';
import React, { useCallback, useState } from 'react';

// Components
import { Calendar } from 'react-native-calendars';

// Utilities
import makeStyles from './styles';
import { DateData, MarkedDates } from 'react-native-calendars/src/types';
import { scaledFontSize, useAppTheme } from '@shared/assets/theme';

// Interfaces
interface DatePickerProps {
  onSuccess: (startDate: string, endDate: string) => void;
}

interface StateProps {
  holidayList?: object;
  isToDatePicked: boolean;
  isFromDatePicked: boolean;
  markedDates: MarkedDates;
  fromDate?: string;
}

// Component
const DatePicker: React.FC<DatePickerProps> = ({ onSuccess }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [state, setState] = useState<StateProps>({
    fromDate: '',
    holidayList: {},
    markedDates: {},
    isToDatePicked: false,
    isFromDatePicked: false
  });

  // Callbacks
  const setupMarkedDates = useCallback(
    (fromDate: string, toDate: string, markedDates: MarkedDates) => {
      let mFromDate = new XDate(fromDate);
      let mToDate = new XDate(toDate);

      let range: number = mFromDate.diffDays(mToDate);

      if (range >= 0) {
        if (range === 0) {
        } else {
          for (let i = 1; i <= range; i++) {
            let tempDate = mFromDate.addDays(1).toString('yyyy-MM-dd');
            let dateList = Object.keys(state.markedDates);

            let filterList = dateList.filter((d) => d === tempDate);
            if (filterList[0] === tempDate) {
              break;
            } else {
              if (i < range) {
                markedDates[tempDate] = {
                  customStyles: {
                    container: styles.dateStyle,
                    text: styles.textStyle
                  }
                };
              } else {
                markedDates[tempDate] = {
                  endingDay: true,
                  customStyles: {
                    container: styles.endDateStyle,
                    text: styles.textStyle
                  }
                };
              }
            }
          }
        }
      }

      return [markedDates, range];
    },
    [state.markedDates, styles.dateStyle, styles.endDateStyle, styles.textStyle]
  );

  const setupStartMarker = useCallback(
    (day: DateData) => {
      let markedDates = {
        [day.dateString]: {
          startingDay: true,
          customStyles: {
            container: styles.startDateStyle,
            text: styles.textStyle
          }
        }
      };

      let dateList = Object.keys(state.markedDates);

      if (dateList.includes(day.dateString)) {
      } else {
        setState({
          ...state,
          isFromDatePicked: true,
          isToDatePicked: false,
          fromDate: day.dateString,
          markedDates: { ...markedDates, ...state.markedDates }
        });
      }
    },
    [state, styles.startDateStyle, styles.textStyle]
  );

  const handleDayPress = useCallback(
    (day: DateData) => {
      if (!state.isFromDatePicked) {
        setupStartMarker(day);
      } else if (state.isFromDatePicked && state.isToDatePicked) {
        setupStartMarker(day);
        setState({
          isFromDatePicked: false,
          isToDatePicked: false,
          fromDate: day.dateString,
          markedDates: {}
        });
      } else if (!state.isToDatePicked) {
        if (moment(day.dateString, 'YYYY-MM-DD').isBefore(moment(state.fromDate, 'YYYY-MM-DD'))) {
          setState({
            isFromDatePicked: false,
            isToDatePicked: false,
            fromDate: '',
            markedDates: {}
          });
        }

        let markedDates = { ...state.markedDates };
        let [mMarkedDates, range] = setupMarkedDates(state.fromDate, day.dateString, markedDates);
        if ((range as number) >= 0) {
          setState({
            isFromDatePicked: true,
            isToDatePicked: true,
            markedDates: mMarkedDates as MarkedDates
          });

          onSuccess(state.fromDate, day.dateString);
        } else {
          setupStartMarker(day);
        }
      }
    },
    [onSuccess, setupMarkedDates, setupStartMarker, state.fromDate, state.isFromDatePicked, state.isToDatePicked, state.markedDates]
  );

  // Renderers
  return (
    <Calendar
      markingType="custom"
      style={styles.calendar}
      current={state.fromDate}
      markedDates={state.markedDates}
      onDayPress={(day) => handleDayPress(day)}
      minDate={moment().format('YYYY-MM-DD')}
      maxDate={state.fromDate && moment(state.fromDate, 'YYYY-MM-DD').add(6, 'days').format('YYYY-MM-DD')}
      theme={{
        textMonthFontWeight: 'bold',
        arrowColor: theme.colors.white,
        textMonthFontSize: scaledFontSize(14),
        todayButtonFontSize: scaledFontSize(14),
        textDayHeaderFontSize: scaledFontSize(11),
        textDisabledColor: theme.colors.secondary,
        calendarBackground: theme.colors.background,
        textDayStyle: { fontWeight: '500', fontSize: scaledFontSize(14) },
        dayTextColor: theme.dark ? theme.colors.white : theme.colors.black,
        monthTextColor: theme.dark ? theme.colors.white : theme.colors.black,
        arrowStyle: { backgroundColor: theme.colors.primary, borderRadius: ms(50), width: ms(32), alignItems: 'center' }
      }}
    />
  );
};

export default DatePicker;
