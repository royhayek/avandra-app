// Packages
import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

// Components
import { Text } from 'react-native-paper';
import { FlatList, View } from 'react-native';
import RegularButton from '@shared/components/Buttons/Regular';
import EventAdditionItem from './components/EventAdditionItem';
import PlacesAutocomplete from '@shared/components/PlacesAutocomplete';
import { getTripPlacesAction, getTripPopularPlacesAction, saveAdditionalEventsAction } from '@redux/itinerary/thunks';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import getEnvVars from 'environment';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { selectTripPlaces } from '@redux/itinerary/slice';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';

// Interfaces
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';

interface RouteParams {
  tripId: string;
  date: string;
  location: {
    lat: number;
    lng: number;
  };
}

// Component
const { googleMapsApiKey } = getEnvVars();

const EventAdditionScreen: React.FC = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const places = useAppSelector(selectTripPlaces);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles();
  const commonStyles = makeCommonStyles(theme);

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { tripId, date, location } = route?.params as RouteParams;

  const [searchInput, setSearchInput] = useState<string | undefined>();
  const [popularPlaces, setPopularPlaces] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Callbacks
  const handleSavePress = useCallback(async () => {
    setIsSaving(true);

    try {
      const selectedPlaces = popularPlaces.filter((place) => place.selected);
      await dispatchThunk(saveAdditionalEventsAction({ tripId, payload: { date, list: selectedPlaces } }));
      await dispatchThunk(getTripPlacesAction(tripId));
      navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSaving(false);
    }
  }, [date, dispatchThunk, navigation, popularPlaces, tripId]);

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

  const handleTextChange = useCallback(async (text: string) => {
    setSearchInput(text);
  }, []);

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
        photoUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1024&photoreference=${details?.photos?.[0].photo_reference}&key=${googleMapsApiKey}`
      };

      if (_.find(popularPlaces, { placeId: formattedDetails.placeId })) {
        dispatch(snackbarActions.showSnackbar({ message: t('trip_details.place_already_added') }));

        return;
      }

      setPopularPlaces((prev) => [formattedDetails, ...prev]);
      setSearchInput('');
    },
    [dispatch, popularPlaces]
  );

  const fetchPopularPlaces = useCallback(async () => {
    const data = await dispatchThunk(getTripPopularPlacesAction(tripId));
    const places = data?.payload.map((place) => ({ ...place, selected: false }));
    setPopularPlaces(places);
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

  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <PlacesAutocomplete
          fetchDetails
          value={searchInput}
          renderRow={renderRow}
          handleTextChange={handleTextChange}
          handlePlacePress={handlePlacePress}
          query={{
            type: 'establishment', // Search for places only
            location: `${location?.lat},${location?.lng}`, // Coordinates of the city center
            radius: '50000' // Search within 50 kilometers of the city center
          }}
        />
      </View>

      {_.isEmpty(searchInput) && (
        <>
          <FlatList
            data={popularPlaces}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => <EventAdditionItem key={item.name} item={item} onAddPress={handleAddPress} />}
          />

          {renderFooter()}
        </>
      )}
    </View>
  );
};

export default EventAdditionScreen;
