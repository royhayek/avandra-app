// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { Button, Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { View, TouchableOpacity, TouchableOpacityProps, ViewStyle, StyleProp } from 'react-native';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

interface RegularButtonProps extends TouchableOpacityProps {
  title?: string;
  subtitle?: string;
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  variant?: ButtonVariant;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  backgroundColors?: string[];
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
}

type ButtonVariant = 'primary' | 'secondary' | 'gradient' | 'text';

// Component
const RegularButton: React.FC<RegularButtonProps> = ({
  style,
  onPress,
  loading,
  endIcon,
  subtitle,
  startIcon,
  textStyle,
  title = 'Submit',
  disabled = false,
  backgroundColors,
  fullWidth = false,
  variant = 'primary' as ButtonVariant,
  ...props
}) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme, fullWidth);

  if (_.isEqual(variant, 'gradient')) {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[disabled ? styles.disabledContainer : styles.container, style]}
        {...props}>
        <LinearGradient
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          style={[styles.linearBackground, style]}
          colors={backgroundColors ?? [theme.colors.primary, theme.colors.primary, theme.colors.darkBlue]}>
          {startIcon}
          <Text variant="large" style={styles.title}>
            {title}
          </Text>
          {endIcon && <View style={styles.endIcon}>{endIcon}</View>}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  if (_.isEqual(variant, 'text')) {
    return (
      <Button loading={loading} disabled={loading} onPress={onPress} style={[styles.button, style]}>
        <Text variant="medium" style={textStyle}>
          {title}
        </Text>
      </Button>
    );
  }

  if (_.isEqual(variant, 'secondary')) {
    return (
      <TouchableOpacity
        onPress={onPress}
        loading={loading}
        disabled={loading}
        style={[styles.button, styles.secondaryButton, style]}>
        <Text variant="large" style={styles.secondaryButtonLabel}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  // Renderers
  return (
    <TouchableOpacity
      loading={loading}
      disabled={loading}
      onPress={onPress}
      style={[styles.button, styles.primaryButton, style]}>
      <View style={styles.buttonContainer}>
        <Text variant="large" style={[styles.primaryButtonLabel, textStyle]}>
          {title}
        </Text>

        {subtitle && (
          <Text variant="small" style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RegularButton;
