// Packages
import _ from 'lodash';
import React from 'react';
import { ms } from 'react-native-size-matters';

// Components
import { View } from 'react-native';
import Text from '@shared/components/Text';
import { TextInput, TextInputProps } from 'react-native-paper';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';
import i18n from '@app/i18n';

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
        style={styles.textInput}
        placeholder={placeholder}
        theme={{ roundness: ms(10) }}
        onChangeText={handleChange(name)}
        underlineStyle={styles.underline}
        placeholderTextColor={theme.colors.gray[500]}
        contentStyle={{ ...theme.fonts.xLarge, ...styles.contentStyle }}
        left={i18n.locale === 'ar' ? rightIconComponent : leftIconComponent}
        right={i18n.locale === 'ar' ? leftIconComponent : rightIconComponent}
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
