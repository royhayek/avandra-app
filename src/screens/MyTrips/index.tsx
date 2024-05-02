// Packages
import _ from 'lodash';
import { mvs } from 'react-native-size-matters';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// Components
import { Text } from 'react-native-paper';
import HistoryCard from './components/HistoryCard';
import ToggleButtons from '@shared/components/ToggleButtons';
import { FlatList, RefreshControl, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { TranslateOptions } from 'i18n-js';
import { getUserId } from '@redux/user/slice';
import { useAppTheme } from '@shared/assets/theme';
import { getUserTripsAction } from '@redux/itinerary/thunks';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { selectUserItineraries, selectUserItinerariesLoading } from '@redux/itinerary/slice';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`trip.${key}`, options);

const HistoryScreen = () => {
  // Redux
  const dispatchThunk = useAppThunkDispatch();

  const userId = useAppSelector(getUserId);
  const trips = useAppSelector(selectUserItineraries);
  const isLoadingTrips = useAppSelector(selectUserItinerariesLoading);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const activeTrip = _.find(trips, { status: 'active' });
  const hasActiveTrip = !!activeTrip;

  const filteredTrips = _.filter(trips, { status: selectedTab });

  // Callbacks
  const refreshSavedTrips = useCallback(async () => {
    await dispatchThunk(getUserTripsAction(userId));
    setRefreshing(false);
  }, [dispatchThunk, userId]);

  // Effects
  useEffect(() => {
    refreshSavedTrips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renderer Vars
  const segmentedButtons = useMemo(
    () => [
      { key: 'upcoming', title: _t('upcoming') },
      { key: 'expired', title: _t('expired') }
    ],
    []
  );

  // Renderers
  const renderRefreshControl = useMemo(
    () => (
      <RefreshControl
        refreshing={refreshing}
        onRefresh={refreshSavedTrips}
        tintColor={theme.dark ? theme.colors.white : theme.colors.black}
      />
    ),
    [refreshSavedTrips, refreshing, theme.colors.black, theme.colors.white, theme.dark]
  );

  const renderListHeader = useMemo(
    () => (
      <>
        {(hasActiveTrip || isLoadingTrips) && (
          <>
            <Text variant="h4" style={{ marginBottom: mvs(16) }}>
              {_t('active_trip')}
            </Text>

            <HistoryCard isLoading={isLoadingTrips} item={activeTrip} index={0} />
          </>
        )}

        <ToggleButtons
          active={selectedTab}
          buttons={segmentedButtons}
          setActive={setSelectedTab}
          containerStyle={styles.toggleButtons}
        />

        {isLoadingTrips && <HistoryCard isLoading={isLoadingTrips} small />}
      </>
    ),
    [hasActiveTrip, isLoadingTrips, activeTrip, selectedTab, segmentedButtons, styles.toggleButtons]
  );

  const renderList = () => (
    <FlatList
      data={filteredTrips}
      refreshing={refreshing}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      refreshControl={renderRefreshControl}
      ListHeaderComponent={renderListHeader}
      contentContainerStyle={styles.listContent}
      renderItem={({ item, index }) => <HistoryCard isLoading={isLoadingTrips} small item={item} index={index} />}
    />
  );

  return <View style={styles.container}>{renderList()}</View>;
};

export default HistoryScreen;
