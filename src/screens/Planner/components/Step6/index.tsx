// Packages
import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Components
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import LottieView from 'lottie-react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { plannerActions } from '@redux/planner/slice';
import { clearPlaces, selectPlaces } from '@redux/places/slice';
import { selectItinerary, submitForm } from '@redux/itinerary/slice';
import { selectDestinations, destinationsActions } from '@redux/destinations/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface Step5Props {
  setActive: (value: number) => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.${key}`, options);

const Step6: React.FC<Step5Props> = ({ setActive }) => {
  // Redux
  const placesSelect = useAppSelector(selectPlaces);
  const itinerarySelect = useAppSelector(selectItinerary);
  const destinationsSelect = useAppSelector(selectDestinations);

  // Statics
  const navigation = useNavigation();

  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const dispatch = useDispatch();

  const isEmptyPlaces = _.isEmpty(placesSelect.places);
  const isEmptyDestinations = _.isEmpty(destinationsSelect.destinations);
  const isEmptySummaryOrTips = _.isEmpty(destinationsSelect.summary) && _.isEmpty(destinationsSelect.tips);

  // Effects
  useEffect(() => {
    dispatch(destinationsActions.clearDestinations());
    dispatch(clearPlaces());
    dispatch(submitForm(destinationsSelect.payload));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (!itinerarySelect.isLoading && !isEmptyDestinations && !isEmptySummaryOrTips && !isEmptyPlaces) {
      navigation.navigate('Itinerary');
      dispatch(plannerActions.setPayload({}));
      setActive(0);
    }
  }, [dispatch, isEmptyDestinations, isEmptyPlaces, isEmptySummaryOrTips, itinerarySelect, navigation, setActive]);

  // Renderers
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        style={styles.lottie}
        source={require('../../../../../assets/planning-animation.json')}
      />
      <Text variant="large" style={styles.information}>
        {isEmptyDestinations
          ? "We're curating your adventure! 🌍 Please wait while we gather exciting destinations for your trip"
          : isEmptySummaryOrTips
            ? 'Trip planning in progress! 🗺️ Sit tight while we prepare a summary of your adventure and suggest exciting trips'
            : "Exploring the details! 🏞️ We're fetching places, opening hours, and more details. Just a moment, please!"}
      </Text>
    </View>
  );
};

export default Step6;
