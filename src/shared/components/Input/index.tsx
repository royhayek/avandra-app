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

  // Renderers
  return (
    <View>
      <Text variant="xLarge" style={styles.label}>
        {label}
      </Text>

      <View style={styles.container}>
        {leftIcon}

        <TextInput
          value={value}
          numberOfLines={1}
          error={Boolean(error)}
          placeholder={placeholder}
          onChangeText={handleChange}
          theme={{ roundness: ms(10) }}
          underlineStyle={styles.underline}
          contentStyle={styles.contentStyle}
          style={[styles.textInput, inputStyle]}
          placeholderTextColor={theme.colors.gray[500]}
          {...props}
        />

        {rightIcon}
      </View>

      {error && (
        <Text variant="small" style={styles.errorText}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;
