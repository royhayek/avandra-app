// Packages
import React, { RefObject } from 'react';

// Components
import { Portal } from 'react-native-paper';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface CustomBottomSheetProps {
  onClose: () => void;
  children: React.ReactNode;
  snapPoints: (number | string)[];
  sheetRef: RefObject<BottomSheetMethods>;
}

// Component
const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({ sheetRef, snapPoints, onClose, children }) => {
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
        enablePanDownToClose
        snapPoints={snapPoints}
        backgroundStyle={styles.background}
        handleIndicatorStyle={{ display: 'none' }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop {...props} opacity={0.5} disappearsOnIndex={-1} appearsOnIndex={0} pressBehavior="close" />
        )}>
        {children}
      </BottomSheet>
    </Portal>
  );
};

export default CustomBottomSheet;
