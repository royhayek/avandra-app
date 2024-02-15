// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useCallback, useEffect } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { JapanFlag } from '@shared/assets/icons';
import ImageView from 'react-native-image-viewing';
import BackButton from '@shared/components/Buttons/Back';
import RegularButton from '@shared/components/Buttons/Regular';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { destination_details } from './data';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { plannerActions } from '@redux/planner/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface ImageViewState {
  isOpen: boolean;
  index: number;
}

interface DestinationDetailsScreenProps {}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`destination_details.${key}`, options);

const DestinationDetailsScreen: React.FC<DestinationDetailsScreenProps> = () => {
  // Redux
  const dispatch = useDispatch();

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const [imageViewState, setImageViewState] = React.useState<ImageViewState>({ isOpen: false, index: 0 });

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { id, name, image, country, description, gallery, continent, currency } = destination_details;

  // Callbacks
  const handleStartTripPress = useCallback(() => {
    dispatch(plannerActions.setPayload({ destination: { id, name, image, country } }));
    navigation.navigate('Planner');
  }, [country, dispatch, id, image, name, navigation]);

  const handleGalleryImagePress = useCallback((index: number) => setImageViewState({ isOpen: true, index }), []);

  // Effects
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  // Renderers
  const renderStickyHeader = () => (
    <View style={styles.curvedContainer}>
      <View style={styles.stickyHeader}>
        <FastImage source={require('../../../assets/paris.jpeg')} style={styles.image} />
      </View>
      <BackButton style={{ position: 'absolute', top: 60, start: 20, backgroundColor: theme.colors.background }} />
    </View>
  );

  const renderContent = () => (
    <View style={styles.content}>
      <View style={styles.paddedContent}>
        <Text variant="h3">{name}</Text>

        <View style={styles.countryContainer}>
          <JapanFlag />
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
        data={gallery}
        contentContainerStyle={styles.galleryList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleGalleryImagePress(index)}>
            <FastImage key={index} source={{ uri: item?.uri }} style={styles.galleryImage} />
          </TouchableOpacity>
        )}
      />

      <Text variant="h5" style={styles.title}>
        {_t('additional_info')}
      </Text>
      <View style={styles.paddedContent}>
        <Text variant="xLarge">{continent}</Text>
        <Text variant="xLarge">{currency}</Text>
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
        {renderContent()}
      </ScrollView>

      <ImageView
        images={gallery}
        visible={imageViewState?.isOpen}
        imageIndex={imageViewState?.index}
        onRequestClose={() => setImageViewState({ isOpen: false, index: 0 })}
      />

      <View style={commonStyles.footer}>
        <RegularButton title={_t('start_a_trip')} onPress={handleStartTripPress} fullWidth />
      </View>
    </>
  );
};

export default DestinationDetailsScreen;
