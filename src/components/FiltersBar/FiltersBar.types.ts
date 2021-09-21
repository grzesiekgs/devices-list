import { DevicesFiltersState } from 'types/devices';

export type FiltersBarOnChange = (filtersState: DevicesFiltersState) => void;

export interface FiltersBarProps {
  filtersState: DevicesFiltersState;
  allAisles: string[];
  onChange: FiltersBarOnChange;
}
