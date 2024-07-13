// Packages
import _ from 'lodash';
import React, { useCallback, useEffect, useMemo } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Text } from 'react-native-paper';
import Shimmer from '@shared/components/Shimmer';
import { RightArrowPrimary } from '@shared/assets/icons';
import { FlatList, TouchableOpacity, View } from 'react-native';
import PopularListItem from '@screens/Home/components/PopularListItem';

// Utilities
import makeStyles from './styles';
import i18n, { t } from '@app/i18n';
import { useAppTheme } from '@shared/assets/theme';
import { getPopularArticlesAction } from '@redux/article/thunks';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { getPopularDestinationsAction } from '@redux/destination/thunks';
import { selectPopularArticles, selectArticlesLoading } from '@redux/article/slice';
import { selectDestinationLoading, selectPopularDestinations } from '@redux/destination/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import Icon from '@shared/components/Icon';
import { isTablet } from '@shared/utils';
import { ms, mvs } from 'react-native-size-matters';

interface PopularListProps {
  type: string;
  orientation?: string;
  isTitleShown?: boolean;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`home.${key}`, options);

const PopularList: React.FC<PopularListProps> = ({
  type = 'destinations',
  orientation = 'vertical',
  isTitleShown = false
}) => {
  // Redux
  const dispatch = useAppThunkDispatch();

  const popularArticles = useAppSelector(selectPopularArticles);
  const isLoadingArticles = useAppSelector(selectArticlesLoading);
  const popularDestinations = useAppSelector(selectPopularDestinations);
  const isLoadingDestinations = useAppSelector(selectDestinationLoading);

  // Statics
  const isArticles = !!String(type).match(/articles/);
  const isDestinations = !!String(type).match(/destinations/);
  const isHorizontal = !!String(orientation).match(/horizontal/);

  const theme = useAppTheme();
  const styles = makeStyles(theme, isHorizontal);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const title = isDestinations
    ? _t('popular_destinations')
    : String(type).match(/articles/)
      ? _t('popular_articles')
      : '';

  // Callbacks
  const handleNavigateToListScreen = useCallback(() => {
    navigation.navigate('Popular', { type, title });
  }, [navigation, title, type]);

  // Effects
  useEffect(() => {
    isDestinations && dispatch(getPopularDestinationsAction());
    isArticles && dispatch(getPopularArticlesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render Vars
  const enabledDestinations = _.filter(popularDestinations, (destination) => destination?.enabled);
  const enabledArticles = _.filter(popularArticles, (article) => article?.enabled);

  // Renderers
  const renderHeader = () => {
    return (
      isTitleShown && (
        <View style={styles.header}>
          <Text variant="h5">{title}</Text>
          <TouchableOpacity style={styles.viewAllContainer} onPress={handleNavigateToListScreen}>
            <Text variant="large" style={styles.viewAllText}>
              {_t('view_all')}
            </Text>
            <Icon
              name="arrowRight"
              color={theme.colors.primary}
              transform={[{ rotateY: i18n.locale === 'ar' ? '180deg' : '0deg' }]}
            />
          </TouchableOpacity>
        </View>
      )
    );
  };

  const renderList = () => {
    return isLoadingArticles || isLoadingDestinations ? (
      <View style={styles.shimmerView}>
        {_.times(2, (i) => (
          <View key={i}>
            <Shimmer style={styles.shimmerImage} />
            <Shimmer width={ms(130)} style={styles.shimmerTitle} />
            <Shimmer width={mvs(80)} style={styles.shimmerSubtitle} />
          </View>
        ))}
      </View>
    ) : (
      <FlatList
        horizontal={isHorizontal}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        numColumns={!isHorizontal && isTablet ? 2 : 1}
        contentContainerStyle={styles.flatListContainer}
        columnWrapperStyle={!isHorizontal && isTablet && { gap: ms(10), paddingHorizontal: ms(16) }}
        data={isDestinations ? enabledDestinations : enabledArticles}
        renderItem={({ item }) => <PopularListItem type={type} item={item} orientation={orientation} />}
      />
    );
  };

  return (
    <>
      {renderHeader()}
      {renderList()}
    </>
  );
};

export default PopularList;
