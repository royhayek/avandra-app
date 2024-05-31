// Packages
import _ from 'lodash';
import { Text } from 'react-native-paper';
import { ms } from 'react-native-size-matters';
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

// Components
import Markdown from 'react-native-marked';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Platform,
  UIManager,
  StyleProp,
  ViewStyle,
  TextStyle,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';

// Utilities
import { t } from '@app/i18n';
import { useAppTheme } from '@shared/assets/theme';
import makeStyles, { markdownStyles } from './styles';

// Interfaces
interface AccordionProps {
  expanded?: boolean;
  markdown?: boolean;
  setExpanded?: () => void;
  style?: StyleProp<ViewStyle>;
  children: ReactNode | string;
  title: string | React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
}

// Component
const Accordion: React.FC<AccordionProps> = ({
  title,
  style,
  markdown,
  expanded,
  children,
  titleStyle,
  setExpanded
}) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [isExpanded, setIsExpanded] = useState(expanded);

  const accordionRef = useRef<TouchableOpacity>(null);

  // Callbacks
  const toggleExpand = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded((cur) => !cur);
    _.isFunction(setExpanded) && setExpanded();
  }, [setExpanded]);

  // Effects
  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  return (
    <View style={style}>
      <TouchableOpacity ref={accordionRef} style={[styles.row, titleStyle]} onPress={toggleExpand}>
        <Text variant="h5">{title}</Text>
        <View style={styles.row}>
          <Text variant="medium" style={styles.expandText}>
            {isExpanded ? t('common.collapse') : t('common.expand')}
          </Text>
          <Icon
            size={ms(22)}
            color={theme.dark ? theme.colors.white : theme.colors.black}
            name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.parentHr} />

      {isExpanded && (
        <View style={styles.child}>
          {markdown ? (
            <Markdown
              value={children}
              styles={markdownStyles(theme)}
              flatListProps={{
                initialNumToRender: 8,
                showsVerticalScrollIndicator: false
              }}
            />
          ) : _.isObject(children) ? (
            children
          ) : (
            <Text>{children}</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default Accordion;
