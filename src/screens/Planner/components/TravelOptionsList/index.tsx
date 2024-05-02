// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { Text } from 'react-native-paper';
import { FlatList, TouchableOpacity, View } from 'react-native';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TravelOptionProps } from '@shared/types/TravelOption';

interface TravelOptionsListProps {
  list: TravelOptionProps[];
  value: string;
  setValue: (value: string) => void;
}

// Component
const TravelOptionsList: React.FC<TravelOptionsListProps> = ({ list, value, setValue }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  const renderItem = (item: TravelOptionProps) => {
    const isActive = _.isEqual(value, item._id);

    return (
      <TouchableOpacity onPress={() => setValue(item._id)} style={[styles.button, isActive && styles.activeButton]}>
        <View>
          <View style={styles.nameAndIcon}>
            <Text variant="h5">{item.title}</Text>
            <Text variant="h5">{item.icon}</Text>
          </View>
          <Text variant="medium" style={styles.description}>
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatList}
      renderItem={({ item }) => renderItem(item)}
    />
  );
};

export default TravelOptionsList;
