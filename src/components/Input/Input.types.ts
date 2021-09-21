export type InputOnChange = (value: string) => void;

export interface InputProps {
  value: string;
  onChange: InputOnChange;
  placeholder?: string;
  className?: string;
}
