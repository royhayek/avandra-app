// Packages
import _ from 'lodash';
import React, { RefObject, useCallback } from 'react';

// Components
import { Text } from 'react-native-paper';
import RegularButton from '../Buttons/Regular';
import CustomBottomSheet from '../BottomSheet';
import FastImage from 'react-native-fast-image';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppDispatch } from '@app/store';
import { authActions } from '@redux/auth/slice';

// Interfaces
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface LoginSheetProps {
  sheetRef: RefObject<BottomSheetMethods>;
}

// Component
const LoginSheet: React.FC<LoginSheetProps> = ({ sheetRef }) => {
  // Redux
  const dispatch = useAppDispatch();

  // Statics
  const styles = makeStyles();

  // Callbacks
  const handleSheetClose = useCallback(() => sheetRef.current?.close(), [sheetRef]);

  const handleNavigateToLogin = useCallback(async () => {
    dispatch(authActions.update({ authenticated: false, guest: false }));
    handleSheetClose();
  }, [dispatch, handleSheetClose]);

  // Effects
  return (
    <CustomBottomSheet sheetRef={sheetRef} onClose={handleSheetClose} contentStyle={styles.content}>
      <FastImage source={require('@shared/assets/images/SuccessProfileLogo.png')} style={styles.phoneLogo} />

      <Text variant="h4" style={styles.title}>
        {t('login.access_more_features')}
      </Text>
      <Text variant="large" style={styles.description}>
        {t('login.sign_in_to_generate')}
      </Text>

      <RegularButton title={t('login.sign_in')} onPress={handleNavigateToLogin} style={styles.signInBtn} />
    </CustomBottomSheet>
  );
};

export default LoginSheet;
