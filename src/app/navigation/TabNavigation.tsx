// Packages
import { Platform } from 'react-native';
import React, { ReactNode } from 'react';
import { ms, mvs, s } from 'react-native-size-matters';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import HomeStack from './HomeStack';
import TripsStack from './TripsStack';
import { Text } from 'react-native-paper';
import SettingsStack from './SettingsStack';
import { Ionicons } from '@expo/vector-icons';

// Utilities
import i18n, { t } from '@app/i18n';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { isTablet } from '@shared/utils';

interface TabBarLabelProps {
  color: string;
  focused: boolean;
  position: string;
  children: ReactNode;
}

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

const _t = (key: string) => t(`navigation.${key}`);

const TabNavigation = () => {
  // Statics
  const theme = useAppTheme();

  // Callbacks
  const getTabBarIcon = ({ focused, color, size }: TabBarIconProps, route: RouteProp<ParamListBase, string>) => {
    let iconName: string | any;

    if (route.name === 'HomeStack') {
      iconName = focused ? 'earth' : 'earth-outline';
    } else if (route.name === 'TripsStack') {
      iconName = focused ? 'paper-plane' : 'paper-plane-outline';
    } else if (route.name === 'SettingsStack') {
      iconName = focused ? 'settings' : 'settings-outline';
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={ms(size)} color={color} />;
    // return <FontAwesomeIcon icon={faHouse} size={size} style={{ color: '#000000' }} />;
  };

  const getTabBarLabel = ({ children, focused }: TabBarLabelProps) =>
    focused ? (
      <Text variant={isTablet ? 'h6' : 'medium'} style={{ fontFamily: 'urbanist-semibold' }}>
        {children}
      </Text>
    ) : null;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          paddingHorizontal: ms(16),
          backgroundColor: theme.colors.background,
          direction: i18n.locale === 'ar' ? 'rtl' : 'ltr',
          height: Platform.OS === 'ios' ? mvs(80) : mvs(65)
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: true,
        tabBarIconStyle: { width: s(32) },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: theme.dark ? theme.colors.white : theme.colors.black,
        tabBarInactiveBackgroundColor: 'transparent',
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarIcon: (props) => getTabBarIcon(props, route),
        tabBarLabel: (props) => getTabBarLabel(props),
        tabBarActiveBackgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100],
        tabBarItemStyle: {
          borderRadius: ms(30),
          marginHorizontal: ms(2),
          marginVertical: Platform.OS === 'ios' ? 9 : 16
        }
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: _t('discover') }} />
      <Tab.Screen name="TripsStack" component={TripsStack} options={{ title: _t('history') }} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} options={{ title: _t('settings') }} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
