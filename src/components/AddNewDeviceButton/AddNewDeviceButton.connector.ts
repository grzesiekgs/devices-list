import { DevicesActions } from 'logic/devices/actions';
import { connect } from 'react-redux';
import { AddNewDeviceButtonProps } from './AddNewDeviceButton.types';

const mapDispatchToProps = {
  createDevice: DevicesActions.createDevice
};

export const connector = connect<null, AddNewDeviceButtonProps>(null, mapDispatchToProps);
