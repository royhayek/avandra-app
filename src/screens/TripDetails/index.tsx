// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

// Components
import Marker from '@shared/components/Marker';
import { FAB, Text } from 'react-native-paper';
import Header from '@shared/components/Header';
import FastImage from 'react-native-fast-image';
import Itinerary from './components/Iitinerary';
import { ScrollView, View } from 'react-native';
import { EditIcon } from '@shared/assets/icons';
import Shimmer from '@shared/components/Shimmer';
import Accordion from '@shared/components/Accordion';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { formatDate } from '@shared/utils';
import { PUBLIC_URL } from '@shared/constants';
import { useAppTheme } from '@shared/assets/theme';
import { getTripAction } from '@redux/itinerary/thunks';
import { selectTrip, selectTripLoading } from '@redux/itinerary/slice';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';
import { appActions, selectDeepLinkData, selectSubscriptionState } from '@redux/app/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { ShareDataProps } from '@shared/types/ShareData';

interface TripDetailsScreenProps {}

interface RouteParams {
  _id: string;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`trip_details.${key}`, options);

const TripDetailsScreen: React.FC<TripDetailsScreenProps> = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const trip = useAppSelector(selectTrip);
  const deepLinkData = useAppSelector(selectDeepLinkData);
  const isLoadingTrip = useAppSelector(selectTripLoading);
  const subscriptionState = useAppSelector(selectSubscriptionState);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { _id } = route?.params as RouteParams;

  const [tripId, setTripId] = useState<string>(_id);

  const { flag, image, description, payload, tips, places, location, status } = trip || {};
  const { name, country, budget, traveler, fromDate, toDate } = payload || {};

  const isExpired = !!String(status).match(/expired/i);
  const hasActiveSubscription = subscriptionState?.active;

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
    () => navigation.navigate('TripModification', { tripId, places, location }),
    [location, navigation, places, tripId]
  );

  // Effects
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    if (tripId) dispatchThunk(getTripAction(tripId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tripId]);

  useEffect(() => {
    // extract trip id from deep link data, path looks like this "trip/:id"
    if (deepLinkData) {
      const path = deepLinkData?.path;
      const id = _.last(_.split(path, '/'));

      if (id) {
        setTripId(id);
        dispatch(appActions.clearDeepLinkData());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deepLinkData?.path]);

  // Renderers Vars
  const shareData: ShareDataProps = {
    message: _t('join_my_planned_trip_to', { name }),
    deepLink: `https://avandraapp.com/share/trip/${tripId}`
  };

  // Renderers
  const renderHeader = () => (
    <View style={styles.curvedContainer}>
      <FastImage
        style={styles.image}
        source={{ uri: _.includes(image, 'http') ? image : `${PUBLIC_URL}/destination/image/${image}` }}
      />
      <Header hasBackBtn share absolute shareData={shareData} />
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
          {_t('overview')}
        </Text>
        <Text variant="xLarge">{description}</Text>

        <Accordion
          title={
            <View style={styles.row}>
              <Text variant="h5">{_t('tips')}</Text>
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
                <MaterialCommunityIcons
                  name="star-four-points-outline"
                  size={ms(16)}
                  color={theme.colors.secondary}
                  style={styles.tipIcon}
                />
                <Text variant="xLarge" style={{ flex: 1 }}>
                  {tip}
                </Text>
              </View>
            ))}
          </View>
        </Accordion>

        <Text variant="h5" style={styles.title}>
          {_t('your_journey', { name })}
        </Text>

        {markers.length > 0 && (
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
                latitude: parseFloat(_.first(markers)?.lat),
                longitude: parseFloat(_.first(markers)?.lng)
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

            {!hasActiveSubscription && !__DEV__ && (
              <View style={styles.disabledMapView}>
                <View style={styles.disabledMapOverlay} />
                <View style={styles.disabledMapContent}>
                  <FastImage
                    style={styles.illutration}
                    source={require('@shared/assets/images/UpgradeIllustration.png')}
                  />
                  <Text variant="h5" style={styles.upgradeText}>
                    Upgrade to premium to unlock the map feature
                  </Text>
                </View>
              </View>
            )}
          </View>
        )}
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

  if (isLoadingTrip) {
    return (
      <View>
        <Shimmer style={styles.curvedContainer} />
        <Header hasBackBtn share absolute shareData={shareData} />
        <View style={styles.shimmerBody}>
          <Shimmer style={styles.shimmerTitle} />
          <Shimmer style={styles.shimmerDate} />
          <Shimmer style={styles.shimmerSubtitle} />
          <Shimmer style={styles.shimmerOverview} />
          <View style={styles.shimmerTipsView}>
            <Shimmer style={styles.shimmerTipsTitle} />
            <Shimmer style={styles.shimmerTipsBtn} />
          </View>
          <Shimmer style={styles.shimmerSubtitle} />
          <Shimmer style={styles.shimmerOverview} />
        </View>
      </View>
    );
  }

  return (
    <>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderHeader()}
        {renderContent()}
      </ScrollView>

      {!isExpired && renderFab()}
    </>
  );
};

export default TripDetailsScreen;
