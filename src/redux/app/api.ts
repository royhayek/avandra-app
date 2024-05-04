import axios from 'axios';

// Calls

export const getWalkthrough = () => axios.get('walkthrough/list');

export const getConfig = () => axios.get('settings/config');
