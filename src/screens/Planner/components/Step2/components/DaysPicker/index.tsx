// Packages
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Components
import { Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { plannerActions, selectPlannerPayload } from '@redux/planner/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface DaysPickerProps {
  value: number;
  setValue: (days: number) => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step2.${key}`, options);

const DaysPicker: React.FC<DaysPickerProps> = ({ value, setValue }) => {
  // Redux
  const dispatch = useDispatch();

  const plannerPayload = useAppSelector(selectPlannerPayload);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const isMinusDisabled = value === 1;
  const isPlusDisabled = value === 7;

  useEffect(() => {
    const { noOfDays } = plannerPayload;

    if (noOfDays) {
      setValue(noOfDays);
    } else {
      dispatch(plannerActions.setPayload({ noOfDays: value }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renderers
  return (
    <View style={styles.container}>
      <Text variant="medium" style={styles.noOfDays}>
        {_t('no_of_days')}
      </Text>
      <View style={styles.stepperRow}>
        <TouchableOpacity
          disabled={isMinusDisabled}
          onPress={() => setValue(value - 1)}
          style={[styles.button, isMinusDisabled ? styles.disabledButton : {}]}>
          <Text variant="h5" style={{ color: theme.colors.white }}>
            -
          </Text>
        </TouchableOpacity>
        <Text variant="h6" style={styles.value}>
          {value}
        </Text>
        <TouchableOpacity
          disabled={isPlusDisabled}
          onPress={() => setValue(value + 1)}
          style={[styles.button, isPlusDisabled ? styles.disabledButton : {}]}>
          <Text variant="h5" style={{ color: theme.colors.white }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DaysPicker;
