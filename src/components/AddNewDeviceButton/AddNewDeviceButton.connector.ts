import { connect } from 'react-redux';
import { RootState } from 'logic/types';
import { DevicesActions } from 'logic/devices/actions';
import { AddNewDeviceDispatchProps, AddNewDeviceStateProps } from './AddNewDeviceButton.types';

const mapStateToProps = (state: RootState): AddNewDeviceStateProps => ({
  aisles: state.aisles
});

const mapDispatchToProps = {
  createDevice: DevicesActions.createDevice
};

export const connector = connect<AddNewDeviceStateProps, AddNewDeviceDispatchProps, null, RootState>(
  mapStateToProps,
  mapDispatchToProps
);
