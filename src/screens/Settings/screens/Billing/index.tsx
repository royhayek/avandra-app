// Packages
import _ from 'lodash';
import React, { useEffect } from 'react';
import DeviceInfo from 'react-native-device-info';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

// Components
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { Linking, Platform, ScrollView, TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import Purchases, { CustomerInfo } from 'react-native-purchases';
import { ENTITLEMENT_ID } from '@shared/constants';
import moment from 'moment';

interface RouteParams {
  title: string;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`subscription.${key}`, options);

const Billingscreen = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [customerInfo, setCustomerInfo] = React.useState<CustomerInfo>();

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { title } = route?.params as RouteParams;

  // Effects
  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  const retrieveCustomerInfo = async () => {
    const custInfo = await Purchases.getCustomerInfo();
    setCustomerInfo(custInfo);
  };

  useEffect(() => {
    retrieveCustomerInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Callbacks
  const openSettings = () => {
    let subscriptionUrl = '';

    if (Platform.OS === 'ios') {
      subscriptionUrl = 'https://apps.apple.com/account/subscriptions';
    } else {
      const packageName = DeviceInfo.getBundleId();
      subscriptionUrl = `https://play.google.com/store/account/subscriptions?sku=&package=${packageName}`;
    }

    Linking.openURL(subscriptionUrl).catch((err) => console.error('Failed to open URL:', err));
  };

  // Render Vers
  const expiryDate = moment(customerInfo?.entitlements.active[ENTITLEMENT_ID]?.expirationDate).format('dddd MM, YYYY');

  // Renderers
  return (
    <View style={styles.container}>
      <FastImage source={require('@shared/assets/images/UpgradedIllustration.png')} style={styles.illutration} />

      <Text variant="h6" style={styles.title}>
        {_t('subscription_title')}
      </Text>
      <Text variant="large" style={styles.exireInfo}>
        {_t('subscription_expiry', { expiryDate })}{' '}
        <Text onPress={openSettings} variant="large" style={styles.cancelButton}>
          {_t('here')}
        </Text>
      </Text>
    </View>
  );
};

export default Billingscreen;
