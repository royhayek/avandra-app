// Packages
import _ from 'lodash';
import React from 'react';
import { Menu as RNMenu } from 'react-native-paper';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

interface MenuItem {
  item: string;
  title: string;
  color: string;
  leadingIcon?: IconSource | undefined;
}

interface MenuProps {
  visible: boolean;
  items: MenuItem[];
  onDismiss: () => void;
  anchor: React.ReactNode;
  onItemPress: (item: string) => void;
}

// Component
const Menu: React.FC<MenuProps> = ({ visible, onDismiss, anchor, items, onItemPress }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <RNMenu
      anchor={anchor}
      visible={visible}
      onDismiss={onDismiss}
      anchorPosition="bottom"
      contentStyle={styles.content}>
      {_.map(items, ({ item, title, color, leadingIcon }) => (
        <RNMenu.Item
          key={item}
          title={t(title)}
          leadingIcon={leadingIcon}
          onPress={() => onItemPress(item)}
          titleStyle={[
            styles.itemTitle,
            { color: color ? color : theme.dark ? theme.colors.white : theme.colors.gray[900] }
          ]}
        />
      ))}
    </RNMenu>
  );
};

export default Menu;
