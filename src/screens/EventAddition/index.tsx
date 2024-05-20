// Packages
import _ from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

// Components
import { Text } from 'react-native-paper';
import Shimmer from '@shared/components/Shimmer';
import { FlatList, ScrollView, View } from 'react-native';
import RegularButton from '@shared/components/Buttons/Regular';
import EventAdditionItem from './components/EventAdditionItem';
import PlacesAutocomplete from '@shared/components/PlacesAutocomplete';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { GOOGLE_MAPS_API_KEY } from '@shared/utils';
import makeCommonStyles from '@shared/assets/styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { useAppDispatch, useAppThunkDispatch } from '@app/store';
import { getTripPlacesAction, getTripPopularPlacesAction, saveAdditionalEventsAction } from '@redux/itinerary/thunks';

// Interfaces
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocompleteRef
} from 'react-native-google-places-autocomplete';

interface RouteParams {
  tripId: string;
  date: string;
  location: {
    lat: number;
    lng: number;
  };
}

// Component
const EventAdditionScreen: React.FC = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { tripId, date, location } = route?.params as RouteParams;

  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [popularPlaces, setPopularPlaces] = useState<any[]>([]);

  const inputRef = useRef<GooglePlacesAutocompleteRef>();

  const selectedPlaces = popularPlaces.filter((place) => place.selected);
  const unselectedPlaces = popularPlaces.filter((place) => !place.selected);

  // Callbacks
  const handleSavePress = useCallback(async () => {
    setIsSaving(true);

    try {
      await dispatchThunk(saveAdditionalEventsAction({ tripId, payload: { date, list: selectedPlaces } }));
      await dispatchThunk(getTripPlacesAction(tripId));
      navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSaving(false);
    }
  }, [date, dispatchThunk, navigation, selectedPlaces, tripId]);

  const handleAddPress = useCallback(
    (item: any) => {
      if (!_.find(popularPlaces, { placeId: item.placeId })) {
        setPopularPlaces((prev) => [{ ...item, selected: true }, ...prev]);
      } else {
        setPopularPlaces((prev) =>
          prev.map((place) => (place.placeId === item.placeId ? { ...place, selected: !place.selected } : place))
        );
      }
    },
    [popularPlaces]
  );

  const handlePlacePress = useCallback(
    (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
      const formattedDetails = {
        selected: true,
        name: details?.name,
        rating: details?.rating,
        placeId: details?.place_id,
        priceLevel: details?.price_level,
        address: details?.formatted_address,
        coordinates: details?.geometry.location,
        userRatingsTotal: details?.user_ratings_total,
        openingHours: details?.opening_hours?.weekday_text,
        internationalPhone: details?.international_phone_number,
        type: _.includes(details?.types, 'restaurant') ? 'restaurant' : 'landmark',
        photoUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1024&photoreference=${details?.photos?.[0].photo_reference}&key=${GOOGLE_MAPS_API_KEY}`
      };

      if (_.find(popularPlaces, { placeId: formattedDetails.placeId })) {
        dispatch(snackbarActions.showSnackbar({ message: t('trip_details.place_already_added') }));

        return;
      }

      setPopularPlaces((prev) => [formattedDetails, ...prev]);
      inputRef?.current?.blur();
      inputRef?.current?.clear();
      inputRef?.current?.setAddressText('');
    },
    [dispatch, popularPlaces]
  );

  const fetchPopularPlaces = useCallback(async () => {
    setIsLoading(true);
    const data = await dispatchThunk(getTripPopularPlacesAction(tripId));
    const places = data?.payload.map((place) => ({ ...place, selected: false }));
    setPopularPlaces(places);
    setIsLoading(false);
  }, [dispatchThunk, tripId]);

  // Effects
  useEffect(() => {
    fetchPopularPlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renders
  const renderFooter = () => (
    <View style={commonStyles.footer}>
      <RegularButton fullWidth loading={isSaving} title={t('common.save')} onPress={handleSavePress} />
    </View>
  );

  const renderRow = (data: GooglePlaceData, index: number) => (
    <Text key={index} style={{ color: theme.colors.white }}>
      <Text>{data.structured_formatting.main_text}, </Text>
      <Text style={{ color: theme.colors.secondary }}>{data.structured_formatting.secondary_text}</Text>
    </Text>
  );

  const renderSearch = () => (
    <View style={styles.searchInput}>
      <PlacesAutocomplete
        fetchDetails
        inputRef={inputRef}
        renderRow={renderRow}
        handlePlacePress={handlePlacePress}
        query={{
          type: 'establishment', // Search for places only
          location: `${location?.lat},${location?.lng}`, // Coordinates of the city center
          radius: '50000' // Search within 50 kilometers of the city center
        }}
      />
    </View>
  );

  const renderShimmer = () => (
    <View style={styles.shimmerView}>
      {_.times(6, (i) => (
        <View key={i} style={styles.shimmerItem}>
          <View style={styles.shimmerRow}>
            <Shimmer style={styles.shimmerImage} />
            <View>
              <Shimmer style={styles.shimmerName} />
              <Shimmer width={100} height={20} />
            </View>
          </View>

          <Shimmer style={styles.shimmerBtn} />
        </View>
      ))}
    </View>
  );

  const renderEvents = () => (
    <ScrollView style={styles.scrollView}>
      {!_.isEmpty(selectedPlaces) ? (
        <>
          <Text variant="h5" style={styles.title}>
            {t('event_addition.selected_places')}
          </Text>

          <FlatList
            data={selectedPlaces}
            disableVirtualization
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => <EventAdditionItem key={item.name} item={item} onAddPress={handleAddPress} />}
          />
        </>
      ) : null}

      <Text variant="h5" style={styles.title}>
        {t('event_addition.popular_places')}
      </Text>

      {isLoading ? (
        renderShimmer()
      ) : (
        <FlatList
          disableVirtualization
          scrollEnabled={false}
          data={unselectedPlaces}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => <EventAdditionItem key={item.name} item={item} onAddPress={handleAddPress} />}
        />
      )}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      {renderSearch}
      {renderEvents}
      {renderFooter()}
    </View>
  );
};

export default EventAdditionScreen;
