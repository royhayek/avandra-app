import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  message: Yup.string().required('Message is required')
});
