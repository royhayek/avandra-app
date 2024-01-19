// Packages
import { useTheme, Snackbar, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
// Utilities
import { snackbarActions, selectSnackBar } from '../../../redux/snackbar/slice';
import makeStyles from './styles';

// Component
const CustomSnackbar = () => {
  // Redux
  const dispatch = useDispatch();

  const snackbarSelect = useSelector(selectSnackBar);

  // Statics
  const theme = useTheme();
  const styles = makeStyles(theme);

  const { show, message, delay } = snackbarSelect;

  // Callbacks
  const handleDismiss = useCallback(() => dispatch(snackbarActions.hideSnackbar()), [dispatch]);

  // Renderers
  return (
    <Snackbar
      visible={show}
      duration={delay}
      style={styles.container}
      onDismiss={handleDismiss}
      wrapperStyle={styles.wrapper}>
      <Text variant="medium" style={styles.message}>
        {message}
      </Text>
    </Snackbar>
  );
};

export default CustomSnackbar;
