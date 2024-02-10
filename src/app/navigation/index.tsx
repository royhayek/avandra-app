// Packages
import { Platform } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import React, { ReactNode, useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import MapScreen from '@screens/Map';
import HomeScreen from '@screens/Home';
import InfoScreen from '@screens/Info';
import LoginScreen from '@screens/Login';
import { Text } from 'react-native-paper';
import ProfileScreen from '@screens/Profile';
import PlannerScreen from '@screens/Planner';
import MyTripsScreen from '@screens/MyTrips';
import { Ionicons } from '@expo/vector-icons';
import Header from '@shared/components/Header';
import SettingsScreen from '@screens/Settings';
import SearchScreen from '@screens/SearchScreen';
import ItineraryScreen from '@screens/Itinerary';
import OnBoardingScreen from '@screens/OnBoarding';
import TripDetailsScreen from '@screens/TripDetails';
import FaqScreen from '@screens/Settings/screens/Faq';
import EventAdditionScreen from '@screens/EventAddition';
import PopularScreen from '@screens/Home/screens/Popular';
import ArticleDetailsScreen from '@screens/ArticleDetails';
import Billingscreen from '@screens/Settings/screens/Billing';
import ContactScreen from '@screens/Settings/screens/Contact';
import TripModificationScreen from '@screens/TripModification';
import DestinationDetailsScreen from '@screens/DestinationDetails';
import AppearanceScreen from '@screens/Settings/screens/Appearance';
import HelpSupportScreen from '@screens/Settings/screens/HelpSupport';
import PersonalInfoScreen from '@screens/Settings/screens/PersonalInfo';
import SubscriptionsScreen from '@screens/Settings/screens/Subscriptions';
import AccountSecurityScreen from '@screens/Settings/screens/AccountSecurity';

// Utilities
import i18n, { t } from '@app/i18n';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { getUserAuthenticated } from '@redux/auth/slice';

// Interfaces
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack/lib/typescript/src/types';

interface TabBarLabelProps {
  color: string;
  focused: boolean;
  position: string;
  children: ReactNode;
}

// Component
const _t = (key: string) => t(`navigation.${key}`);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const TripsStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const RootNavigation = () => {
  // Redux
  const isAuthenticated = useAppSelector(getUserAuthenticated);

  // Statics
  const theme = useAppTheme();

  // Renderers
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: true,
    header: (props) => <Header {...props} />,
    headerStyle: { backgroundColor: theme.colors.background },
    contentStyle: {
      backgroundColor: theme.colors.background,
      direction: i18n.locale === 'ar' ? 'rtl' : 'ltr'
    }
  };

  const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: _t('home'), ...screenOptions }} />
    </HomeStack.Navigator>
  );

  const TripsStackScreen = () => (
    <TripsStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <TripsStack.Screen
        name="History"
        component={MyTripsScreen}
        options={{ title: _t('history'), ...screenOptions }}
      />
    </TripsStack.Navigator>
  );

  const SettingsStackScreen = () => (
    <SettingsStack.Navigator
      screenOptions={{ headerTitleAlign: 'center', contentStyle: { backgroundColor: theme.colors.background } }}>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: _t('settings'), ...screenOptions }}
      />
    </SettingsStack.Navigator>
  );

  interface TabBarIconProps {
    focused: boolean;
    color: string;
    size: number;
  }

  const getTabBarIcon = useCallback(
    ({ focused, color, size }: TabBarIconProps, route: RouteProp<ParamListBase, string>) => {
      let iconName: string | any;

      if (route.name === 'HomeStack') {
        iconName = focused ? 'ios-earth' : 'ios-earth-outline';
      } else if (route.name === 'TripsStack') {
        iconName = focused ? 'ios-paper-plane' : 'ios-paper-plane-outline';
      } else if (route.name === 'SettingsStack') {
        iconName = focused ? 'ios-settings' : 'ios-settings-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={ms(size)} color={color} />;
      // return <FontAwesomeIcon icon={faHouse} size={size} style={{ color: '#000000' }} />;
    },
    []
  );

  const getTabBarLabel = useCallback(
    ({ children, focused }: TabBarLabelProps) =>
      focused ? (
        <Text variant="medium" style={{ fontFamily: 'urbanist-semibold' }}>
          {children}
        </Text>
      ) : null,
    []
  );

  const navigatorScreensOptions: NativeStackNavigationOptions = {
    headerShown: false,
    headerTitleAlign: 'center',
    contentStyle: {
      backgroundColor: theme.colors.background,
      direction: i18n.locale === 'ar' ? 'rtl' : 'ltr'
    }
  };

  const HomeTabs = () => (
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
        tabBarIconStyle: { width: ms(32) },
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
      <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{ title: _t('home') }} />
      <Tab.Screen name="TripsStack" component={TripsStackScreen} options={{ title: _t('history') }} />
      <Tab.Screen name="SettingsStack" component={SettingsStackScreen} options={{ title: _t('settings') }} />
    </Tab.Navigator>
  );

  return isAuthenticated ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Planner" component={PlannerScreen} options={{ ...screenOptions }} />
      <Stack.Screen name="Search" component={SearchScreen} options={{ ...screenOptions }} />
      <Stack.Screen name="Popular" component={PopularScreen} options={{ ...screenOptions }} />
      <Stack.Screen name="DestinationDetails" component={DestinationDetailsScreen} options={{ ...screenOptions }} />
      <Stack.Screen name="ArticleDetails" component={ArticleDetailsScreen} options={{ ...screenOptions }} />
      <Stack.Screen name="TripDetails" component={TripDetailsScreen} options={{ ...screenOptions }} />
      <Stack.Screen name="Faq" component={FaqScreen} options={{ ...screenOptions, title: _t('faq') }} />
      <Stack.Screen name="Contact" component={ContactScreen} options={{ ...screenOptions, title: _t('contact') }} />
      <Stack.Screen
        name="TripModification"
        component={TripModificationScreen}
        options={{ ...screenOptions, title: _t('edit_itinerary') }}
      />
      <Stack.Screen
        name="EventAddition"
        component={EventAdditionScreen}
        options={{ ...screenOptions, title: _t('add_event') }}
      />
      <Stack.Screen
        name="Subscriptions"
        component={SubscriptionsScreen}
        options={{ ...screenOptions, title: _t('upgrade_plan') }}
      />
      <Stack.Screen name="Billing" component={Billingscreen} options={{ ...screenOptions }} />
      <Stack.Screen
        name="Appearance"
        component={AppearanceScreen}
        options={{ title: _t('app_appearance'), ...screenOptions }}
      />
      <Stack.Screen
        name="PersonalInfo"
        component={PersonalInfoScreen}
        options={{ title: _t('personal_info'), ...screenOptions }}
      />
      <Stack.Screen
        name="AccountSecurity"
        component={AccountSecurityScreen}
        options={{ title: _t('account_and_security'), ...screenOptions }}
      />
      <Stack.Screen
        name="HelpSupport"
        component={HelpSupportScreen}
        options={{ title: _t('help_and_support'), ...screenOptions }}
      />
      <Stack.Screen
        name="Info"
        component={InfoScreen}
        options={({ route }) => ({ title: route.params?.name, ...screenOptions })}
      />
      <Stack.Screen
        name="Itinerary"
        component={ItineraryScreen}
        options={({ route }) => ({ title: route.name, ...screenOptions })}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={({ route }) => ({ title: route.name, ...screenOptions })}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={navigatorScreensOptions}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Info"
        component={InfoScreen}
        options={({ route }) => ({ title: route.params?.name, ...screenOptions })}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
