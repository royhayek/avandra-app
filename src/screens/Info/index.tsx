// Packages
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { ScrollView, useWindowDimensions } from 'react-native';

// Utilities
import makeStyles from './styles';
import getEnvVars from '../../../environment';
import { useAppTheme } from '@shared/assets/theme';
import { getConfiguration } from '@redux/app/slice';

// Interfaces
import { RouteProp } from '@react-navigation/native';
import { Text } from 'react-native-paper';

type RootStackParamList = {
  InfoScreen: {
    type: string;
  };
};

type InfoScreenRouteProp = RouteProp<RootStackParamList, 'InfoScreen'>;

interface InfoScreenProps {
  route: InfoScreenRouteProp;
}

// Component
const InfoScreen: React.FC<InfoScreenProps> = ({ route }) => {
  // Redux
  const config = useSelector(getConfiguration);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const { width } = useWindowDimensions();

  const type = route.params.type;
  const uri = _.isEqual(type, 'privacy_policy') ? config?.links?.privacyPolicy : config?.links?.termsAndConditions;

  // Renderers
  return (
    <ScrollView style={styles.scollView} contentContainerStyle={styles.scrollViewContainer}>
      <RenderHtml
        source={{ uri }}
        contentWidth={width}
        systemFonts={[...defaultSystemFonts, 'urbanist-regular', 'urbanist-bold']}
        tagsStyles={{
          strong: {
            ...theme.fonts.h5,
            fontFamily: 'urbanist-bold'
          },
          body: {
            ...theme.fonts.xLarge,
            fontFamily: 'urbanist-regular',
            color: theme.dark ? theme.colors.white : theme.colors.black
          }
        }}
      />
      {/* TODO: To be removed when going live */}
      <Text variant="xSmall">Current Base URL: {getEnvVars().serverApiUrl}</Text>
    </ScrollView>
  );
};

export default InfoScreen;
