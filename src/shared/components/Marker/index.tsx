// Packages
import React from 'react';
import { ms, mvs } from 'react-native-size-matters';

// Components
import { Animated } from 'react-native';
import {  Text } from 'react-native-paper';
import { MapMarker, MarkerPressEvent } from 'react-native-maps';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

interface InterpolationValue {
  scale: Animated.AnimatedInterpolation<string | number>;
}

interface MarkerProps {
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
  size: number;
  index: number;
  displayDay?: boolean;
  interpolations?: InterpolationValue[];
  onMarkerPress?: (mapEventData: MarkerPressEvent) => void;
}

// Component
const Marker: React.FC<MarkerProps> = ({ marker, index, size, onMarkerPress, interpolations, displayDay }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const { lat, lng } = marker?.searchResult?.geometry?.location || {};
  const scaleStyle = interpolations && interpolations[index] && { transform: [{ scale: interpolations[index].scale }] };

  // Renderers
  if (lat && lng) {
    return (
      <MapMarker key={index} coordinate={{ longitude: lng, latitude: lat }} onPress={onMarkerPress}>
        <Animated.View style={[styles.markerWrap]}>
          <Animated.Image
            resizeMode="cover"
            source={require('../../../../assets/map-pin.png')}
            style={[styles.marker, { width: ms(size), height: mvs(size) }, scaleStyle]}
          />
          <Text variant="labelSmall" style={styles.label}>
            {index + 1}
          </Text>
        </Animated.View>
      </MapMarker>
    );
  } else {
    return null;
  }
};

export default Marker;
