module.exports = {
  expo: {
    name: 'Trippify',
    slug: 'trippify',
    version: '1.0.3',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    experiments: {
      tsconfigPaths: true
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      usesAppleSignIn: true,
      bundleIdentifier: 'com.nextgenappsdev.trippify',
      googleServicesFile: './GoogleService-Info.plist',
      runtimeVersion: {
        policy: 'appVersion'
      },
      config: {
        usesNonExemptEncryption: false,
        googleMapsApiKey: '***REMOVED***'
      },
      infoPlist: {
        NSLocationWhenInUseUsageDescription:
          'This app users your location information while the app is running in the foreground.',
        CFBundleURLTypes: [
          {
            CFBundleURLSchemes: ['com.googleusercontent.apps.48273391374-hldk5edn4i23k67oa9pcmv6aieb8014v']
          }
        ],
        ExpoLocalization_supportsRTL: true,
        SKAdNetworkItems: [
          {
            SKAdNetworkIdentifier: 'v9wttpbfk9.skadnetwork'
          },
          {
            SKAdNetworkIdentifier: 'n38lu8286q.skadnetwork'
          }
        ]
      }
    },
    updates: {
      url: 'https://u.expo.dev/7435fea4-bc85-4a71-8526-db121810f0ed'
    },
    runtimeVersion: 'exposdk:44.0.0',
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      config: {
        googleMaps: {
          apiKey: '***REMOVED***'
        }
      },
      package: 'com.nextgenappsdev.trippify',
      versionCode: 1,
      runtimeVersion: 'exposdk:44.0.0',
      googleServicesFile: './google-services.json',
      permissions: ['android.permission.INTERNET']
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      googleMapsApiKey: '***REMOVED***',
      supportsRTL: true,
      eas: {
        projectId: '7435fea4-bc85-4a71-8526-db121810f0ed'
      },
      apiUrl: process.env.EXPO_PUBLIC_SERVER_API_URL ?? 'http://localhost:4000/api'
    },
    plugins: [
      'react-native-iap',
      [
        'expo-updates',
        {
          username: 'royhayek'
        }
      ],
      [
        'expo-build-properties',
        {
          android: {
            compileSdkVersion: 33,
            targetSdkVersion: 33,
            buildToolsVersion: '33.0.0'
          },
          ios: {
            useFrameworks: 'static',
            deploymentTarget: '13.0'
          }
        }
      ],
      'expo-localization',
      '@react-native-google-signin/google-signin',
      [
        'react-native-fbsdk-next',
        {
          appID: '2319037778292908',
          clientToken: '***REMOVED***',
          displayName: 'Trippify',
          scheme: 'fb2319037778292908'
        }
      ],
      'expo-apple-authentication',
      './react-native-maps-plugin',
      [
        'expo-location',
        {
          locationAlwaysAndWhenInUsePermission: 'Allow Trippify to use your location.'
        }
      ]
    ],
    owner: 'royhayek'
  },
  'react-native-google-mobile-ads': {
    android_app_id: 'ca-app-pub-1469570455778464~7118559925',
    ios_app_id: 'ca-app-pub-1469570455778464~1963740474'
  }
};
