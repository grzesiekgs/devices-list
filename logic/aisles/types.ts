import { Action } from 'redux';

export type IAislesState = string[];

export interface IAislesActionsTypes {
  SET_AISLES: string;
}

export interface ISetAislesAction extends Action<'SET_AISLES'> {
  aisles: string[];
}

export interface IAislesActionsCreators {
  setAisles: (aisles: string[]) => ISetAislesAction;
}
