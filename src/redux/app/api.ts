import axios from 'axios';

// Calls

export const getWalkthrough = () => axios.get('walkthrough/list');
