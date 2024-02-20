// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity, View } from 'react-native';

// Utilities
import i18n from '@app/i18n';
import makeStyles from './styles';
import { publicUrl } from '@shared/constants';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { ArticleProps } from '@shared/types/Article';

interface PopularListItemProps {
  type: string;
  item: ArticleProps;
  orientation: string | undefined;
}

// Component
const PopularListItem: React.FC<PopularListItemProps> = ({ item, type, orientation }) => {
  // Statics
  const isVertical = !!String(orientation).match(/vertical/);
  const isDestination = !!String(type).match(/destination/);

  const theme = useAppTheme();
  const styles = makeStyles(theme, isVertical);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // Callbacks
  const handleNavigateDetailsScreen = useCallback(() => {
    navigation.navigate(isDestination ? 'DestinationDetails' : 'ArticleDetails', { id: item._id });
  }, [isDestination, item._id, navigation]);

  // Renderers
  return (
    <TouchableOpacity key={item._id} onPress={handleNavigateDetailsScreen} style={styles.button}>
      <FastImage
        resizeMode="cover"
        style={styles.image}
        source={{ uri: `${publicUrl?.replace('/api', '')}/uploads/destination/image/${item.image}` }}
      />
      <Text numberOfLines={2} variant={isVertical ? 'h5' : 'h6'} style={styles.name}>
        {_.find(item.name, { type: i18n.locale })?.content}
      </Text>
      <View style={styles.countryContainer}>
        <FastImage
          resizeMode="cover"
          style={styles.flag}
          source={{ uri: `${publicUrl?.replace('/api', '')}/uploads/destination/flag/${item.flag}` }}
        />
        <Text variant={isVertical ? 'large' : 'medium'} style={styles.country}>
          {isDestination ? _.find(item.country, { type: i18n.locale })?.content : item.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

PopularListItem.defaultProps = {
  orientation: 'horizontal'
};

export default PopularListItem;
