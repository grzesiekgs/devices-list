import React, { FunctionComponent } from 'react';
import { AddNewDeviceButtonConnected, DevicesCatalogConnected } from 'src/components';
import Styles from './devicesPage.module.scss';

export const DevicesPage: FunctionComponent = () => (
  <div className={Styles.devicesPage}>
    <AddNewDeviceButtonConnected />
    <DevicesCatalogConnected />
  </div>
);
