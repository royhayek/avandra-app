// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { FlatList } from 'react-native';
import { Chip } from 'react-native-paper';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface InterestsListProps {
  value: string[];
  setValue: (value: string) => void;
}

// Component
const InterestsList: React.FC<InterestsListProps> = ({ data, disabled, value, setValue }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  const renderItem = (item) => {
    const selected = _.includes(value, item);

    return (
      <Chip
        mode="outlined"
        disabled={disabled}
        selected={selected}
        showSelectedCheck={false}
        onPress={() => setValue(item)}
        style={[styles.chip, selected && styles.activeChip]}
        textStyle={[styles.textStyle, selected && styles.activeTextStyle]}
        selectedColor={selected ? theme.colors.primary : theme.dark ? theme.colors.white : theme.colors.black}>
        {item.title}
      </Chip>
    );
  };

  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.flatList}
      columnWrapperStyle={styles.listColumnWrapper}
      renderItem={({ item }) => renderItem(item)}
    />
  );
};

export default InterestsList;
