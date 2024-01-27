// Packages
import _ from 'lodash';
import { useSelector } from 'react-redux';
import React, { useCallback } from 'react';

// Components
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { View, TouchableOpacity, Platform, Linking } from 'react-native';

// Utilities
import makeStyles from './styles';
import { formatAmount } from '@shared/utils';
import { Location } from '@shared/types/Location';
import { selectPlaces } from '@redux/places/slice';
import { useAppTheme } from '@shared/assets/theme';
import { DUMMY_PLACES } from '@screens/Itinerary/data';
import { GOOGLE_MAPS_API_KEY } from '@redux/places/thunks';

// Interfaces
interface LocationCardProps {
  location: Location;
  width: number;
  onMap: boolean;
  orientation: 'horizontal' | 'vertical';
}

// Component
const LocationCard: React.FC<LocationCardProps> = ({ location, width, onMap, orientation }) => {
  // Redux
  const itineraryPlacesSelect = useSelector(selectPlaces);

  // Statics
  const isHorizontal = _.isEqual(orientation, 'horizontal');

  const theme = useAppTheme();
  const styles = makeStyles(theme, isHorizontal);

  const places = itineraryPlacesSelect?.places || DUMMY_PLACES;
  const { id, place, desc, address, geometry: { location: { lat = '', long = '' } = {} } = {} } = location || {};

  const {
    rating,
    user_ratings_total,
    photos = 'https://picsum.photos/160/160'
  } = _.find(places, { id })?.searchResult || {};

  const image = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photo_reference=${photos[0].photo_reference}&key=${GOOGLE_MAPS_API_KEY}`;

  // Callbacks
  const handleLocationPress = useCallback(() => {
    const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${long}`;
    const label = place;

    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url);
  }, [lat, long, place]);

  // Renderers
  return (
    <TouchableOpacity key={place} onPress={handleLocationPress} style={(styles.activity, { width })}>
      <View style={styles.imageContainer}>
        <FastImage source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text variant="titleMedium">{place}</Text>
        <View style={styles.ratingInfoContainer}>
          <Text variant="bodyMedium" style={styles.rating}>
            {rating}
          </Text>
          {/* <StarRating
            disabled
            maxStars={5}
            rating={rating}
            halfStarEnabled
            fullStar="star"
            emptyStar="star"
            halfStar="star-half"
            iconSet="FontAwesome"
            fullStarColor={theme.colors.star}
            emptyStarColor={theme.colors.lightGray}
            starSize={isHorizontal ? ms(14) : ms(16)}
            containerStyle={styles.starRatingContainer}
          /> */}
          <Text variant="bodySmall" style={styles.userRatingTotal}>
            ({formatAmount(user_ratings_total)})
          </Text>
        </View>
        {!onMap && (
          <Text variant="bodySmall" style={styles.description}>
            {desc}
          </Text>
        )}
        <Text variant="labelSmall" style={styles.address}>
          {address}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;
