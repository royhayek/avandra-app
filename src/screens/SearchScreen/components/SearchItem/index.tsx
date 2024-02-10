// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { ms } from 'react-native-size-matters';

// Components
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity, View } from 'react-native';

// Utils
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { useNavigation } from '@react-navigation/native';

// Interfaces
interface SearchItemProps {
  item: any;
}

// Component
const SearchItem: React.FC<SearchItemProps> = ({ item }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const navigation = useNavigation();

  // Callbacks
  const handleItemPress = useCallback(() => navigation.navigate('Planner'), [navigation]);

  // Renders
  return (
    <TouchableOpacity onPress={handleItemPress} style={styles.rowContainer}>
      <FastImage source={{ uri: item?.image }} style={styles.image} />

      <View style={styles.content}>
        <Text variant="h6" style={styles.country}>
          {item?.country}
        </Text>
        <Text variant="large" style={styles.city}>
          {item?.city}
        </Text>
      </View>
      <Ionicons
        size={ms(18)}
        name="chevron-forward"
        style={styles.arrowIcon}
        color={theme.dark ? theme.colors.secondary : theme.colors.black}
      />
    </TouchableOpacity>
  );
};

export default SearchItem;
