// Packages
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

// Components
import { Text } from 'react-native-paper';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import PlanListItem from '../Subscriptions/components/PlanListItem';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { dummy_subscriptions } from '../Subscriptions/data';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface RouteParams {
  title: string;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`subscription.${key}`, options);

const Billingscreen = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const route = useRoute();
  const navigation = useNavigation();

  const { title } = route?.params as RouteParams;

  const [isSuccess, setIsSuccess] = useState(false);

  // Effects
  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  // Renderers
  return (
    <ScrollView style={styles.container}>
      <PlanListItem item={dummy_subscriptions[0]} />

      <Text variant="large" style={styles.exireInfo}>
        {_t('subscription_expiry')}
        <TouchableOpacity onPress={() => null} style={{ padding: 0, paddingHorizontal: 5 }}>
          <Text variant="large" style={styles.cancelButton}>
            {_t('here')}
          </Text>
        </TouchableOpacity>
      </Text>
    </ScrollView>
  );
};

export default Billingscreen;
