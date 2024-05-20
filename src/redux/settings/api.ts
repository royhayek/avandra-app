// Packages
import axios from 'axios';

// Interfaces
import { MessageProps } from '@shared/types/Message';

// Calls

export const getFaqCategories = () => axios.get('faqcategory/list');

export const getFaqQuestions = (_id: string) => axios.get(`faq/list/${_id}`);

export const submitMessage = (payload: MessageProps) => axios.post('message/create', payload);