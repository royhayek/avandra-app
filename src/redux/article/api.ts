import axios from 'axios';

// Calls
export const getArticles = () => axios.get('article/list');

export const getArticleDetails = (id: string) => axios.get(`article/read/${id}`);
