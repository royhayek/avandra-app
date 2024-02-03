// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Accordion from '@shared/components/Accordion';

// Utilities
import makeStyles from './styles';
import { DUMMY_INFO } from '../data';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { selectDestinations } from '@redux/destinations/slice';

// Component
const ListHeader = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const destinationsSelect = useAppSelector(selectDestinations);

  const itineraryPayload = destinationsSelect?.payload;
  const summary = destinationsSelect?.summary || DUMMY_INFO.summary;
  const tips = destinationsSelect?.tips || DUMMY_INFO.tips;

  const { destination, noOfDays, whoIsGoing } = destinationsSelect.payload || {};

  // Renderers
  return (
    <>
      <View>
        <View style={styles.aiPoweredContainer}>
          <Text variant="bodySmall">This trip is powered by AI</Text>
        </View>

        <Text variant="headlineSmall">
          Your trip to {destination} for {noOfDays} days {whoIsGoing}
        </Text>
        <View style={styles.interestsWrapper}>
          {_.map(itineraryPayload?.interests, (i) => (
            <View key={i} style={styles.interests}>
              <Text variant="labelSmall" style={{ color: theme.colors.primary }}>
                {i}
              </Text>
            </View>
          ))}
        </View>
        <Text variant="large" style={styles.destinationInfo}>
          {summary}
        </Text>

        <Accordion title="Tips" markdown>
          {tips}
        </Accordion>

        <Text variant="titleLarge" style={styles.itineraryTitle}>
          Itinerary
        </Text>
      </View>
    </>
  );
};

export default ListHeader;
