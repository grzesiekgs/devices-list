import { ReduxWrapperHydrateAction } from 'logic/types';
import { HYDRATE } from 'next-redux-wrapper';
import { createReducer } from 'reduxsauce';
import { ISetAislesAction } from './types';
import { aislesInitialState } from './initialState';
import { AislesActionsTypes } from './actions';

export const aislesReducer = createReducer(aislesInitialState, {
  [HYDRATE]: (state, { type: _type, payload }: ReduxWrapperHydrateAction) => [...state, ...(payload.aisles ?? [])],
  [AislesActionsTypes.SET_AISLES]: (_, action: ISetAislesAction) => action.aisles
});
