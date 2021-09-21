import React, { FunctionComponent } from 'react';
import { useFilteredDevices } from 'src/utils/hooks';
import { DevicesList, FiltersBar } from 'src/components';
import { DevicesCatalogProps } from './DevicesCatalog.types';
import { connector } from './DevicesCatalog.connector';
import Styles from './devicesCatalog.module.scss';

export const DevicesCatalog: FunctionComponent<DevicesCatalogProps> = ({ devices, aisles }) => {
  const [filteredDevices, filters, setFilters] = useFilteredDevices(devices, {
    lowBattery: false,
    searchQuery: '',
    selectedAisles: aisles
  });

  return (
    <div className={Styles.devicesCatalog}>
      <FiltersBar allAisles={aisles} filtersState={filters} onChange={setFilters} />
      <DevicesList devices={filteredDevices} />
    </div>
  );
};

export const DevicesCatalogConnected = connector(DevicesCatalog);
