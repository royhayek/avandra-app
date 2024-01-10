// Packages
import React, { useCallback, useEffect, useState } from 'react';

// Components
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface SplashScreenProps {
  loadedData: boolean;
}

// Component
const SplashScreen: React.FC<SplashScreenProps> = ({ loadedData }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [showSplash, setShowSplash] = useState(true);
  const [animationFinished, setAnimationFinished] = useState(false);

  // Callbacks
  const handleAnimationFinish = useCallback(async () => {
    setAnimationFinished(true);
    loadedData && setShowSplash(false);
  }, [loadedData]);

  // Effects
  useEffect(() => {
    loadedData && animationFinished && setShowSplash(false);
  }, [animationFinished, loadedData]);

  // Renderers
  if (showSplash) {
    return (
      <View style={styles.container}>
        <LottieView
          autoPlay
          loop={false}
          style={styles.lottie}
          onAnimationFinish={handleAnimationFinish}
          source={require('../../../assets/splash-lottie.json')}
        />
      </View>
    );
  }

  return null;
};

export default SplashScreen;
