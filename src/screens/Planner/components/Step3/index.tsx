// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';

// Components
import { View } from 'react-native';
import StepHeader from '../StepHeader';
import InterestsList from './InterestsList';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { selectInterestsList } from '@redux/destination/slice';
import { selectPlannerPayload, plannerActions } from '@redux/planner/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step3.${key}`, options);

const Step3 = () => {
  // Redux
  const dispatch = useDispatch();

  const interestsList = useAppSelector(selectInterestsList);
  const plannerPayload = useAppSelector(selectPlannerPayload);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleInterestPress = useCallback(
    (interest) => {
      const interests = _.xor(plannerPayload?.interests, [interest]);
      dispatch(plannerActions.setPayload({ interests: _.map(interests) }));
    },
    [dispatch, plannerPayload?.interests]
  );

  // Renderers
  return (
    <>
      <View style={styles.container}>
        <StepHeader title={_t('interest_title')} description={_t('interest_desc')} />
      </View>

      <View style={styles.interests}>
        <InterestsList data={interestsList} value={plannerPayload?.interests} setValue={handleInterestPress} />
      </View>
    </>
  );
};

export default Step3;
