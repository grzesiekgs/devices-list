import { IDevicePost, IDevicePostResponse, IDevicesGetResponse } from 'types/devices';

export const DevicesAPI = {
  getDevicesData(): Promise<IDevicesGetResponse> {
    return fetch('http://localhost:3000/devices-data.json').then((data) => data.json());
  },
  postDeviceData(device: IDevicePost): Promise<IDevicePostResponse> {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            device: {
              ...device,
              // NOTE Hardcoded values just to mock API.
              otaVersion: '0.11.0',
              batteryLevel: 100,
              batteryVoltage: 4,
              latestStatusAt: new Date().toISOString(),
              latestImages: [],
              configs: {
                imageQuality: 0.8,
                brightness: 0.9,
                wiFiSSID: 'demo',
                wiFiAuth: 1,
                wiFiPass: 'secretPass'
              }
            }
          }),
        300
      )
    );
  }
};
