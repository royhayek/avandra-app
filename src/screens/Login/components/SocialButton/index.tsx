// Packages
import React from 'react';
import { Text } from 'react-native-paper';

// Components
import { TouchableOpacity, View } from 'react-native';

// Utils
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface SocialButtonProps {
  title: string;
  onPress: () => void;
  icon: React.ReactNode;
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
        <View style={[styles.iconContent]}>{icon}</View>
        <Text variant="titleSmall" style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;
