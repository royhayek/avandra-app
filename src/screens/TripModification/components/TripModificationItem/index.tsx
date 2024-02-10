// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';

// Components
import FastImage from 'react-native-fast-image';
import { TouchableOpacity, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { DeleteIcon, DragIcon } from '@shared/assets/icons';
import CustomBottomSheet from '@shared/components/BottomSheet';
import { NestableDraggableFlatList } from 'react-native-draggable-flatlist';

// Utils
import makeStyles from './styles';
import i18n, { t } from '@app/i18n';
import { formatDate } from '@shared/utils';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import RegularButton from '@shared/components/Buttons/Regular';

interface TripModificationItemProps {
  item: any;
  index: number;
}

// Component
const TripModificationItem: React.FC<TripModificationItemProps> = ({ index, item: { date, list } }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const navigation = useNavigation();

  const deleteSheetRef = useRef<BottomSheetMethods>();

  const [itineraryData, setItineraryData] = useState(list);

  // Callbacks
  const handleOnDragEnd = useCallback((data: []) => setItineraryData(data), []);

  const handleDeletePress = useCallback(() => deleteSheetRef.current?.expand(), []);

  const handleDeleteSheetClose = useCallback(() => deleteSheetRef.current?.close(), []);

  const handleAddMorePress = useCallback(() => {
    console.debug('Add more events');
    navigation.navigate('EventAddition');
  }, [navigation]);

  const handleDelete = useCallback(() => {
    handleDeleteSheetClose();
  }, [handleDeleteSheetClose]);
  // Renderer vars

  // Renders
  const renderDeleteModal = () => (
    <CustomBottomSheet
      title={t('trip_modifcation.delete_event')}
      sheetRef={deleteSheetRef}
      titleColor={theme.colors.red}
      onClose={handleDeleteSheetClose}
      primaryBtnProps={{ title: t('common.yes_delete'), onPress: handleDelete }}
      secondaryBtnProps={{ title: t('common.cancel'), onPress: handleDeleteSheetClose }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FastImage source={{ uri: list[0]?.image }} style={styles.image} />

        <View style={styles.content}>
          <Text variant="h6" style={styles.name}>
            {list[0]?.name}
          </Text>
        </View>
      </View>
    </CustomBottomSheet>
  );

  return (
    <>
      <View key={date}>
        <Text variant="h5" style={styles.date}>
          Day {index + 1}: {formatDate(date, 'MMMM Do')}
        </Text>

        <NestableDraggableFlatList
          data={itineraryData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          onDragEnd={({ data }) => handleOnDragEnd(data)}
          keyExtractor={(_, index) => `draggable-item-${index}`}
          renderItem={({ item, drag, isActive }) => (
            <TouchableOpacity
              style={[styles.rowContainer, isActive && styles.activeRowContainer]}
              onLongPress={drag}
              disabled={isActive}>
              <DragIcon fill={theme.dark ? theme.colors.secondary : theme.colors.gray[900]} />

              <FastImage source={{ uri: item?.image }} style={styles.image} />

              <View style={styles.content}>
                <Text variant="h6">{item?.name}</Text>
                <Text variant="medium" style={styles.type}>
                  {item?.type}
                </Text>
              </View>

              <IconButton
                size={ms(18)}
                onPress={handleDeletePress}
                icon={() => (
                  <DeleteIcon
                    fill={theme.dark ? theme.colors.white : theme.colors.gray[900]}
                    style={{ transform: [{ rotateY: i18n.locale === 'ar' ? '180deg' : '0deg' }] }}
                  />
                )}
              />
            </TouchableOpacity>
          )}
        />
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
