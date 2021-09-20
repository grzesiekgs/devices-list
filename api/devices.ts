import { IDevicesResponse } from 'types/devices';

export const DevicesAPI = {
  getDevicesData(): Promise<IDevicesResponse> {
    return fetch('http://localhost:3000/devices-data.json').then((data) => data.json());
  }
};
