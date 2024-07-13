// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { ms } from 'react-native-size-matters';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import FastImage from 'react-native-fast-image';
import { IconButton, Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import { DeleteIcon, DragIcon } from '@shared/assets/icons';
import RegularButton from '@shared/components/Buttons/Regular';
import CustomBottomSheet from '@shared/components/BottomSheet';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { NestableDraggableFlatList } from 'react-native-draggable-flatlist';

// Utils
import makeStyles from './styles';
import i18n, { t } from '@app/i18n';
import { useAppThunkDispatch } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { formatAmount, formatDate, getCategory } from '@shared/utils';
import { itineraryActions } from '@redux/itinerary/slice';
import { deleteTripPlaceAction } from '@redux/itinerary/thunks';

// Interfaces
import { ItineraryItemProps, ItineraryProps } from '@shared/types/Itinerary';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import Icon from '@shared/components/Icon';

interface TripModificationItemProps {
  index: number;
  tripId: string;
  location: object;
  item: ItineraryProps;
}

// Component
const TripModificationItem: React.FC<TripModificationItemProps> = ({
  index,
  tripId,
  location,
  item: { date, list }
}) => {
  // Redux
  const dispatch = useDispatch();
  const dispatchThunk = useAppThunkDispatch();

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const deleteSheetRef = useRef<BottomSheetMethods>();

  const [itineraryData, setItineraryData] = useState<ItineraryItemProps[]>(list);
  const [deletionIndex, setDeletionIndex] = useState<number>(0);

  // Callbacks
  const handleDeletePress = useCallback((index: number) => {
    setDeletionIndex(index);
    deleteSheetRef.current?.expand();
  }, []);

  const handleDeleteSheetClose = useCallback(() => deleteSheetRef.current?.close(), []);

  const handleOnDragEnd = useCallback(
    (data: ItineraryItemProps[]) => {
      setItineraryData(data);
      dispatch(itineraryActions.setPlaces({ date, places: data }));
    },
    [date, dispatch]
  );

  const handleDelete = useCallback(() => {
    dispatchThunk(deleteTripPlaceAction({ tripId, placeId: itineraryData[deletionIndex]?._id, date }));
    dispatch(itineraryActions.setPlaces({ date, places: itineraryData.filter((_, index) => index !== deletionIndex) }));

    handleDeleteSheetClose();
  }, [date, deletionIndex, dispatch, dispatchThunk, handleDeleteSheetClose, itineraryData, tripId]);

  const handleAddMorePress = useCallback(
    () => navigation.navigate('EventAddition', { tripId, date, location }),
    [date, location, navigation, tripId]
  );

  // Effects
  useEffect(() => {
    setItineraryData(list);
  }, [list]);

  // Renderers
  const renderItem = ({
    item,
    drag,
    isActive,
    hasActions = true,
    ...props
  }: {
    item: ItineraryItemProps;
    drag: () => number | undefined;
    isActive: boolean;
    hasActions: boolean;
  }) => {
    if (item) {
      const category = item?.types && _.capitalize(getCategory(item?.types));

      return (
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive || !_.isFunction(drag)}
          style={[styles.rowContainer, isActive && styles.activeRowContainer]}>
          {hasActions && <Icon name="drag" color={theme.dark ? theme.colors.secondary : theme.colors.gray[900]} />}

          <FastImage source={{ uri: item?.photoUrl, cache: FastImage.cacheControl.immutable }} style={styles.image} />

          <View style={styles.content}>
            <Text variant="h6" style={styles.name}>
              {item?.displayName}
            </Text>
            {item?.rating ? (
              <View style={styles.ratingContainer}>
                <Text variant="medium" style={styles.ratingText}>
                  {item?.rating}
                </Text>
                <StarRatingDisplay rating={item?.rating} starSize={14} starStyle={{ marginHorizontal: 0 }} />
                <Text variant="small" style={styles.ratingText}>
                  ({formatAmount(item?.userRatingsTotal)})
                </Text>
              </View>
            ) : null}
            <Text variant="medium" style={styles.type}>
              {category}
            </Text>
          </View>

          {hasActions && (
            <IconButton
              size={ms(18)}
              onPress={() => handleDeletePress(props?.getIndex())}
              icon={() => (
                <Icon
                  size={ms(20)}
                  name="trashBin"
                  color={theme.colors.red}
                  style={{ transform: [{ rotateY: i18n.locale === 'ar' ? '180deg' : '0deg' }] }}
                />
              )}
            />
          )}
        </TouchableOpacity>
      );
    }

    return null;
  };

  const renderDeleteModal = () => (
    <CustomBottomSheet
      sheetRef={deleteSheetRef}
      titleColor={theme.colors.red}
      onClose={handleDeleteSheetClose}
      title={t('trip_modifcation.delete_event')}
      primaryBtnProps={{ title: t('common.yes_delete'), onPress: handleDelete }}
      secondaryBtnProps={{ title: t('common.cancel'), onPress: handleDeleteSheetClose }}>
      {renderItem({ item: itineraryData?.[deletionIndex], drag: () => undefined, isActive: false, hasActions: false })}
    </CustomBottomSheet>
  );

  return (
    <>
      <View key={date}>
        <Text variant="h5" style={styles.date}>
          Day {index + 1}: {formatDate(date, 'MMMM Do')}
        </Text>

        {itineraryData && (
          <NestableDraggableFlatList
            data={itineraryData}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            onDragEnd={({ data }) => handleOnDragEnd(data)}
            keyExtractor={(_, index) => `draggable-item-${index}`}
          />
        )}

        <RegularButton
          variant="secondary"
          style={styles.addEventBtn}
          onPress={handleAddMorePress}
          title={t('trip_addition.add_more_events')}
        />
      </View>

      {renderDeleteModal()}
    </>
  );
};

export default TripModificationItem;
