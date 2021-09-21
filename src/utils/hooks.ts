// NOTE This file could be split into single hook per file as it grows.
import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DevicesFiltersState, IDevice } from 'types/devices';
import { CheckboxOnChange, InputOnChange, MultiSelectOnChange } from 'src/components';

export const useResettableState = <State, DefaultValue = State>(
  defaultValue: DefaultValue
): [State | DefaultValue, Dispatch<SetStateAction<State | DefaultValue>>, () => void] => {
  const [state, setState] = useState<State | DefaultValue>(defaultValue);
  const resetState = useCallback(() => setState(defaultValue), [defaultValue]);

  return [state, setState, resetState];
};

export const useToggle = (): [boolean, () => void, () => void, () => void] => {
  const [toggle, setToggle, toggleOff] = useResettableState<boolean>(false);
  const toggleOn = useCallback(() => setToggle(true), []);
  const switchToggle = useCallback(() => setToggle((toggle) => !toggle), []);

  return [toggle, switchToggle, toggleOn, toggleOff];
};

type FilteringFunction = (device: IDevice) => boolean;

const filterByAisles =
  (selectedAisled: string[]): FilteringFunction =>
  ({ aisle }) =>
    selectedAisled.includes(aisle);

const filterByBatteryLevel =
  (maxBatteryLevel: number): FilteringFunction =>
  ({ batteryLevel }) =>
    parseInt(String(batteryLevel * 100)) <= maxBatteryLevel;

const filterBySearchQuery =
  (searchQuery: string): FilteringFunction =>
  ({ deviceName }) =>
    deviceName.toLowerCase().includes(searchQuery);

export const useFilteredDevices = (
  devices: IDevice[],
  initialFilters: DevicesFiltersState
): [IDevice[], DevicesFiltersState, Dispatch<SetStateAction<DevicesFiltersState>>] => {
  const [filters, setFilters] = useState<DevicesFiltersState>(initialFilters);
  const filteredDevices = useMemo<IDevice[]>(() => {
    const filteringFunction = [
      filterByAisles(filters.selectedAisles),
      filterByBatteryLevel(filters.lowBattery ? 20 : 100),
      filterBySearchQuery(filters.searchQuery)
    ];
    const result = devices.filter((device) =>
      filteringFunction.every((filteringFunction) => filteringFunction(device))
    );

    return result;
  }, [devices, filters]);

  return [filteredDevices, filters, setFilters];
};
// NOTE This hook could include debounce, in order to avoid rerendering spam while typing in search bar.
// I had useDebounce hook in boilerplate project (I've removed it in last commit if You want to have a look on it), but I decided that it would be just too much.
export const useFiltersState = <FiltersOnChange extends (filters: DevicesFiltersState) => void>(
  filters: DevicesFiltersState,
  onChange: FiltersOnChange
): [InputOnChange, MultiSelectOnChange, CheckboxOnChange] => {
  const filtersRef = useRef<DevicesFiltersState>(filters);
  const updater = useCallback(
    (filtersFragment: Partial<DevicesFiltersState>) =>
      onChange({
        ...filtersRef.current,
        ...filtersFragment
      }),
    [onChange]
  );
  const handleSearchQuery = useCallback<InputOnChange>((searchQuery) => updater({ searchQuery }), [updater]);
  const handleAisles = useCallback<MultiSelectOnChange>((selectedAisles) => updater({ selectedAisles }), [updater]);
  const handleLowBattery = useCallback<CheckboxOnChange>((_, lowBattery) => updater({ lowBattery }), [updater]);

  useEffect(() => {
    filtersRef.current = filters;
  }, [filters]);

  return [handleSearchQuery, handleAisles, handleLowBattery];
};
