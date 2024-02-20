import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  type: Yup.string().required('Type is required'),
  message: Yup.string().required('Message is required')
});
