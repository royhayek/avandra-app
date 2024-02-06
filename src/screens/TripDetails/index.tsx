// Packages
import _ from 'lodash';
import React, { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

// Components
import { FAB, Text } from 'react-native-paper';
import Header from '@shared/components/Header';
import FastImage from 'react-native-fast-image';
import Itinerary from './components/Iitinerary';
import { ScrollView, View } from 'react-native';
import { EditIcon } from '@shared/assets/icons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// Utilities
import i18n, { t } from '@app/i18n';
import makeStyles from './styles';
import { formatDate } from '@shared/utils';
import { destination_details } from './data';
import { useAppTheme } from '@shared/assets/theme';
import { BUDGET_LIST } from '@screens/Planner/components/Step4/data';
import { PARTNERS_LIST } from '@screens/Planner/components/Step1/data';

// Interfaces
interface TripDetailsScreenProps {}

// Component
const TripDetailsScreen: React.FC<TripDetailsScreenProps> = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();

  const { name, description, country, date, traveler, budget, location, itineraries } = destination_details;

  const travelerTitle = _.find(PARTNERS_LIST, { key: traveler })?.title[i18n.locale] ?? '';
  const budgetTitle = _.find(BUDGET_LIST, { key: budget })?.title[i18n.locale] ?? '';

  // Callbacks
  const handleMapPress = useCallback(() => navigation.navigate('Map'), [navigation]);

  const handleEditItinerary = useCallback(() => navigation.navigate('TripModification', { itineraries }), [navigation]);

  // Effects
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  // Renderers
  const renderHeader = () => (
    <View style={styles.curvedContainer}>
      <FastImage source={require('../../../assets/paris.jpeg')} style={styles.image} />
      <Header back share absolute />
    </View>
  );

  const renderContent = () => (
    <View style={styles.content}>
      <View style={styles.paddedContent}>
        <Text variant="h3">
          {name}, {country} 🇯🇵
        </Text>

        <Text variant="large" style={styles.payload}>
          {formatDate(date?.from, 'MMM DD')} - {formatDate(date?.to, 'MMM DD, YYYY')} • {travelerTitle} • {budgetTitle}
        </Text>

        <Text variant="xLarge" style={styles.description}>
          {description}
        </Text>

        <MapView
          style={styles.map}
          scrollEnabled={false}
          onPress={handleMapPress}
          provider={PROVIDER_GOOGLE}
          region={{
            latitudeDelta: 0.025,
            longitudeDelta: 0.025,
            latitude: location?.latitude || 0,
            longitude: location?.longitude || 0
          }}>
          {/* {_.map(
            places,
            (place, index) => place && <Marker index={index} marker={place} interpolations={[]} size={ms(28)} />
          )} */}
        </MapView>
      </View>

      <Itinerary data={itineraries} />
    </View>
  );

  const renderFab = () => (
    <FAB
      size="small"
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
