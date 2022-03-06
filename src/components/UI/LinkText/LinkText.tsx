import React from "react";
import { LinkTextProps } from "./LinkText.types";

import classes from "./LinkText.module.css";

const LinkText = ({ element: Element, children, ...props }: LinkTextProps) => {
  return (
    // @ts-ignore
    <Element className={classes["link-text"]} {...props}>
      {children}
    </Element>
  );
};

export default LinkText;
