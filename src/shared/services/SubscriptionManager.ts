// Packages
import _ from 'lodash';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import Purchases from 'react-native-purchases';

// Utilities
import { appActions } from '@redux/app/slice';
import { ENTITLEMENT_ID } from '@shared/constants';
import { REVENUECAT_API_KEYS } from '@shared/constants';

// Component
const SubscriptionManager = () => {
  // Redux
  const dispatch = useDispatch();

  // Callbacks
  // get the latest details about the user (is anonymous, user id, has active subscription)
  const getUserDetails = async () => {
    const isAnonymous = await Purchases.isAnonymous();
    const userId = await Purchases.getAppUserID();
    const customerInfo = await Purchases.getCustomerInfo();
    const active = typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== 'undefined';

    dispatch(appActions.setSubscriptionState({ isAnonymous, userId, active }));
  };

  // Effects
  useEffect(() => {
    // Get user details on app launch
    getUserDetails();
  }, []);

  useEffect(() => {
    const setup = async () => {
      if (Platform.OS == 'android') {
        await Purchases.configure({ apiKey: REVENUECAT_API_KEYS.google });
      } else {
        await Purchases.configure({ apiKey: REVENUECAT_API_KEYS.apple });
      }

      const offerings = await Purchases.getOfferings();
      dispatch(appActions.setCurrentOffering(offerings.current));
    };

    Purchases.setDebugLogsEnabled(true);

    setup().catch(console.log);
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
