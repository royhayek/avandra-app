// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { mvs } from 'react-native-size-matters';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import Shimmer from '@shared/components/Shimmer';
import { TouchableOpacity, View } from 'react-native';

// Utilities
import makeStyles from './styles';
import { PUBLIC_URL } from '@shared/constants';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { ArticleProps } from '@shared/types/Article';

interface PopularListItemProps {
  type: string;
  item: ArticleProps;
  isLoading: boolean;
  disabled?: boolean;
  noPadding?: boolean;
  orientation: string | undefined;
}

// Component
const PopularListItem: React.FC<PopularListItemProps> = ({
  item,
  type,
  disabled = false,
  noPadding = false,
  isLoading = false,
  orientation = 'horizontal'
}) => {
  // Statics
  const isVertical = !!String(orientation).match(/vertical/);
  const isDestination = !!String(type).match(/destination/);

  const theme = useAppTheme();
  const styles = makeStyles(theme, isVertical);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // Callbacks
  const handleNavigateDetailsScreen = useCallback(() => {
    navigation.navigate(isDestination ? 'DestinationDetails' : 'ArticleDetails', { detailsId: item?._id });
  }, [isDestination, item?._id, navigation]);

  // Renderers
  if (isLoading) {
    return isVertical ? (
      <View style={styles.button}>
        <Shimmer style={styles.shimmerImage} />
        <Shimmer style={styles.shimmerTitle} />
        <Shimmer width={80} style={styles.shimmerSubtitle} />
      </View>
    ) : null;
  }

  return (
    <TouchableOpacity key={item?._id} onPress={handleNavigateDetailsScreen} style={styles.button} disabled={disabled}>
      <FastImage
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: `${PUBLIC_URL}/${isDestination ? 'destination' : 'article'}/image/${item?.image}`,
          cache: FastImage.cacheControl.immutable
        }}
      />
      <Text
        numberOfLines={2}
        variant={isVertical ? (noPadding ? 'h4' : 'h5') : 'h6'}
        style={[styles.name, noPadding && { paddingHorizontal: 0, paddingTop: mvs(6) }]}>
        {item?.name}
      </Text>
      <View style={styles.subtitleContainer}>
        {isDestination && (
          <FastImage
            resizeMode="cover"
            style={styles.flag}
            source={{ uri: `${PUBLIC_URL}/destination/flag/${item?.flag}`, cache: FastImage.cacheControl.immutable }}
          />
        )}
        <Text
          variant={isVertical ? 'large' : 'medium'}
          style={[styles.subtitle, noPadding && { paddingHorizontal: 0, paddingVertical: mvs(4) }]}>
          {isDestination ? item?.country : item?.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularListItem;
