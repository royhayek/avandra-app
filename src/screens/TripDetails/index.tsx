// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import React, { useCallback, useEffect, useMemo } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

// Components
import Marker from '@shared/components/Marker';
import { FAB, Text } from 'react-native-paper';
import Header from '@shared/components/Header';
import FastImage from 'react-native-fast-image';
import Itinerary from './components/Iitinerary';
import { ScrollView, View } from 'react-native';
import { EditIcon } from '@shared/assets/icons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// Utilities
import makeStyles from './styles';
import { formatDate } from '@shared/utils';
import { destination_details } from './data';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TripPayloadProps } from '@shared/types/TripPayload';
import Accordion from '@shared/components/Accordion';

interface TripDetailsScreenProps {}

interface RouteParams {
  trip: TripPayloadProps;
}

// Component
const TripDetailsScreen: React.FC<TripDetailsScreenProps> = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { trip } = route?.params as RouteParams;

  const { _id, name, flag, image, description, country, budget, traveler, fromDate, toDate, tips, places, location } =
    trip || {};

  const markers = useMemo(() => {
    const placesList = _.flatMap(places, (place) => place.list);

    return _.map(placesList, (place) => ({ lat: place.coordinates.lat, lng: place.coordinates.lng }));
  }, [places]);

  // Callbacks
  const handleMapPress = useCallback(
    () => navigation.navigate('Map', { markers, places }),
    [navigation, markers, places]
  );

  const handleEditItinerary = useCallback(
    () => navigation.navigate('TripModification', { tripId: _id, places, location }),
    [_id, location, navigation, places]
  );

  // Effects
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Renderers
  const renderHeader = () => (
    <View style={styles.curvedContainer}>
      <FastImage source={{ uri: image }} style={styles.image} />
      <Header back share absolute />
    </View>
  );

  const renderContent = () => (
    <View style={styles.content}>
      <View style={styles.paddedContent}>
        <Text variant="h3">
          {name}, {country} {flag}
        </Text>

        <Text variant="large" style={styles.payload}>
          {formatDate(fromDate, 'MMM DD')} - {formatDate(toDate, 'MMM DD, YYYY')} • {traveler?.title} • {budget?.title}
        </Text>

        <Text variant="h5" style={styles.title}>
          Overview
        </Text>
        <Text variant="xLarge">{description}</Text>

        <Accordion
          title={
            <View style={styles.row}>
              <Text variant="h5">Tips</Text>
              <MaterialCommunityIcons
                size={ms(20)}
                name="lightbulb-on-outline"
                color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
              />
            </View>
          }
          style={styles.title}>
          <View style={styles.tipsContent}>
            {_.map(tips, (tip, index) => (
              <View key={index} style={styles.tipRow}>
                <MaterialCommunityIcons name="star-four-points-outline" size={ms(16)} color={theme.colors.secondary} />
                <Text variant="xLarge" style={{ flex: 1 }}>
                  {tip}
                </Text>
              </View>
            ))}
          </View>
        </Accordion>

        <Text variant="h5" style={styles.title}>
          Your {name} Journey
        </Text>

        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            focusable={false}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            toolbarEnabled={false}
            zoomTapEnabled={false}
            loadingEnabled={false}
            zoomControlEnabled={false}
            onPress={handleMapPress}
            provider={PROVIDER_GOOGLE}
            region={{
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
              latitude: _.first(markers)?.lat || 0,
              longitude: _.first(markers)?.lng || 0
            }}
            customMapStyle={
              theme.dark ? require('@shared/assets/map/dark.json') : require('@shared/assets/map/light.json')
            }>
            {_.map(
              markers,
              (place, index) =>
                place && <Marker key={index} index={index} marker={place} interpolations={[]} size={ms(28)} />
            )}
          </MapView>
        </View>
      </View>

      <Itinerary data={places} />
    </View>
  );

  const renderFab = () => (
    <FAB
      size="medium"
      style={styles.fab}
      onPress={handleEditItinerary}
      icon={() => <EditIcon fill={theme.colors.white} />}
    />
  );

  return (
    <>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderHeader()}
        {renderContent()}
      </ScrollView>

      {renderFab()}
    </>
  );
};

export default TripDetailsScreen;
