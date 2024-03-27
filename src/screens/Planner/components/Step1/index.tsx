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
import { selectTravelersList } from '@redux/destination/slice';
import { getPlannerPayload, plannerActions } from '@redux/planner/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step1.${key}`, options);

const Step1 = () => {
  // Redux
  const dispatch = useDispatch();

  const travelersList = useAppSelector(selectTravelersList);
  const plannerPayload = useAppSelector(getPlannerPayload);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const setTraveler = useCallback(
    (_id: string) => dispatch(plannerActions.setPayload({ traveler: _.find(travelersList, { _id }) })),
    [dispatch, travelersList]
  );

  // Effects
  useEffect(() => {
    if (!plannerPayload?.traveler) dispatch(plannerActions.setPayload({ traveler: travelersList[0] }));
  }, [dispatch, plannerPayload?.traveler, travelersList]);

  // Renderers
  return (
    <View style={styles.container}>
      <StepHeader title={_t('who_is_going')} description={_t('lets_start')} />
      <TravelOptionsList
        list={travelersList}
        setValue={setTraveler}
        value={plannerPayload?.traveler?._id ?? travelersList[0]._id}
      />
    </View>
  );
};

export default Step1;
