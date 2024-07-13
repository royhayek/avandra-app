// Packages
import _ from 'lodash';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import Purchases from 'react-native-purchases';

// Utilities
import { appActions } from '@redux/app/slice';
import { ENTITLEMENT_ID, REVENUECAT_API_KEYS } from '@shared/constants';

// Component
const SubscriptionManager = () => {
  // Redux
  const dispatch = useDispatch();

  // Callbacks
  // get the latest details about the user (is anonymous, user id, has active subscription)
  const configurePurchases = async () => {
    Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);

    if (Platform.OS === 'ios') {
      await Purchases.configure({ apiKey: REVENUECAT_API_KEYS.apple });
    } else if (Platform.OS === 'android') {
      await Purchases.configure({ apiKey: REVENUECAT_API_KEYS.google });
    }
  };

  const getUserDetails = async () => {
    if (!(await Purchases.isConfigured())) return;

    const isAnonymous = await Purchases.isAnonymous();
    const userId = await Purchases.getAppUserID();
    const customerInfo = await Purchases.getCustomerInfo();
    const active = typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== 'undefined';

    dispatch(appActions.setSubscriptionState({ isAnonymous, userId, active }));
  };

  const getCurrentOfferings = async () => {
    try {
      if (!(await Purchases.isConfigured())) return;

      const offerings = await Purchases.getOfferings();

      if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {
        dispatch(appActions.setCurrentOffering(offerings.current.availablePackages));
        dispatch(appActions.setMetadata(offerings.current.metadata));
      }
    } catch (e) {
      console.debug('[SubscriptionsScreen - useEffect - error] :: ', e);
    }
  };

  // Effects
  useEffect(() => {
    configurePurchases();
    getUserDetails();
    getCurrentOfferings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Subscribe to purchaser updates
    Purchases.addCustomerInfoUpdateListener(getUserDetails);

    return () => {
      Purchases.removeCustomerInfoUpdateListener(getUserDetails);
    };
  });

  return null;
};

export default SubscriptionManager;
