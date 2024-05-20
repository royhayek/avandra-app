// Packages
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';

// Components
import StepHeader from '../StepHeader';
import { Text } from 'react-native-paper';
import DateInput from './components/DateInput';
import { ScrollView, View } from 'react-native';
import DatePicker from './components/DatePicker';
import DaysPicker from './components/DaysPicker';
import MonthPicker from './components/MonthPicker';
import ToggleButtons from '@shared/components/ToggleButtons';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { selectPlannerPayload, plannerActions } from '@redux/planner/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step2.${key}`, options);

const Step2 = () => {
  // Redux
  const dispatch = useDispatch();

  const plannerPayload = useSelector(selectPlannerPayload);

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

  const setNoOfDays = useCallback(
    (days) => {
      dispatch(plannerActions.setPayload({ noOfDays: days }));
    },
    [dispatch]
  );

  const setSelectedMonth = useCallback(
    (month) => {
      dispatch(plannerActions.setPayload({ selectedMonth: month }));
    },
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

  // Effects
  useEffect(() => {
    if (plannerPayload?.periodType) setActiveButton(plannerPayload.periodType);
  }, [plannerPayload]);

  // Renderer Vars
  const toggleButtons = [
    { key: 'date', title: _t('dates_mm_dd') },
    { key: 'days', title: _t('no_of_days') }
  ];

  // Renderers
  const renderHeader = () => (
    <View style={styles.paddedContent}>
      <StepHeader title={_t('adventure_date')} description={_t('adventure_date_desc')} />
      <ToggleButtons buttons={toggleButtons} active={activeButton} setActive={handleActiveButton} />
    </View>
  );

  const renderContent = () => {
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
              setValue={setSelectedMonth}
              value={plannerPayload?.selectedMonth ?? _t(String(moment().format('MMMM')).toLocaleLowerCase())}
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
            <DatePicker onSuccess={handleDatePickerSuccess} defaultValue={plannerPayload?.pickerState} />
          </View>
        );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
      {renderHeader}
      {renderContent()}
    </ScrollView>
  );
};

export default Step2;
