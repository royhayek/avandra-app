// Packages
import _ from 'lodash';
import React, { useState } from 'react';

// Components
import { Text } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { FlatList, View } from 'react-native';
import PlanListItem from './components/PlanListItem';
import SuccessUpgrade from './components/SuccessUpgrade';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { dummy_subscriptions } from './data';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`subscription.${key}`, options);

const SubscriptionsScreen = () => {
  // Redux
  const plans = dummy_subscriptions;

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [isSuccess, setIsSuccess] = useState(false);

  // Renderers
  if (_.isEmpty(plans)) {
    return (
      <View style={styles.emptyContainer}>
        <LottieView
          autoPlay
          loop={false}
          style={styles.lottie}
          source={require('@shared/assets/lottie/no-subscriptions.json')}
        />
        <Text style={styles.noSubscriptionsText}>{_t('no_subscriptions_found')}</Text>
        <Text variant="bodySmall" style={styles.referText}>
          {_t('refer_to_documentation')}
        </Text>
      </View>
    );
  }

  if (isSuccess) {
    return <SuccessUpgrade item={plans[0]} />;
  }

  return (
    <FlatList
      data={plans}
      keyExtractor={(item) => item._id}
      contentContainerStyle={styles.plansList}
      renderItem={({ item }) => <PlanListItem key={item._id} item={item} setIsSuccess={setIsSuccess} />}
    />
  );
};

export default SubscriptionsScreen;
