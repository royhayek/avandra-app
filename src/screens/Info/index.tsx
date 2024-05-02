// Packages
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

// Components
import { ScrollView, useWindowDimensions } from 'react-native';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { getConfiguration } from '@redux/app/slice';

// Interfaces
interface RouteParams {
  type: string;
}

// Component
const InfoScreen = () => {
  // Redux
  const config = useSelector(getConfiguration);

  // Statics
  const route = useRoute();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const { width } = useWindowDimensions();

  const type = (route.params as RouteParams)?.type;
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
    </ScrollView>
  );
};

export default InfoScreen;
