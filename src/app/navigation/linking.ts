// Packages
import * as Linking from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';

export const paths = {
  Home: 'home',
  Trip: 'trip',
  Article: 'article',
  Planner: 'planner'
};

export const config = {
  screens: {
    Home: {
      screens: {
        HomeStack: {
          screens: {
            Home: `share/${paths.Home}`
          }
        }
      }
    },
    TripDetails: `share/${paths.Trip}/:id`,
    ArticleDetails: `share/${paths.Article}/:id`
  }
};

const prefix = Linking.createURL('');

const deepLinkingOptions: LinkingOptions<ReactNavigation.RootParamList> | undefined = {
  prefixes: [prefix, 'https://avandraapp.com'],
  config
};

export default deepLinkingOptions;
