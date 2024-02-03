// Packages
import _ from 'lodash';
import { LayoutChangeEvent } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { withIAPContext } from 'react-native-iap';
import { PaperProvider } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import { connectAsync } from 'expo-in-app-purchases';
import { NavigationContainer } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useRef, useState } from 'react';

// Components
import RootNavigation from './navigation';
import { StatusBar } from 'expo-status-bar';
import CustomSnackbar from '@shared/components/CustomSnackbar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Utilities
import { changeLocale } from './i18n';
import { Firebase } from '@shared/constants';
import { FIREBASE_DB } from '../../firebaseConfig';
import NetworkInfo from '@shared/services/NetworkInfo';
import { useAppDispatch, useAppSelector } from './store';
import { darkTheme, lightTheme } from '@shared/assets/theme';
import { registerForPushNotificationsAsync } from '@shared/utils';
import { appActions, getLanguage, getThemeMode } from '@redux/app/slice';

// Interfaces
interface RootProps {
  onLayout: ((event: LayoutChangeEvent) => void) | undefined;
}

const Root: React.FC<RootProps> = ({ onLayout }) => {
  // Redux
  const dispatch = useAppDispatch();

  const themeMode = useAppSelector(getThemeMode);
  const language = useAppSelector(getLanguage);

  // Statics
  const [notification, setNotification] = useState<Notifications.Notification>();
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>('');
  const [loadedData, setLoadedData] = useState<boolean>(false);

  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  const isDark = _.isEqual(themeMode, 'dark');
  const theme = isDark ? darkTheme : lightTheme;

  // Callbacks
  const getConfiguration = useCallback(async () => {
    try {
      const configRef = ref(FIREBASE_DB, Firebase.CONFIGURATION_REF);

      onValue(configRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(appActions.setConfig(data));
        setLoadedData(true);
        console.info('[InitData] :: Loaded and stored configuration');
      });
    } catch (e) {
      console.error('[getConfiguration] - ERROR :: ', e);
    }
  }, [dispatch]);

  const initAppPurchases = useCallback(async () => {
    try {
      await connectAsync();
      console.info('[InitData] :: Initialized in-app purchases');
    } catch (error) {
      console.error('[initAppPurchases] - ERROR :: ', error);
    }
  }, []);

  const initData = useCallback(async () => {
    changeLocale(language);
    await getConfiguration();
    await initAppPurchases();
  }, [getConfiguration, initAppPurchases, language]);

  // Effects
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener((noti) => setNotification(noti));

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) =>
      console.log(response)
    );

    return () => {
      notificationListener.current && Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current && Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    (async () => {
      await initData();
    })();
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  // Renderers
  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayout}>
      <PaperProvider theme={theme}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <StatusBar style={theme.dark ? 'light' : 'dark'} />
            <RootNavigation />
            {/* <SplashScreen loadedData={loadedData} /> */}
            <NetworkInfo />
            {/* <SubscriptionManager /> */}
            <CustomSnackbar />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default withIAPContext(Root);
