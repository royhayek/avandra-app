// Packages
import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Text } from 'react-native-paper';
import { FlatList, View } from 'react-native';
import RegularButton from '@shared/components/Buttons/Regular';
import EventAdditionItem from './components/EventAdditionItem';
import PlacesAutocomplete from '@shared/components/PlacesAutocomplete';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';

// Interfaces
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { getTripPlacesAction, getTripPopularPlacesAction, saveAdditionalEventsAction } from '@redux/itinerary/thunks';

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
  const dispatchThunk = useAppThunkDispatch();

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles();
  const commonStyles = makeCommonStyles(theme);

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { tripId, date, location } = route?.params as RouteParams;

  const [searchInput, setSearchInput] = useState<string | undefined>();
  const [selectedEvents, setSelectedEvents] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [popularPlaces, setPopularPlaces] = useState([]);

  // Callbacks
  const handleSavePress = useCallback(async () => {
    setIsSaving(true);

    try {
      await dispatchThunk(saveAdditionalEventsAction({ tripId, payload: { date, list: selectedEvents } }));
      await dispatchThunk(getTripPlacesAction(tripId));
      navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSaving(false);
    }
  }, [date, dispatchThunk, navigation, selectedEvents, tripId]);

  const handleAddPress = useCallback(
    (item: any) => {
      // change selected bool property of this place in popularPlaces to true
      const updatedPopularPlaces = popularPlaces.map((place) => {
        if (place.place_id === item.place_id) {
          return { ...place, selected: !item.selected };
        }

        return place;
      });

      setPopularPlaces(updatedPopularPlaces);
    },
    [popularPlaces]
  );

  const handleTextChange = useCallback(async (text: string) => {
    setSearchInput(text);
  }, []);

  const handlePlacePress = useCallback(
    (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
      setSearchInput(undefined);
      setSelectedEvents(_.xor(selectedEvents, [{ ...details, selected: true }]));
    },
    [selectedEvents]
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
            data={[...selectedEvents, ...popularPlaces]}
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
