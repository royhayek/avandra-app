// Packages
import _ from 'lodash';
import React, { useCallback, useState } from 'react';

// Components
import FastImage from 'react-native-fast-image';
import { Divider, Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import ScrollableTabs from '@shared/components/ScrollableTabs';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import {
  CarIcon,
  TimeIcon,
  WalkIcon,
  TrainIcon,
  PlaneIcon,
  LandmarkIcon,
  LocationIcon,
  NavigationIcon,
  RestaurantIcon,
  DollarOutlineIcon
} from '@shared/assets/icons';

// Utilities
import makeStyles from './styles';
import { formatDate } from '@shared/utils';
import { useAppTheme } from '@shared/assets/theme';
import { ItineraryItemProps, ItineraryProps } from '@shared/types/Itinerary';

// Interfaces
interface ItineraryListProps {
  data: ItineraryProps[];
}

// Component
const Itinerary: React.FC<ItineraryListProps> = ({ data }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [activeDate, setActiveDate] = useState(_.first(data)?.date ?? '');

  const activeItineraries = _.find(data, { date: activeDate })?.list || [];

  // Callbacks

  const handleItineraryPress = useCallback(() => {
    console.debug('handleItineraryPress');
  }, []);

  // Effects

  // Renderer Vars
  const tabs = _.map(data, (itinerary, index) => ({
    key: itinerary.date,
    title: `Day ${index + 1} (${formatDate(itinerary.date, 'MMM DD')})`
  }));

  const renderItinerary = ({
    type,
    image,
    name,
    rating,
    reviews,
    time,
    estimatedCost,
    directions
  }: ItineraryItemProps) => {
    const iconFillColor = theme.dark ? theme.colors.white : theme.colors.gray[900];

    return (
      <View key={name}>
        <View style={styles.rowContent}>
          <View style={styles.typeLine}>
            {_.isEqual(type, 'restaurant') ? (
              <RestaurantIcon fill={iconFillColor} />
            ) : (
              <LandmarkIcon fill={iconFillColor} />
            )}

            <View style={styles.verticalLine} />
          </View>

          <TouchableOpacity style={styles.itineraryContent} onPress={handleItineraryPress}>
            <FastImage source={{ uri: image }} style={styles.itineraryImage} />
            <View style={styles.itineraryDetails}>
              <Text variant="h5">{name}</Text>
              <View style={styles.ratingContainer}>
                <StarRatingDisplay rating={rating} starSize={20} starStyle={{ marginHorizontal: 0 }} />
                <Text variant="small" style={styles.ratingText}>
                  ({rating}) {reviews} reviews
                </Text>
              </View>

              <Divider style={styles.divider} />

              <View style={styles.infoRow}>
                <TimeIcon fill={iconFillColor} />
                <Text variant="large" style={styles.mediumText}>
                  {time}
                </Text>
              </View>

              <View style={styles.infoRow}>
                <DollarOutlineIcon fill={iconFillColor} />
                <Text variant="large" style={styles.mediumText}>
                  ${estimatedCost}
                </Text>
              </View>

              <View style={styles.infoRow}>
                <LocationIcon fill={theme.colors.primary} width={20} transform="scale(0.95)" />
                <Text variant="large" style={[styles.mediumText, { color: theme.colors.primary }]}>
                  View on Google Maps
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContent}>
          <View style={styles.navigationIcon}>
            <NavigationIcon fill={iconFillColor} />
          </View>

          <View style={styles.itineraryNavigation}>
            <View style={styles.navigation}>
              <CarIcon fill={iconFillColor} />
              <Text variant="small" style={styles.navigationTitle}>
                {directions?.byCar}
              </Text>
            </View>

            <View style={styles.navigation}>
              <TrainIcon fill={iconFillColor} />
              <Text variant="small" style={styles.navigationTitle}>
                {directions?.byTrain}
              </Text>
            </View>

            <View style={styles.navigation}>
              <WalkIcon fill={iconFillColor} />
              <Text variant="small" style={styles.navigationTitle}>
                {directions?.byWalk}
              </Text>
            </View>

            <View style={styles.navigation}>
              <PlaneIcon fill={iconFillColor} />
              <Text variant="small" style={styles.navigationTitle}>
                {directions?.byPlane ?? '-'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  // Renderers
  return (
    <>
      <ScrollableTabs tabs={tabs} activeTab={activeDate} onTabPress={setActiveDate} />

      <View style={styles.paddedContent}>{_.map(activeItineraries, renderItinerary)}</View>
    </>
  );
};

export default Itinerary;
