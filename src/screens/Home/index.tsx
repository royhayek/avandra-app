// Packages
import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

// Components
import { ScrollView } from 'react-native';
import PopularList from './components/PopularList';
import SearchInput from '@shared/components/SearchInput';

// Utilities
import makeStyles from './styles';

// Interfaces
interface HomeScreenProps {}

// Component
const HomeScreen: React.FC<HomeScreenProps> = () => {
  // Statics
  const styles = makeStyles();

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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
        handleSubmit={handleSearchSubmit}
        containerStyle={styles.containerStyle}
      />
      <PopularList type="destinations" orientation="horizontal" isTitleShown />
      <PopularList type="articles" orientation="horizontal" isTitleShown />
    </ScrollView>
  );
};

export default HomeScreen;
