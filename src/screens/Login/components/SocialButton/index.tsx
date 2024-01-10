// Packages
import React from 'react';
import { Text, useTheme } from 'react-native-paper';

// Components
import FastImage, { Source } from 'react-native-fast-image';
import { ImageRequireSource, TouchableOpacity, View } from 'react-native';

// Utils
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface SocialButtonProps {
  icon: Source | ImageRequireSource;
  title: string;
  onPress: () => void;
}

// Component
const SocialButton: React.FC<SocialButtonProps> = ({ icon, title, onPress }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderer
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContent}>
          <FastImage source={icon} style={styles.icon} />
        </View>
        <Text variant="bodyMedium" style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;
