// Packages
import _ from 'lodash';
import React from 'react';
import { useRoute } from '@react-navigation/native';

// Components
import Shimmer from '@shared/components/Shimmer';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';

// Utilities
import makeStyles from './styles';
import getEnvVars from 'environment';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { selectConfiguration } from '@redux/app/slice';
import { Text } from 'react-native-paper';

// Interfaces
interface RouteParams {
  type: string;
}

// Component
const InfoScreen = () => {
  // Redux
  const config = useAppSelector(selectConfiguration);

  // Statics
  const route = useRoute();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const { serverUrl } = getEnvVars();

  const { width } = useWindowDimensions();

  const { type } = (route.params as RouteParams) || {};
  const uri = _.isEqual(type, 'privacy_policy') ? config?.privacyPolicy : config?.termsAndConditions;

  // Renderers
  const renderLoading = () => (
    <View style={{ marginVertical: 32 }}>
      {_.times(20, (i) => (
        <Shimmer key={i} width={i % 2 === 0 ? width - 80 : width - 50} height={22} style={{ marginBottom: 12 }} />
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.scollView} contentContainerStyle={styles.scrollViewContainer}>
      <RenderHtml
        source={{ uri }}
        contentWidth={width}
        ignoredDomTags={['services:']}
        remoteLoadingView={renderLoading}
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
      <Text variant='xSmall'>{serverUrl}</Text>
    </ScrollView>
  );
};

export default InfoScreen;
