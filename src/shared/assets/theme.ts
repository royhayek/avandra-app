import { ms, s } from 'react-native-size-matters';
import { isTablet, scaledFontSize } from '@shared/utils';
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
    fontSize: isTablet ? ms(44) : ms(48),
    lineHeight: isTablet ? ms(71) : ms(75),
    fontFamily: 'urbanist-bold',
    color: theme === 'dark' ? darkColors.white : lightColors.gray[900]
  },
  h2: {
    fontSize: isTablet ? ms(36) : ms(40),
    lineHeight: isTablet ? ms(58) : ms(62),
    fontFamily: 'urbanist-bold',
    color: theme === 'dark' ? darkColors.white : lightColors.gray[900]
  },
  h3: {
    fontSize: isTablet ? ms(28) : ms(32),
    lineHeight: isTablet ? ms(46) : ms(50),
    fontFamily: 'urbanist-bold',
    color: theme === 'dark' ? darkColors.white : lightColors.gray[900]
  },
  h4: {
    fontSize: isTablet ? ms(20) : ms(24),
    lineHeight: isTablet ? ms(34) : ms(38),
    fontFamily: 'urbanist-bold',
    color: theme === 'dark' ? darkColors.white : lightColors.gray[900]
  },
  h5: {
    fontSize: isTablet ? ms(16) : ms(20),
    lineHeight: isTablet ? ms(28) : ms(32),
    fontFamily: 'urbanist-bold',
    color: theme === 'dark' ? darkColors.white : lightColors.gray[900]
  },
  h6: {
    fontSize: isTablet ? ms(14) : ms(18),
    lineHeight: isTablet ? ms(24) : ms(28),
    fontFamily: 'urbanist-semibold',
    color: theme === 'dark' ? darkColors.white : lightColors.gray[900]
  },
  xLarge: {
    fontSize: isTablet ? ms(14) : ms(18),
    lineHeight: isTablet ? ms(24) : ms(28),
    fontFamily: 'urbanist-regular',
    color: theme === 'dark' ? lightColors.gray[200] : lightColors.gray[700]
  },
  large: {
    fontSize: isTablet ? ms(12) : ms(16),
    lineHeight: isTablet ? ms(20) : ms(24),
    fontFamily: 'urbanist-bold',
    color: theme === 'dark' ? darkColors.white : lightColors.gray[900]
  },
  medium: {
    fontSize: isTablet ? ms(10) : ms(14),
    lineHeight: isTablet ? ms(16) : ms(20),
    fontFamily: 'urbanist-regular',
    color: theme === 'dark' ? darkColors.white : lightColors.gray[900]
  },
  small: {
    fontSize: isTablet ? ms(8) : ms(12),
    lineHeight: isTablet ? ms(14) : ms(16),
    fontFamily: 'urbanist-regular',
    color: theme === 'dark' ? darkColors.white : lightColors.gray[900]
  },
  xSmall: {
    fontSize: isTablet ? ms(6) : ms(10),
    lineHeight: isTablet ? ms(8) : ms(12),
    fontFamily: 'urbanist-regular',
    color: theme === 'dark' ? darkColors.white : lightColors.gray[900]
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
