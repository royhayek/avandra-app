// Packages
import _ from 'lodash';
import moment from 'moment';
import React, { useMemo } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { ms } from 'react-native-size-matters';

// Components
import { Text } from 'react-native-paper';
import { FlatList, TouchableOpacity, View } from 'react-native';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface MonthPickerProps {
  value: string;
  setValue: (value: string) => void;
}

// Component
const MonthPicker: React.FC<MonthPickerProps> = ({ value, setValue }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderer Vars
  const upcomingMonths = useMemo(() => {
    const months = [];
    const currentMonth = moment();
    const endMonth = moment().add(11, 'month');

    while (endMonth.diff(currentMonth, 'months') >= 0) {
      months.push(currentMonth.format('MMMM'));
      currentMonth.add(1, 'month');
    }

    return months;
  }, []);

  // Renderers
  return (
    <FlatList
      horizontal
      data={upcomingMonths}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        const isActive = _.isEqual(value, item);

        return (
          <TouchableOpacity onPress={() => setValue(item)}>
            <View style={[styles.container, isActive ? styles.activeContainer : {}]}>
              <Fontisto
                name="date"
                size={ms(14)}
                color={isActive ? theme.colors.primary : theme.dark ? theme.colors.white : theme.colors.black}
              />
              <Text variant="large" style={[styles.title, isActive ? styles.activeTitle : {}]}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default MonthPicker;
