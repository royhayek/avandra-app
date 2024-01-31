// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { View } from 'react-native';
import StepHeader from '../StepHeader';
import InterestsList from './InterestsList';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { INTEREST_LIST } from './data';
import { useAppTheme } from '@shared/assets/theme';
import { destinationsActions, selectDestinations } from '@redux/destinations/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step3.${key}`, options);

const Step3 = () => {
  // Redux
  const dispatch = useDispatch();
  const destinations = useSelector(selectDestinations);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const { payload } = destinations;

  // Callbacks
  const handleInterestPress = useCallback(
    (interest) => {
      const interests = _.xor(payload?.interests, [interest]);
      dispatch(destinationsActions.setPayload({ interests: _.map(interests) }));
    },
    [dispatch, payload?.interests]
  );

  // Renderers
  return (
    <>
      <View style={styles.container}>
        <StepHeader title={_t('interest_title')} description={_t('interest_desc')} />
      </View>

      <View style={styles.interests}>
        <InterestsList data={INTEREST_LIST} value={payload?.interests} setValue={handleInterestPress} />
      </View>
    </>
  );
};

export default Step3;
