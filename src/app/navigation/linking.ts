// Packages
import * as Linking from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';

export const paths = {
  Trip: 'trip',
  Article: 'article',
  Destination: 'destination'
};

export const config = {
  screens: {
    TripDetails: `share/${paths.Trip}/:id`,
    ArticleDetails: `share/${paths.Article}/:id`,
    DestinationDetails: `share/${paths.Destination}/:id`
  }
};

const prefix = Linking.createURL('');

const deepLinkingOptions: LinkingOptions<ReactNavigation.RootParamList> | undefined = {
  prefixes: [prefix, 'https://avandraapp.com'],
  config
};

export default deepLinkingOptions;
