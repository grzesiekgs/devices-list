export type MultiSelectOnChange = (selected: string[]) => void;

export interface MultiSelectProps {
  label: string;
  items: string[];
  selected: string[];
  onChange: MultiSelectOnChange;
}
