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
import { ScrollView, View } from 'react-native';
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

  const handleActiveButton = useCallback(
    (active: string) => {
      setActiveButton(active);
      dispatch(plannerActions.setPayload({ periodType: active }));
    },
    [dispatch]
  );

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
          pickerState: state,
          periodType: activeButton
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
            <View style={styles.paddedContent}>
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
            </View>
            <MonthPicker
              value={plannerPayload?.selectedMonth ?? _t(String(moment().format('MMMM')).toLocaleLowerCase())}
              setValue={setSelectedMonth}
            />
          </>
        );

      default:
        return (
          <View style={styles.paddedContent}>
            <DateInput
              defaultValue={
                plannerPayload?.fromDate &&
                plannerPayload?.toDate &&
                `${formatMonthDay(plannerPayload?.fromDate)} - ${formatMonthDay(plannerPayload?.toDate)}`
              }
            />
            <DatePicker defaultValue={plannerPayload?.pickerState} onSuccess={handleDatePickerSuccess} />
          </View>
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
    styles.paddedContent,
    theme.colors.secondary,
    handleDatePickerSuccess
  ]);

  return (
    <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.paddedContent}>
        <StepHeader title={_t('adventure_date')} description={_t('adventure_date_desc')} />
        <ToggleButtons buttons={toggleButtons} active={activeButton} setActive={handleActiveButton} />
      </View>
      {renderContent}
    </ScrollView>
  );
};

export default Step2;
