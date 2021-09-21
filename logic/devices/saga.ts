import { DevicesAPI } from 'api/devices';
import { AislesActions } from 'logic/aisles/actions';
import { all, put, call, takeLatest } from 'redux-saga/effects';
import { IDevicePostResponse, IDevicesGetResponse } from 'types/devices';
import { DevicesActions, DevicesActionsTypes } from './actions';
import { ICreateDeviceAction, IFetchDevicesAction } from './types';
// NOTE I'm using 'any' as return type, because yield returns 'any' so generator function does aswell.
export function* fetchDevicesData(): any {
  try {
    const { devices }: IDevicesGetResponse = yield call(DevicesAPI.getDevicesData);
    const allAisles = devices.map(({ aisle }) => aisle);
    const uniqueAisles = Array.from(new Set(allAisles));

    yield all([put(DevicesActions.fetchDevicesSuccess(devices)), put(AislesActions.setAisles(uniqueAisles))]);
  } catch (err) {
    console.warn('fetchDevicesData error', err);
  }
}

export function* postDeviceData(action: ICreateDeviceAction): any {
  try {
    const { device }: IDevicePostResponse = yield call(DevicesAPI.postDeviceData, action.device);

    yield all([put(DevicesActions.createDeviceSuccess(device))]);
  } catch (err) {
    console.warn('postDeviceData error', err);
  }
}

export function* devicesSaga() {
  yield all([
    takeLatest<IFetchDevicesAction>(DevicesActionsTypes.FETCH_DEVICES, fetchDevicesData),
    takeLatest<ICreateDeviceAction>(DevicesActionsTypes.CREATE_DEVICE, postDeviceData)
  ]);
}
