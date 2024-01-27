// Packages
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

// Components
import Marker from '@shared/components/Marker';
import BackButton from '@shared/components/Buttons/Back';
import LocationCard from '@shared/components/LocationCard';
import MapView, { PROVIDER_GOOGLE, MapViewProps } from 'react-native-maps';
import { View, Animated, Dimensions, Platform } from 'react-native';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
type MapScreenRouteParams = {
  destinations: any[]; // You can replace 'any' with a more specific type if needed.
};

// Define the root stack param list if necessary
type RootStackParamList = {
  Map: MapScreenRouteParams;
  // Add other screens if needed...
};

// Define the props interface for MapScreen
interface MapScreenProps {
  navigation: NavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Map'>;
}

// Component
const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const MapScreen: React.FC<MapScreenProps> = ({ navigation, route }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const destinations = route.params.destinations;

  const mapRef = useRef(null);
  const scrollViewRef = useRef(null);

  const mapIndex = useRef(0);
  let mapAnimation = new Animated.Value(0);

  const initialMapState = {
    markers: destinations,
    region: {
      latitude: _.first(destinations)?.searchResult.geometry.location.lat,
      longitude: _.first(destinations)?.searchResult.geometry.location.lng,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03
    }
  };

  const [state] = useState(initialMapState);

  // Effects
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    Platform.OS === 'ios' &&
      scrollViewRef.current &&
      scrollViewRef.current.scrollTo({ x: -SPACING_FOR_CARD_INSET, y: 0, animated: true });
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    try {
      let regionTimeout: NodeJS.Timeout;

      mapAnimation.addListener(({ value }) => {
        let index = Math.floor(value / CARD_WIDTH + 0.3);

        // animate 30% away from landing on the next item
        if (index >= state.markers.length) {
          index = state.markers.length - 1;
        }
        if (index <= 0) {
          index = 0;
        }

        clearTimeout(regionTimeout);

        regionTimeout = setTimeout(() => {
          if (mapIndex.current !== index) {
            mapIndex.current = index;

            const {
              searchResult: {
                geometry: {
                  location: { lat, lng }
                }
              }
            } = state.markers[index];
            mapRef.current &&
              mapRef.current.animateToRegion(
                {
                  latitude: lat,
                  longitude: lng,
                  latitudeDelta: state.region.latitudeDelta,
                  longitudeDelta: state.region.longitudeDelta
                },
                350
              );
          }
        }, 100);
      });
    } catch (err) {
      console.error('[MapScreen] - useEffect :: ', err);
    }
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  // Callbacks
  const onMarkerPress = (mapEventData: any) => {
    const markerID = mapEventData._targetInst.return.key;
    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    scrollViewRef.current && scrollViewRef.current.scrollTo({ x: x, y: 0, animated: true });
  };

  // Renderer Vars
  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [(index - 1) * CARD_WIDTH, index * CARD_WIDTH, (index + 1) * CARD_WIDTH];
    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.4, 1],
      extrapolate: 'clamp'
    });

    return { scale };
  });

  // Renderers
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={state.region}
        showsUserLocation>
        {state.markers.map(
          (marker, index) =>
            marker && (
              <Marker
                key={index}
                marker={marker}
                index={index}
                interpolations={interpolations}
                onMarkerPress={onMarkerPress}
                displayDay
              />
            )
        )}
      </MapView>
      <BackButton style={styles.backBtn} />

      <Animated.ScrollView
        horizontal
        pagingEnabled
        ref={scrollViewRef}
        decelerationRate="fast"
        snapToAlignment="center"
        scrollEventThrottle={100}
        style={styles.scrollView}
        snapToInterval={CARD_WIDTH + 20}
        showsHorizontalScrollIndicator={false}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET
        }}
        // contentContainerStyle={{
        //   paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        // }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: mapAnimation } } }], { useNativeDriver: true })}>
        {_.map(destinations, (destination, index) => (
          <LocationCard key={index} location={destination} width={CARD_WIDTH} orientation="horizontal" onMap />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default MapScreen;
