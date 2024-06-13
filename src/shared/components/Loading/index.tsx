// Packages
import _ from 'lodash';
import React from 'react';

// Components
import LottieView from 'lottie-react-native';
import { TouchableOpacityProps, View } from 'react-native';
import { ActivityIndicator, Modal, Text } from 'react-native-paper';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface IndicatorProps extends TouchableOpacityProps {
  message: string;
  dismissable?: boolean;
}

// Component
const Loading: React.FC<IndicatorProps> = ({ dismissable, message }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <Modal visible dismissable={dismissable} contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <ActivityIndicator size="small" />
        <Text variant="large" style={{ marginTop: 12 }}>
          {message}
        </Text>
      </View>
    </Modal>
  );
};

Loading.defaultProps = {
  dismissable: false
};

export default Loading;
