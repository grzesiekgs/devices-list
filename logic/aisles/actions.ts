import { createActions } from 'reduxsauce';
import { IAislesActionsCreators, IAislesActionsTypes } from './types';

export const { Types: AislesActionsTypes, Creators: AislesActions } = createActions<
  IAislesActionsTypes,
  IAislesActionsCreators
>(
  {
    setAisles: ['aisles']
  },
  { prefix: 'AISLES_' }
);
