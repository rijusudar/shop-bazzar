import { ImageProps } from "../../UI/Image/Image.types";

export interface ImageLoadProps {
  // imageType: "single" | "double";
  children:
    | React.ReactElement<ImageProps>
    | Array<React.ReactElement<ImageProps>>;
}
