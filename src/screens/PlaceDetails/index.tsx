// Packages
import _ from 'lodash';
import moment from 'moment';
import React, { useEffect } from 'react';
import { ms } from 'react-native-size-matters';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

// Components
import { Ionicons } from '@expo/vector-icons';
import Header from '@shared/components/Header';
import Marker from '@shared/components/Marker';
import FastImage from 'react-native-fast-image';
import ImageView from 'react-native-image-viewing';
import { Divider, Text } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { FlatList, Linking, ScrollView, TouchableOpacity, View } from 'react-native';

// Utilities
import i18n, { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { GOOGLE_WEB_API_KEY, formatAmount, openMapsWithCoords } from '@shared/utils';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { ItineraryItemProps } from '@shared/types/Itinerary';

interface ImageViewState {
  isOpen: boolean;
  index: number;
}

interface RouteParams {
  place: ItineraryItemProps;
}

interface PlaceDetailsScreenProps {}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`place_details.${key}`, options);

const PlaceDetailsScreen: React.FC<PlaceDetailsScreenProps> = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [imageViewState, setImageViewState] = React.useState<ImageViewState>({ isOpen: false, index: 0 });

  const { place } = route?.params as RouteParams;

  const {
    name,
    types,
    rating,
    photos,
    website,
    address,
    photoUrl,
    priceLevel,
    displayName,
    coordinates,
    openingHours,
    userRatingsTotal,
    internationalPhone
  } = place;

  const day = moment().locale('fr').format('dddd');
  const priceLevelText = _.times(priceLevel, () => '$').join('');

  // Callbacks
  const handleWebsitePress = () => Linking.openURL(website);

  const handlePhonePress = () => Linking.openURL(`tel:${internationalPhone}`);

  const handleMapPress = () => openMapsWithCoords(coordinates?.lat, coordinates?.lng);

  const handleGalleryImagePress = (index: number) => setImageViewState({ isOpen: true, index });

  const transformTypes = (types: string[]) => {
    const joinedWords = types.map((type: string) =>
      type
        .split('_')
        .map((word) => _.capitalize(word))
        .join(' ')
    );

    return joinedWords.join(', ');
  };

  const extractDomain = (url: string) => new URL(url)?.hostname?.replace(/^www\./, '');

  // Effects
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render Vars
  const domain = website && extractDomain(website);
  const transformedTypes = transformTypes(types);

  const galleryImages =
    _.map(_.slice(photos, 1), ({ photo_reference }) => ({
      uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1024&photoreference=${photo_reference}&key=${GOOGLE_WEB_API_KEY}`
    })) || [];

  // Renderers
  const renderStickyHeader = () => (
    <View style={styles.curvedContainer}>
      <View style={styles.stickyHeader}>
        <FastImage source={{ uri: photoUrl }} style={styles.image} />
      </View>

      <Header hasBackBtn absolute />
    </View>
  );

  const renderContent = () => (
    <View style={styles.content}>
      <View style={styles.paddedContent}>
        <View style={styles.info}>
          <Text variant="h4">{displayName}</Text>

          <Text variant="medium" style={styles.type}>
            {transformedTypes}
          </Text>

          {rating ? (
            <View style={styles.ratingContainer}>
              <StarRatingDisplay rating={rating} starSize={20} starStyle={{ marginHorizontal: 0 }} />
              <Text variant="medium" style={styles.ratingText}>
                {rating}
              </Text>
              <Text variant="small" style={styles.ratingText}>
                ({formatAmount(userRatingsTotal)})
              </Text>
              {priceLevel ? (
                <Text variant="medium" style={styles.ratingText}>
                  {` •  ${priceLevelText}`}
                </Text>
              ) : null}
            </View>
          ) : null}
        </View>

        {internationalPhone || website ? (
          <>
            <Divider style={styles.divider} />

            <View style={styles.contantInfo}>
              {internationalPhone ? (
                <TouchableOpacity style={styles.contactRow} onPress={handlePhonePress}>
                  <View style={{ flexDirection: 'row', gap: ms(8) }}>
                    <Ionicons name="call" size={ms(22)} color={theme.dark ? theme.colors.white : theme.colors.black} />
                    <Text variant="large">Phone No.</Text>
                  </View>
                  <Text variant="medium" style={{ fontFamily: 'urbanist-normal' }}>
                    {internationalPhone}
                  </Text>
                </TouchableOpacity>
              ) : null}

              {website ? (
                <TouchableOpacity style={styles.contactRow} onPress={handleWebsitePress}>
                  <View style={{ flexDirection: 'row', gap: ms(8) }}>
                    <Ionicons name="globe" size={ms(22)} color={theme.dark ? theme.colors.white : theme.colors.black} />
                    <Text variant="large">Website</Text>
                  </View>
                  <Text variant="large" style={{ fontFamily: 'urbanist-normal' }}>
                    {domain}
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </>
        ) : null}

        {galleryImages && galleryImages.length > 0 ? (
          <>
            <Divider style={styles.divider} />

            <Text variant="h5" style={styles.title}>
              {_t('gallery')}
            </Text>

            <FlatList
              horizontal
              data={galleryImages}
              nestedScrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.galleryList}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => handleGalleryImagePress(index)}>
                  <FastImage key={index} style={styles.galleryImage} source={item} resizeMode="cover" />
                </TouchableOpacity>
              )}
            />
          </>
        ) : null}

        {coordinates ? (
          <>
            <Divider style={styles.divider} />

            <Text variant="h5" style={styles.title}>
              {_t('location')}
            </Text>

            {coordinates && (
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
                  onPress={handleMapPress}
                  zoomControlEnabled={false}
                  provider={PROVIDER_GOOGLE}
                  region={{
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.03,
                    latitude: parseFloat(coordinates?.lat?.toString()),
                    longitude: parseFloat(coordinates?.lng?.toString())
                  }}
                  customMapStyle={
                    theme.dark ? require('@shared/assets/map/dark.json') : require('@shared/assets/map/light.json')
                  }>
                  <Marker marker={coordinates} interpolations={[]} size={ms(30)} />
                </MapView>
              </View>
            )}

            <Text variant="large" style={styles.address}>
              {address}
            </Text>
          </>
        ) : null}

        {openingHours ? (
          <>
            <Divider style={styles.divider} />
            <Text variant="h5" style={styles.title}>
              {_t('opening_hours')}
            </Text>

            <View style={styles.openingHours}>
              {_.map(_.isArray(openingHours) ? openingHours : openingHours?.weekday_text, (d) => {
                const currentDay = _.includes(d, day);

                return (
                  <Text
                    key={d}
                    variant="large"
                    style={{ lineHeight: ms(18), fontFamily: currentDay ? 'urbanist-semibold' : 'urbanist-regular' }}>
                    {_.capitalize(d)}
                  </Text>
                );
              })}
            </View>
          </>
        ) : null}
      </View>

      <ImageView
        images={galleryImages}
        visible={imageViewState?.isOpen}
        imageIndex={imageViewState?.index}
        onRequestClose={() => setImageViewState({ isOpen: false, index: 0 })}
      />
    </View>
  );

  return (
    <>
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        {renderStickyHeader()}
        {renderContent()}
      </ScrollView>
    </>
  );
};

export default PlaceDetailsScreen;
