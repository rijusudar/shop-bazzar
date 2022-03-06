export interface ChipProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;

  image?: string;

  unavailable?: boolean;

  noImage?: string;

  name: string;

  disabled?: boolean;

  value?: string;

  onChange?: (event: React.SyntheticEvent<HTMLInputElement>) => void;

  selected?: boolean;

  onMouseEnter?: (event: React.SyntheticEvent<HTMLInputElement>) => void;

  onMouseLeave?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}
