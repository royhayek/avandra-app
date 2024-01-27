// Packages
import React, { useCallback } from 'react';

// Components
import { ScrollView } from 'react-native';
import PopularList from './components/PopularList';
import DestinationInput from './components/DestinationInput';

// Utilities
import makeStyles from './styles';

// Interfaces
interface HomeScreenProps {}

// Component
const HomeScreen: React.FC<HomeScreenProps> = () => {
  // Statics
  const styles = makeStyles();

  // Callbacks
  const handleSearchSubmit = useCallback((city: any) => {
    console.info('[handleSearchSubmit] :: ', city);
  }, []);

  // Renderers
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <DestinationInput handleSubmit={handleSearchSubmit} />
      <PopularList type="destinations" orientation="horizontal" isTitleShown />
      <PopularList type="articles" orientation="horizontal" isTitleShown />
    </ScrollView>
  );
};

export default HomeScreen;
