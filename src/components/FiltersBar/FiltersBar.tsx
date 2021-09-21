import React, { FunctionComponent } from 'react';
import { useFiltersState } from 'src/utils/hooks';
import { Checkbox, Input, MultiSelect } from 'src/components';
import { FiltersBarProps } from './FiltersBar.types';
import Styles from './filtersBar.module.scss';

export const FiltersBar: FunctionComponent<FiltersBarProps> = ({ allAisles, filtersState, onChange }) => {
  const [handleSearchQuery, handleAisles, handleLowBattery] = useFiltersState(filtersState, onChange);

  return (
    <div className={Styles.filtersBar}>
      <Input value={filtersState.searchQuery} onChange={handleSearchQuery} />
      <MultiSelect
        label={'Select aisles'}
        items={allAisles}
        selected={filtersState.selectedAisles}
        onChange={handleAisles}
      />
      <Checkbox label={'Low battery'} checked={filtersState.lowBattery} onChange={handleLowBattery} />
    </div>
  );
};
