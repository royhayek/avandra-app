// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

// Components
import { Text } from 'react-native-paper';
import Header from '@shared/components/Header';
import FastImage from 'react-native-fast-image';
import Shimmer from '@shared/components/Shimmer';
import ImageView from 'react-native-image-viewing';
import LoginSheet from '@shared/components/LoginSheet';
import RegularButton from '@shared/components/Buttons/Regular';
import { CurrencyIcon, LanguageIcon, MapIcon } from '@shared/assets/icons';
import { Dimensions, FlatList, ScrollView, TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { PUBLIC_URL } from '@shared/constants';
import { selectIsGuest } from '@redux/auth/slice';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { plannerActions } from '@redux/planner/slice';
import { appActions, selectDeepLinkData } from '@redux/app/slice';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { getTravelPreferencesAction, getDestinationDetailsAction } from '@redux/destination/thunks';
import {
  selectOptionsLoading,
  selectDestinationDetails,
  selectDestinationLoading,
  destinationsActions
} from '@redux/destination/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { ShareDataProps } from '@shared/types/ShareData';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

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

  const isGuest = useAppSelector(selectIsGuest);
  const deepLinkData = useAppSelector(selectDeepLinkData);
  const areOptionsLoading = useAppSelector(selectOptionsLoading);
  const isLoadingDetails = useAppSelector(selectDestinationLoading);
  const destinationDetails = useAppSelector(selectDestinationDetails);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const bottomSheetRef = useRef<BottomSheetMethods>();

  const { detailsId } = route?.params as RouteParams;

  const [isLoading, setIsLoading] = useState(false);
  const [destinationId, setDestinationId] = React.useState<string>(detailsId);
  const [imageViewState, setImageViewState] = React.useState<ImageViewState>({ isOpen: false, index: 0 });

  const { _id, name, image, country, description, gallery, continent, currency, flag, spokenLang, bestTime } =
    destinationDetails || {};

  // Callbacks
  const handleStartTripPress = useCallback(async () => {
    if (isGuest) {
      bottomSheetRef.current?.expand();
    } else {
      setIsLoading(true);
      dispatch(plannerActions.setPayload({ destination: { id: destinationId, name, image, country } }));
      await dispatchThunk(getTravelPreferencesAction());
      setIsLoading(false);
      navigation.navigate('Planner');
    }
  }, [country, destinationId, dispatch, dispatchThunk, image, isGuest, name, navigation]);

  const handleGalleryImagePress = useCallback((index: number) => setImageViewState({ isOpen: true, index }), []);

  // Effects
  useEffect(() => {
    navigation.setOptions({ headerShown: false });

    return () => {
      dispatch(destinationsActions.setIsLoading(false));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (destinationId) dispatchThunk(getDestinationDetailsAction(destinationId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinationId]);

  useEffect(() => {
    // extract trip id from deep link data, path looks like this "destination/:id"

    if (deepLinkData) {
      const path = deepLinkData?.path;
      const id = _.last(_.split(path, '/'));

      if (id) {
        setDestinationId(id);
        dispatch(appActions.clearDeepLinkData());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deepLinkData]);

  // Renderer Vars
  const shareData: ShareDataProps = {
    message: _t('generate_a_trip_to', { name }),
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
      <Header hasBackBtn absolute share shareData={shareData} />
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
              <Text variant="large">{_t('best_time')}</Text>
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
              <Text variant="large">{_t('spoken_languages')}</Text>
              <Text variant="large" style={styles.infoContentText}>
                {spokenLang}
              </Text>
            </View>
          </View>
        )}
        <View style={styles.infoRow}>
          <CurrencyIcon fill={theme.dark ? theme.colors.white : theme.colors.black} />
          <View>
            <Text variant="large">{_t('currency')}</Text>
            <Text variant="large" style={styles.infoContentText}>
              {currency}
            </Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <MapIcon fill={theme.dark ? theme.colors.white : theme.colors.black} />
          <View>
            <Text variant="large">{_t('continent')}</Text>
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
          onPress={handleStartTripPress}
          loading={areOptionsLoading && isLoading}
        />
      </View>

      <LoginSheet sheetRef={bottomSheetRef} />
    </>
  );
};

export default DestinationDetailsScreen;
