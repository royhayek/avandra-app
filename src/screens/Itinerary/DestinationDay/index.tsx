// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import React, { useEffect, useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { View } from 'react-native';
import Accordion from '@shared/components/Accordion';
import LocationCard from '@shared/components/LocationCard';
import { Text, List, Button, Badge, Divider } from 'react-native-paper';

// Utilities
import makeStyles from './styles';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { selectPlaces } from '@redux/places/slice';
import { DUMMY_DESTINATIONS, DUMMY_PLACES } from '../data';
import { selectDestinations } from '@redux/destinations/slice';

// Interfaces
interface DestinationDayProps {
  day: any[]; // Adjust the type based on the actual structure of your data
  index: number;
  expanded: number[];
  setExpanded: () => void;
}

// Component
const DestinationDay: React.FC<DestinationDayProps> = ({ day, index, expanded, setExpanded }) => {
  // Redux
  const placesSelect = useAppSelector(selectPlaces);
  const destionationsSelect = useAppSelector(selectDestinations);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [expandedDays, setExpandedDays] = useState<number[]>([day.length]);

  const places = placesSelect?.places || DUMMY_PLACES;
  const destinations = destionationsSelect?.destinations || DUMMY_DESTINATIONS;

  // Callbacks
  const handleNavigateToMapView = (activities: any[]) => {
    const mapDestinations = _.map(activities ?? destinations.flat(), (i) => {
      const place = _.find(places, { id: i.id });

      return { ...i, ...place };
    });

    navigation.navigate('Map', { destinations: mapDestinations });
  };

  const handleOnDayPress = (id: number) => setExpandedDays(_.xor(expandedDays, [id]));

  // Effects
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Renderers
  return (
    <Accordion
      expanded={_.includes(expanded, index)}
      setExpanded={setExpanded}
      style={styles.accordionContainer}
      titleStyle={styles.titleStyle}
      title={
        <View style={styles.title}>
          <Text variant="titleMedium">Day {index + 1}</Text>
          <Button onPress={() => handleNavigateToMapView(day)}>View on Map</Button>
        </View>
      }>
      {_.map(day, (a, i) => (
        <List.Accordion
          id={a.id}
          key={a.id}
          onPress={() => handleOnDayPress(a.id)}
          expanded={_.includes(expandedDays, a.id)}
          style={styles.accordion}
          title={
            <View style={styles.accordionTitle}>
              <Badge size={ms(25)} style={{ backgroundColor: theme.colors.primary }}>
                {i + 1}
              </Badge>
              <Text style={styles.placeTitle} variant="titleSmall">
                {a.place}
              </Text>
            </View>
          }>
          <LocationCard key={a.id} location={a} vertical />
        </List.Accordion>
      ))}
      {index < destinations.length - 1 && <Divider style={styles.divider} />}
    </Accordion>
  );
};

export default DestinationDay;
