// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import React, { useCallback, useState, useRef } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons, Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

// Components
import Menu from '@shared/components/Menu';
import FastImage from 'react-native-fast-image';
import Shimmer from '@shared/components/Shimmer';
import { IconButton, Text } from 'react-native-paper';
import CustomBottomSheet from '@shared/components/BottomSheet';
import GenerationModal from '@shared/components/GenerationModal';
import { View, TouchableOpacity, ImageBackground } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { formatDate } from '@shared/utils';
import { useAppThunkDispatch } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { deleteTripAction } from '@redux/itinerary/thunks';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface HistoryCardProps {
  index?: number;
  item?: CardItem; // Assuming 'item' has a specific type. Replace 'CardItem' with the actual type.
  small?: boolean;
  isLoading?: boolean;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step1.${key}`, options);

const HistoryCard: React.FC<HistoryCardProps> = ({ small, item, index, isLoading }) => {
  // Redux
  const dispatchThunk = useAppThunkDispatch();

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [regenerating, setRegenerating] = useState(false);
  const [openOptionsMenu, setOpenOptionsMenu] = useState(false);

  const bottomSheetRef = useRef<BottomSheetMethods>();

  const { name, country, image, status, traveler, fromDate } = item || {};
  const isExpired = !!String(status).match(/expired/i);

  // Callbacks
  const handleSheetClose = useCallback(() => bottomSheetRef.current?.close(), []);

  const handleDeletePress = useCallback(() => bottomSheetRef.current?.expand(), []);

  const toggleOptionsMenu = useCallback(() => setOpenOptionsMenu((cur) => !cur), []);

  const handleTextPress = useCallback(() => navigation.navigate('TripDetails', { trip: item }), [item, navigation]);

  const handleDeleteHistory = useCallback(async () => {
    await dispatchThunk(deleteTripAction({ tripId: item?._id, userId: item?.user }));
    handleSheetClose();
  }, [dispatchThunk, handleSheetClose, item?._id, item?.user]);

  const handleTripMenuItemPress = useCallback(
    (index: string) => {
      switch (index) {
        case 'view':
          handleTextPress();
          break;

        case 'regenerate':
          setRegenerating(true);
          console.debug('Regenerate Trip');

          setTimeout(() => {
            setRegenerating(false);
          }, 5000);

          break;

        case 'share':
          console.debug('Share Trip');
          break;

        case 'delete':
          handleDeletePress();
          break;
        default:
          break;
      }

      toggleOptionsMenu();
    },
    [handleDeletePress, handleTextPress, toggleOptionsMenu]
  );

  // Renderer Vars
  const menuItems = [
    ...(isExpired
      ? [
          {
            item: 'view',
            title: 'trip.view',
            leadingIcon: () => (
              <Ionicons name="eye-outline" size={ms(22)} color={theme.dark ? theme.colors.white : theme.colors.black} />
            )
          }
        ]
      : [
          {
            item: 'regenerate',
            title: 'trip.regenerate',
            leadingIcon: () => (
              <Ionicons name="refresh" size={ms(22)} color={theme.dark ? theme.colors.white : theme.colors.black} />
            )
          },
          {
            item: 'share',
            title: 'trip.share',
            leadingIcon: () => (
              <Ionicons
                name="share-outline"
                size={ms(22)}
                color={theme.dark ? theme.colors.white : theme.colors.black}
              />
            )
          }
        ]),
    {
      item: 'delete',
      title: 'trip.delete',
      color: theme.colors.red,
      leadingIcon: () => <Ionicons name="trash-outline" size={ms(22)} color={theme.colors.red} />
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
              <Feather
                name="calendar"
                size={ms(small ? ms(15) : ms(18))}
                color={theme.dark ? theme.colors.white : theme.colors.black}
              />
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
          source={{ uri: image, cache: 'force-cache' }}>
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
          source={{ uri: image }}
          style={styles.verticalImage}
          // defaultSource={require('../../../../shared/assets/images/EmptyTripsLight.png')}
          // fallback
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

            {!isLoading && (
              <Menu
                items={menuItems}
                visible={openOptionsMenu}
                onDismiss={toggleOptionsMenu}
                onItemPress={handleTripMenuItemPress}
                anchor={
                  <IconButton
                    size={ms(20)}
                    icon={renderMenuIcon}
                    onPress={toggleOptionsMenu}
                    style={{ borderRadius: ms(8) }}
                  />
                }
              />
            )}
          </TouchableOpacity>

          <GenerationModal visible={regenerating} regenerating={regenerating} progress={0} />
        </>
      ) : (
        <TouchableOpacity key={index} disabled={isExpired} onPress={() => handleTextPress(item)}>
          {renderVerticalTripCard()}
        </TouchableOpacity>
      )}

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
