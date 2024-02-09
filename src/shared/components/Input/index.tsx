// Packages
import _ from 'lodash';
import React from 'react';
import { ms } from 'react-native-size-matters';

// Components
import { StyleProp, TextStyle, View } from 'react-native';
import { TextInput, TextInputProps, Text } from 'react-native-paper';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface InputProps extends TextInputProps {
  placeholder: string;
  value: string | undefined;
  leftIcon?: React.ReactNode;
  error?: string | undefined;
  rightIcon?: React.ReactNode;
  inputStyle?: StyleProp<TextStyle>;
  handleChange: (text: string) => void;
}

// Component
const Input: React.FC<InputProps> = ({
  label,
  leftIcon,
  rightIcon,
  placeholder,
  value,
  inputStyle,
  handleChange,
  error,
  ...props
}) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme, !_.isEmpty(leftIcon), !_.isEmpty(value));

  const leftIconComponent = leftIcon ? <TextInput.Icon icon={() => leftIcon} disabled /> : null;
  const rightIconComponent = rightIcon ? <TextInput.Icon icon={() => rightIcon} disabled /> : null;

  // Renderers
  return (
    <View>
      <Text variant="xLarge" style={styles.label}>
        {label}
      </Text>
      <TextInput
        value={value}
        numberOfLines={1}
        error={Boolean(error)}
        left={leftIconComponent}
        placeholder={placeholder}
        right={rightIconComponent}
        onChangeText={handleChange}
        theme={{ roundness: ms(10) }}
        underlineStyle={styles.underline}
        style={[styles.textInput, inputStyle]}
        placeholderTextColor={theme.colors.gray[500]}
        contentStyle={{ ...theme.fonts.xLarge, ...styles.contentStyle }}
        {...props}
      />
      {error && (
        <Text variant="small" style={styles.errorText}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;
