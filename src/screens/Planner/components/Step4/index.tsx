// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';

// Components
import { View } from 'react-native';
import InterestsList from './InterestsList';
import { Text } from 'react-native-paper';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { destinationsActions } from '@redux/destinations/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { useAppTheme } from '@shared/assets/theme';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.${key}`, options);

const Step4 = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const dispatch = useDispatch();

  const [interests, setInterests] = useState([]);

  // Callbacks
  const handleInterestPress = useCallback((interest: string) => setInterests(_.xor(interests, [interest])), [interests]);

  // Effects
  useEffect(() => {
    dispatch(destinationsActions.setPayload({ interests: interests }));
  }, [dispatch, interests]);

  // Renderers
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        {_t('how_to_spend')}
      </Text>
      <Text variant="titleSmall" style={styles.subtitle}>
        Choose as many as you'd like
      </Text>
      <InterestsList value={interests} setValue={handleInterestPress} />
      {/* Phase two */}
      {/* <Text variant="titleMedium" style={styles.otherTitle}>
          Other
          <Text variant="titleMedium" style={{ color: theme.colors.secondary }}>
            (optional)
          </Text>
        </Text>
        <InterestsInput value={value} setValue={handleInterestsChange} />
        <View style={styles.interestsInfo}>
          <Text variant="bodySmall" style={styles.maxDays}>
            Separted with a comma
          </Text>
          <Text variant="bodySmall" style={styles.maxDays}>
            0/50
          </Text>
        </View> */}
    </View>
  );
};

export default Step4;
