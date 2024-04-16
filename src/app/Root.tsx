// Packages
import _ from 'lodash';
import * as Updates from 'expo-updates';
import { ref, onValue } from 'firebase/database';
import { withIAPContext } from 'react-native-iap';
import { connectAsync } from 'expo-in-app-purchases';
// import * as Notifications from 'expo-notifications';
import React, { useCallback, useEffect, useState } from 'react';
import { LayoutChangeEvent, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import RootNavigation from './navigation';
import SplashScreen from '@screens/Splash';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import UpdateModal from '@shared/components/UpdateModal';
import { NavigationContainer } from '@react-navigation/native';
import CustomSnackbar from '@shared/components/CustomSnackbar';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Utilities
import { changeLocale } from './i18n';
import { Firebase } from '@shared/constants';
import { FIREBASE_DB } from '../../firebaseConfig';
import NetworkInfo from '@shared/services/NetworkInfo';
import { validateTokenAction } from '@redux/auth/thunks';
import { getWalkthroughAction } from '@redux/app/thunks';
import { darkTheme, lightTheme } from '@shared/assets/theme';
// import { registerForPushNotificationsAsync } from '@shared/utils';
import { appActions, getLanguage, getThemeMode } from '@redux/app/slice';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from './store';

// Interfaces
interface RootProps {
  onLayout: ((event: LayoutChangeEvent) => void) | undefined;
}

const Root: React.FC<RootProps> = ({ onLayout }) => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const language = useAppSelector(getLanguage);
  const themeMode = useAppSelector(getThemeMode);

  // Statics
  const [loadedData, setLoadedData] = useState<boolean>(false);
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
    const seenWalkthrough = (await AsyncStorage.getItem('seenWalkthrough')) === 'true';
    if (!seenWalkthrough) await dispatchThunk(getWalkthroughAction());
    await dispatchThunk(validateTokenAction());
    await getConfiguration();
    await initAppPurchases();
  }, [dispatchThunk, getConfiguration, initAppPurchases, language]);

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
          <NavigationContainer>
            <StatusBar style={theme.dark ? 'light' : 'dark'} />
            <RootNavigation />
            {/* <SplashScreen loadedData={loadedData} /> */}
            <NetworkInfo />
            {/* <SubscriptionManager /> */}
            <CustomSnackbar />
            <UpdateModal visible={updateModalVisible} onDismiss={handleDismissUpdateModal} />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default withIAPContext(Root);
