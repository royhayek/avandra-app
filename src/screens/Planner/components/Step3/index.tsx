// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';

// Components
import { View } from 'react-native';
import StepHeader from '../StepHeader';
import InterestsList from './InterestsList';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { destinationsActions } from '@redux/destinations/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { useAppTheme } from '@shared/assets/theme';
import { INTEREST_LIST } from './data';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step3.${key}`, options);

const Step3 = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const dispatch = useDispatch();

  const [interests, setInterests] = useState([]);

  // Callbacks
  const handleInterestPress = useCallback((interest) => setInterests(_.xor(interests, [interest])), [interests]);

  // Effects
  useEffect(() => {
    dispatch(destinationsActions.setPayload({ interests: _.map(interests) }));
  }, [dispatch, interests]);

  console.debug('interests', interests);

  // Renderers
  return (
    <>
      <View style={styles.container}>
        <StepHeader title={_t('interest_title')} description={_t('interest_desc')} />
      </View>

      <View style={styles.interests}>
        <InterestsList data={INTEREST_LIST} value={interests} setValue={handleInterestPress} />
      </View>
    </>
  );
};

export default Step3;
