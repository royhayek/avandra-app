// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useCallback, useEffect } from 'react';

// Components
import { View } from 'react-native';
import StepHeader from '../StepHeader';
import TravelOptionsList from '../TravelOptionsList';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { selectBudgetsList } from '@redux/destination/slice';
import { selectPlannerPayload, plannerActions } from '@redux/planner/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step4.${key}`, options);

const Step4 = () => {
  // Redux
  const dispatch = useDispatch();

  const budgetsList = useAppSelector(selectBudgetsList);
  const plannerPayload = useAppSelector(selectPlannerPayload);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const setBudget = useCallback(
    (_id: string) => dispatch(plannerActions.setPayload({ budget: _.find(budgetsList, { _id }) })),
    [budgetsList, dispatch]
  );

  // Effects
  useEffect(() => {
    if (!plannerPayload?.budget) dispatch(plannerActions.setPayload({ budget: budgetsList[0] }));
  }, [budgetsList, dispatch, plannerPayload?.budget]);

  // Renderers
  return (
    <View style={styles.container}>
      <StepHeader title={_t('budget_title')} description={_t('budget_desc')} />

      <TravelOptionsList
        list={budgetsList}
        setValue={setBudget}
        value={plannerPayload?.budget?._id ?? budgetsList[0]._id}
      />
    </View>
  );
};

export default Step4;
