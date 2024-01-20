import { scaledFontSize } from '@shared/utils';
import { MD3LightTheme as DefaultTheme, MD3DarkTheme as DarkTheme, useTheme } from 'react-native-paper';

// const DESIGN_SCREEN_HEIGHT = 932;

// const fontConfig = {
//   displaySmall: {
//     ...DefaultTheme.fonts.displaySmall,
//     fontSize: scaledFontSize(36),
//     lineHeight: scaledFontSize(44),
//     fontFamily: 'urbanist-regular'
//   },
//   displayMedium: {
//     ...DefaultTheme.fonts.displayMedium,
//     fontSize: scaledFontSize(45),
//     lineHeight: scaledFontSize(52),
//     fontFamily: 'urbanist-regular'
//   },
//   displayLarge: {
//     ...DefaultTheme.fonts.displayLarge,
//     fontSize: scaledFontSize(57),
//     lineHeight: scaledFontSize(64),
//     fontFamily: 'urbanist-regular'
//   },
//   headlineSmall: {
//     ...DefaultTheme.fonts.headlineSmall,
//     fontSize: scaledFontSize(24),
//     lineHeight: scaledFontSize(32),
//     fontFamily: 'urbanist-semibold'
//   },
//   headlineMedium: {
//     ...DefaultTheme.fonts.headlineMedium,
//     fontSize: scaledFontSize(28),
//     lineHeight: scaledFontSize(40),
//     fontFamily: 'urbanist-bold'
//   },
//   headlineLarge: {
//     ...DefaultTheme.fonts.headlineLarge,
//     fontSize: scaledFontSize(32),
//     lineHeight: scaledFontSize(40),
//     fontFamily: 'urbanist-bold'
//   },
//   titleSmall: {
//     ...DefaultTheme.fonts.titleSmall,
//     fontSize: scaledFontSize(14),
//     lineHeight: scaledFontSize(20),
//     fontFamily: 'urbanist-bold'
//   },
//   titleMedium: {
//     ...DefaultTheme.fonts.titleMedium,
//     fontSize: scaledFontSize(16),
//     lineHeight: scaledFontSize(24),
//     fontFamily: 'urbanist-bold'
//   },
//   titleLarge: {
//     ...DefaultTheme.fonts.titleLarge,
//     fontSize: scaledFontSize(18),
//     lineHeight: scaledFontSize(26),
//     fontFamily: 'urbanist-semibold'
//   },
//   labelSmall: {
//     ...DefaultTheme.fonts.labelSmall,
//     fontSize: scaledFontSize(11),
//     lineHeight: scaledFontSize(16),
//     fontFamily: 'urbanist-regular'
//   },
//   labelMedium: {
//     ...DefaultTheme.fonts.labelMedium,
//     fontSize: scaledFontSize(12),
//     lineHeight: scaledFontSize(16),
//     fontFamily: 'urbanist-regular'
//   },
//   labelLarge: {
//     ...DefaultTheme.fonts.labelLarge,
//     fontSize: scaledFontSize(12),
//     lineHeight: scaledFontSize(20),
//     fontFamily: 'urbanist-medium'
//   },
//   bodySmall: {
//     ...DefaultTheme.fonts.bodySmall,
//     fontSize: scaledFontSize(12),
//     lineHeight: scaledFontSize(16),
//     fontFamily: 'urbanist-regular'
//   },
//   bodyMedium: {
//     ...DefaultTheme.fonts.bodyMedium,
//     fontSize: scaledFontSize(14),
//     lineHeight: scaledFontSize(20),
//     fontFamily: 'urbanist-regular'
//   },
//   bodyLarge: {
//     ...DefaultTheme.fonts.bodyLarge,
//     fontSize: scaledFontSize(16),
//     lineHeight: scaledFontSize(24),
//     fontFamily: 'urbanist-regular'
//   }
// };

// const fonts = configureFonts({ config: fontConfig, isV3: true });

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
  redSurface: '#FE3323',
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
  redSurface: '#FE3323',
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

const fonts = (theme: string) => ({
  h1: {
    fontSize: scaledFontSize(48),
    lineHeight: scaledFontSize(76.8)
  },
  h2: {
    fontSize: scaledFontSize(40),
    lineHeight: scaledFontSize(64)
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
    lineHeight: scaledFontSize(19.2)
  },
  xSmall: {
    fontSize: scaledFontSize(10),
    lineHeight: scaledFontSize(16)
  }
});

export const lightTheme = {
  ...DefaultTheme,
  colors: lightColors,
  fonts: {
    ...DefaultTheme.fonts,
    ...fonts('light')
  }
};

export const darkTheme = {
  ...DarkTheme,
  colors: darkColors,
  fonts: {
    ...DefaultTheme.fonts,
    ...fonts('dark')
  }
};

export type AppTheme = typeof lightTheme;

export const useAppTheme = () => useTheme<AppTheme>();
