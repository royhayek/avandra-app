// Packages
import React, { useCallback } from 'react';

// Components
import { Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface InterestsInputProps {
  value: string;
  setValue: (value: string) => void;
}

// Component
const InterestsInput: React.FC<InterestsInputProps> = ({ value, setValue }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleValueChange = useCallback((text: string) => setValue(text), [setValue]);

  // Renderers
  return (
    <TextInput
      mode="outlined"
      value={value}
      style={styles.input}
      returnKeyType="send"
      verticalAlign="middle"
      onChangeText={handleValueChange}
      onSubmitEditing={Keyboard.dismiss}
      underlineStyle={styles.underline}
      placeholder={'Shopping, Nightlight'}
      outlineColor={theme.colors.secondary}
      outlineStyle={styles.inputOutlineStyle}
      activeOutlineColor={theme.colors.primary}
      placeholderTextColor={theme.colors.secondary}
    />
  );
};

export default InterestsInput;
