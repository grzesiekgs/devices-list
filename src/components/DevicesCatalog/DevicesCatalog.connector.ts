import { RootState } from 'logic/types';
import { connect } from 'react-redux';
import { DevicesCatalogProps } from './DevicesCatalog.types';

const mapStateToProps = (state: RootState): DevicesCatalogProps => ({
  devices: Object.values(state.devices.devices),
  aisles: state.aisles
});

export const connector = connect(mapStateToProps);
