// Packages
import _ from 'lodash';
import React, { useLayoutEffect, useEffect } from 'react';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

// Components
import Header from '@shared/components/Header';
import Shimmer from '@shared/components/Shimmer';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import PopularListItem from '@screens/Home/components/PopularListItem';
import RenderHTML, { defaultSystemFonts } from 'react-native-render-html';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { getArticleDetailsAction } from '@redux/article/thunks';
import { appActions, selectDeepLinkData } from '@redux/app/slice';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';
import { selectArticleDetails, selectArticlesLoading } from '@redux/article/slice';

// Interfaces
import { ShareDataProps } from '@shared/types/ShareDataProps';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { t } from '@app/i18n';

interface ArticleDetailsScreenProps {}

interface RouteParams {
  detailsId: string;
}

// Component
const ArticleDetailsScreen: React.FC<ArticleDetailsScreenProps> = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const deepLinkData = useAppSelector(selectDeepLinkData);
  const articleDetails = useAppSelector(selectArticleDetails);
  const isLoadingArticles = useAppSelector(selectArticlesLoading);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const { width } = useWindowDimensions();

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { detailsId } = route?.params as RouteParams;

  const [articleId, setArticleId] = React.useState<string>(detailsId);

  // Effects
  useEffect(() => {
    if (articleId) dispatchThunk(getArticleDetailsAction(articleId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleId]);

  useEffect(() => {
    // extract trip id from deep link data, path looks like this "article/:id"
    if (deepLinkData) {
      const path = deepLinkData?.path;
      const id = _.last(_.split(path, '/'));

      if (id) {
        setArticleId(id);
        dispatch(appActions.clearDeepLinkData());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deepLinkData?.path]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Renderers Vars
  const shareData: ShareDataProps = {
    message: t('article_details.read_this_article', {
      name: articleDetails?.name
    }),
    deepLink: `https://avandraapp.com/share/article/${articleId}`
  };

  // Renderers
  return (
    <>
      <Header hasBackBtn share shareData={shareData} />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
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
                textAlign: 'left',
                fontFamily: 'urbanist-bold'
              },
              h3: {
                ...theme.fonts.xLarge,
                textAlign: 'left',
                fontFamily: 'urbanist-bold'
              },
              body: {
                ...theme.fonts.xLarge,
                textAlign: 'left',
                fontFamily: 'urbanist-regular',
                color: theme.dark ? theme.colors.white : theme.colors.black
              }
            }}
          />
        )}
      </ScrollView>
    </>
  );
};

export default ArticleDetailsScreen;
