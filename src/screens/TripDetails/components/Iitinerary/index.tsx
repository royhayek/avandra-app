// Packages
import _ from 'lodash';
import React, { useCallback, useState } from 'react';

// Components
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
import FastImage from 'react-native-fast-image';
import { Divider, Text } from 'react-native-paper';
import { Platform, TouchableOpacity, View } from 'react-native';
import ScrollableTabs from '@shared/components/ScrollableTabs';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { formatAmount, formatDate, openMapsWithCoords } from '@shared/utils';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { ItineraryItemProps, ItineraryProps } from '@shared/types/Itinerary';
import moment from 'moment';

interface ItineraryListProps {
  data: ItineraryProps[];
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`trip_details.${key}`, options);

const Itinerary: React.FC<ItineraryListProps> = ({ data }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [activeDate, setActiveDate] = useState<String>(_.first(data)?.date ?? '');

  const activeItineraries = _.find(data, { date: activeDate })?.list || [];

  // Callbacks

  const handleItineraryPress = useCallback((name, coordinates) => {
    openMapsWithCoords(name, coordinates?.lat, coordinates?.lng);
  }, []);

  // Renderer Vars
  const tabs = _.map(data, (itinerary, index) => ({
    key: itinerary.date,
    title: `Day ${index + 1} (${formatDate(itinerary.date, 'MMM DD')})`
  }));

  // Renderers
  const renderItinerary = ({
    type,
    name,
    address,
    rating,
    openingHours,
    userRatingsTotal,
    coordinates,
    priceLevel,
    photoUrl,
    directions
  }: ItineraryItemProps) => {
    const day = moment(activeDate).format('dddd');
    const time = _.find(openingHours?.weekday_text, (d) => _.includes(d, day));
    const priceLevelText = _.times(priceLevel, () => '$').join('');

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

          <TouchableOpacity style={styles.itineraryContent} onPress={() => handleItineraryPress(name, coordinates)}>
            <FastImage source={{ uri: photoUrl }} style={styles.itineraryImage} />
            <View style={styles.itineraryDetails}>
              <Text variant="h5">{name}</Text>
              <Text variant="small" style={styles.address}>
                {address}
              </Text>
              {rating ? (
                <View style={styles.ratingContainer}>
                  <Text variant="medium" style={styles.ratingText}>
                    {rating}
                  </Text>
                  <StarRatingDisplay rating={rating} starSize={18} starStyle={{ marginHorizontal: 0 }} />
                  <Text variant="small" style={styles.ratingText}>
                    ({formatAmount(userRatingsTotal)})
                  </Text>
                  {priceLevel ? (
                    <Text variant="small" style={styles.ratingText}>
                      {` •  ${priceLevelText}`}
                    </Text>
                  ) : null}
                </View>
              ) : null}

              <Divider style={styles.divider} />

              {time ? (
                <View style={styles.infoRow}>
                  <TimeIcon fill={iconFillColor} />
                  <Text variant="medium" style={styles.mediumText}>
                    {time}
                  </Text>
                </View>
              ) : null}

              <View style={styles.infoRow}>
                <LocationIcon fill={theme.colors.primary} width={20} transform="scale(0.95)" />
                <Text variant="medium" style={[styles.mediumText, { color: theme.colors.primary }]}>
                  {_t('view_on_map')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.rowContent}>
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
        </View> */}
      </View>
    );
  };

  return (
    <>
      <ScrollableTabs tabs={tabs} activeTab={activeDate} onTabPress={setActiveDate} style={styles.dateTabs} />
      <View style={styles.paddedContent}>{_.map(activeItineraries, renderItinerary)}</View>
    </>
  );
};

export default Itinerary;
