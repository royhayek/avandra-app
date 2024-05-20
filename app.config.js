module.exports = {
  expo: {
    name: 'Avandra',
    slug: 'avandra',
    version: '1.0.0',
    scheme: 'avandra',
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
      buildNumber: '1',
      supportsTablet: true,
      usesAppleSignIn: true,
      bundleIdentifier: 'com.avandraapp.avandra',
      googleServicesFile: './GoogleService-Info.plist',
      config: {
        usesNonExemptEncryption: false,
        googleMapsApiKey: '***REMOVED***'
      },
      associatedDomains: ['applinks:avandraapp.com', 'applinks:avandra-cms-cqt25.ondigitalocean.app'],
      infoPlist: {
        NSLocationWhenInUseUsageDescription:
          'This app uses your location information while the app is running in the foreground.',
        CFBundleURLTypes: [
          {
            CFBundleURLSchemes: ['com.googleusercontent.apps.860918187904-r3ti1nkohjecadln1k3dal9uee0clcdu', 'avandra']
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
      url: 'https://u.expo.dev/b3677f11-1da4-4381-b67d-2229f6e0ba34',
      requestHeaders: {
        'expo-runtime-version': 'expoVersion',
        'expo-channel-name': 'production'
      }
    },
    runtimeVersion: 'expoVersion',
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
      package: 'com.avandraapp.avandra',
      versionCode: 1,
      googleServicesFile: './google-services.json',
      permissions: ['android.permission.INTERNET', 'android.permission.ACCESS_NETWORK_STATE'],
      intentFilters: [
        {
          action: 'VIEW',
          data: [
            {
              scheme: 'https',
              host: 'avandraapp.com',
              pathPrefix: '/'
            }
          ],
          category: ['BROWSABLE', 'DEFAULT'],
          autoVerify: true // required to work on newer android versions
        }
      ]
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      // googleMapsApiKey: '***REMOVED***',
      supportsRTL: true,
      eas: {
        projectId: 'b3677f11-1da4-4381-b67d-2229f6e0ba34'
      },
      apiUrl: process.env.EXPO_PUBLIC_SERVER_API_URL ?? 'http://localhost:4000/api'
    },
    plugins: [
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
            buildToolsVersion: '33.0.0',
            usesCleartextTraffic: true
          },
          ios: {
            useFrameworks: 'static',
            deploymentTarget: '15.0'
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
          displayName: 'Avandra',
          scheme: 'fb2319037778292908'
        }
      ],
      'expo-apple-authentication',
      './react-native-maps-plugin',
      './plugins/trust-local-certs'
    ],
    owner: 'royhayek'
  },
  'react-native-google-mobile-ads': {
    android_app_id: 'ca-app-pub-1469570455778464~7118559925',
    ios_app_id: 'ca-app-pub-1469570455778464~1963740474'
  }
};
