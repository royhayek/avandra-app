// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import React, { useCallback, useMemo } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Ionicons } from '@expo/vector-icons';
import { Switch, Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import AccountDeletionModal from '../AccountDeletion';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { appName } from '@shared/utils';
import { useAppSelector } from '@app/store';
import { selectIsGuest } from '@redux/auth/slice';
import { useAppTheme } from '@shared/assets/theme';

// Component
const HelpSupportScreen = () => {
  // Redux
  const isGuest = useAppSelector(selectIsGuest);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [isDeletionModalOpen, setIsDeletionModalOpen] = React.useState<boolean>(false);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // Callbacks
  const handleDeleteAccount = useCallback(() => setIsDeletionModalOpen(true), []);

  const handleCancelDeletion = useCallback(() => setIsDeletionModalOpen(false), []);

  const navigateToFaq = useCallback(() => navigation.navigate('Faq'), [navigation]);

  const navigateToSupport = useCallback(() => navigation.navigate('Contact'), [navigation]);

  const navigateToInfo = useCallback(
    (type: string) => navigation.navigate('Info', { type, name: t(`common.${type}`) }),
    [navigation]
  );

  // Renderer Vars
  const buttons = useMemo(
    () => [
      {
        key: 'faq',
        name: t('settings.faq'),
        onPress: navigateToFaq
      },
      ...(!isGuest
        ? [
            {
              key: 'contact',
              name: t('settings.contact_support'),
              onPress: navigateToSupport
            }
          ]
        : []),
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
      ...(!isGuest
        ? [
            {
              key: 'delete_account',
              name: t('settings.delete_account'),
              description: t('settings.delete_account_desc', { name: appName }),
              onPress: handleDeleteAccount,
              color: theme.colors.red
            }
          ]
        : [])
    ],
    [navigateToFaq, navigateToSupport, handleDeleteAccount, navigateToInfo, theme.colors.red, isGuest]
  );

  // Renderers

  return (
    <View style={styles.container}>
      {_.map(buttons, ({ key, name, color, value, description, onPress, isSwitch }) => (
        <TouchableOpacity key={key} style={styles.item} onPress={onPress}>
          <View style={styles.titleAndDesc}>
            <View style={styles.iconAndTitle}>
              <Text
                variant="h6"
                style={[
                  styles.buttonName,
                  { color: color ?? (theme.dark ? theme.colors.white : theme.colors.gray[900]) }
                ]}>
                {name}
              </Text>
            </View>

            {description && (
              <Text variant="large" style={styles.description}>
                {description}
              </Text>
            )}
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
      ))}

      {!isGuest && <AccountDeletionModal visible={isDeletionModalOpen} onCancel={handleCancelDeletion} />}
    </View>
  );
};

export default HelpSupportScreen;
