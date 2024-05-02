// Packages
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import MyTripsScreen from '@screens/MyTrips';

// Utilities
import { t } from '@app/i18n';
import { getScreenOptions } from './options';
import { useAppTheme } from '@shared/assets/theme';

const Stack = createNativeStackNavigator();

const _t = (key: string) => t(`navigation.${key}`);

const TripsStack = () => {
  // Statics
  const theme = useAppTheme();

  // Renderers
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="History"
        component={MyTripsScreen}
        options={{ title: _t('history'), ...getScreenOptions(theme) }}
      />
    </Stack.Navigator>
  );
};

export default TripsStack;
