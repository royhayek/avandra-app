// Packages
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { Snackbar, Text } from 'react-native-paper';

// Utilities
import makeStyles from './styles';
import { useAppSelector } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import { snackbarActions, selectSnackBar } from '@redux/snackbar/slice';

// Component
const CustomSnackbar = () => {
  // Redux
  const dispatch = useDispatch();

  const snackbarSelect = useAppSelector(selectSnackBar);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const { type, show, message, delay } = snackbarSelect;

  console.debug({ type, show, message, delay });

  // Callbacks
  const handleDismiss = useCallback(() => dispatch(snackbarActions.hideSnackbar()), [dispatch]);

  // Renderers
  return (
    <Snackbar
      visible={show}
      duration={delay}
      style={{
        backgroundColor:
          type === 'success' ? theme.colors.primary : type === 'info' ? theme.colors.pieBlue : theme.colors.redSurface
      }}
      onDismiss={handleDismiss}
      wrapperStyle={styles.wrapper}>
      <Text variant="medium" style={styles.message}>
        {message}
      </Text>
    </Snackbar>
  );
};

export default CustomSnackbar;
