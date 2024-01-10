// Packages
import moment from 'moment';
import { useDispatch } from 'react-redux';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// Components
import DateInput from './DateInput';
import DaysPicker from './DaysPicker';
import MonthPicker from './MonthPicker';
import { Text } from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import DatePicker from '@shared/components/DatePicker';
import ToggleButtons from '@shared/components/ToggleButtons';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { TranslateOptions } from 'i18n-js';
import { useAppTheme } from '@shared/assets/theme';
import { destinationsActions } from '@redux/destinations/slice';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.${key}`, options);

const Step2 = () => {
  // Redux
  const dispatch = useDispatch();

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const currentMonth = moment().format('MMMM');

  const [noOfDays, setNoOfDays] = useState<number>(4);
  const [activeButton, setActiveButton] = useState<string>('date');
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [dateState, setDateState] = useState({ fromDate: '', toDate: '', dateError: '' });

  // Callbacks
  const formatMonthDay = useCallback((date: string) => moment(date, 'YYYY-MM-DD').format('MM/DD'), []);

  const handleDatePickerSuccess = useCallback(
    (start: string, end: string) => {
      const diffDays = moment(end).diff(moment(start), 'days') + 1;
      setNoOfDays(diffDays);
      setDateState({
        ...dateState,
        fromDate: start,
        toDate: end,
        dateError: ''
      });
    },
    [dateState]
  );

  // Effects
  useEffect(() => {
    const { fromDate, toDate } = dateState;
    dispatch(destinationsActions.setPayload({ periodType: activeButton, fromDate, toDate, noOfDays, selectedMonth }));
  }, [noOfDays, dateState, selectedMonth, activeButton, dispatch]);

  // Renderer Vars
  const toggleButtons = [
    { key: 'date', title: 'Dates (MM/DD)' },
    { key: 'days', title: 'Number of days' }
  ];

  // Renderers
  const renderContent = useMemo(() => {
    switch (activeButton) {
      case 'days':
        return (
          <ScrollView style={styles.secondContent}>
            <Text variant="titleMedium">How many days?</Text>
            <DaysPicker value={noOfDays} setValue={setNoOfDays} />
            <Text variant="bodySmall" style={styles.maxDays}>
              7 days maximum
            </Text>
            <Text variant="titleMedium" style={styles.whatMonth}>
              During what month?{' '}
              <Text variant="titleMedium" style={{ color: theme.colors.secondary }}>
                (optional)
              </Text>
            </Text>
            <MonthPicker value={selectedMonth} setValue={setSelectedMonth} />
          </ScrollView>
        );

      default:
        return (
          <ScrollView style={styles.firstContent}>
            <DateInput
              defaultValue={dateState.fromDate && dateState.toDate && `${formatMonthDay(dateState.fromDate)} - ${formatMonthDay(dateState.toDate)}`}
            />
            <DatePicker onSuccess={handleDatePickerSuccess} />
          </ScrollView>
        );
    }
  }, [
    handleDatePickerSuccess,
    theme.colors.secondary,
    styles.secondContent,
    styles.firstContent,
    dateState.fromDate,
    styles.whatMonth,
    dateState.toDate,
    styles.maxDays,
    formatMonthDay,
    selectedMonth,
    activeButton,
    noOfDays
  ]);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        {_t('when_to_go')}
      </Text>
      <Text variant="titleSmall" style={styles.subtitle}>
        Choose a day/date range, up to 7 days.
      </Text>
      <ToggleButtons buttons={toggleButtons} active={activeButton} setActive={setActiveButton} />
      {renderContent}
    </View>
  );
};

export default Step2;
