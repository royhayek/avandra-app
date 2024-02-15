// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';

// Components
import { View } from 'react-native';
import StepHeader from '../StepHeader';
import TravelOptionsList from '../TravelOptionsList';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { PARTNERS_LIST } from './data';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { getPlannerPayload, plannerActions } from '@redux/planner/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step1.${key}`, options);

const Step1 = () => {
  // Redux
  const dispatch = useDispatch();

  const plannerPayload = useAppSelector(getPlannerPayload);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const setTraveler = useCallback(
    (key: string) => dispatch(plannerActions.setPayload({ traveler: _.find(PARTNERS_LIST, { key }) })),
    [dispatch]
  );

  // Renderers
  return (
    <View style={styles.container}>
      <StepHeader title={_t('who_is_going')} description={_t('lets_start')} />
      <TravelOptionsList
        list={PARTNERS_LIST}
        setValue={setTraveler}
        value={plannerPayload?.traveler?.key ?? PARTNERS_LIST[0].key}
      />
    </View>
  );
};

export default Step1;
