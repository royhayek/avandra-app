// Packages
import _ from 'lodash';
import React, { useCallback, useRef } from 'react';

// Components
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Input from '@shared/components/Input';
import { Formik, FormikProps } from 'formik';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { contactSchema } from 'src/schemas/Contact/ContactSchema';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface FaqScreenProps {}

interface ContactFormProps {
  title: string;
  message: string;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`contact.${key}`, options);

const ContactScreen: React.FC<FaqScreenProps> = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const formRef = useRef<FormikProps<ContactFormProps> | null>(null);

  const formInitialValues = { title: '', message: '' };
  // Callbacks

  const handleFormSubmit = useCallback(async () => {}, []);

  // Renderers
  return (
    <View style={styles.container}>
      <Text variant="xLarge" style={styles.title}>
        {_t('reach_out_to_us')}
      </Text>

      <Formik
        innerRef={formRef}
        onSubmit={handleFormSubmit}
        validationSchema={contactSchema}
        initialValues={formInitialValues}>
        {({ handleChange, handleSubmit, values, errors }) => (
          <View style={styles.form}>
            <Input
              name="title"
              value={values.title}
              error={errors.title}
              label={_t('title')}
              placeholder={_t('title')}
              handleChange={handleChange('title')}
            />

            <Input
              multiline
              name="message"
              numberOfLines={5}
              label={_t('message')}
              error={errors.message}
              value={values.message}
              placeholder={_t('message')}
              inputStyle={styles.message}
              handleChange={handleChange('message')}
            />

            <RegularButton
              // loading={loading}
              onPress={handleSubmit}
              title={t('common.submit')}
              style={styles.submitButton}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ContactScreen;
