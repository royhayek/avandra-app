// Packages
import _ from 'lodash';
import React from 'react';
import { ms } from 'react-native-size-matters';

// Components
import { View } from 'react-native';
import { Text, TextInput, TextInputProps } from 'react-native-paper';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface InputProps extends TextInputProps {
  name: string;
  value: string;
  placeholder: string;
  handleChange: Function;
  leftIcon?: React.ReactNode;
  error?: string | undefined;
  rightIcon?: React.ReactNode;
}

// Component
const Input: React.FC<InputProps> = ({
  label,
  name,
  leftIcon,
  rightIcon,
  placeholder,
  value,
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
      <TextInput
        value={value}
        error={Boolean(error)}
        style={styles.textInput}
        placeholder={placeholder}
        theme={{ roundness: ms(10) }}
        onChangeText={handleChange(name)}
        underlineStyle={styles.underline}
        placeholderTextColor={theme.colors.gray[500]}
        contentStyle={{ ...theme.fonts.xLarge, ...styles.contentStyle }}
        left={leftIcon ? <TextInput.Icon icon={() => leftIcon} disabled /> : null}
        right={rightIcon ? <TextInput.Icon icon={() => rightIcon} disabled /> : null}
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
