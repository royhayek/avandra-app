// Packages
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';
import _ from 'lodash';
import {
  clearTransactionIOS,
  endConnection,
  finishTransaction,
  flushFailedPurchasesCachedAsPendingAndroid,
  getAvailablePurchases,
  getPurchaseHistory,
  getSubscriptions,
  initConnection,
  promotedProductListener,
  purchaseErrorListener,
  purchaseUpdatedListener,
  setup
} from 'react-native-iap';
// Utilities
import { appActions, getConfiguration } from '@redux/app/slice';
import { isAndroid } from '@shared/utils';

// Component
const SubscriptionManager = () => {
  // Redux
  const dispatch = useDispatch();
  const updateSubscriptions = useCallback((payload) => dispatch(appActions.setPaidSubscriptions(payload)), [dispatch]);

  const updateOwnedSubscription = useCallback(
    (payload) => dispatch(appActions.setOwnedSubscription(payload)),
    [dispatch]
  );

  const config = useSelector(getConfiguration);

  // Callbacks
  const fetchAvailablePurchases = async () => {
    try {
      const history = await getPurchaseHistory();
      const purchases = await getAvailablePurchases();
      const lastPurchase = _.last(purchases);
      updateOwnedSubscription(lastPurchase?.productId);
      console.debug('[PURCHASE HISTORY] :: ', { history });
      console.debug('[AVAILABLE PURCHASES] :: ', { purchases });
    } catch (error) {
      console.error('[fetchAvailablePurchases] - ERROR :: ', error);
    }
  };

  // Effects
  useEffect(() => {
    setup({ storekitMode: 'STOREKIT2_MODE' });

    // Initialize the InAppPurchase module
    initConnection()
      .then(async () => {
        if (isAndroid) {
          await flushFailedPurchasesCachedAsPendingAndroid();
        } else {
          __DEV__ && (await clearTransactionIOS());
        }

        fetchAvailablePurchases();

        // Load available products (subscription plans) from the app stores
        const productIds = Platform.select({
          android: config?.productIds?.android,
          ios: config?.productIds?.ios
        });

        return getSubscriptions({ skus: productIds });
      })
      .then((subscriptions) => {
        // Here you can store the available subscription plans in your state or Redux store
        console.log('Available Subscription Plans:', subscriptions);

        updateSubscriptions(subscriptions);
      })
      .catch((error) => {
        console.error('Error setting up subscriptions:', error);
      });

    const purchaseUpdate = purchaseUpdatedListener(async (purchase) => {
      const receipt = purchase.transactionReceipt ? purchase.transactionReceipt : purchase.originalJson;

      if (receipt) {
        try {
          const acknowledgeResult = await finishTransaction({ purchase });
          console.info('acknowledgeResult', acknowledgeResult);
        } catch (error) {
          console.debug('finishTransaction', error);
        }

        const parsedReceipt = JSON.parse(receipt);
        console.debug('[RECEIPT AFTER PURCHASE] :: ', parsedReceipt);
        updateOwnedSubscription(parsedReceipt.productId);
      }
    });

    const purchaseError = purchaseErrorListener((error) =>
      console.info('[Product promoted] :: ', { error: JSON.stringify(error) })
    );

    const promotedProduct = promotedProductListener((productId) =>
      console.info('[Product promoted] :: ', { productId })
    );

    return () => {
      purchaseUpdate?.remove();
      purchaseError?.remove();
      promotedProduct?.remove();

      endConnection();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config?.productIds?.android, config?.productIds?.ios]);

  return null;
};

export default SubscriptionManager;
