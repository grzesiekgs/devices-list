import React, { FunctionComponent } from 'react';
import { AddNewDeviceButtonConnected, DevicesCatalogConnected } from 'src/components';

export const DevicesPage: FunctionComponent = () => (
  <div>
    <AddNewDeviceButtonConnected />
    <DevicesCatalogConnected />
  </div>
);
