// Packages
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import HomeScreen from '@screens/Home';

// Utilities
import { t } from '@app/i18n';
import { getScreenOptions } from './options';
import { useAppTheme } from '@shared/assets/theme';

const Stack = createNativeStackNavigator();

const _t = (key: string) => t(`navigation.${key}`);

const HomeStack = () => {
  // Statics
  const theme = useAppTheme();

  // Renderers
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: _t('home'), ...getScreenOptions(theme) }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
