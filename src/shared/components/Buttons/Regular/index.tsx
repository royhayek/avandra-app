// Packages
import _ from 'lodash';
import React from 'react';

// Components
import Text from '@shared/components/Text';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { View, TouchableOpacity, TouchableOpacityProps, ViewStyle, StyleProp } from 'react-native';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
type ButtonVariant = 'primary' | 'secondary' | 'gradient' | 'text';
interface RegularButtonProps extends TouchableOpacityProps {
  title?: string;
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  variant?: ButtonVariant;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  backgroundColors?: string[];
  style?: StyleProp<ViewStyle>;
}

// Component
const RegularButton: React.FC<RegularButtonProps> = ({
  title,
  variant,
  onPress,
  style,
  startIcon,
  endIcon,
  backgroundColors,
  disabled,
  fullWidth,
  loading,
  ...props
}) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme, fullWidth);

  if (_.isEqual(variant, 'gradient')) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[disabled ? styles.disabledContainer : styles.container, style]}
        disabled={disabled}
        {...props}>
        <LinearGradient
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          colors={backgroundColors ?? [theme.colors.primary, theme.colors.primary, theme.colors.darkBlue]}
          style={[styles.linearBackground, style]}>
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
        <Text variant="medium" style={styles.textButtonLabel}>
          {title}
        </Text>
      </Button>
    );
  }

  if (_.isEqual(variant, 'secondary')) {
    return (
      <Button
        onPress={onPress}
        loading={loading}
        disabled={loading}
        style={[styles.button, styles.secondaryButton, style]}>
        <Text variant="large" style={styles.secondaryButtonLabel}>
          {title}
        </Text>
      </Button>
    );
  }

  // Renderers
  return (
    <Button loading={loading} disabled={loading} onPress={onPress} style={[styles.button, styles.primaryButton, style]}>
      <Text variant="large" style={styles.primaryButtonLabel}>
        {title}
      </Text>
    </Button>
  );
};

RegularButton.defaultProps = {
  title: 'Submit',
  onPress: () => null,
  variant: 'primary' as ButtonVariant
};

export default RegularButton;
