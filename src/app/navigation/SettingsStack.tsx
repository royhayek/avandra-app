// Packages
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import SettingsScreen from '@screens/Settings';

// Utilities
import { t } from '@app/i18n';
import { getScreenOptions } from './options';
import { useAppTheme } from '@shared/assets/theme';

const Stack = createNativeStackNavigator();

const _t = (key: string) => t(`navigation.${key}`);

const SettingsStack = () => {
  // Statics
  const theme = useAppTheme();

  // Renderers
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: 'center', contentStyle: { backgroundColor: theme.colors.background } }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: _t('settings'), ...getScreenOptions(theme) }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
