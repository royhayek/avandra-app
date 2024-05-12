// Packages
import _ from 'lodash';
import React, { RefObject } from 'react';

// Components
import RegularButton from '../Buttons/Regular';
import { useAppTheme } from '@shared/assets/theme';
import { Divider, Portal, Text } from 'react-native-paper';
import { Platform, StyleProp, View, ViewStyle } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';

// Utilities
import makeStyles from './styles';

// Interfaces
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

interface CustomBottomSheetProps {
  title: string;
  onClose: () => void;
  titleColor?: string;
  children: React.ReactNode;
  primaryBtnProps?: ButtonProps;
  secondaryBtnProps?: ButtonProps;
  contentStyle?: StyleProp<ViewStyle>;
  sheetRef: RefObject<BottomSheetMethods>;
}

// Component
const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  title,
  onClose,
  sheetRef,
  children,
  titleColor,
  contentStyle,
  primaryBtnProps,
  secondaryBtnProps
}) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <Portal>
      <BottomSheet
        index={-1}
        ref={sheetRef}
        onClose={onClose}
        enableDynamicSizing
        enablePanDownToClose
        keyboardBlurBehavior="restore"
        backgroundStyle={styles.background}
        keyboardBehavior={Platform.OS === 'android' ? 'extend' : 'interactive'}
        handleIndicatorStyle={{ backgroundColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[200] }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.6}
            appearsOnIndex={0}
            pressBehavior="close"
            disappearsOnIndex={-1}
          />
        )}>
        <BottomSheetView style={styles.container}>
          {title && (
            <Text variant="h4" style={[styles.title, titleColor ? { color: titleColor } : {}]}>
              {title}
            </Text>
          )}

          <Divider style={styles.divider} />

          <View style={[styles.content, contentStyle]}>{children}</View>

          {((primaryBtnProps && !_.isFunction(primaryBtnProps)) ||
            (secondaryBtnProps && !_.isFunction(secondaryBtnProps))) && (
            <>
              <Divider style={styles.divider} />

              <View style={styles.actions}>
                {secondaryBtnProps && (
                  <RegularButton
                    variant="secondary"
                    style={styles.button}
                    title={secondaryBtnProps?.title}
                    onPress={secondaryBtnProps?.onPress}
                  />
                )}
                {primaryBtnProps && (
                  <RegularButton
                    variant="primary"
                    style={styles.button}
                    title={primaryBtnProps?.title}
                    onPress={primaryBtnProps?.onPress}
                  />
                )}
              </View>
            </>
          )}
        </BottomSheetView>
      </BottomSheet>
    </Portal>
  );
};

export default CustomBottomSheet;
