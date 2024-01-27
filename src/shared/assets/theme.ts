import { ms } from 'react-native-size-matters';
import { scaledFontSize } from '@shared/utils';
import { MD3DarkTheme as DarkTheme, MD3LightTheme as DefaultTheme, useTheme } from 'react-native-paper';

// Define a type for your custom fonts
// export interface CustomFonts {
//   h1: TextStyle;
//   h2: TextStyle;
//   h3: TextStyle;
//   h4: TextStyle;
//   h5: TextStyle;
//   h6: TextStyle;
//   xLarge: TextStyle;
//   large: TextStyle;
//   medium: TextStyle;
//   small: TextStyle;
//   xSmall: TextStyle;
// }

// Extend the existing Theme interface with your custom fonts
const lightColors = {
  ...DefaultTheme.colors,
  primary: '#34B27D',
  primaryLight: '#469BF820',
  blueLight: '#469BF875',
  secondary: 'gray',
  white: '#FFFFFF',
  black: '#000029',
  background: '#FFFFFF',
  card: '#F9F9F9',
  greenBg: '#EFF9F5',
  lightGray: '#ECECEC',
  inputBg: '#ECECEC',
  darkBlue: '#906FE7',
  pieBlue: '#9b59b6',
  star: '#FBBC04',
  red: '#F75555',
  redSurface: '#FE3323',
  secondaryContainer: '#34B27D',
  onSecondaryContainer: '#FFFFFF',
  dark: {
    1: '#181A20',
    2: '#1E2025',
    3: '#1F222A',
    4: '#262A35',
    5: '#35383F'
  },
  gray: {
    900: '#212121',
    800: '#424242',
    700: '#616161',
    600: '#757575',
    500: '#9E9E9E',
    400: '#BDBDBD',
    300: '#E0E0E0',
    200: '#EEEEEE',
    100: '#F5F5F5',
    50: '#FAFAFA'
  }
};

const darkColors = {
  ...DarkTheme.colors,
  primary: '#34B27D',
  primaryLight: '#469BF820',
  blueLight: '#469BF875',
  card: '#F9F9F9',
  secondary: 'gray',
  background: '#181A20',
  white: '#FFFFFF',
  black: '#000029',
  lightGray: '#ECECEC',
  inputBg: '#ECECEC',
  darkBlue: '#906FE7',
  pieBlue: '#9b59b6',
  star: '#FBBC04',
  red: '#F75555',
  redSurface: '#FE3323',
  secondaryContainer: '#34B27D',
  onSecondaryContainer: '#FFFFFF',
  dark: {
    1: '#181A20',
    2: '#1E2025',
    3: '#1F222A',
    4: '#262A35',
    5: '#35383F'
  },
  gray: {
    900: '#212121',
    800: '#424242',
    700: '#616161',
    600: '#757575',
    500: '#9E9E9E',
    400: '#BDBDBD',
    300: '#E0E0E0',
    200: '#EEEEEE',
    100: '#F5F5F5',
    50: '#FAFAFA'
  }
};

const customFonts = (theme: string) => ({
  h1: {
    fontSize: scaledFontSize(48),
    lineHeight: scaledFontSize(76.8),
    fontFamily: 'urbanist-bold'
  },
  h2: {
    fontSize: scaledFontSize(40),
    lineHeight: scaledFontSize(64),
    fontFamily: 'urbanist-bold'
  },
  h3: {
    fontSize: scaledFontSize(32),
    lineHeight: scaledFontSize(48),
    fontFamily: 'urbanist-bold',
    color: theme === 'dark' ? darkColors.white : lightColors.gray[900]
  },
  h4: {
    fontSize: scaledFontSize(24),
    lineHeight: scaledFontSize(38.4),
    fontFamily: 'urbanist-bold'
  },
  h5: {
    fontSize: scaledFontSize(20),
    lineHeight: scaledFontSize(32),
    fontFamily: 'urbanist-bold'
  },
  h6: {
    fontSize: scaledFontSize(18),
    lineHeight: scaledFontSize(28.8),
    fontFamily: 'urbanist-semibold'
  },
  xLarge: {
    fontSize: scaledFontSize(18),
    lineHeight: scaledFontSize(28.8),
    fontFamily: 'urbanist-regular',
    color: theme === 'dark' ? lightColors.gray[200] : lightColors.gray[700]
  },
  large: {
    fontSize: scaledFontSize(16),
    lineHeight: scaledFontSize(25.6),
    fontFamily: 'urbanist-bold'
  },
  medium: {
    fontSize: scaledFontSize(14),
    lineHeight: scaledFontSize(22.4),
    fontFamily: 'urbanist-regular'
  },
  small: {
    fontSize: scaledFontSize(12),
    lineHeight: scaledFontSize(19.2),
    fontFamily: 'urbanist-regular'
  },
  xSmall: {
    fontSize: scaledFontSize(10),
    lineHeight: scaledFontSize(16),
    fontFamily: 'urbanist-regular'
  }
});

export const lightTheme = {
  ...DefaultTheme,
  colors: lightColors,
  roundness: ms(10),
  fonts: {
    ...DefaultTheme.fonts,
    ...customFonts('light')
  }
};

export const darkTheme = {
  ...DarkTheme,
  colors: darkColors,
  roundness: ms(10),
  fonts: {
    ...DefaultTheme.fonts,
    ...customFonts('dark')
  }
};

export type AppTheme = typeof lightTheme;

export const useAppTheme = () => useTheme<AppTheme>();
