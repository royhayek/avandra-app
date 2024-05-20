// Packages
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

// Components
import Shimmer from '@shared/components/Shimmer';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { Dimensions, ScrollView, View, useWindowDimensions } from 'react-native';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { selectConfiguration } from '@redux/app/slice';

// Interfaces
interface RouteParams {
  type: string;
}

// Component
const InfoScreen = () => {
  // Redux
  const config = useSelector(selectConfiguration);

  // Statics
  const route = useRoute();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const { width } = useWindowDimensions();

  const type = (route.params as RouteParams)?.type;
  const uri = _.isEqual(type, 'privacy_policy') ? config?.privacyPolicy : config?.termsAndConditions;

  // Renderers
  const renderLoading = () => (
    <View style={{ marginVertical: 32 }}>
      {_.times(15, (i) => (
        <Shimmer
          key={i}
          width={Math.floor(Math.random() * (Dimensions.get('screen').width - 240 + 1)) + 200}
          height={22}
          style={{ marginBottom: 12 }}
        />
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.scollView} contentContainerStyle={styles.scrollViewContainer}>
      <RenderHtml
        source={{ uri }}
        contentWidth={width}
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
    </ScrollView>
  );
};

export default InfoScreen;
