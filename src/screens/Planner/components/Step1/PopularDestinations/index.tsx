// Packages
import React, { useEffect } from 'react';

// Components
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { FlatList, TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { fetchDestinations } from '@redux/destinations/thunks';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { selectPopularDestinations } from '@redux/destinations/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface PopularDestinationsProps {
  handleSubmit: (name: string) => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.${key}`, options);

const PopularDestinations: React.FC<PopularDestinationsProps> = ({ handleSubmit }) => {
  // Redux
  const dispatch = useAppThunkDispatch();

  const popularDestinations = useAppSelector(selectPopularDestinations);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Effects
  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  // Renderers
  return (
    <View style={styles.flex1}>
      <Text variant="titleMedium" style={styles.popularDestText}>
        {_t('popular_destinations')}
      </Text>
      <FlatList
        numColumns={2}
        data={popularDestinations}
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={styles.listColumnWrapper}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <TouchableOpacity key={item._id} onPress={() => handleSubmit(item.name)} style={styles.button}>
            <FastImage resizeMode="cover" style={styles.image} source={{ uri: `http://localhost:4000/uploads/destination/${item.image}` }} />
            <Text variant="titleSmall" style={styles.name}>
              {item.name}
            </Text>
            <Text variant="labelMedium" style={styles.country}>
              {item.country}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PopularDestinations;
