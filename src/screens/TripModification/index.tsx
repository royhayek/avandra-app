// Packages
import _, { update } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

// Components
import { View } from 'react-native';
import Shimmer from '@shared/components/Shimmer';
import RegularButton from '@shared/components/Buttons/Regular';
import TripModificationItem from './components/TripModificationItem';
import { NestableScrollContainer } from 'react-native-draggable-flatlist';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { getTripPlacesAction, updateTripPlacesAction } from '@redux/itinerary/thunks';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';
import { selectTripPlaces, selectTripPlacesLoading } from '@redux/itinerary/slice';

// Interfaces
import { ItineraryItemProps } from '@shared/types/Itinerary';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { snackbarActions } from '@redux/snackbar/slice';

interface RouteParams {
  tripId: string;
  location: {
    lat: number;
    lng: number;
  };
  itineraries: ItineraryItemProps[];
}

// Component
const TripModificationScreen = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const places = useAppSelector(selectTripPlaces);
  const isLoadingPlaces = useAppSelector(selectTripPlacesLoading);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [isLoading, setIsLoading] = useState(false);

  const { tripId, location } = route?.params as RouteParams;

  // Callbacks
  const handleSavePress = useCallback(async () => {
    setIsLoading(true);

    try {
      await dispatchThunk(updateTripPlacesAction({ tripId, places }));
      navigation.goBack();
    } catch (error) {
      dispatch(snackbarActions.showSnackbar({ message: error }));
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, dispatchThunk, navigation, places, tripId]);

  // Effects
  useEffect(() => {
    dispatchThunk(getTripPlacesAction(tripId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renders
  if (isLoadingPlaces) {
    return _.times(2, (i) => (
      <View key={i} style={styles.shimmerView}>
        <Shimmer style={styles.shimmerDate} />
        {_.times(5, (i) => (
          <Shimmer key={i} style={styles.shimmerItem} />
        ))}
        <Shimmer key={i} style={styles.shimmerButton} />
      </View>
    ));
  }

  return (
    <>
      <NestableScrollContainer showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {_.map(places, (place, index) => (
          <TripModificationItem key={index} tripId={tripId} item={place} index={index} location={location} />
        ))}
      </NestableScrollContainer>

      <View style={commonStyles.footer}>
        <RegularButton fullWidth loading={isLoading} title={t('common.save_changes')} onPress={handleSavePress} />
      </View>
    </>
  );
};

export default TripModificationScreen;
