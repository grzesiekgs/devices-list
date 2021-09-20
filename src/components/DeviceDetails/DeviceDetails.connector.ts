import { RootState } from 'logic/types';
import { connect } from 'react-redux';
import { DeviceDetailsOwnProps, DeviceDetailsProps } from './DeviceDetails.types';

const mapStateToProps = (state: RootState, ownProps: DeviceDetailsOwnProps): DeviceDetailsProps =>
  state.devices.devices[ownProps.deviceName];

export const connector = connect<DeviceDetailsProps, null, DeviceDetailsOwnProps, RootState>(mapStateToProps);
