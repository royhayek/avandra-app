// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import React, { useCallback, useEffect, useState } from 'react';

// Components
import { Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';

// Utilities
import i18n from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface DateInputProps {
  defaultValue: string | undefined;
}

// Component
const DateInput: React.FC<DateInputProps> = ({ defaultValue }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [value, setValue] = useState<string | undefined>();

  // Callbacks
  const handleValueChange = useCallback((text: string) => setValue(text), []);

  // Effects
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  // Renderers
  return (
    <TextInput
      value={value}
      editable={false}
      style={styles.input}
      returnKeyType="send"
      verticalAlign="middle"
      theme={{ roundness: ms(8) }}
      placeholder={'MM/DD - MM/DD'}
      onChangeText={handleValueChange}
      underlineStyle={styles.underline}
      onSubmitEditing={Keyboard.dismiss}
      outlineColor={theme.colors.secondary}
      outlineStyle={styles.inputOutlineStyle}
      activeOutlineColor={theme.colors.primary}
      placeholderTextColor={theme.colors.secondary}
      left={
        <TextInput.Icon
          centered
          icon="calendar-blank-outline"
          color={theme.colors.secondary}
          style={{ transform: i18n.locale === 'ar' ? [{ scaleX: -1 }] : undefined }}
        />
      }
    />
  );
};

export default DateInput;
