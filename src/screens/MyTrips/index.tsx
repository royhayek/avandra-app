// Packages
import _ from 'lodash';
import { mvs } from 'react-native-size-matters';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// Components
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import HistoryCard from './components/HistoryCard';
import ToggleButtons from '@shared/components/ToggleButtons';
import { FlatList, RefreshControl, View } from 'react-native';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { TranslateOptions } from 'i18n-js';
import { useAppTheme } from '@shared/assets/theme';
import { savedTrips as savedTripsData } from './data';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`trip.${key}`, options);

const HistoryScreen = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [loading, setLoading] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [savedTrips, setSavedTrips] = useState(savedTripsData);

  // Callbacks
  const refreshSavedTrips = useCallback((isRefreshing?: boolean) => {
    // !isRefreshing && setLoading(true);
    // getConversations().then(() => {
    //   setSavedTrips(savedTripsData);
    //   setRefreshing(false);
    //   !isRefreshing && setLoading(false);
    // });
  }, []);

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
        onRefresh={() => refreshSavedTrips(true)}
        tintColor={theme.dark ? theme.colors.white : theme.colors.black}
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

        <HistoryCard isLoading={loading} item={savedTrips[0]} index={0} refresh={refreshSavedTrips} />

        <ToggleButtons
          active={selectedTab}
          buttons={segmentedButtons}
          setActive={setSelectedTab}
          containerStyle={styles.toggleButtons}
        />
      </>
    ),
    [loading, savedTrips, refreshSavedTrips, selectedTab, segmentedButtons, styles.toggleButtons]
  );

  const renderList = () => (
    <FlatList
      data={savedTrips}
      refreshing={refreshing}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      refreshControl={renderRefreshControl}
      ListHeaderComponent={renderActiveTrip}
      contentContainerStyle={styles.listContent}
      renderItem={({ item, index }) => (
        <HistoryCard isLoading={loading} small item={item} index={index} refresh={refreshSavedTrips} />
      )}
    />
  );

  const renderEmptyLayout = () => (
    <View style={styles.emptyContainer}>
      <FastImage
        resizeMode="contain"
        style={styles.emptyImage}
        source={
          theme.dark
            ? require('@shared/assets/images/EmptyTripsDark.png')
            : require('@shared/assets/images/EmptyTripsLight.png')
        }
      />
      <Text variant="h3" style={styles.emptyTitle}>
        Empty
      </Text>
      <Text variant="xLarge" style={styles.emptyDesc}>
        Let our AI create personalized trip plans just for you. Start planning now!
      </Text>
      <RegularButton title="Search Trip" style={styles.searchButton} />
    </View>
  );

  if (_.isEmpty(savedTrips)) {
    return renderEmptyLayout();
  }

  return <View style={styles.container}>{renderList()}</View>;
};

export default HistoryScreen;
