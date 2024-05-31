// Packages
import _ from 'lodash';
import * as Device from 'expo-device';
import * as Updates from 'expo-updates';
import * as Linking from 'expo-linking';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { LayoutChangeEvent, useColorScheme, Platform } from 'react-native';

// Components
import RootNavigation from './navigation';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import UpdateModal from '@shared/components/UpdateModal';
import { NavigationContainer } from '@react-navigation/native';
import CustomSnackbar from '@shared/components/CustomSnackbar';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import NetworkErrorModal from '@shared/components/NetworkErrorModal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SubscriptionManager from '@shared/services/SubscriptionManager';

// Utilities
import { changeLocale } from './i18n';
import { selectUserId } from '@redux/user/slice';
import deepLinkingOptions from './navigation/linking';
import NetworkInfo from '@shared/services/NetworkInfo';
import { validateTokenAction } from '@redux/auth/thunks';
import { selectIsAuthenticated } from '@redux/auth/slice';
import { darkTheme, lightTheme } from '@shared/assets/theme';
import { getDeviceId, registerForPushNotificationsAsync } from '@shared/utils';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from './store';
import { appActions, selectLanguage, selectThemeMode, selectNetworkError } from '@redux/app/slice';
import { getConfigurationAction, getWalkthroughAction, storeDeviceInfoAction } from '@redux/app/thunks';

// Interfaces
import { DeviceDataProps } from '@shared/types/DeviceInfo';

interface RootProps {
  onLayout: ((event: LayoutChangeEvent) => void) | undefined;
}

const Root: React.FC<RootProps> = ({ onLayout }) => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const userId = useAppSelector(selectUserId);
  const language = useAppSelector(selectLanguage);
  const themeMode = useAppSelector(selectThemeMode);
  const networkError = useAppSelector(selectNetworkError);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  // Statics
  const [pushToken, setPushToken] = useState<string | undefined>();
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);

  const colorScheme = useColorScheme();

  const responseListener = useRef<Notifications.Subscription>();
  const notificationListener = useRef<Notifications.Subscription>();

  const isDark = _.isEqual(themeMode, 'dark') || (_.isEqual(themeMode, 'default') && _.isEqual(colorScheme, 'dark'));
  const theme = isDark ? darkTheme : lightTheme;

  // Callbacks
  const checkForUpdates = useCallback(async () => {
    Updates.checkForUpdateAsync()
      .then(({ isAvailable }) => {
        if (isAvailable) {
          setUpdateModalVisible(true);

          Updates.fetchUpdateAsync()
            .then(({ isNew }) => {
              console.debug('[checkForUpdates] :: Found a new update. Fetching... ', { isNew });

              // Notify user for 3 seconds before reloading
              setTimeout(() => {
                Updates.reloadAsync();
              }, 3000);
            })
            .catch((error) => {
              console.error('Failed to check for updates :: ', error.nessage);
            });
        }
      })
      .catch((error) => {
        console.debug('[checkForUpdates] :: Failed to check for updates ', { error });
      });
  }, []);

  const handleDismissUpdateModal = useCallback(() => setUpdateModalVisible(false), []);

  const getConfiguration = useCallback(async () => {
    await dispatchThunk(getConfigurationAction());
  }, [dispatchThunk]);

  const initPushNotifications = useCallback(() => {
    registerForPushNotificationsAsync().then(async (token) => {
      console.info('[initPushNotifications] :: Your device push token is', token);
      setPushToken(token);
    });

    if (Platform.OS === 'android') {
      Notifications.getNotificationChannelsAsync().then((value) => {
        console.debug('[initPushNotifications] :: Notification channels', value);
      });
    }

    notificationListener.current = Notifications.addNotificationReceivedListener((data) => {
      console.debug('[initPushNotifications] :: Received notification raw data', data);

      const notification = Platform.select({
        android: data.request.content,
        ios: data.request.content
      });

      console.debug('[initPushNotifications] :: Received notification', notification);

      // if (String(notification?.data?.category).match(/otp/i)) {
      //   const otp = Platform.select({ android: notification?.notification?.data, ios: notification?.data }).otp;
      //   if (otp) {
      //     parentWebviewRef.current?.sendJSON({ key: messages.otp_code, data: { code: otp } });
      //   }
      // }
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    return () => {
      if (notificationListener.current) Notifications.removeNotificationSubscription(notificationListener.current);
      if (responseListener.current) Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const initData = useCallback(async () => {
    !__DEV__ && checkForUpdates();
    changeLocale(language);
    const seenWalkthrough = (await AsyncStorage.getItem('seenWalkthrough')) === 'true';
    if (!seenWalkthrough) await dispatchThunk(getWalkthroughAction());
    await dispatchThunk(validateTokenAction());
    await getConfiguration();
    initPushNotifications();
  }, [checkForUpdates, dispatchThunk, getConfiguration, initPushNotifications, language]);

  const handleDeepLink = useCallback(
    (url: string) => {
      const data = Linking.parse(url);
      console.debug('[handleDeepLink] :: ', data);

      dispatch(appActions.setDeepLinkData(data));
    },
    [dispatch]
  );

  const storeDeviceInfo = useCallback(async () => {
    const deviceId = await getDeviceId();

    const deviceData: DeviceDataProps = {
      deviceId,
      pushToken,
      user: userId,
      brand: Device.brand,
      osName: Device.osName,
      osVersion: Device.osVersion,
      modelName: Device.modelName,
      deviceName: Device.deviceName,
      manufacturer: Device.manufacturer,
      deviceYearClass: Device.deviceYearClass
    };

    await dispatchThunk(storeDeviceInfoAction(deviceData));
  }, [dispatchThunk, pushToken, userId]);

  // Effects
  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Linking.addEventListener('url', ({ url }) => handleDeepLink(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isAuthenticated && pushToken) storeDeviceInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, pushToken]);

  // Renderers
  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayout}>
      <PaperProvider theme={theme}>
        <BottomSheetModalProvider>
          <NavigationContainer linking={deepLinkingOptions}>
            <StatusBar style={theme.dark ? 'light' : 'dark'} />
            <RootNavigation />
            {/* <SplashScreen loadedData={loadedData} /> */}
            <NetworkInfo />
            <SubscriptionManager />
            <CustomSnackbar />
            <UpdateModal visible={updateModalVisible} onDismiss={handleDismissUpdateModal} />
            {networkError && <NetworkErrorModal />}
          </NavigationContainer>
        </BottomSheetModalProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default Root;
