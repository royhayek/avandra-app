// Packages
import _ from 'lodash';
import * as Updates from 'expo-updates';
import { withIAPContext } from 'react-native-iap';
// import * as Notifications from 'expo-notifications';
import React, { useCallback, useEffect, useState } from 'react';
import { LayoutChangeEvent, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import { getConfigurationAction, getWalkthroughAction } from '@redux/app/thunks';
import { darkTheme, lightTheme } from '@shared/assets/theme';
import { useAppSelector, useAppThunkDispatch } from './store';
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
  // const [expoPushToken, setExpoPushToken] = useState<string | undefined>('');
  // const [notification, setNotification] = useState<Notifications.Notification>();

  const colorScheme = useColorScheme();

  // const notificationListener = useRef<Notifications.Subscription>();
  // const responseListener = useRef<Notifications.Subscription>();

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

              // NOTIFY USER HERE
              setTimeout(() => {
                Updates.reloadAsync();
              }, 5000);
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

  const initData = useCallback(async () => {
    changeLocale(language);
    const seenWalkthrough = (await AsyncStorage.getItem('seenWalkthrough')) === 'true';
    if (!seenWalkthrough) await dispatchThunk(getWalkthroughAction());
    await dispatchThunk(validateTokenAction());
    await getConfiguration();
    // await initAppPurchases();
  }, [dispatchThunk, getConfiguration, language]);

  // Effects
  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));
  //   notificationListener.current = Notifications.addNotificationReceivedListener((noti) => setNotification(noti));

  //   responseListener.current = Notifications.addNotificationResponseReceivedListener((response) =>
  //     console.log(response)
  //   );

  //   return () => {
  //     notificationListener.current && Notifications.removeNotificationSubscription(notificationListener.current);
  //     responseListener.current && Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    (async () => {
      !__DEV__ && checkForUpdates();
      await initData();
    })();
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

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
