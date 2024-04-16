// Packages
import _ from 'lodash';
import React, { useCallback, useEffect } from 'react';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

// Components
import Shimmer from '@shared/components/Shimmer';
import { ExportIcon } from '@shared/assets/icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PopularListItem from '@screens/Home/components/PopularListItem';
import RenderHTML, { defaultSystemFonts } from 'react-native-render-html';
import { SafeAreaView, ScrollView, View, useWindowDimensions } from 'react-native';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { getArticleDetailsAction } from '@redux/article/thunks';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { selectArticleDetails, selectArticlesLoading } from '@redux/article/slice';

// Interfaces
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface ArticleDetailsScreenProps {}

interface RouteParams {
  detailsId: string;
}

// Component
const ArticleDetailsScreen: React.FC<ArticleDetailsScreenProps> = () => {
  // Redux
  const dispatchThunk = useAppThunkDispatch();

  const articleDetails = useAppSelector(selectArticleDetails);
  const isLoadingArticles = useAppSelector(selectArticlesLoading);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const { width } = useWindowDimensions();

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { detailsId } = route?.params as RouteParams;

  // Callbacks
  const handleShare = useCallback(() => {
    console.debug('[handleShare] :: article');
  }, []);

  // Effects
  useEffect(() => {
    if (detailsId) dispatchThunk(getArticleDetailsAction(detailsId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <PopularListItem
          disabled
          noPadding
          type="article"
          item={articleDetails}
          orientation="vertical"
          isLoading={isLoadingArticles}
        />

        {isLoadingArticles ? (
          <View style={styles.shimmerContent}>
            <Shimmer height={22} width={200} />
            {_.times(7, (i) => (
              <Shimmer key={i} height={22} style={styles.shimmerHtmlBody} />
            ))}
          </View>
        ) : (
          <RenderHTML
            contentWidth={width}
            source={{ html: articleDetails?.details }}
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
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticleDetailsScreen;
