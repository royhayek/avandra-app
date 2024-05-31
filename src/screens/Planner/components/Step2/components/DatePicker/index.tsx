// Packages
import XDate from 'xdate';
import moment from 'moment';
import { ms } from 'react-native-size-matters';
import React, { useCallback, useState } from 'react';

// Components
import { Calendar } from 'react-native-calendars';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { DateData, MarkedDates } from 'react-native-calendars/src/types';

interface DatePickerProps {
  defaultValue?: StateProps;
  onSuccess: (state: object, startDate: string, endDate: string) => void;
}

interface StateProps {
  fromDate?: string;
  holidayList?: object;
  isToDatePicked: boolean;
  markedDates: MarkedDates;
  isFromDatePicked: boolean;
}

// Component
const DatePicker: React.FC<DatePickerProps> = ({ defaultValue, onSuccess }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [state, setState] = useState<StateProps>(
    defaultValue ?? {
      fromDate: '',
      holidayList: {},
      markedDates: {},
      isToDatePicked: false,
      isFromDatePicked: false
    }
  );

  // Callbacks
  const setupMarkedDates = useCallback(
    (fromDate: string | undefined, toDate: string, markedDates: MarkedDates) => {
      const mFromDate = new XDate(fromDate ?? '');
      const mToDate = new XDate(toDate);

      const range: number = mFromDate.diffDays(mToDate);

      if (range >= 0) {
        if (range === 0) {
        } else {
          for (let i = 1; i <= range; i++) {
            const tempDate = mFromDate.addDays(1).toString('yyyy-MM-dd');
            const dateList = Object.keys(state.markedDates);

            const filterList = dateList.filter((d) => d === tempDate);

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
      const markedDates = {
        [day.dateString]: {
          startingDay: true,
          customStyles: {
            container: styles.startDateStyle,
            text: styles.textStyle
          }
        }
      };

      const dateList = Object.keys(state.markedDates);

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
          fromDate: '',
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

        const markedDates = { ...state.markedDates };
        const [mMarkedDates, range] = setupMarkedDates(state.fromDate, day.dateString, markedDates);

        if ((range as number) >= 0) {
          const updatedState = {
            ...state,
            isFromDatePicked: true,
            isToDatePicked: true,
            markedDates: mMarkedDates as MarkedDates
          };

          setState(updatedState);

          if (state?.fromDate) onSuccess(updatedState, state?.fromDate, day.dateString);
        } else {
          setupStartMarker(day);
        }
      }
    },
    [state, onSuccess, setupMarkedDates, setupStartMarker]
  );

  // Renderers
  return (
    <Calendar
      markingType="custom"
      style={styles.calendar}
      current={state.fromDate}
      markedDates={state.markedDates}
      minDate={moment().format('YYYY-MM-DD')}
      onDayPress={(day) => handleDayPress(day)}
      maxDate={state.fromDate && moment(state.fromDate, 'YYYY-MM-DD').add(6, 'days').format('YYYY-MM-DD')}
      theme={{
        textDayFontWeight: '500',
        arrowColor: theme.colors.white,
        textMonthFontFamily: 'urbanist-bold',
        todayTextColor: theme.colors.primary,
        textDisabledColor: theme.colors.secondary,
        textMonthFontSize: theme.fonts.h6.fontSize,
        textDayFontSize: theme.fonts.large.fontSize,
        todayButtonFontSize: theme.fonts.h6.fontSize,
        textDayHeaderFontFamily: 'urbanist-semibold',
        textDayHeaderFontSize: theme.fonts.small.fontSize,
        dayTextColor: theme.dark ? theme.colors.white : theme.colors.gray[900],
        monthTextColor: theme.dark ? theme.colors.white : theme.colors.gray[900],
        calendarBackground: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100],
        arrowStyle: {
          width: ms(32),
          marginVertical: 10,
          alignItems: 'center',
          borderRadius: theme.roundness,
          backgroundColor: theme.colors.primary
        }
      }}
    />
  );
};

export default DatePicker;
