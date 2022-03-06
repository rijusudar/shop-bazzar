import * as ReactRouterDom from "react-router-dom";

export interface LinkTextProps {
  element: "button" | "a" | React.ComponentType<ReactRouterDom.LinkProps>;
  children: any;
  href?: string;
  to?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
}
