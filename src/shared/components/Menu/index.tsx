// Packages
import _ from 'lodash';
import React from 'react';
import { useTheme } from 'react-native-paper';
import { Menu as RNMenu } from 'react-native-paper';

// Utilities
import makeStyles from './styles';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

// Interfaces
interface MenuItem {
  item: string;
  title: string;
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
  const theme = useTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <RNMenu visible={visible} onDismiss={onDismiss} anchorPosition="bottom" contentStyle={styles.content} anchor={anchor}>
      {_.map(items, ({ item, title, leadingIcon }) => (
        <RNMenu.Item key={item} leadingIcon={leadingIcon} onPress={() => onItemPress(item)} title={title} titleStyle={styles.itemTitle} />
      ))}
    </RNMenu>
  );
};

export default Menu;
