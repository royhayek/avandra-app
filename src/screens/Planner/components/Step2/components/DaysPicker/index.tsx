// Packages
import React from 'react';

// Components
import { Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { useAppTheme } from '@shared/assets/theme';

interface DaysPickerProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step2.${key}`, options);

const DaysPicker: React.FC<DaysPickerProps> = ({ value, setValue }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const isMinusDisabled = value === 1;
  const isPlusDisabled = value === 7;

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
