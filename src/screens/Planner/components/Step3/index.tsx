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

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step3.${key}`, options);

const Step3 = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const dispatch = useDispatch();

  const [interests, setInterests] = useState<string[]>([]);

  // Callbacks
  const handleInterestPress = useCallback(
    (interest: string) => setInterests(_.xor(interests, [interest])),
    [interests]
  );

  // Effects
  useEffect(() => {
    dispatch(destinationsActions.setPayload({ interests }));
  }, [dispatch, interests]);

  // Renderers
  return (
    <>
      <View style={styles.container}>
        <StepHeader title={_t('interest_title')} description={_t('interest_desc')} />
      </View>
      <InterestsList value={interests} setValue={handleInterestPress} />
    </>
  );
};

export default Step3;
