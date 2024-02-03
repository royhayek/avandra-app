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
import ToggleButtons from '@shared/components/ToggleButtons';
import DatePicker from '@shared/components/DatePicker';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { TranslateOptions } from 'i18n-js';
import { useAppTheme } from '@shared/assets/theme';
import { getPlannerPayload, plannerActions } from '@redux/planner/slice';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step2.${key}`, options);

const Step2 = () => {
  // Redux
  const dispatch = useDispatch();

  const plannerPayload = useSelector(getPlannerPayload);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [activeButton, setActiveButton] = useState<string>('date');

  // Callbacks
  const formatMonthDay = useCallback((date: string) => moment(date, 'YYYY-MM-DD').format('MM/DD'), []);

  const setNoOfDays = useCallback((days) => dispatch(plannerActions.setPayload({ noOfDays: days })), [dispatch]);

  const setSelectedMonth = useCallback(
    (month) => dispatch(plannerActions.setPayload({ selectedMonth: month })),
    [dispatch]
  );

  const handleDatePickerSuccess = useCallback(
    (state: object, start: string | undefined, end: string) => {
      dispatch(
        plannerActions.setPayload({
          toDate: end,
          fromDate: start,
          periodType: activeButton,
          pickerState: state
        })
      );
    },
    [dispatch, activeButton]
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
            <DaysPicker value={plannerPayload?.noOfDays ?? 4} setValue={setNoOfDays} />
            <Text variant="medium" style={styles.maxDays}>
              {_t('maximum_days')}
            </Text>
            <Text variant="large" style={styles.whatMonth}>
              {_t('during_what_month')}{' '}
              <Text variant="large" style={{ color: theme.colors.secondary }}>
                ({_t('optional')})
              </Text>
            </Text>
            <MonthPicker value={plannerPayload?.selectedMonth ?? moment().format('MMMM')} setValue={setSelectedMonth} />
          </>
        );

      default:
        return (
          <>
            <DateInput
              defaultValue={
                plannerPayload?.fromDate &&
                plannerPayload?.toDate &&
                `${formatMonthDay(plannerPayload?.fromDate)} - ${formatMonthDay(plannerPayload?.toDate)}`
              }
            />
            <DatePicker defaultValue={plannerPayload?.pickerState} onSuccess={handleDatePickerSuccess} />
          </>
        );
    }
  }, [
    setNoOfDays,
    activeButton,
    plannerPayload,
    formatMonthDay,
    styles.maxDays,
    styles.noOfDays,
    styles.whatMonth,
    setSelectedMonth,
    theme.colors.secondary,
    handleDatePickerSuccess
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
