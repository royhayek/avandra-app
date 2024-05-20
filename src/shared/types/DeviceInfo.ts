export interface DeviceDataProps {
  user: string;
  deviceId: string;
  pushToken: string | undefined;
  brand: string | null;
  manufacturer: string | null;
  modelName: string | null;
  osName: string | null;
  osVersion: string | null;
  deviceName: string | null;
  deviceYearClass: number | null;
}
