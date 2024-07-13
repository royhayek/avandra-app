// Packages
import _ from 'lodash';
import React from 'react';
import { ms, mvs } from 'react-native-size-matters';
import { useIsFocused, useNavigation } from '@react-navigation/native';

// Components
import { View } from 'react-native';
import BackButton from '../Buttons/Back';
import { Text } from 'react-native-paper';
import ShareButton from '../Buttons/Share';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { ShareDataProps } from '@shared/types/ShareData';
import { NativeStackHeaderProps, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { isTablet } from '@shared/utils';

interface NavigationOptions extends NativeStackNavigationOptions {
  headerTitle?: () => React.ReactNode;
  onBackPress?: () => void;
  headerRight?: () => React.ReactNode;
}
interface HeaderProps extends NativeStackHeaderProps {
  share: boolean;
  absolute?: boolean;
  hasBackBtn: boolean;
  onBackPress: () => void;
  options: NavigationOptions;
  shareData?: ShareDataProps;
}

// Component
const Header: React.FC<HeaderProps> = ({ options, hasBackBtn, share, absolute, shareData }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();
  const isRootScreen = navigation.getState().routes.length === 1;

  // Callbacks
  const handleOnBackPress = () => {
    if (options?.onBackPress) {
      options.onBackPress();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
    }
  };

  // Renderers
  return (
    <SafeAreaView style={[styles.safeAreaView, absolute && styles.absoluteView]}>
      <View style={styles.container}>
        {options?.title ? (
          <Text variant={isTablet ? 'h5' : 'h4'} style={styles.appName}>
            {options?.title}
          </Text>
        ) : options?.headerTitle ? (
          <View style={styles.appName}>{options.headerTitle()}</View>
        ) : null}

        {hasBackBtn || options?.headerBackVisible || !isRootScreen ? (
          <BackButton onPressOut={handleOnBackPress} />
        ) : (
          <FastImage
            source={require('@shared/assets/icons/app-icon.png')}
            resizeMode="contain"
            style={{ width: ms(32), height: mvs(32) }}
          />
        )}

        {options?.headerRight ? options?.headerRight() : share ? <ShareButton data={shareData} /> : null}
      </View>
    </SafeAreaView>
  );
};

export default Header;
