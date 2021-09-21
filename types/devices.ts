export interface IDeviceImage {
  imageUrl: string;
  detectedAt: string;
}

export interface IDeviceConfig {
  imageQuality: number;
  brightness: number;
  wiFiSSID: string;
  wiFiAuth: number;
  wiFiPass: string;
}

export interface IDevice {
  deviceName: string;
  otaVersion: string;
  batteryLevel: number;
  batteryVoltage: number;
  latestStatusAt: string;
  aisle: string;
  latestImages: IDeviceImage[];
  configs: IDeviceConfig;
}

export interface IDevicePost extends Pick<IDevice, 'deviceName' | 'aisle'> {}

export interface IDevicesGetResponse {
  devices: IDevice[];
}

export interface IDevicePostResponse {
  device: IDevice;
}

export interface DevicesFiltersState {
  selectedAisles: string[];
  searchQuery: string;
  lowBattery: boolean;
}
