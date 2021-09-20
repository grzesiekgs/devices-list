import { DevicesAPI } from 'api/devices';
import { AislesActions } from 'logic/aisles/actions';
import { all, put, call, takeLatest } from 'redux-saga/effects';
import { IDevicesResponse } from 'types/devices';
import { DevicesActions, DevicesActionsTypes } from './actions';
import { IFetchDevicesAction } from './types';

const fetchData = async () => await DevicesAPI.getDevicesData();

export function* fetchDevicesData(): unknown {
  try {
    console.log('fetchdevicesdata??');
    const { devices }: IDevicesResponse = yield call(fetchData);
    const allAisles = devices.map(({ aisle }) => aisle);
    const uniqueAisles = Array.from(new Set(allAisles));

    yield all([put(DevicesActions.fetchDevicesSuccess(devices)), put(AislesActions.setAisles(uniqueAisles))]);
  } catch (err) {
    console.warn('fetchDevicesData error', err);
  }
}

export function* devicesSaga() {
  yield all([takeLatest<IFetchDevicesAction>(DevicesActionsTypes.FETCH_DEVICES, fetchDevicesData)]);
}
