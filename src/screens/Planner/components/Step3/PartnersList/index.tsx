// Packages
import _ from 'lodash';
import React from 'react';
import { ms } from 'react-native-size-matters';

// Components
import { Text, useTheme } from 'react-native-paper';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity, View } from 'react-native';

// Utilities
import makeStyles from './styles';
import { PARTNERS_LIST } from '../data';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface PartnersListProps {
  value: string;
  setValue: (value: string) => void;
}

// Component
const PartnersList: React.FC<PartnersListProps> = ({ value, setValue }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <FlatList
      data={PARTNERS_LIST}
      contentContainerStyle={styles.flatList}
      // columnWrapperStyle={styles.listColumnWrapper}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => {
        const isActive = _.isEqual(value, item.key);
        return (
          <TouchableOpacity
            onPress={() => setValue(item.key)}
            style={[styles.button, { borderColor: isActive ? theme.colors.primary : theme.colors.lightGray }]}>
            <View>
              <View style={[styles.iconContainer, { backgroundColor: isActive ? theme.colors.primary : 'transparent' }]}>
                <MaterialIcons
                  size={ms(24)}
                  name={item.icon}
                  color={isActive ? theme.colors.white : theme.dark ? theme.colors.white : theme.colors.black}
                />
              </View>
              <Text
                variant="titleMedium"
                style={[styles.title, { color: isActive ? theme.colors.primary : theme.dark ? theme.colors.white : theme.colors.black }]}>
                {item.title}
              </Text>
            </View>
            {isActive && <Ionicons name="ios-checkmark-sharp" size={ms(25)} color={theme.colors.primary} />}
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default PartnersList;
