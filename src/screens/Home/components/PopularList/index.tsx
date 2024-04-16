// Packages
import _ from 'lodash';
import React, { useCallback, useEffect, useMemo } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Text } from 'react-native-paper';
import { RightArrowPrimary } from '@shared/assets/icons';
import { FlatList, TouchableOpacity, View } from 'react-native';
import PopularListItem from '@screens/Home/components/PopularListItem';

// Utilities
import makeStyles from './styles';
import i18n, { t } from '@app/i18n';
import { useAppTheme } from '@shared/assets/theme';
import { selectPopularArticles, selectPopularLoading } from '@redux/article/slice';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { getPopularArticlesAction } from '@redux/article/thunks';
import { selectPopularDestinations } from '@redux/destination/slice';
import { getPopularDestinationsAction } from '@redux/destination/thunks';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import Shimmer from '@shared/components/Shimmer';

interface PopularListProps {
  type: string;
  orientation?: string;
  isTitleShown?: boolean;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`home.${key}`, options);

const PopularList: React.FC<PopularListProps> = ({ type, orientation, isTitleShown }) => {
  // Redux
  const dispatch = useAppThunkDispatch();

  const isLoading = useAppSelector(selectPopularLoading);
  const popularArticles = useAppSelector(selectPopularArticles);
  const popularDestinations = useAppSelector(selectPopularDestinations);

  // Statics
  const isHorizontal = !!String(orientation).match(/horizontal/);

  const theme = useAppTheme();
  const styles = makeStyles(theme, isHorizontal);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const title = String(type).match(/destinations/)
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
    dispatch(getPopularDestinationsAction());
    dispatch(getPopularArticlesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renderer Vars
  const data = useMemo(
    () => (String(type).match(/destinations/) ? popularDestinations : popularArticles),
    [popularArticles, popularDestinations, type]
  );

  // Renderers
  return (
    <>
      {isTitleShown && (
        <View style={styles.header}>
          <Text variant="h5">{title}</Text>
          <TouchableOpacity style={styles.viewAllContainer} onPress={handleNavigateToListScreen}>
            <Text variant="large" style={styles.viewAllText}>
              {_t('view_all')}
            </Text>
            <RightArrowPrimary transform={[{ rotateY: i18n.locale === 'ar' ? '180deg' : '0deg' }]} />
          </TouchableOpacity>
        </View>
      )}

      {isLoading ? (
        <View style={styles.shimmerView}>
          {_.times(2, (i) => (
            <View key={i}>
              <Shimmer style={styles.shimmerImage} />
              <Shimmer style={styles.shimmerTitle} />
              <Shimmer width={80} style={styles.shimmerSubtitle} />
            </View>
          ))}
        </View>
      ) : (
        <FlatList
          data={data}
          horizontal={isHorizontal}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => <PopularListItem type={type} item={item} orientation={orientation} />}
        />
      )}
    </>
  );
};

PopularList.defaultProps = {
  orientation: 'vertical',
  isTitleShown: false,
  type: 'destinations'
};

export default PopularList;
