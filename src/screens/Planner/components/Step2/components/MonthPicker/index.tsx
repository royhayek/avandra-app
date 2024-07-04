// Packages
import _ from 'lodash';
import moment from 'moment';
import { Fontisto } from '@expo/vector-icons';
import { ms } from 'react-native-size-matters';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';

// Components
import { Text } from 'react-native-paper';
import { FlatList, TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { selectPlannerPayload } from '@redux/planner/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface MonthPickerProps {
  value: string;
  setValue: (value: string) => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step2.${key}`, options);

const MonthPicker: React.FC<MonthPickerProps> = ({ value, setValue }) => {
  // Redux
  const plannerPayload = useAppSelector(selectPlannerPayload);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const listRef = useRef<FlatList>(null);

  const upcomingMonths = useMemo(() => {
    const months = [];
    const currentMonth = moment();
    const endMonth = moment().add(11, 'month');

    while (endMonth.diff(currentMonth, 'months') >= 0) {
      months.push(currentMonth.format('MMMM').toLocaleLowerCase());
      currentMonth.add(1, 'month');
    }

    return months;
  }, []);

  // Callbacks
  const onScrollToIndexFailed = useCallback((info: { index: number }) => {
    // Wait for the list to render then scroll to the selected month
    const wait = new Promise((resolve) => setTimeout(resolve, 500));

    wait.then(() => {
      listRef.current?.scrollToIndex({ index: info.index, animated: true, viewPosition: 0.5 });
    });
  }, []);

  // Effects
  useEffect(() => {
    const { selectedMonth } = plannerPayload;

    // Scroll to selected month if exists
    if (selectedMonth && listRef.current) {
      const index = _.indexOf(upcomingMonths, selectedMonth);

      if (index !== -1) listRef.current?.scrollToIndex({ index, animated: true, viewPosition: 0.5 });
    }
  }, [plannerPayload, upcomingMonths]);

  // Renderers
  return (
    <FlatList
      horizontal
      ref={listRef}
      data={upcomingMonths}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.list}
      showsHorizontalScrollIndicator={false}
      onScrollToIndexFailed={onScrollToIndexFailed}
      renderItem={({ item }) => {
        const isActive = _.isEqual(value, item);

        return (
          <TouchableOpacity onPress={() => setValue(item)}>
            <View style={[styles.container, isActive ? styles.activeContainer : {}]}>
              <Fontisto name="date" size={ms(14)} color={theme.dark ? theme.colors.white : theme.colors.black} />
              <Text variant="large" style={styles.title}>
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
