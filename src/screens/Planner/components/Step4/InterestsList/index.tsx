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
  return (
    <FlatList
      numColumns={5}
      data={INTEREST_LIST}
      style={styles.flatList}
      keyExtractor={(item) => item.key}
      columnWrapperStyle={styles.listColumnWrapper}
      renderItem={({ item }) => {
        const selected = _.includes(value, item.title);
        return (
          <Chip
            mode="outlined"
            selected={selected}
            style={[styles.chip, { borderColor: selected ? theme.colors.primary : theme.colors.lightGray }]}
            onPress={() => setValue(item.title)}
            selectedColor={selected ? theme.colors.primary : theme.dark ? theme.colors.white : theme.colors.black}>
            {item.title}
          </Chip>
        );
      }}
    />
  );
};

export default InterestsList;
