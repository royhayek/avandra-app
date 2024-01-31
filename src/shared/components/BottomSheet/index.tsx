// Packages
import React, { RefObject } from 'react';

// Components
import { Divider, Portal, Text } from 'react-native-paper';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import RegularButton from '../Buttons/Regular';
import { Platform, View } from 'react-native';

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
  sheetRef: RefObject<BottomSheetMethods>;
}

// Component
const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  title,
  sheetRef,
  onClose,
  children,
  titleColor,
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
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            pressBehavior="close"
          />
        )}>
        <BottomSheetView style={styles.container}>
          {title && (
            <Text variant="h4" style={[styles.title, titleColor ? { color: titleColor } : {}]}>
              {title}
            </Text>
          )}

          <Divider style={styles.divider} />

          {children}

          <View style={styles.actions}>
            <RegularButton
              variant="secondary"
              style={styles.button}
              title={secondaryBtnProps?.title}
              onPress={secondaryBtnProps?.onPress}
            />
            <RegularButton
              variant="primary"
              style={styles.button}
              title={primaryBtnProps?.title}
              onPress={primaryBtnProps?.onPress}
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </Portal>
  );
};

export default CustomBottomSheet;
