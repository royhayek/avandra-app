// Packages
import _ from 'lodash';
import moment from 'moment';
import React, { useCallback, useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';

// Components
import FastImage from 'react-native-fast-image';
import { Divider, Text } from 'react-native-paper';
import PlaceIcon from '@shared/components/PlaceIcon';
import { TouchableOpacity, View } from 'react-native';
import ScrollableTabs from '@shared/components/ScrollableTabs';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { CarIcon, TimeIcon, WalkIcon, TrainIcon, PlaneIcon, LocationIcon, NavigationIcon } from '@shared/assets/icons';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { formatAmount, formatDate, getCategory } from '@shared/utils';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ItineraryItemProps, ItineraryProps } from '@shared/types/Itinerary';

interface ItineraryListProps {
  data: ItineraryProps[];
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`trip_details.${key}`, options);

const Itinerary: React.FC<ItineraryListProps> = ({ data }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [activeDate, setActiveDate] = useState<string>(_.first(data)?.date ?? '');

  // Callbacks
  const handleTabPress = useCallback((tab: string) => setActiveDate(tab), []);

  const handleItineraryPress = useCallback(
    (props: ItineraryItemProps) => {
      navigation.navigate('PlaceDetails', { place: props });
    },
    [navigation]
  );

  const itineraryDate = (date: string) => (date ? (moment(date).isValid() ? formatDate(date, 'MMM DD') : date) : '');

  // Renderer Vars
  const tabs = _.map(data, (itinerary, index) => ({
    key: itinerary.date,
    title: `${t('common.day')} ${index + 1} (${itineraryDate(itinerary?.date)})`
  }));

  const activeItineraries = _.find(data, { date: activeDate })?.list || [];

  // Renderers
  const renderItinerary = (props: ItineraryItemProps) => {
    const { date, types, name, address, rating, openingHours, userRatingsTotal, priceLevel, photoUrl, directions } =
      props;

    const category = types && getCategory(types);
    const day = moment(date).format('dddd');
    const time = _.find(openingHours?.weekday_text, (d) => _.includes(d, day));
    const priceLevelText = _.times(priceLevel, () => '$').join('');

    const iconFillColor = theme.dark ? theme.colors.white : theme.colors.gray[900];

    return (
      <View key={name}>
        <View style={styles.rowContent}>
          <View style={styles.typeLine}>
            {category && <PlaceIcon type={category} color={theme.dark ? theme.colors.white : theme.colors.gray[900]} />}

            <View style={styles.verticalLine} />
          </View>

          <View style={styles.itineraryContent}>
            <TouchableOpacity style={styles.itineraryButton} onPress={() => handleItineraryPress(props)}>
              <FastImage
                source={{ uri: photoUrl, cache: FastImage.cacheControl.immutable }}
                style={styles.itineraryImage}
              />
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
        </View>

        {directions && (
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
        )}
      </View>
    );
  };

  return (
    <>
      <ScrollableTabs tabs={tabs} activeTab={activeDate} onTabPress={handleTabPress} style={styles.dateTabs} />
      <View style={styles.listContainer}>{_.map(activeItineraries, renderItinerary)}</View>
    </>
  );
};

export default Itinerary;
