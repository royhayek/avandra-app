// Packages
import _ from 'lodash';
import React from 'react';
import { ms, mvs } from 'react-native-size-matters';

// Components
import PlaceIcon from '../PlaceIcon';
import { Text } from 'react-native-paper';
import { Animated, View } from 'react-native';
import { MapMarker, MarkerPressEvent } from 'react-native-maps';

// Utilities
import makeStyles from './styles';
import { getCategory, isTablet } from '@shared/utils';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface InterpolationValue {
  scale: Animated.AnimatedInterpolation<string | number>;
}

interface MarkerProps {
  size?: number;
  index?: number;
  displayDay?: boolean;
  interpolations?: InterpolationValue[];
  onMarkerPress?: (mapEventData: MarkerPressEvent) => void;
  marker: {
    searchResult?: {
      geometry?: {
        location?: {
          lat: number;
          lng: number;
        };
      };
    };
  };
}

// Component
const Marker: React.FC<MarkerProps> = ({ marker, index, size = 10, onMarkerPress, interpolations }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const { lat, lng, types } = marker || {};
  const scaleStyle = interpolations && interpolations[index] && { transform: [{ scale: interpolations[index].scale }] };

  // Renderers
  if (lat && lng) {
    return (
      <MapMarker
        key={index}
        coordinate={{ longitude: lng, latitude: lat }}
        onPress={(event: MarkerPressEvent) => {
          _.isFunction(onMarkerPress) && onMarkerPress(event);
        }}>
        <Animated.View style={styles.markerWrap}>
          <Animated.Image
            resizeMode="contain"
            tintColor={theme.colors.primary}
            source={require('@shared/assets/images/map-pin.png')}
            style={[styles.marker, { width: ms(size), height: mvs(size) }, scaleStyle]}
          />
          {_.isUndefined(index) || !types ? (
            <View style={styles.dot} />
          ) : (
            <View style={styles.iconView}>
              <PlaceIcon
                width={ms(16)}
                height={ms(16)}
                type={getCategory(types)}
                color={theme.colors.gray[900]}
                transform={isTablet ? 'scale(0.95)' : 'scale(0.7)'}
              />
            </View>
          )}
          <View style={styles.placeNo}>
            <Text variant="small" style={styles.label}>
              {index + 1}
            </Text>
          </View>
        </Animated.View>
      </MapMarker>
    );
  }

  return null;
};

export default Marker;
