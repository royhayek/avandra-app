// Packages
import _ from 'lodash';
import React from 'react';
import { ms } from 'react-native-size-matters';

// Components
import Icon from '@shared/components/Icon';
import FastImage from 'react-native-fast-image';
import { IconButton, Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { formatAmount, getCategory } from '@shared/utils';

// Interfaces
interface EventAdditionItemProps {
  item: any;
  onAddPress: (item: any) => void;
}

// Component
const EventAdditionItem: React.FC<EventAdditionItemProps> = ({ item, onAddPress }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderer vars
  const iconProps = {
    fill: theme.dark ? theme.colors.white : theme.colors.gray[900]
  };

  const category = _.capitalize(getCategory(item?.types));

  // Renders
  return (
    <TouchableOpacity style={styles.rowContainer}>
      <FastImage source={{ uri: item?.photoUrl, cache: FastImage.cacheControl.immutable }} style={styles.image} />

      <View style={styles.content}>
        <Text variant="h6" style={styles.name}>
          {item?.name}
        </Text>
        {item?.rating ? (
          <View style={styles.ratingContainer}>
            <Text variant="medium" style={styles.ratingText}>
              {item?.rating}
            </Text>
            <StarRatingDisplay rating={item?.rating} starSize={14} starStyle={{ marginHorizontal: 0 }} />
            <Text variant="small" style={styles.ratingText}>
              ({formatAmount(item?.userRatingsTotal)})
            </Text>
          </View>
        ) : null}
        <Text variant="medium" style={styles.type}>
          {category}
        </Text>
      </View>

      <IconButton
        size={ms(18)}
        onPress={() => onAddPress(item)}
        icon={() =>
          item?.selected ? (
            <Icon name="circleCheck" />
          ) : theme.dark ? (
            <Icon name="circleAddDark" {...iconProps} />
          ) : (
            <Icon name="circleAddLight" {...iconProps} />
          )
        }
      />
    </TouchableOpacity>
  );
};

export default EventAdditionItem;
