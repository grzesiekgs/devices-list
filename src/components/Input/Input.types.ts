export type InputOnChange = (value: string) => void;

export interface InputProps {
  value: string;
  onChange: InputOnChange;
  className?: string;
}
