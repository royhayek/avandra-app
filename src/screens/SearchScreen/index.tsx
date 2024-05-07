// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { ms, mvs } from 'react-native-size-matters';
import React, { useCallback, useEffect, useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GooglePlaceData, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// Components
import { Text } from 'react-native-paper';
import { FlatList, View } from 'react-native';
import SearchItem from './components/SearchItem';
import Shimmer from '@shared/components/Shimmer';
import BackButton from '@shared/components/Buttons/Back';
import { SafeAreaView } from 'react-native-safe-area-context';

// Utilities
import i18n from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { plannerActions } from '@redux/planner/slice';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { getRecentSearchesAction, incrementSearchesAction } from '@redux/destination/thunks';
import { selectRecentSearches, selectRecentSearchesLoading } from '@redux/destination/slice';
import PlacesAutocomplete from '@shared/components/PlacesAutocomplete';

// Interfaces

// Component

const SearchScreen = () => {
  // Redux
  const dispatch = useDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const recentSearches = useAppSelector(selectRecentSearches);
  const isLoadingRecentSearches = useAppSelector(selectRecentSearchesLoading);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [searchInput, setSearchInput] = useState('');

  // Callbacks
  const handleTextChange = React.useCallback(async (text: string) => {
    setSearchInput(text);
  }, []);

  const handlePlacePress = useCallback(
    (data: GooglePlaceData) => {
      if (data && data.structured_formatting) {
        const name = data.structured_formatting.main_text;
        const country = data.terms[data.terms.length - 1].value;

        dispatchThunk(incrementSearchesAction({ name, country }));
        dispatchThunk(getRecentSearchesAction());

        dispatch(plannerActions.setPayload({ destination: { name, country } }));
        navigation.navigate('Planner', { destination: { name, country } });
      }
    },
    [dispatch, dispatchThunk, navigation]
  );

  // Effects
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    _.isEmpty(recentSearches) && dispatchThunk(getRecentSearchesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renders
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton style={styles.backBtn} />

        <View style={styles.searchContainer}>
          <PlacesAutocomplete
            query={{ type: '(cities)' }}
            handlePlacePress={handlePlacePress}
            handleTextChange={handleTextChange}
          />
        </View>
      </View>

      <View style={styles.content}>
        {_.isEmpty(searchInput) && (
          <>
            <Text variant="h5" style={styles.title}>
              Most Popular Searches
            </Text>

            {isLoadingRecentSearches ? (
              <View style={styles.shimmerView}>
                {_.times(5, (i) => (
                  <Shimmer key={i} style={[styles.shimmerItem, { width: i % 2 ? 180 : i % 3 ? 220 : 200 }]} />
                ))}
              </View>
            ) : (
              <FlatList
                style={styles.list}
                data={recentSearches}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item, index }) => <SearchItem key={index} item={item} />}
              />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
