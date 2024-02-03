// Packages
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { ms } from 'react-native-size-matters';
import { NavigationProp } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';

// Components
import ExitModal from './ExitModal';
import ListHeader from './ListHeader';
import { Ionicons } from '@expo/vector-icons';
import DestinationDay from './DestinationDay';
import Marker from '@shared/components/Marker';
import { Animated, FlatList, View } from 'react-native';
import BackButton from '@shared/components/Buttons/Back';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import OutlinedButton from '@shared/components/Buttons/Outlined';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { selectPlaces } from '@redux/places/slice';
import { DUMMY_DESTINATIONS, DUMMY_PLACES } from './data';
import { selectDestinations } from '@redux/destinations/slice';

// Interfaces
type RootStackParamList = {
  Map: {
    destinations: any[]; // You can replace 'any' with a more specific type if needed.
  };
};

interface ItineraryScreenProps {
  navigation: NavigationProp<RootStackParamList>;
}

// Component
const HEADER_EXPANDED_HEIGHT = 200;
const HEADER_COLLAPSED_HEIGHT = 48;

const ItineraryScreen: React.FC<ItineraryScreenProps> = ({ navigation }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [expanded, setExpanded] = useState([0]);
  const [scrollY] = useState(new Animated.Value(0));
  const [closeModalVisible, setCloseModalVisible] = useState(false);

  const placesSelect = useSelector(selectPlaces);
  const destionationsSelect = useSelector(selectDestinations);

  const places = placesSelect?.places || DUMMY_PLACES;
  const destinations = destionationsSelect?.destinations || DUMMY_DESTINATIONS;

  // Callbacks
  const handleNavigateToMapView = () => {
    const mapDestinations = _.map(destinations.flat(), (i) => {
      const place = _.find(places, { id: i.id });

      return { ...i, ...place };
    });

    navigation.navigate('Map', { destinations: mapDestinations });
  };

  const handleToggleCloseModal = useCallback(() => setCloseModalVisible((cur) => !cur), []);

  const handleSetExpanded = useCallback((index: number) => setExpanded(_.xor(expanded, [index])), [expanded]);

  // Effects
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Renderer Vars
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: 'clamp'
  });

  const headerButtonsOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  // Renderers
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.mapContainer, { height: headerHeight }]}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitudeDelta: 0.025,
            longitudeDelta: 0.025,
            latitude: _.first(places)?.searchResult.geometry.location.lat || 0,
            longitude: _.first(places)?.searchResult.geometry.location.lng || 0
          }}>
          {_.map(
            places,
            (place, index) => place && <Marker index={index} marker={place} interpolations={[]} size={ms(28)} />
          )}
        </MapView>
        <Animated.View style={[styles.headerButtons, { opacity: headerButtonsOpacity }]}>
          <BackButton style={styles.backBtn} onPress={handleToggleCloseModal} />
          <OutlinedButton
            title="Map view"
            containerStyle={styles.mapViewBtn}
            onPress={() => handleNavigateToMapView()}
            startIcon={
              <Ionicons
                name="location-outline"
                size={ms(20)}
                color={theme.dark ? theme.colors.white : theme.colors.black}
              />
            }
          />
        </Animated.View>
      </Animated.View>

      <View style={styles.body}>
        <FlatList
          data={destinations}
          style={styles.flatList}
          scrollEventThrottle={16}
          nestedScrollEnabled={false}
          ListHeaderComponent={<ListHeader />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContentContainer}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
          renderItem={({ item, index }) => (
            <DestinationDay day={item} index={index} expanded={expanded} setExpanded={() => handleSetExpanded(index)} />
          )}
        />
      </View>

      <ExitModal visible={closeModalVisible} toggle={handleToggleCloseModal} />
    </View>
  );
};

export default ItineraryScreen;
