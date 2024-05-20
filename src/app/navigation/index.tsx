// Packages
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import MapScreen from '@screens/Map';
import InfoScreen from '@screens/Info';
import LoginScreen from '@screens/Login';
import TabNavigation from './TabNavigation';
import ProfileScreen from '@screens/Profile';
import PlannerScreen from '@screens/Planner';
import SearchScreen from '@screens/SearchScreen';
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

// Utilities
import i18n, { t } from '@app/i18n';
import { useAppSelector } from '@app/store';
import { getScreenOptions } from './options';
import { useAppTheme } from '@shared/assets/theme';
import { selectIsAuthenticated } from '@redux/auth/slice';

// Interfaces
import { NativeStackNavigationOptions } from '@react-navigation/native-stack/lib/typescript/src/types';

// Component
const _t = (key: string) => t(`navigation.${key}`);

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  // Redux
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  // Statics
  const theme = useAppTheme();

  // Renderers

  const navigatorScreensOptions: NativeStackNavigationOptions = {
    headerShown: false,
    headerTitleAlign: 'center',
    contentStyle: {
      backgroundColor: theme.colors.background,
      direction: i18n.locale === 'ar' ? 'rtl' : 'ltr'
    }
  };

  if (isAuthenticated) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="Planner" component={PlannerScreen} options={{ ...getScreenOptions(theme) }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ ...getScreenOptions(theme) }} />
        <Stack.Screen name="Popular" component={PopularScreen} options={{ ...getScreenOptions(theme) }} />
        <Stack.Screen
          name="DestinationDetails"
          component={DestinationDetailsScreen}
          options={{ ...getScreenOptions(theme) }}
        />
        <Stack.Screen name="ArticleDetails" component={ArticleDetailsScreen} options={{ ...getScreenOptions(theme) }} />
        <Stack.Screen name="TripDetails" component={TripDetailsScreen} options={{ ...getScreenOptions(theme) }} />
        <Stack.Screen name="Faq" component={FaqScreen} options={{ ...getScreenOptions(theme), title: _t('faq') }} />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ ...getScreenOptions(theme), title: _t('contact') }}
        />
        <Stack.Screen
          name="TripModification"
          component={TripModificationScreen}
          options={{ ...getScreenOptions(theme), title: _t('edit_itinerary') }}
        />
        <Stack.Screen
          name="EventAddition"
          component={EventAdditionScreen}
          options={{ ...getScreenOptions(theme), title: _t('add_event') }}
        />
        <Stack.Screen
          name="Subscriptions"
          component={SubscriptionsScreen}
          options={{ ...getScreenOptions(theme), title: _t('upgrade_plan') }}
        />
        <Stack.Screen name="Billing" component={Billingscreen} options={{ ...getScreenOptions(theme) }} />
        <Stack.Screen
          name="Appearance"
          component={AppearanceScreen}
          options={{ title: _t('app_appearance'), ...getScreenOptions(theme) }}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfoScreen}
          options={{ title: _t('personal_info'), ...getScreenOptions(theme) }}
        />
        <Stack.Screen
          name="HelpSupport"
          component={HelpSupportScreen}
          options={{ title: _t('help_and_support'), ...getScreenOptions(theme) }}
        />
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={({ route }) => ({ title: route.params?.name, ...getScreenOptions(theme) })}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={({ route }) => ({ title: route.name, ...getScreenOptions(theme) })}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={navigatorScreensOptions}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Info"
        component={InfoScreen}
        options={({ route }) => ({ title: route.params?.name, ...getScreenOptions(theme) })}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
