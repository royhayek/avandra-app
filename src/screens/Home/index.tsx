// Packages
import React, { useCallback } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';

// Components
import { ScrollView } from 'react-native';
import PopularList from './components/PopularList';
import SearchInput from './components/SearchInput';

// Utilities
import makeStyles from './styles';

// Interfaces
interface HomeScreenProps {}

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Component
const HomeScreen: React.FC<HomeScreenProps> = () => {
  // Statics
  const styles = makeStyles();

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // Callbacks
  const handleInputFocus = useCallback(() => navigation.navigate('Search'), [navigation]);

  // Renderers
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <SearchInput disabled handleSubmit={null} onPressIn={handleInputFocus} containerStyle={styles.containerStyle} />
      <PopularList type="destinations" orientation="horizontal" isTitleShown />
      <PopularList type="articles" orientation="horizontal" isTitleShown />
    </ScrollView>
  );
};

export default HomeScreen;
