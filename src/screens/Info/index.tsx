// Packages
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import RenderHtml from 'react-native-render-html';
import { ScrollView, useWindowDimensions } from 'react-native';

// Utilities
import makeStyles from './styles';
import { getConfiguration } from '@redux/app/slice';
import { RouteProp } from '@react-navigation/native';
import { scaledFontSize, useAppTheme } from '@shared/assets/theme';

// Interfaces
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
    <ScrollView style={styles.container}>
      <RenderHtml
        source={{ uri }}
        contentWidth={width}
        tagsStyles={{
          body: {
            fontSize: scaledFontSize(14),
            lineHeight: scaledFontSize(19),
            color: theme.dark ? theme.colors.white : theme.colors.black
          }
        }}
      />
    </ScrollView>
  );
};

export default InfoScreen;
