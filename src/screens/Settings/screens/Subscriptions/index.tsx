// Packages
import _ from 'lodash';
import React, { useState } from 'react';

// Components
import { Text } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { FlatList, View } from 'react-native';
import PlanListItem from './components/PlanListItem';
import SuccessUpgrade from './components/SuccessUpgrade';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { selectCurrentOfferings } from '@redux/app/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`subscription.${key}`, options);

const SubscriptionsScreen = () => {
  // Redux  
  const currentOfferings = useAppSelector(selectCurrentOfferings);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [isSuccess, setIsSuccess] = useState(false);

  // Callbacks
  const handleRestorePurchase = () => {
    try {
      const restore = await Purchases.restorePurchases();
      // ... check restored purchaserInfo to see if entitlement is now active
    } catch (e) {
      console.error('[handleRestorePurchase - error] :: ', error);
    }
  };

  // Renderers
  const renderListHeader = () => <RegularButton title={_t('restore_purchase')} onPress={handleRestorePurchase} />;

  if (_.isEmpty(currentOfferings)) {
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
    return <SuccessUpgrade item={currentOfferings[0]} />;
  }

  return (
    <FlatList
      data={currentOfferings}
      keyExtractor={(item) => item._id}
      ListHeaderComponent={renderListHeader()}
      contentContainerStyle={styles.plansList}
      renderItem={({ item }) => (
        <PlanListItem key={item._id} item={item} setIsSuccess={setIsSuccess}  />
      )}
    />
  );
};

export default SubscriptionsScreen;
