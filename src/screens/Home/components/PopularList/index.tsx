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
import { fetchDestinations } from '@redux/destinations/thunks';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { getDestinationsLastRefresh, selectPopularDestinations } from '@redux/destinations/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

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

  const destinationsLastRefresh = useAppSelector(getDestinationsLastRefresh);
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
    !!String(type).match(/destinations/) && _.isEmpty(destinationsLastRefresh) && dispatch(fetchDestinations());
    !!String(type).match(/articles/) && _.isEmpty(destinationsLastRefresh) && dispatch(fetchDestinations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renderer Vars
  const data = useMemo(
    () =>
      String(type).match(/destinations/)
        ? popularDestinations
        : [
            {
              _id: 1,
              name: {
                en: 'Hidden Gems: Uncovering Secret Destinations',
                fr: 'Trésors cachés : Découvrir des destinations secrètes',
                ar: 'الجواهر المخفية: الكشف عن وجهات سرية'
              },
              image: 'https://picsum.photos/300/200?random=1',
              date: 'Dec 05, 2023'
            },
            {
              _id: 2,
              name: {
                en: 'Packing Hacks: Travel Light, Travel Smart',
                fr: 'Astuces de conditionnement : Voyager léger, voyager intelligent',
                ar: 'خدع التعبئة: السفر بخفة، السفر بذكاء'
              },
              image: 'https://picsum.photos/300/200?random=2',
              date: 'Dec 06, 2023'
            }
          ],
    [popularDestinations, type]
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

      <FlatList
        data={data}
        horizontal={isHorizontal}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => <PopularListItem type={type} item={item} orientation={orientation} />}
      />
    </>
  );
};

PopularList.defaultProps = {
  orientation: 'vertical',
  isTitleShown: false,
  type: 'destinations'
};

export default PopularList;
