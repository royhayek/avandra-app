// Packages
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Text } from 'react-native-paper';
import { FlatList, View } from 'react-native';
import SearchItem from './components/SearchItem';
import BackButton from '@shared/components/Buttons/Back';
import SearchInput from '@shared/components/SearchInput';
import { SafeAreaView } from 'react-native-safe-area-context';

// Utils
import makeStyles from './styles';
import { dummy_search } from './data';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces

// Component
const SearchScreen = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [searchInput, setSearchInput] = useState('');

  // Callbacks
  const handleTextChange = React.useCallback(async (text: string) => {
    setSearchInput(text);
  }, []);

  // Effects
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Renders
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton style={styles.backBtn} />
        <SearchInput
          value={searchInput}
          onChange={handleTextChange}
          inputStyle={styles.searchInput}
          containerStyle={styles.searchContainer}
        />
      </View>

      <View style={styles.content}>
        <Text variant="h5" style={styles.title}>
          Most Popular Searches
        </Text>
        <FlatList
          data={dummy_search}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item, index }) => <SearchItem key={index} item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
