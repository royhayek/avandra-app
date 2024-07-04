// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';

// Components
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { View, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { formatAmount, getCategory, openMapsWithCoords } from '@shared/utils';

// Interfaces
import { LocationProps } from '@shared/types/Location';

interface LocationCardProps {
  width: number;
  onMap: boolean;
  isDark?: boolean;
  location: LocationProps;
  orientation: 'horizontal' | 'vertical';
}

// Component
const LocationCard: React.FC<LocationCardProps> = ({ location, width, onMap, orientation, isDark }) => {
  // Statics
  const isHorizontal = _.isEqual(orientation, 'horizontal');

  const theme = useAppTheme();
  const styles = makeStyles(theme, isHorizontal, isDark);

  const {
    name,
    desc,
    rating,
    address,
    photoUrl,
    displayName,
    userRatingsTotal,
    coordinates: { lat = '', lng = '' } = {}
  } = location || {};

  // Callbacks
  const handleLocationPress = useCallback(() => openMapsWithCoords(lat, lng), [lat, lng]);

  // Renderers
  return (
    <TouchableOpacity key={name} onPress={handleLocationPress} style={[styles.activity, { width }]}>
      <View style={styles.imageContainer}>
        <FastImage source={{ uri: photoUrl }} style={styles.image} />
      </View>

      <View style={styles.descriptionContainer}>
        <Text variant="h6" style={styles.displayName}>{displayName}</Text>

        {rating ? (
          <View style={styles.ratingInfoContainer}>
            <StarRating
              starSize={16}
              rating={rating}
              enableSwiping={false}
              onChange={() => null}
              starStyle={{ marginHorizontal: 0 }}
            />

            <Text variant="medium" style={styles.rating}>
              {rating}
            </Text>
            <Text variant="small" style={styles.userRatingTotal}>
              ({formatAmount(userRatingsTotal)})
            </Text>
          </View>
        ) : null}

        {!onMap && (
          <Text variant="medium" style={styles.description}>
            {desc}
          </Text>
        )}

        <Text variant="small" style={styles.address}>
          {address}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;
