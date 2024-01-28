// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

// Components
import { View } from 'react-native';
import StepHeader from '../StepHeader';
import PartnersList from '../Step1/PartnersList';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { BUDGET_LIST } from './data';
import { useAppTheme } from '@shared/assets/theme';
import { destinationsActions } from '@redux/destinations/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step4.${key}`, options);

const Step4 = () => {
  // Redux
  const dispatch = useDispatch();

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [budget, setBudget] = useState(BUDGET_LIST[0].key);

  // Effects
  useEffect(() => {
    dispatch(destinationsActions.setPayload({ budget: _.find(BUDGET_LIST, { key: budget }) }));
  }, [budget, dispatch]);

  // Renderers
  return (
    <View style={styles.container}>
      <StepHeader title={_t('budget_title')} description={_t('budget_desc')} />
      <PartnersList transKey="step4" list={BUDGET_LIST} value={budget} setValue={setBudget} />
    </View>
  );
};

export default Step4;
