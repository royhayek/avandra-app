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
import StepHeader from '../StepHeader';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step2.${key}`, options);

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
          <ScrollView style={styles.secondContent} showsVerticalScrollIndicator={false}>
            <Text variant="large">How many days?</Text>
            <DaysPicker value={noOfDays} setValue={setNoOfDays} />
            <Text variant="medium" style={styles.maxDays}>
              7 days maximum
            </Text>
            <Text variant="large" style={styles.whatMonth}>
              During what month?{' '}
              <Text variant="large" style={{ color: theme.colors.secondary }}>
                (optional)
              </Text>
            </Text>
            <MonthPicker value={selectedMonth} setValue={setSelectedMonth} />
          </ScrollView>
        );

      default:
        return (
          <ScrollView contentContainerStyle={styles.firstContent} showsVerticalScrollIndicator={false}>
            <DateInput
              defaultValue={
                dateState.fromDate &&
                dateState.toDate &&
                `${formatMonthDay(dateState.fromDate)} - ${formatMonthDay(dateState.toDate)}`
              }
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
      <StepHeader title={_t('adventure_date')} description={_t('adventure_date_desc')} />
      <ToggleButtons buttons={toggleButtons} active={activeButton} setActive={setActiveButton} />
      {renderContent}
    </View>
  );
};

export default Step2;
