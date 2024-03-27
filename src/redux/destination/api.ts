import axios from 'axios';

// Calls
export const getDestinations = () => axios.get('destination/list');

export const getDestinationDetails = (id: string) => axios.get(`destination/read/${id}`);

export const getTravelers = () => axios.get('traveler/list');

export const getInterests = () => axios.get('interest/list');

export const getBudgets = () => axios.get('budget/list');
