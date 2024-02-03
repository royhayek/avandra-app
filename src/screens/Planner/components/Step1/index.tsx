// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { View } from 'react-native';
import StepHeader from '../StepHeader';
import PartnersList from './PartnersList';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { PARTNERS_LIST } from './data';
import { useAppTheme } from '@shared/assets/theme';
import { getPlannerPayload, plannerActions } from '@redux/planner/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step1.${key}`, options);

const Step1 = () => {
  // Redux
  const dispatch = useDispatch();

  const plannerPayload = useSelector(getPlannerPayload);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const setTraveler = useCallback(
    (traveler) => {
      dispatch(plannerActions.setPayload({ traveler: _.find(PARTNERS_LIST, { key: traveler }) }));
    },
    [dispatch]
  );

  // Renderers
  return (
    <View style={styles.container}>
      <StepHeader title={_t('who_is_going')} description={_t('lets_start')} />
      <PartnersList
        transKey="step1"
        list={PARTNERS_LIST}
        setValue={setTraveler}
        value={plannerPayload?.traveler?.key ?? _.first(PARTNERS_LIST)?.key}
      />
    </View>
  );
};

export default Step1;
