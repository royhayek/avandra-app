import { MD3LightTheme as DefaultTheme, MD3DarkTheme as DarkTheme, configureFonts, useTheme } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

const DESIGN_SCREEN_HEIGHT = 852;

export const scaledFontSize = (value: number) => RFValue(value, DESIGN_SCREEN_HEIGHT);

const fontConfig = {
  displaySmall: {
    ...DefaultTheme.fonts.displaySmall,
    fontSize: scaledFontSize(36),
    lineHeight: scaledFontSize(44),
    fontFamily: 'inter-regular'
  },
  displayMedium: {
    ...DefaultTheme.fonts.displayMedium,
    fontSize: scaledFontSize(45),
    lineHeight: scaledFontSize(52),
    fontFamily: 'inter-regular'
  },
  displayLarge: {
    ...DefaultTheme.fonts.displayLarge,
    fontSize: scaledFontSize(57),
    lineHeight: scaledFontSize(64),
    fontFamily: 'inter-regular'
  },
  headlineSmall: {
    ...DefaultTheme.fonts.headlineLarge,
    fontSize: scaledFontSize(24),
    lineHeight: scaledFontSize(32),
    fontFamily: 'inter-semibold'
  },
  headlineMedium: {
    ...DefaultTheme.fonts.headlineMedium,
    fontSize: scaledFontSize(28),
    lineHeight: scaledFontSize(36),
    fontFamily: 'inter-regular'
  },
  headlineLarge: {
    ...DefaultTheme.fonts.headlineLarge,
    fontSize: scaledFontSize(32),
    lineHeight: scaledFontSize(40),
    fontFamily: 'inter-regular'
  },
  titleSmall: {
    ...DefaultTheme.fonts.titleSmall,
    fontSize: scaledFontSize(14),
    lineHeight: scaledFontSize(20),
    fontFamily: 'inter-semibold'
  },
  titleMedium: {
    ...DefaultTheme.fonts.titleMedium,
    fontSize: scaledFontSize(16),
    lineHeight: scaledFontSize(24),
    fontFamily: 'inter-bold'
  },
  titleLarge: {
    ...DefaultTheme.fonts.titleSmall,
    fontSize: scaledFontSize(18),
    lineHeight: scaledFontSize(26),
    fontFamily: 'inter-semibold'
  },
  labelSmall: {
    ...DefaultTheme.fonts.labelSmall,
    fontSize: scaledFontSize(11),
    lineHeight: scaledFontSize(16),
    fontFamily: 'inter-regular'
  },
  labelMedium: {
    ...DefaultTheme.fonts.labelMedium,
    fontSize: scaledFontSize(12),
    lineHeight: scaledFontSize(16),
    fontFamily: 'inter-regular'
  },
  labelLarge: {
    ...DefaultTheme.fonts.labelLarge,
    fontSize: scaledFontSize(12),
    lineHeight: scaledFontSize(20),
    fontFamily: 'inter-medium'
  },
  bodySmall: {
    ...DefaultTheme.fonts.bodySmall,
    fontSize: scaledFontSize(12),
    lineHeight: scaledFontSize(16),
    fontFamily: 'inter-regular'
  },
  bodyMedium: {
    ...DefaultTheme.fonts.bodyMedium,
    fontSize: scaledFontSize(14),
    lineHeight: scaledFontSize(20),
    fontFamily: 'inter-regular'
  },
  bodyLarge: {
    ...DefaultTheme.fonts.bodyLarge,
    fontSize: scaledFontSize(16),
    lineHeight: scaledFontSize(24),
    fontFamily: 'inter-regular'
  }
};

const fonts = configureFonts({ config: fontConfig });

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#469BF8',
    primaryLight: '#469BF820',
    blueLight: '#469BF875',
    secondary: 'gray',
    white: '#FFFFFF',
    black: '#000029',
    background: '#FFFFFF',
    card: '#F9F9F9',
    gray: '#808080',
    lightGray: '#ECECEC',
    inputBg: '#ECECEC',
    darkBlue: '#906FE7',
    pieBlue: '#9b59b6',
    star: '#FBBC04'
  },
  fonts: {
    ...DefaultTheme.fonts,
    fonts
  }
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#469BF8',
    primaryLight: '#469BF820',
    blueLight: '#469BF875',
    card: '#F9F9F9',
    secondary: 'gray',
    white: '#FFFFFF',
    black: '#000029',
    gray: '#A9A9A9',
    lightGray: '#ECECEC',
    inputBg: '#ECECEC',
    darkBlue: '#906FE7',
    pieBlue: '#9b59b6',
    star: '#FBBC04'
  },
  fonts: {
    ...DefaultTheme.fonts,
    fonts
  }
};

export type AppTheme = typeof lightTheme;

export const useAppTheme = () => useTheme<AppTheme>();
