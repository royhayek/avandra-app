// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { Text } from 'react-native-paper';
import { FlatList, TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface PartnersListProps {
  list: [];
  value: string;
  transKey: string;
  setValue: (value: string) => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.${key}`, options);

const PartnersList: React.FC<PartnersListProps> = ({ transKey, list, value, setValue }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  const renderItem = (item) => {
    const isActive = _.isEqual(value, item.key);

    return (
      <TouchableOpacity onPress={() => setValue(item.key)} style={[styles.button, isActive && styles.activeButton]}>
        <View>
          <Text variant="h5">{_t(`${transKey}.${item.title}`)}</Text>
          <Text variant="medium" style={styles.description}>
            {_t(`${transKey}.${item.desc}`)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.key}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatList}
      renderItem={({ item }) => renderItem(item)}
    />
  );
};

export default PartnersList;
