// Packages
import _ from 'lodash';
import { ms, s } from 'react-native-size-matters';
import Purchases, { PurchasesPackage } from 'react-native-purchases';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Text } from 'react-native-paper';
import Icon from '@shared/components/Icon';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';
import PlanListItem from './components/PlanListItem';
import LoginSheet from '@shared/components/LoginSheet';
import SuccessUpgrade from './components/SuccessUpgrade';
import RegularButton from '@shared/components/Buttons/Regular';
import CustomBottomSheet from '@shared/components/BottomSheet';
import { FlatList, Linking, ScrollView, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { benefits } from './data';
import { useAppSelector } from '@app/store';
import { selectIsGuest } from '@redux/auth/slice';
import { ENTITLEMENT_ID } from '@shared/constants';
import { useAppTheme } from '@shared/assets/theme';
import { selectCurrentOfferings } from '@redux/app/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { isTablet } from '@shared/utils';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`subscription.${key}`, options);

const SubscriptionsScreen = () => {
  // Redux
  const isGuest = useAppSelector(selectIsGuest);
  const currentOfferings = useAppSelector(selectCurrentOfferings);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const authBottomSheetRef = useRef<BottomSheetMethods>();
  const infoBottomSheetRef = useRef<BottomSheetMethods>();

  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PurchasesPackage>();

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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

      if (isGuest) {
        authBottomSheetRef.current?.expand();
      } else {
        const { customerInfo } = await Purchases.purchasePackage(selectedPlan);

        console.debug('[handlePurchasePackage - customerInfo] :: ', customerInfo.entitlements.active);

        if (typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== 'undefined') {
          // Unlock that great "pro" content
          setIsSuccess(true);
        }
      }
    } catch (error) {
      // if (!error.userCancelled) {
      console.debug('[handleSelectPlan - error] :: ', error);
      // }
    }
  };

  const handleOnInfoPress = useCallback(() => {
    infoBottomSheetRef.current?.expand();
  }, []);

  const handleInfoSheetClose = useCallback(() => {
    infoBottomSheetRef.current?.close();
  }, []);

  const handleOnEmailPress = useCallback(() => {
    Linking.openURL('mailto:support@avandraapp.com');
  }, []);

  const handleOnTermsPress = useCallback(() => {
    Linking.openURL('https://avandraapp.com/terms_and_conditions.html');
  }, []);

  const handleOnPolicyPress = useCallback(() => {
    Linking.openURL('https://avandraapp.com/privacy_policy.html');
  }, []);

  const renderInfoButton = useCallback(
    () => (
      <Ionicons
        size={ms(28)}
        onPress={handleOnInfoPress}
        name="information-circle-outline"
        color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
      />
    ),
    [handleOnInfoPress, theme.colors.gray, theme.colors.white, theme.dark]
  );

  // Effects
  useEffect(() => {
    navigation.setOptions({ headerRight: renderInfoButton });
  }, [navigation, renderInfoButton]);

  useEffect(() => {
    if (currentOfferings) setSelectedPlan(_.first(currentOfferings));
  }, [currentOfferings]);

  // Renderers
  if (isSuccess) {
    return <SuccessUpgrade benefits={benefits} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleAndBenefits}>
        <Text variant="h4">{_t('discover_more_with_premium')}</Text>

        <ScrollView style={styles.benefits}>
          {_.map(benefits, (benefit, index) => (
            <View key={index} style={styles.benefit}>
              <Icon name="check" color={theme.colors.primary} />
              <Text variant={isTablet ? 'xLarge' : 'h5'} style={styles.benefitText}>
                {_t(`benefits.${benefit}`)}
              </Text>
            </View>
          ))}
        </ScrollView>
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

        <RegularButton
          title={_t('continue')}
          onPress={handlePurchasePackage}
          textStyle={{ lineHeight: s(16) }}
          subtitle={_t('auto_renewal_cancel_anytime')}
        />
        <RegularButton variant="text" title={_t('restore_purchases')} onPress={handleRestorePurchase} />
      </View>

      <LoginSheet sheetRef={authBottomSheetRef} />

      <CustomBottomSheet sheetRef={infoBottomSheetRef} onClose={handleInfoSheetClose} contentStyle={styles.content}>
        <Text variant="h4" style={styles.title}>
          {_t('subscription_terms')}
        </Text>
        <Text variant="medium" style={styles.terms}>
          {_t('subscription_terms_desc1')}
          <Text onPress={handleOnEmailPress} variant="medium" style={styles.link}>
            support@avandraapp.com
          </Text>
          {_t('subscription_terms_desc2')}
          <Text variant="medium" onPress={handleOnTermsPress} style={styles.link}>
            {t('common.terms')}
          </Text>{' '}
          {t('common.and')}{' '}
          <Text variant="medium" onPress={handleOnPolicyPress} style={styles.link}>
            {t('common.privacy_policy')}
          </Text>
          .
        </Text>

        <Text variant="medium" style={styles.acknowledgment}>
          {_t('subscription_terms_acknowledgement')}
        </Text>

        <RegularButton title={t('common.continue')} onPress={handleInfoSheetClose} />
      </CustomBottomSheet>
    </View>
  );
};

export default SubscriptionsScreen;
