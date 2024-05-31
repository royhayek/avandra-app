// Packages
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Purchases, { PurchasesPackage } from 'react-native-purchases';

// Components
import { Text } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { FlatList, View } from 'react-native';
import { CheckIcon } from '@shared/assets/icons';
import PlanListItem from './components/PlanListItem';
import SuccessUpgrade from './components/SuccessUpgrade';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import i18n, { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { selectCurrentOfferings } from '@redux/app/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { dummy_subscriptions } from './data';
import { ENTITLEMENT_ID } from '@shared/constants';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`subscription.${key}`, options);

const SubscriptionsScreen = () => {
  // Redux
  const currentOfferings = useAppSelector(selectCurrentOfferings);
  console.debug('[SubscriptionsScreen - currentOfferings] :: ', currentOfferings);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [isSuccess, setIsSuccess] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState<PurchasesPackage>();

  const benefits = dummy_subscriptions[1].benefits;

  // Callbacks
  const handleRestorePurchase = async () => {
    try {
      const restore = await Purchases.restorePurchases();
      console.debug('[handleRestorePurchase] :: ', restore);
      // ... check restored purchaserInfo to see if entitlement is now active
    } catch (error) {
      console.error('[handleRestorePurchase - error] :: ', error);
    }
  };

  const handlePurchasePackage = async () => {
    try {
      if (!selectedPlan) return;

      const { customerInfo } = await Purchases.purchasePackage(selectedPlan);

      console.debug('[handlePurchasePackage - customerInfo] :: ', customerInfo.entitlements.active);

      if (typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== 'undefined') {
        // Unlock that great "pro" content
        setIsSuccess(true);
      }
    } catch (error) {
      // if (!error.userCancelled) {
      console.debug('[handleSelectPlan - error] :: ', error);
      // }
    }
  };

  // Effects
  useEffect(() => {
    if (currentOfferings) setSelectedPlan(_.first(currentOfferings));
  }, [currentOfferings]);

  // Renderers
  if (isSuccess) {
    return <SuccessUpgrade item={benefits} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleAndBenefits}>
        <Text variant="h4">Access advanced features with premium!</Text>

        <View style={styles.benefits}>
          {_.map(benefits, (benefit, index) => (
            <View key={index} style={styles.benefit}>
              <CheckIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
              <Text variant="xLarge" style={styles.benefitText}>
                {benefit[i18n.locale]}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.plansContainer}>
        {_.isEmpty(currentOfferings) ? (
          <>
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
          </>
        ) : (
          <FlatList
            scrollEnabled={false}
            data={currentOfferings}
            keyExtractor={(item) => item.identifier}
            renderItem={({ item }) => (
              <PlanListItem
                item={item}
                key={item.identifier}
                setSelected={setSelectedPlan}
                selected={_.isEqual(item, selectedPlan)}
              />
            )}
          />
        )}

        <RegularButton title={_t('continue')} onPress={handlePurchasePackage} />
        <RegularButton variant="text" title={_t('restore_purchases')} onPress={handleRestorePurchase} />
      </View>
    </View>
  );
};

export default SubscriptionsScreen;
