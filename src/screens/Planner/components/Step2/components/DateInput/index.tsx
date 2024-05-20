// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import React, { useCallback, useEffect, useState } from 'react';

// Components
import { Keyboard } from 'react-native';
import Input from '@shared/components/Input';
import { TextInput } from 'react-native-paper';

// Utilities
import i18n from '@app/i18n';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface DateInputProps {
  defaultValue: string | undefined;
}

// Component
const DateInput: React.FC<DateInputProps> = ({ defaultValue }) => {
  // Statics
  const theme = useAppTheme();

  const [value, setValue] = useState<string | undefined>();

  // Callbacks
  const handleValueChange = useCallback((text: string) => setValue(text), []);

  // Effects
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  // Renderers
  return (
    <Input
      editable={false}
      returnKeyType="send"
      verticalAlign="middle"
      value={value ?? defaultValue}
      placeholder="MM/DD - MM/DD"
      handleChange={handleValueChange}
      onSubmitEditing={Keyboard.dismiss}
      placeholderTextColor={theme.colors.secondary}
      left={
        <TextInput.Icon
          centered
          disabled
          icon="calendar-blank-outline"
          color={theme.colors.secondary}
          style={{ transform: i18n.locale === 'ar' ? [{ scaleX: -1 }] : undefined, marginEnd: ms(16) }}
        />
      }
    />
  );
};

export default DateInput;
