import { RootState } from 'logic/types';
import { connect } from 'react-redux';
import { DevicesListProps } from './DevicesList.types';

const mapStateToProps = (state: RootState): DevicesListProps => ({
  devices: Object.values(state.devices.devices)
});

export const connector = connect(mapStateToProps);
