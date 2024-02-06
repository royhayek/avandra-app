// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

// Components
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native';

// Utilities
import makeStyles from './styles';
import { publicUrl } from '@shared/constants';
import { useAppTheme } from '@shared/assets/theme';
import i18n from '@app/i18n';

// Interfaces
interface PopularListItemProps {
  type: string;
  orientation: string | undefined;
}

// Component
const PopularListItem: React.FC<PopularListItemProps> = ({ item, type, orientation }) => {
  // Statics
  const isVertical = !!String(orientation).match(/vertical/);
  const isDestination = !!String(type).match(/destination/);

  const theme = useAppTheme();
  const styles = makeStyles(theme, isVertical);

  const navigation = useNavigation();

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
        source={{
          uri: _.includes(item.image, 'http')
            ? item.image
            : `${publicUrl?.replace('/api', '')}/uploads/destination/${item.image}`
        }}
      />
      <Text numberOfLines={2} variant={isVertical ? 'h5' : 'h6'} style={styles.name}>
        {item.name[i18n.locale] ?? item.name}
      </Text>
      <Text variant={isVertical ? 'large' : 'medium'} style={styles.country}>
        {isDestination ? item.country : item.date}
      </Text>
    </TouchableOpacity>
  );
};

PopularListItem.defaultProps = {
  orientation: 'horizontal'
};

export default PopularListItem;
