// Packages
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useMemo, useState } from 'react';

// Components
import DateInput from './DateInput';
import DaysPicker from './DaysPicker';
import StepHeader from '../StepHeader';
import MonthPicker from './MonthPicker';
import { Text } from 'react-native-paper';
import { ScrollView } from 'react-native';
import DatePicker from '@shared/components/DatePicker';
import ToggleButtons from '@shared/components/ToggleButtons';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { TranslateOptions } from 'i18n-js';
import { useAppTheme } from '@shared/assets/theme';
import { destinationsActions, selectDestinations } from '@redux/destinations/slice';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step2.${key}`, options);

const Step2 = () => {
  // Redux
  const dispatch = useDispatch();

  const destinations = useSelector(selectDestinations);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const currentMonth = moment().format('MMMM');

  const [noOfDays, setNoOfDays] = useState<number>(4);
  const [activeButton, setActiveButton] = useState<string>('date');
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const { fromDate, toDate } = destinations?.payload;

  // Callbacks
  const formatMonthDay = useCallback((date: string) => moment(date, 'YYYY-MM-DD').format('MM/DD'), []);

  const handleDatePickerSuccess = useCallback(
    (start: string, end: string) => {
      const diffDays = moment(end).diff(moment(start), 'days') + 1;

      dispatch(
        destinationsActions.setPayload({
          toDate: end,
          selectedMonth,
          fromDate: start,
          noOfDays: diffDays,
          periodType: activeButton
        })
      );
    },
    [activeButton, selectedMonth, dispatch]
  );

  // Renderer Vars
  const toggleButtons = [
    { key: 'date', title: _t('dates_mm_dd') },
    { key: 'days', title: _t('no_of_days') }
  ];

  // Renderers
  const renderContent = useMemo(() => {
    switch (activeButton) {
      case 'days':
        return (
          <>
            <Text variant="large" style={styles.noOfDays}>
              {_t('how_many_days')}
            </Text>
            <DaysPicker value={noOfDays} setValue={setNoOfDays} />
            <Text variant="medium" style={styles.maxDays}>
              {_t('maximum_days')}
            </Text>
            <Text variant="large" style={styles.whatMonth}>
              {_t('during_what_month')}{' '}
              <Text variant="large" style={{ color: theme.colors.secondary }}>
                ({_t('optional')})
              </Text>
            </Text>
            <MonthPicker value={selectedMonth} setValue={setSelectedMonth} />
          </>
        );

      default:
        return (
          <>
            <DateInput defaultValue={fromDate && toDate && `${formatMonthDay(fromDate)} - ${formatMonthDay(toDate)}`} />
            <DatePicker onSuccess={handleDatePickerSuccess} />
          </>
        );
    }
  }, [
    handleDatePickerSuccess,
    theme.colors.secondary,
    styles.whatMonth,
    styles.noOfDays,
    styles.maxDays,
    formatMonthDay,
    selectedMonth,
    activeButton,
    noOfDays,
    fromDate,
    toDate
  ]);

  return (
    <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
      <StepHeader title={_t('adventure_date')} description={_t('adventure_date_desc')} />
      <ToggleButtons buttons={toggleButtons} active={activeButton} setActive={setActiveButton} />
      {renderContent}
    </ScrollView>
  );
};

export default Step2;
