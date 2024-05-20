// Packages
import axios from 'axios';

// Interface
import { DeviceDataProps } from '@shared/types/DeviceInfo';

// Calls

export const getWalkthrough = () => axios.get('walkthrough/list');

export const getConfig = () => axios.get('settings/config');

export const storeDeviceInfo = (payload: DeviceDataProps) => axios.post('user/device-info', payload);
