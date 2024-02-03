// Packages
import _ from 'lodash';
import React from 'react';

// Components
import CustomBottomSheet from '../BottomSheet';

// Utilities
import { t } from '@app/i18n';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface DeletionSheetProps {
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  children: React.ReactNode;
  sheetRef: React.RefObject<BottomSheetMethods>;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`common.${key}`, options);

const DeletionSheet: React.FC<DeletionSheetProps> = ({ sheetRef, title, onClose, onSubmit, children }) => {
  // Renderers
  return (
    <CustomBottomSheet
      title={title}
      onClose={onClose}
      sheetRef={sheetRef}
      secondaryBtnProps={{ title: _t('cancel'), onPress: onClose }}
      primaryBtnProps={{ title: _t('yes_delete'), onPress: onSubmit }}>
      {children}
    </CustomBottomSheet>
  );
};

export default DeletionSheet;
