// Packages
import { ms, mvs } from 'react-native-size-matters';
import { Ionicons, Octicons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Components
import FastImage from 'react-native-fast-image';
import HistoryCard from './components/HistoryCard';
import { FlatList, RefreshControl, View } from 'react-native';
import RegularButton from '@shared/components/Buttons/Regular';
import CustomBottomSheet from '@shared/components/BottomSheet';
import { ActivityIndicator, IconButton, SegmentedButtons, Text } from 'react-native-paper';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { TranslateOptions } from 'i18n-js';
import { useAppTheme } from '@shared/assets/theme';
import { savedTrips as savedTripsData } from './data';
import { deleteAllConversations, getConversations } from '@shared/services/localdb';

// Interfaces
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`trip.${key}`, options);

const HistoryScreen = ({ navigation }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const bottomSheetRef = useRef<BottomSheetMethods>();

  const [loading, setLoading] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [savedTrips, setSavedTrips] = useState(savedTripsData);

  const snapPoints = useMemo(() => ['25%'], []);

  // Callbacks
  const refreshSavedTrips = useCallback((isRefreshing?: boolean) => {
    !isRefreshing && setLoading(true);

    getConversations().then(() => {
      setSavedTrips(savedTripsData);
      setRefreshing(false);
      !isRefreshing && setLoading(false);
    });
  }, []);

  const handleSheetClose = useCallback(() => bottomSheetRef.current?.close(), []);

  const handleDeletePress = useCallback(() => bottomSheetRef.current?.expand(), []);

  const handleDeleteAllHistory = useCallback(async () => {
    await deleteAllConversations().then(() => console.debug('History Deleted Successfully'));
    refreshSavedTrips(false);
    handleSheetClose();
  }, [handleSheetClose, refreshSavedTrips]);

  const renderDeleteIcon = useCallback(
    () =>
      savedTrips?.length > 0 && (
        <Octicons name="trash" size={22} color={theme.dark ? theme.colors.white : theme.colors.black} />
      ),
    [savedTrips?.length, theme.colors.black, theme.colors.white, theme.dark]
  );

  const renderHeaderRight = useCallback(
    () => <IconButton size={22} onPress={handleDeletePress} icon={renderDeleteIcon} />,
    [handleDeletePress, renderDeleteIcon]
  );

  // Effects
  useEffect(() => {
    navigation.setOptions({ headerRight: renderHeaderRight });
  }, [navigation, renderHeaderRight]);

  useEffect(() => {
    refreshSavedTrips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renderer Vars
  const segmentedButtonStyle = useMemo(
    () => ({
      labelStyle: { ...theme.fonts.large },
      uncheckedColor: theme.dark ? theme.colors.gray[500] : theme.colors.gray[500],
      style: {
        borderRadius: ms(12),
        borderWidth: 0.5,
        borderColor: theme.dark ? theme.colors.gray[500] : theme.colors.gray[500]
      }
    }),
    [theme.colors.gray, theme.dark, theme.fonts.large]
  );

  const segmentedButtons = useMemo(
    () => [
      {
        value: 'upcoming',
        label: _t('upcoming'),
        ...segmentedButtonStyle
      },
      {
        value: 'expired',
        label: _t('expired'),
        ...segmentedButtonStyle
      }
    ],
    [segmentedButtonStyle]
  );

  // Renderers
  const renderRefreshControl = useMemo(
    () => (
      <RefreshControl
        refreshing={refreshing}
        tintColor={theme.dark ? theme.colors.white : theme.colors.black}
        onRefresh={() => refreshSavedTrips(true)}
      />
    ),
    [refreshSavedTrips, refreshing, theme.colors.black, theme.colors.white, theme.dark]
  );

  const renderActiveTrip = useMemo(
    () => (
      <>
        <Text variant="h4" style={{ marginBottom: mvs(16) }}>
          {_t('active_trip')}
        </Text>
        <HistoryCard item={savedTrips[0]} index={0} refresh={refreshSavedTrips} />
        <SegmentedButtons
          density="small"
          value={selectedTab}
          buttons={segmentedButtons}
          onValueChange={setSelectedTab}
          style={styles.segmentedButtons}
        />
      </>
    ),
    [savedTrips, refreshSavedTrips, selectedTab, segmentedButtons, styles.segmentedButtons]
  );

  const renderList = useMemo(
    () => (
      <FlatList
        data={savedTrips}
        refreshing={refreshing}
        keyExtractor={(item) => item.id}
        refreshControl={renderRefreshControl}
        ListHeaderComponent={renderActiveTrip}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => <HistoryCard small item={item} index={index} refresh={refreshSavedTrips} />}
      />
    ),
    [savedTrips, refreshing, renderActiveTrip, renderRefreshControl, styles.listContent, refreshSavedTrips]
  );

  const renderLoadingOrEmpty = useMemo(
    () => (
      <View style={styles.emptyContainer}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <FastImage source={require('../../../assets/empty-history.png')} style={styles.emptyImage} />
            <Text variant="bodyMedium" style={styles.emptyText}>
              {_t('no_history_found')}
            </Text>
          </>
        )}
      </View>
    ),
    [loading, styles.emptyContainer, styles.emptyImage, styles.emptyText]
  );

  const renderConfBottomSheet = useMemo(
    () => (
      <CustomBottomSheet sheetRef={bottomSheetRef} snapPoints={snapPoints} onClose={handleSheetClose}>
        <Text variant="bodyLarge" style={styles.modalTitle}>
          {_t('delete_your_history')}
        </Text>
        <View style={styles.modalButtons}>
          <RegularButton
            title={_t('delete')}
            onPress={handleDeleteAllHistory}
            startIcon={<Octicons name="trash" size={ms(18)} color={theme.colors.white} />}
          />
          <RegularButton
            title={_t('cancel')}
            startIcon={<Ionicons name="close" size={ms(18)} color={theme.colors.white} />}
            onPress={handleSheetClose}
          />
        </View>
      </CustomBottomSheet>
    ),
    [handleDeleteAllHistory, handleSheetClose, snapPoints, styles.modalButtons, styles.modalTitle, theme.colors.white]
  );

  return (
    <View style={styles.container}>
      {savedTrips?.length > 0 ? renderList : renderLoadingOrEmpty}
      {renderConfBottomSheet}
    </View>
  );
};

export default HistoryScreen;
