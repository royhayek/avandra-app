// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useCallback, useEffect } from 'react';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import ImageView from 'react-native-image-viewing';
import BackButton from '@shared/components/Buttons/Back';
import { CurrencyIcon, MapIcon } from '@shared/assets/icons';
import RegularButton from '@shared/components/Buttons/Regular';
import { Dimensions, FlatList, ScrollView, TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { PUBLIC_URL } from '@shared/constants';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { plannerActions } from '@redux/planner/slice';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { getDestinationDetails, selectDestinationLoading, selectOptionsLoading } from '@redux/destination/slice';
import {
  getBudgetsAction,
  getDestinationDetailsAction,
  getInterestsAction,
  getTravelersAction
} from '@redux/destination/thunks';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import Shimmer from '@shared/components/Shimmer';

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
  const destinationDetails = useAppSelector(getDestinationDetails);
  const isLoadingDetails = useAppSelector(selectDestinationLoading);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const [imageViewState, setImageViewState] = React.useState<ImageViewState>({ isOpen: false, index: 0 });

  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { detailsId } = route?.params as RouteParams;
  const { name, image, country, description, gallery, continent, currency, flag } = destinationDetails || {};

  // Callbacks
  const handleStartTripPress = useCallback(async () => {
    dispatch(plannerActions.setPayload({ destination: { id: detailsId, name, image, country } }));
    // Dispatch travelers list
    await dispatchThunk(getTravelersAction());
    await dispatchThunk(getInterestsAction());
    await dispatchThunk(getBudgetsAction());
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
      <BackButton style={{ position: 'absolute', top: 60, start: 20, backgroundColor: theme.colors.background }} />
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

        <Text variant="xLarge" style={styles.description}>
          {description}
        </Text>
      </View>

      <Text variant="h5" style={styles.title}>
        {_t('gallery')}
      </Text>
      <FlatList
        horizontal
        data={galleryImages}
        contentContainerStyle={styles.galleryList}
        showsHorizontalScrollIndicator={false}
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
        <View style={styles.infoRow}>
          <MapIcon fill={theme.colors.secondary} />
          <Text variant="xLarge">{continent}</Text>
        </View>
        <View style={styles.infoRow}>
          <CurrencyIcon fill={theme.colors.secondary} />
          <Text variant="xLarge">{currency}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <ScrollView
        stickyHeaderIndices={[0]}
        style={styles.scrollView}
        stickyHeaderHiddenOnScroll
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
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
