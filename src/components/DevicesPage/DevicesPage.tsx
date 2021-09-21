import React, { FunctionComponent } from 'react';
import { AddNewDeviceConnected, DevicesCatalogConnected } from 'src/components';
import Styles from './devicesPage.module.scss';

export const DevicesPage: FunctionComponent = () => (
  <div className={Styles.devicesPage}>
    <AddNewDeviceConnected />
    <DevicesCatalogConnected />
  </div>
);
