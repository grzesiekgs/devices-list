import { connect } from 'react-redux';
import { RootState } from 'logic/types';
import { DevicesActions } from 'logic/devices/actions';
import { AddNewDeviceDispatchProps, AddNewDeviceOwnProps, AddNewDeviceStateProps } from './AddNewDevice.types';

const mapStateToProps = (state: RootState): AddNewDeviceStateProps => ({
  aisles: state.aisles
});

const mapDispatchToProps = {
  createDevice: DevicesActions.createDevice
};

export const connector = connect<AddNewDeviceStateProps, AddNewDeviceDispatchProps, AddNewDeviceOwnProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
);
