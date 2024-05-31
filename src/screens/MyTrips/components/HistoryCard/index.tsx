// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import Share, { ShareOptions } from 'react-native-share';
import React, { useCallback, useState, useRef } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Picker from '@shared/components/Picker';
import FastImage from 'react-native-fast-image';
import Shimmer from '@shared/components/Shimmer';
import { IconButton, Text } from 'react-native-paper';
import CustomBottomSheet from '@shared/components/BottomSheet';
import GenerationModal from '@shared/components/GenerationModal';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons, Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { formatDate } from '@shared/utils';
import { PUBLIC_URL } from '@shared/constants';
import { useAppThunkDispatch } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { deleteTripAction, generateTripAction } from '@redux/itinerary/thunks';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface HistoryCardProps {
  index?: number;
  item?: CardItem;
  small?: boolean;
  isLoading?: boolean;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`trip.${key}`, options);

const HistoryCard: React.FC<HistoryCardProps> = ({ small, item, index, isLoading }) => {
  // Redux
  const dispatchThunk = useAppThunkDispatch();

  // Statics
  const { _id, user, image, payload, status } = item || {};
  const { name, country, traveler, fromDate } = payload || {};

  const isExpired = !!String(status).match(/expired/i);

  const theme = useAppTheme();
  const styles = makeStyles(theme, isExpired);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [regenerating, setRegenerating] = useState(false);

  const bottomSheetRef = useRef<BottomSheetMethods>();
  const optionsPickerRef = useRef<BottomSheetMethods>(null);

  // Callbacks
  const handleSheetClose = useCallback(() => bottomSheetRef.current?.close(), []);

  const handleDeletePress = useCallback(() => bottomSheetRef.current?.expand(), []);

  const handleOpenOptionsMenu = useCallback(() => optionsPickerRef.current?.expand(), []);

  const handleCloseOptionsMenu = useCallback(() => optionsPickerRef.current?.close(), []);

  const handleTextPress = useCallback(() => navigation.navigate('TripDetails', { _id: item?._id }), [item, navigation]);

  const handleDeleteHistory = useCallback(async () => {
    await dispatchThunk(deleteTripAction({ tripId: item?._id, userId: item?.user }));
    handleSheetClose();
  }, [dispatchThunk, handleSheetClose, item?._id, item?.user]);

  const onGenerate = useCallback(async () => {
    const response = await dispatchThunk(generateTripAction({ ...payload, _id: item?._id, user, regenerate: true }));

    setRegenerating(false);

    if (response?.payload?.success) {
      navigation.navigate('TripDetails', { _id: response?.payload?.result?._id });
    }
  }, [dispatchThunk, item?._id, navigation, payload, user]);

  const handleTripMenuItemPress = useCallback(
    async (key: string) => {
      handleCloseOptionsMenu();

      switch (key) {
        case 'view':
          handleTextPress();
          break;

        case 'regenerate':
          setRegenerating(true);

          break;

        case 'share':
          /* eslint-disable no-case-declarations */
          const message = `Join my planned trip to ${name}!`;
          const deepLink = `https://avandraapp.com/share/trip/${_id}`;

          const shareOptions: ShareOptions = {
            message: `${message}\n${deepLink}`,
            failOnCancel: false
          };

          // Share the content
          Share.open(shareOptions);
          /* eslint-enable no-case-declarations */

          break;

        case 'delete':
          handleDeletePress();
          break;

        default:
          break;
      }
    },
    [_id, name, handleTextPress, handleDeletePress, handleCloseOptionsMenu]
  );

  // Renderer Vars
  const menuOptions = [
    ...(isExpired
      ? [
          {
            key: 'view',
            title: _t('view'),
            onPress: () => handleTripMenuItemPress('view'),
            icon: (
              <Ionicons name="eye-outline" size={ms(22)} color={theme.dark ? theme.colors.white : theme.colors.black} />
            )
          }
        ]
      : [
          {
            key: 'regenerate',
            title: _t('regenerate'),
            onPress: () => handleTripMenuItemPress('regenerate'),
            icon: <Ionicons name="refresh" size={ms(22)} color={theme.dark ? theme.colors.white : theme.colors.black} />
          },
          {
            key: 'share',
            title: _t('share'),
            onPress: () => handleTripMenuItemPress('share'),
            icon: (
              <Ionicons
                name="share-outline"
                size={ms(22)}
                color={theme.dark ? theme.colors.white : theme.colors.black}
              />
            )
          }
        ]),
    {
      key: 'delete',
      title: _t('delete'),
      color: theme.colors.red,
      onPress: () => handleTripMenuItemPress('delete'),
      icon: <Ionicons name="trash-outline" size={ms(22)} color={theme.colors.red} />
    }
  ];

  // Renderers
  const renderDeleteIcon = useCallback(
    () => <Ionicons name="md-trash" size={ms(16)} color={theme.dark ? theme.colors.white : theme.colors.black} />,
    [theme.colors.black, theme.colors.white, theme.dark]
  );

  const renderMenuIcon = useCallback(
    () => <MaterialCommunityIcons name="dots-vertical" size={ms(18)} color={theme.colors.primary} />,
    [theme.colors.primary]
  );

  const renderTripInformation = () => (
    <View style={small ? styles.horizontalInfoContent : styles.verticalInfoContent}>
      {isLoading ? (
        <View>
          <Shimmer style={styles.title} width={120} />
          <Shimmer style={styles.rowContainer} width={100} />
        </View>
      ) : (
        <View>
          <Text variant="h6" style={styles.title}>
            {name}, {country}
          </Text>

          <View style={styles.rowContainer}>
            <View style={styles.infoItemContainer}>
              <Text variant="medium" style={styles.assistant}>
                {traveler?.title} {traveler?.icon}
              </Text>
            </View>

            <Entypo name="dot-single" size={ms(20)} style={styles.dot} />

            <View style={styles.infoItemContainer}>
              <Feather name="calendar" style={styles.calendarIcon} size={ms(small ? ms(15) : ms(18))} />
              <Text variant="medium" style={styles.date}>
                {formatDate(fromDate, 'MMMM DD, YYYY')}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );

  const renderVerticalTripCard = (hasDelete = true) => (
    <View style={styles.container}>
      {isLoading ? (
        <Shimmer style={styles.cityImage} />
      ) : (
        <ImageBackground
          resizeMode="cover"
          style={styles.cityImage}
          imageStyle={{ borderRadius: ms(16) }}
          source={{
            uri: _.includes(image, 'http') ? image : `${PUBLIC_URL}/destination/image/${image}`,
            cache: 'force-cache'
          }}>
          {hasDelete && (
            <IconButton
              size={ms(20)}
              mode="contained"
              icon={renderDeleteIcon}
              style={styles.deleteBtn}
              onPress={handleDeletePress}
              containerColor={theme.colors.background}
            />
          )}

          {renderTripInformation()}
        </ImageBackground>
      )}
    </View>
  );

  const renderTripCard = () => (
    <View style={styles.tripCard}>
      {isLoading ? (
        <Shimmer style={styles.verticalImage} />
      ) : (
        <FastImage
          style={styles.verticalImage}
          source={{
            uri: _.includes(image, 'http') ? image : `${PUBLIC_URL}/destination/image/${image}`,
            cache: FastImage.cacheControl.immutable
          }}
        />
      )}
      {renderTripInformation()}
    </View>
  );

  return (
    <>
      {small ? (
        <>
          <TouchableOpacity
            key={index}
            disabled={isExpired}
            onPress={() => handleTextPress(item)}
            style={styles.verticalContainer}>
            <View style={styles.flex1}>{renderTripCard()}</View>

            {isLoading ? (
              <Shimmer width={ms(26)} height={ms(26)} style={styles.shimmerMenu} />
            ) : (
              <IconButton
                size={ms(20)}
                disabled={isLoading}
                icon={renderMenuIcon}
                onPress={handleOpenOptionsMenu}
                style={{ borderRadius: ms(8) }}
              />
            )}
          </TouchableOpacity>

          {regenerating && <GenerationModal isVisible={regenerating} />}
        </>
      ) : (
        <TouchableOpacity key={index} disabled={isExpired} onPress={() => handleTextPress(item)}>
          {renderVerticalTripCard()}
        </TouchableOpacity>
      )}

      <Picker sheetRef={optionsPickerRef} options={menuOptions} />

      <CustomBottomSheet
        sheetRef={bottomSheetRef}
        onClose={handleSheetClose}
        titleColor={theme.colors.red}
        title={t('history.delete_trip')}
        secondaryBtnProps={{ title: t('common.cancel'), onPress: handleSheetClose }}
        primaryBtnProps={{ title: t('common.yes_delete'), onPress: handleDeleteHistory }}>
        {small ? renderTripCard() : renderVerticalTripCard(false)}
      </CustomBottomSheet>
    </>
  );
};

HistoryCard.defaultProps = {
  isLoading: false
};

export default HistoryCard;
