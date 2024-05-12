// Packages
import _ from 'lodash';
import * as Updates from 'expo-updates';
import { withIAPContext } from 'react-native-iap';
import * as Notifications from 'expo-notifications';
import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

// Utilities
import { changeLocale } from './i18n';
import NetworkInfo from '@shared/services/NetworkInfo';
import { validateTokenAction } from '@redux/auth/thunks';
import { darkTheme, lightTheme } from '@shared/assets/theme';
import { useAppSelector, useAppThunkDispatch } from './store';
import { getConfigurationAction, getWalkthroughAction } from '@redux/app/thunks';
import { getLanguage, getThemeMode, selectNetworkError } from '@redux/app/slice';

// Interfaces
interface RootProps {
  onLayout: ((event: LayoutChangeEvent) => void) | undefined;
}

const Root: React.FC<RootProps> = ({ onLayout, linking }) => {
  // Redux
  const dispatchThunk = useAppThunkDispatch();

  const language = useAppSelector(getLanguage);
  const themeMode = useAppSelector(getThemeMode);
  const networkError = useAppSelector(selectNetworkError);

  // Statics
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

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
              setTimeout(() => { Updates.reloadAsync(); }, 3000);
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

  // const initAppPurchases = useCallback(async () => {
  //   try {
  //     await connectAsync();
  //     console.info('[InitData] :: Initialized in-app purchases');
  //   } catch (error) {
  //     console.error('[initAppPurchases] - ERROR :: ', error);
  //   }
  // }, []);

  const registerForPushNotificationsAsync = useCallback(async () => {
    let token;

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        lightColor: '#FF231F7C',
        vibrationPattern: [0, 250, 250, 250],
        importance: Notifications.AndroidImportance.MAX,
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus === 'undetermined') {
        console.error('Undetermined push notification status');
      }
      if (finalStatus !== 'granted') {
        console.error('Failed to get push token for push notification!');
        return;
      }

      token = await Notifications.getDevicePushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId
      });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    return token.data;
  }, []);

  const initPushNotifications = useCallback(() => {
    registerForPushNotificationsAsync().then(async token => {
      console.info('[initPushNotifications] :: Your device push token is', token);
    });

    notificationListener.current = Notifications.addNotificationReceivedListener(data => {
      console.debug('[initPushNotifications] :: Received notification', data);

      const notification = Platform.select({
        android: data.request.trigger.remoteMessage,
        ios: data.request.content
      });

      // if (String(notification?.data?.category).match(/otp/i)) {
      //   const otp = Platform.select({ android: notification?.notification?.data, ios: notification?.data }).otp;
      //   if (otp) {
      //     parentWebviewRef.current?.sendJSON({ key: messages.otp_code, data: { code: otp } });
      //   }
      // }
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
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
    // await initAppPurchases();
  }, [dispatchThunk, getConfiguration, language]);

  // Effects
  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renderers
  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayout}>
      <PaperProvider theme={theme}>
        <BottomSheetModalProvider>
          <NavigationContainer linking={linking}>
            <StatusBar style={theme.dark ? 'light' : 'dark'} />
            <RootNavigation />
            {/* <SplashScreen loadedData={loadedData} /> */}
            <NetworkInfo />
            {/* <SubscriptionManager /> */}
            <CustomSnackbar />
            <UpdateModal visible={updateModalVisible} onDismiss={handleDismissUpdateModal} />
            {networkError && <NetworkErrorModal />}
          </NavigationContainer>
        </BottomSheetModalProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default withIAPContext(Root);
