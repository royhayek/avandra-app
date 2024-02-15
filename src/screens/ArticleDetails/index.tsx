// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { ExportIcon } from '@shared/assets/icons';
import { ScrollView, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PopularListItem from '@screens/Home/components/PopularListItem';
import RenderHTML, { defaultSystemFonts } from 'react-native-render-html';

// Utilities
import makeStyles from './styles';
import { article_details } from './data';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface ArticleDetailsScreenProps {}

// Component
const ArticleDetailsScreen: React.FC<ArticleDetailsScreenProps> = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const { width } = useWindowDimensions();

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // Callbacks
  const handleShare = useCallback(() => {
    console.debug('[handleShare] :: article');
  }, []);

  // Effects
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
          <ExportIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
        </TouchableOpacity>
      )
    });
  }, [handleShare, navigation, styles.shareButton, theme.colors.gray, theme.colors.white, theme.dark]);

  // Renderers
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <PopularListItem orientation="vertical" type="article" item={article_details} />

      <RenderHTML
        source={{ uri: article_details?.details }}
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

export default ArticleDetailsScreen;
