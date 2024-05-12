// Packages
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import * as Linking from 'expo-linking';
import { Settings } from 'react-native-fbsdk-next';
import * as Notifications from 'expo-notifications';
import { PersistGate } from 'redux-persist/integration/react';
import React, { useCallback, useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Components
import Root from './src/app/Root';
import * as SplashScreen from 'expo-splash-screen';

// Utils
import './src/app/api';
import './src/app/i18n';
import 'react-native-url-polyfill/auto';
import { persistor, store } from './src/app/store';
import { snackbarActions } from '@redux/snackbar/slice';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Component
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
});

const fetchFonts = () => {
  return Font.loadAsync({
    'urbanist-bold': require('./src/shared/assets/fonts/Urbanist/Urbanist-Bold.ttf'),
    'urbanist-semibold': require('./src/shared/assets/fonts/Urbanist/Urbanist-SemiBold.ttf'),
    'urbanist-medium': require('./src/shared/assets/fonts/Urbanist/Urbanist-Medium.ttf'),
    'urbanist-regular': require('./src/shared/assets/fonts/Urbanist/Urbanist-Regular.ttf')
  });
};

const prefix = Linking.makeUrl('/');

export default function App() {
  // Statics
  const [appIsReady, setAppIsReady] = useState(false);
  const [deepLinkData, setDeepLinkData] = useState(null);

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: 'home',
        SettingsStack: 'settings'
      }
    }
  }

  // Callbacks
  const prepare = useCallback(async () => {
    try {
      // Pre-load fonts, make any API calls you need to do here
      await fetchFonts();
      // Artificially delay for two seconds to simulate a slow loading
      // experience. Please remove this if you copy and paste the code!
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      // Tell the application to render
      setAppIsReady(true);
    }
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const handleDeepLink = useCallback((event) => {
    const data = Linking.parse(event.url);
    dispatchEvent(snackbarActions.showSnackbar({ title: 'Opened using deeplink: ', message: data }))
    setDeepLinkData(data);
  }, [])

  // Effects
  useEffect(() => {
    prepare();

    Settings.initializeSDK();

    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
      webClientId: '48273391374-2q2gchl5vo804peqimv5f50mgu3l21qs.apps.googleusercontent.com',
      iosClientId: '48273391374-hldk5edn4i23k67oa9pcmv6aieb8014v.apps.googleusercontent.com', // Taken from google cloud console
      offlineAccess: false
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getInitialUrl = async () => {
      const initialURL = await Linking.getInitialURL();
      if (initialURL) setDeepLinkData(Linking.parse(initialURL));
    }

    Linking.addEventListener('url', handleDeepLink);
    if (!data) {
      getInitialUrl();
    }

    return () => {
      Linking.removeEventListener('url');
    }
  }, [])

  // Renderers
  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root onLayout={onLayoutRootView} linking={linking} />
      </PersistGate>
    </Provider>
  );
}
