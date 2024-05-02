// Packages
import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GooglePlaceData, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// Components
import { Text } from 'react-native-paper';
import { FlatList, View } from 'react-native';
import SearchItem from './components/SearchItem';
import BackButton from '@shared/components/Buttons/Back';
import { SafeAreaView } from 'react-native-safe-area-context';

// Utilities
import makeStyles from './styles';
import getEnvVars from 'environment';
import { dummy_search } from './data';
import { useAppTheme } from '@shared/assets/theme';
import { ms, mvs } from 'react-native-size-matters';
import i18n from '@app/i18n';
import { useDispatch } from 'react-redux';
import { plannerActions } from '@redux/planner/slice';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { getRecentSearchesAction, incrementSearchesAction } from '@redux/destination/thunks';
import { selectRecentSearches, selectRecentSearchesLoading } from '@redux/destination/slice';
import Shimmer from '@shared/components/Shimmer';

// Interfaces

// Component
const { googleMapsApiKey } = getEnvVars();

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

        <GooglePlacesAutocomplete
          placeholder="Search"
          enablePoweredByContainer={false}
          textInputProps={{
            onChangeText: handleTextChange
          }}
          styles={{
            container: {
              flex: 1,
              marginTop: mvs(8),
              marginEnd: ms(20)
            },
            textInput: {
              ...theme.fonts.xLarge,
              flex: 1,
              minHeight: mvs(50),
              paddingBottom: mvs(10),
              paddingHorizontal: 0,
              backgroundColor: 'transparent',
              textAlign: i18n.locale === 'ar' ? 'right' : 'left'
            },
            textInputContainer: {
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: ms(20),
              borderRadius: theme.roundness,
              borderWidth: theme.dark ? ms(1) : 0,
              borderColor: theme.dark ? theme.colors.dark[3] : 'transparent',
              backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
            }
          }}
          onPress={handlePlacePress}
          query={{
            key: googleMapsApiKey,
            language: 'en',
            type: '(cities)'
          }}
        />
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
