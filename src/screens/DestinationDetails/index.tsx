// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useCallback, useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

// Components
import { Text } from 'react-native-paper';
import Header from '@shared/components/Header';
import FastImage from 'react-native-fast-image';
import Shimmer from '@shared/components/Shimmer';
import ImageView from 'react-native-image-viewing';
import RegularButton from '@shared/components/Buttons/Regular';
import { CurrencyIcon, LanguageIcon, MapIcon } from '@shared/assets/icons';
import { Dimensions, FlatList, ScrollView, TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { PUBLIC_URL } from '@shared/constants';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { plannerActions } from '@redux/planner/slice';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { getTravelPreferencesAction, getDestinationDetailsAction } from '@redux/destination/thunks';
import { selectOptionsLoading, selectDestinationDetails, selectDestinationLoading } from '@redux/destination/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { ShareDataProps } from '@shared/types/ShareDataProps';

interface ImageViewState {
  isOpen: boolean;
  index: number;
}

interface RouteParams {
  detailsId: string;
}

interface DestinationDetailsScreenProps {}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`destination_details.${key}`, options);

const DestinationDetailsScreen: React.FC<DestinationDetailsScreenProps> = () => {
  // Redux
  const dispatch = useDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const areOptionsLoading = useAppSelector(selectOptionsLoading);
  const isLoadingDetails = useAppSelector(selectDestinationLoading);
  const destinationDetails = useAppSelector(selectDestinationDetails);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const [imageViewState, setImageViewState] = React.useState<ImageViewState>({ isOpen: false, index: 0 });

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { detailsId } = route?.params as RouteParams;

  const { _id, name, image, country, description, gallery, continent, currency, flag, spokenLang, bestTime } =
    destinationDetails || {};

  // Callbacks
  const handleStartTripPress = useCallback(async () => {
    dispatch(plannerActions.setPayload({ destination: { id: detailsId, name, image, country } }));
    await dispatchThunk(getTravelPreferencesAction());
    navigation.navigate('Planner');
  }, [country, detailsId, dispatch, dispatchThunk, image, name, navigation]);

  const handleGalleryImagePress = useCallback((index: number) => setImageViewState({ isOpen: true, index }), []);

  // Effects
  useEffect(() => {
    if (detailsId) dispatchThunk(getDestinationDetailsAction(detailsId));

    navigation.setOptions({ headerShown: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renderer Vars
  const shareData: ShareDataProps = {
    message: `Generate a trip to ${name}!`,
    deepLink: `https://avandraapp.com/share/destination/${_id}`
  };

  const galleryImages = _.map(gallery, (item) => ({ uri: `${PUBLIC_URL}/destination/gallery/${item}` })) || [];

  // Renderers
  const renderHeaderShimmer = () => (
    <View style={styles.curvedContainer}>
      <Shimmer width={Dimensions.get('window').width} style={styles.stickyHeader} />
    </View>
  );

  const renderStickyHeader = () => (
    <View style={styles.curvedContainer}>
      {isLoadingDetails ? (
        renderHeaderShimmer()
      ) : (
        <View style={styles.stickyHeader}>
          <FastImage source={{ uri: `${PUBLIC_URL}/destination/image/${image}` }} style={styles.image} />
        </View>
      )}
      <Header back absolute share shareData={shareData} />
    </View>
  );

  const renderContentShimmer = () => (
    <View style={styles.shimmerView}>
      <Shimmer style={styles.shimmerCity} />
      <Shimmer style={styles.shimmerCountry} />
      <Shimmer style={styles.shimmerDescription} />
      <Shimmer style={styles.shimmerTitle} />
      <View style={styles.shimmerGallery}>
        {_.times(3, (i) => (
          <Shimmer key={i} style={styles.shimmerGalleryItem} />
        ))}
      </View>
    </View>
  );

  const renderContent = () => (
    <View style={styles.content}>
      <View style={styles.paddedContent}>
        <Text variant="h3">{name}</Text>

        <View style={styles.countryContainer}>
          <FastImage source={{ uri: `${PUBLIC_URL}/destination/flag/${flag}` }} style={styles.flag} />
          <Text variant="xLarge" style={styles.country}>
            {country}
          </Text>
        </View>

        <Text variant="xLarge">{description}</Text>
      </View>

      <Text variant="h5" style={styles.title}>
        {_t('gallery')}
      </Text>
      <FlatList
        horizontal
        data={galleryImages}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.galleryList}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleGalleryImagePress(index)}>
            <FastImage key={index} style={styles.galleryImage} source={item} resizeMode="cover" />
          </TouchableOpacity>
        )}
      />

      <Text variant="h5" style={styles.title}>
        {_t('additional_info')}
      </Text>
      <View style={styles.paddedContent}>
        {bestTime && (
          <View style={styles.infoRow}>
            <LanguageIcon fill={theme.dark ? theme.colors.white : theme.colors.black} />
            <View style={{ flex: 1 }}>
              <Text variant="large">Best Time to Go</Text>
              <Text variant="large" style={styles.infoContentText}>
                {bestTime}
              </Text>
            </View>
          </View>
        )}
        {spokenLang && (
          <View style={styles.infoRow}>
            <LanguageIcon fill={theme.dark ? theme.colors.white : theme.colors.black} />
            <View>
              <Text variant="large">Spoken Language(s)</Text>
              <Text variant="large" style={styles.infoContentText}>
                {spokenLang}
              </Text>
            </View>
          </View>
        )}
        <View style={styles.infoRow}>
          <CurrencyIcon fill={theme.dark ? theme.colors.white : theme.colors.black} />
          <View>
            <Text variant="large">Currency</Text>
            <Text variant="large" style={styles.infoContentText}>
              {currency}
            </Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <MapIcon fill={theme.dark ? theme.colors.white : theme.colors.black} />
          <View>
            <Text variant="large">Continent</Text>
            <Text variant="large" style={styles.infoContentText}>
              {continent}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        {renderStickyHeader()}
        {isLoadingDetails ? renderContentShimmer() : renderContent()}
      </ScrollView>

      <ImageView
        images={galleryImages}
        visible={imageViewState?.isOpen}
        imageIndex={imageViewState?.index}
        onRequestClose={() => setImageViewState({ isOpen: false, index: 0 })}
      />

      <View style={commonStyles.footer}>
        <RegularButton
          fullWidth
          title={_t('start_a_trip')}
          loading={areOptionsLoading}
          onPress={handleStartTripPress}
        />
      </View>
    </>
  );
};

export default DestinationDetailsScreen;
