// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import React, { useCallback, useState } from 'react';

// Components
import Menu from '@shared/components/Menu';
import { Ionicons } from '@expo/vector-icons';
import { Text, Switch } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface MenuItemProps {
  item: string;
  title: string;
}

interface MenuProps {
  value: string | undefined;
  items?: MenuItemProps[] | undefined;
  onItemPress: (lng: string) => void | undefined;
}

interface SwitchProps {
  value: boolean;
  onValueChange: () => void;
}

export interface NavigationButtonProps {
  key: string;
  name: string;
  isMenu?: boolean;
  isSwitch?: boolean;
  description?: string;
  onPress?: () => void;
  menuProps?: MenuProps;
  icon?: React.ReactNode;
  switchProps?: SwitchProps;
  color?: string | undefined;
}

// Component
const NavigationButton: React.FC<NavigationButtonProps> = ({
  name,
  icon,
  color,
  isMenu,
  onPress,
  isSwitch,
  menuProps,
  description,
  switchProps
}) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [openMenu, setOpenMenu] = useState(false);

  // Callbacks
  const toggleMenu = useCallback(() => setOpenMenu((cur) => !cur), []);

  const handleOnItemPress = useCallback(
    (lng: string) => {
      menuProps?.onItemPress(lng);
      toggleMenu();
    },
    [menuProps, toggleMenu]
  );

  // Renderers
  return (
    <TouchableOpacity style={styles.item} onPress={isMenu && !_.isFunction(onPress) ? toggleMenu : onPress}>
      <View style={styles.titleAndDesc}>
        <View style={styles.iconAndTitle}>
          {icon}
          <Text
            variant="h6"
            style={[styles.buttonName, { color: color ?? (theme.dark ? theme.colors.white : theme.colors.gray[900]) }]}>
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
          value={switchProps?.value}
          onValueChange={switchProps?.onValueChange}
          style={{ transform: [{ scaleX: ms(0.8) }, { scaleY: ms(0.8) }] }}
        />
      ) : isMenu ? (
        <Menu
          visible={openMenu}
          onDismiss={toggleMenu}
          items={menuProps?.items || []}
          onItemPress={handleOnItemPress}
          anchor={
            <View style={styles.anchor}>
              <Text variant="large">{menuProps?.value}</Text>
              <Ionicons
                size={ms(18)}
                name="chevron-forward"
                style={styles.arrowIcon}
                color={theme.dark ? theme.colors.secondary : theme.colors.black}
              />
            </View>
          }
        />
      ) : (
        <Ionicons
          size={ms(18)}
          name="chevron-forward"
          style={styles.arrowIcon}
          color={theme.dark ? theme.colors.white : theme.colors.black}
        />
      )}
    </TouchableOpacity>
  );
};

export default NavigationButton;
