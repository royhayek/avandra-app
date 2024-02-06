// Packages
import _ from 'lodash';
import { ms, mvs } from 'react-native-size-matters';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Components
import FastImage from 'react-native-fast-image';
import HistoryCard from './components/HistoryCard';
import { SegmentedButtons, Text } from 'react-native-paper';
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
    !isRefreshing && setLoading(true);

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
  const segmentedButtonStyle = useMemo(
    () => ({
      uncheckedColor: theme.dark ? theme.colors.gray[500] : theme.colors.gray[500],
      labelStyle: { fontFamily: theme.fonts.large.fontFamily, fontSize: theme.fonts.large.fontSize },
      style: {
        borderWidth: 0.5,
        borderRadius: ms(12),
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

  const renderList = () => (
    <FlatList
      data={savedTrips}
      refreshing={refreshing}
      keyExtractor={(item) => item.id}
      refreshControl={renderRefreshControl}
      ListHeaderComponent={renderActiveTrip}
      contentContainerStyle={styles.listContent}
      renderItem={({ item, index }) => <HistoryCard small item={item} index={index} refresh={refreshSavedTrips} />}
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
