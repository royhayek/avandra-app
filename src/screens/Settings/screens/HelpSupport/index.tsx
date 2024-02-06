// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

// Components
import { Ionicons } from '@expo/vector-icons';
import { Switch, Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import Rate, { AndroidMarket } from 'react-native-rate';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppSelector } from '@app/store';
import { getConfiguration } from '@redux/app/slice';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

// Component
const HelpSupportScreen = () => {
  // Redux
  const config = useAppSelector(getConfiguration);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();

  // Callbacks
  const navigateToFaq = useCallback(() => navigation.navigate('Faq'), [navigation]);

  const navigateToSupport = useCallback(() => navigation.navigate('Support'), [navigation]);

  const navigateToInfo = useCallback(
    (type: string) => navigation.navigate('Info', { type, name: t(`common.${type}`) }),
    [navigation]
  );

  const handleRateApp = useCallback(() => {
    const options = {
      AppleAppID: config?.other?.appleAppId,
      GooglePackageName: config?.other?.googlePackageName,
      preferredAndroidMarket: AndroidMarket.Google,
      preferInApp: true,
      openAppStoreIfInAppFails: true
    };

    Rate.rate(options, (success, errorMessage) => {
      if (success) {
        // This technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
        console.debug('User successfully rated the app');
      }

      if (errorMessage) {
        // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
        console.error(`Example page Rate.rate() error: ${errorMessage}`);
      }
    });
  }, [config?.other?.appleAppId, config?.other?.googlePackageName]);

  // Renderer Vars
  const buttons = useMemo(
    () => [
      {
        key: 'faq',
        name: t('settings.faq'),
        onPress: navigateToFaq
      },
      {
        key: 'contact',
        name: t('settings.contact_support'),
        onPress: navigateToSupport
      },
      {
        key: 'language',
        name: t('common.privacy_policy'),
        onPress: () => navigateToInfo('privacy_policy')
      },
      {
        key: 'theme',
        name: t('common.terms'),
        onPress: () => navigateToInfo('terms')
      },
      {
        key: 'rate',
        name: t('settings.rate_us'),
        onPress: handleRateApp
      }
    ],
    [navigateToSupport, navigateToInfo, handleRateApp]
  );

  // Renderers

  return _.map(buttons, ({ key, name, value, onPress, isSwitch, isMenu }) => (
    <TouchableOpacity key={key} style={styles.item} onPress={onPress}>
      <View style={styles.iconAndTitle}>
        <Text
          variant="h6"
          style={[styles.buttonName, { color: theme.dark ? theme.colors.white : theme.colors.gray[900] }]}>
          {name}
        </Text>
      </View>

      {isSwitch ? (
        <Switch
          value={value}
          onValueChange={onPress}
          style={{ transform: [{ scaleX: ms(0.8) }, { scaleY: ms(0.8) }] }}
        />
      ) : (
        <Ionicons
          size={ms(18)}
          name="chevron-forward"
          style={styles.arrowIcon}
          color={theme.dark ? theme.colors.secondary : theme.colors.black}
        />
      )}
    </TouchableOpacity>
  ));
};

export default HelpSupportScreen;
