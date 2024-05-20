// Packages
import _ from 'lodash';
import React from 'react';

// Components
import Shimmer from '../Shimmer';
import { Text } from 'react-native-paper';
import { ScrollView, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

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
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  onTabPress: (key: string) => void;
}

// Component
const ScrollableTabs: React.FC<ScrollableTabsProps> = ({ tabs, activeTab, onTabPress, style, isLoading }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  if (isLoading) {
    return (
      <View style={styles.shimmerView}>
        {_.times(3, (i) => (
          <Shimmer key={i} style={styles.shimmerPlaceholder} />
        ))}
      </View>
    );
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={[styles.container, style]}>
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
