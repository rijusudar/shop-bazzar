import { ChipProps } from "../Chip/Chip.types";

export interface ChipGroupProps extends React.HTMLAttributes<HTMLElement> {
  children:
    | Array<React.ReactElement<ChipGroupChipProps>>
    | React.ReactElement<ChipGroupChipProps>;

  legend: string;

  value?: string;

  hoverValue?: string;

  id: string;

  topRightContent?: React.ReactNode;
}

export interface ChipGroupChipProps extends ChipProps {
  type: "radio";
}
