// Packages
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import React, { useCallback, useEffect, useState } from 'react';

// Components
import Root from './src/app/Root';
import * as SplashScreen from 'expo-splash-screen';

// Utils
import './src/app/i18n';
import 'react-native-url-polyfill/auto';
import { persistor, store } from './src/app/store';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const fetchFonts = () => {
  return Font.loadAsync({
    'inter-bold': require('./src/shared/assets/fonts/Inter-Bold.ttf'),
    'inter-semibold': require('./src/shared/assets/fonts/Inter-SemiBold.ttf'),
    'inter-medium': require('./src/shared/assets/fonts/Inter-Medium.ttf'),
    'inter-light': require('./src/shared/assets/fonts/Inter-Light.ttf'),
    'inter-regular': require('./src/shared/assets/fonts/Inter-Regular.ttf')
  });
};

export default function App() {
  // Statics
  const [appIsReady, setAppIsReady] = useState(false);

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

  // Effects
  useEffect(() => {
    prepare();
  }, []);

  // Renderers
  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root onLayout={onLayoutRootView} />
      </PersistGate>
    </Provider>
  );
}
