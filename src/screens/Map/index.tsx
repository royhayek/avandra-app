// Packages
import _ from 'lodash';
import * as Location from 'expo-location';
import { ms } from 'react-native-size-matters';
import { IconButton } from 'react-native-paper';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Marker from '@shared/components/Marker';
import BackButton from '@shared/components/Buttons/Back';
import LocationCard from '@shared/components/LocationCard';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, Animated, Dimensions, Platform } from 'react-native';
import { MapLocationIcon, MapNavigationIcon, MoonIcon, SunIcon } from '@shared/assets/icons';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
type MapScreenProps = {};

// Component
const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const MapScreen: React.FC<MapScreenProps> = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { markers, places } = route?.params as RouteParams;

  const mergedPlaces = _.reduce(places, (r, v) => [...r, ...v.list], []);

  const mapIndex = useRef(0);
  const mapRef = useRef(null);
  const scrollViewRef = useRef(null);

  const mapAnimation = new Animated.Value(0);

  const initialMapState = {
    markers,
    region: {
      latitude: _.first(markers)?.lat,
      longitude: _.first(markers)?.lng,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03
    }
  };

  const [state] = useState(initialMapState);
  const [mapTheme, setMapTheme] = useState(theme.dark ? 'dark' : 'light');

  const isDarkTheme = _.isEqual(mapTheme, 'dark');

  // Effects
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    Platform.OS === 'ios' &&
      scrollViewRef.current &&
      scrollViewRef.current?.scrollTo({ x: -SPACING_FOR_CARD_INSET, y: 0, animated: true });
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

        if (index <= 0) index = 0;

        clearTimeout(regionTimeout);

        regionTimeout = setTimeout(() => {
          if (mapIndex.current !== index) {
            mapIndex.current = index;

            const { lat, lng } = state.markers[index];

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
  const handleToggleMapTheme = () => {
    setMapTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const onMarkerPress = (mapEventData: any) => {
    const markerID = mapEventData._targetInst.return.key;
    let x = markerID * CARD_WIDTH + markerID * 20;

    if (Platform.OS === 'ios') x = x - SPACING_FOR_CARD_INSET;

    scrollViewRef.current && scrollViewRef.current?.scrollTo({ x, y: 0, animated: true });
  };

  const handleShowCurrentLocation = useCallback(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    mapRef.current &&
      mapRef.current.animateToRegion(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: state.region.latitudeDelta,
          longitudeDelta: state.region.longitudeDelta
        },
        350
      );
  }, [state.region.latitudeDelta, state.region.longitudeDelta]);

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
        showsUserLocation
        style={styles.map}
        followsUserLocation
        customMapStyle={
          isDarkTheme ? require('@shared/assets/map/dark.json') : require('@shared/assets/map/light.json')
        }
        provider={PROVIDER_GOOGLE}
        initialRegion={state.region}>
        {state.markers.map(
          (marker, index) =>
            marker && (
              <Marker
                displayDay
                size={24}
                key={index}
                index={index}
                marker={marker}
                interpolations={interpolations}
                onMarkerPress={onMarkerPress}
              />
            )
        )}
      </MapView>

      <View style={styles.header}>
        <BackButton style={styles.backBtn} />
        <IconButton
          size={ms(18)}
          style={styles.themeButton}
          onPress={handleToggleMapTheme}
          icon={() =>
            isDarkTheme ? (
              <SunIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
            ) : (
              <MoonIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
            )
          }
        />
      </View>

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
        <>
          {_.map(mergedPlaces, (destination, index) => (
            <LocationCard
              onMap
              key={index}
              width={CARD_WIDTH}
              isDark={isDarkTheme}
              location={destination}
              orientation="horizontal"
            />
          ))}
        </>
      </Animated.ScrollView>

      <View style={styles.actions}>
        <IconButton size={ms(32)} icon={() => <MapNavigationIcon />} onPress={handleShowCurrentLocation} />
        <IconButton size={ms(28)} icon={() => <MapLocationIcon />} onPress={handleShowCurrentLocation} />
      </View>
    </View>
  );
};

export default MapScreen;
