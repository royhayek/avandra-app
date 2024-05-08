// Packages
import _ from 'lodash';
import React from 'react';
import { ms } from 'react-native-size-matters';

// Components
import FastImage from 'react-native-fast-image';
import { IconButton, Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { CircleAddDarkIcon, CircleAddLightIcon, CircleCheckIcon } from '@shared/assets/icons';

// Utils
import makeStyles from './styles';
import { formatAmount } from '@shared/utils';
import { useAppTheme } from '@shared/assets/theme';

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

  // Renders
  return (
    <TouchableOpacity style={styles.rowContainer}>
      <FastImage source={{ uri: item?.photoUrl }} style={styles.image} />

      <View style={styles.content}>
        <Text variant="h6">{item?.name}</Text>
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
      </View>

      <IconButton
        size={ms(18)}
        onPress={() => onAddPress(item)}
        icon={() =>
          item?.selected ? (
            <CircleCheckIcon />
          ) : theme.dark ? (
            <CircleAddDarkIcon {...iconProps} />
          ) : (
            <CircleAddLightIcon {...iconProps} />
          )
        }
      />
    </TouchableOpacity>
  );
};

export default EventAdditionItem;
