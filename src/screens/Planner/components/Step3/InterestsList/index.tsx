// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { FlatList } from 'react-native';
import { Chip } from 'react-native-paper';

// Utilities
import makeStyles from './styles';
import { INTEREST_LIST } from '../data';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface InterestsListProps {
  value: string[];
  setValue: (value: string) => void;
}

// Component
const InterestsList: React.FC<InterestsListProps> = ({ value, setValue }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  const renderItem = (item) => {
    const selected = _.includes(value, item.title);

    return (
      <Chip
        mode="outlined"
        selected={selected}
        showSelectedCheck={false}
        onPress={() => setValue(item.title)}
        style={[styles.chip, selected && styles.activeChip]}
        textStyle={[styles.textStyle, selected && styles.activeTextStyle]}
        selectedColor={selected ? theme.colors.primary : theme.dark ? theme.colors.white : theme.colors.black}>
        {item.title}
      </Chip>
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={INTEREST_LIST}
      contentContainerStyle={styles.flatList}
      keyExtractor={(item) => item.key}
      columnWrapperStyle={styles.listColumnWrapper}
      renderItem={({ item }) => renderItem(item)}
    />
  );
};

export default InterestsList;
