// Packages
import React, { useCallback } from 'react';

// Components
import { ScrollView } from 'react-native';
import PopularList from './components/PopularList';
import SearchInput from './components/SearchInput';

// Utilities
import makeStyles from './styles';
import { useNavigation } from '@react-navigation/native';

// Interfaces
interface HomeScreenProps {}

// Component
const HomeScreen: React.FC<HomeScreenProps> = () => {
  // Statics
  const styles = makeStyles();
  const navigation = useNavigation();

  // Callbacks
  const handleSearchSubmit = useCallback((city: any) => {
    console.info('[handleSearchSubmit] :: ', city);
  }, []);

  const handleInputFocus = useCallback(() => navigation.navigate('Search'), [navigation]);

  // Renderers
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <SearchInput
        disabled
        onPressIn={handleInputFocus}
        inputStyle={styles.searchInput}
        handleSubmit={handleSearchSubmit}
      />
      <PopularList type="destinations" orientation="horizontal" isTitleShown />
      <PopularList type="articles" orientation="horizontal" isTitleShown />
    </ScrollView>
  );
};

export default HomeScreen;
