import { Configuration } from 'openai';
import { API_KEY } from '@env';

export const openAIConfig = new Configuration({ apiKey: API_KEY });
