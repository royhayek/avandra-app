// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { View } from 'react-native';
import StepHeader from '../StepHeader';
import PartnersList from '../Step1/PartnersList';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { BUDGET_LIST } from './data';
import { useAppTheme } from '@shared/assets/theme';
import { getPlannerPayload, plannerActions } from '@redux/planner/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step4.${key}`, options);

const Step4 = () => {
  // Redux
  const dispatch = useDispatch();

  const plannerPayload = useSelector(getPlannerPayload);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const setBudget = useCallback(
    (budget) => dispatch(plannerActions.setPayload({ budget: _.find(BUDGET_LIST, { key: budget }) })),
    [dispatch]
  );

  // Renderers
  return (
    <View style={styles.container}>
      <StepHeader title={_t('budget_title')} description={_t('budget_desc')} />
      <PartnersList list={BUDGET_LIST} value={plannerPayload?.budget?.key ?? BUDGET_LIST[0].key} setValue={setBudget} />
    </View>
  );
};

export default Step4;
