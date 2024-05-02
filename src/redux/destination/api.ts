import axios from 'axios';
import { DestinationProps } from '@shared/types/Destination';

// Calls
export const getDestinations = () => axios.get('destination/list');

export const getDestinationDetails = (id: string) => axios.get(`destination/read/${id}`);

export const getTravelers = () => axios.get('traveler/list');

export const getInterests = () => axios.get('interest/list');

export const getBudgets = () => axios.get('budget/list');

export const getRecentSearches = () => axios.get('search/recent');

export const incrementSearches = (payload: DestinationProps) => axios.post('search/increment', payload);
