// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { Text } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface TabProps {
  key: string;
  title: string;
}

interface ScrollableTabsProps {
  tabs: TabProps[];
  activeTab?: string;
  onTabPress: (key: string) => void;
}

// Component
const ScrollableTabs: React.FC<ScrollableTabsProps> = ({ tabs, activeTab, onTabPress }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Effects
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
      {_.map(tabs, ({ key, title }) => {
        const isActive = _.isEqual(activeTab, key);

        return (
          <TouchableOpacity
            key={key}
            onPress={() => onTabPress(key)}
            style={[styles.tab, isActive && styles.activeTab]}>
            <Text variant="large" style={[styles.title, isActive && styles.activeTitle]}>
              {title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default ScrollableTabs;
