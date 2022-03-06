import React from "react";
import Button from "@mui/material/Button";
import clsx from "clsx";

import { ButtonProps } from "./Button.types";

import classes from "./Button.module.css";

const Buttons = ({
  variant,
  isFitContent = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Button
      variant={variant === "primary" ? "contained" : "outlined"}
      className={clsx(
        classes.button,
        variant === "primary"
          ? classes["button--primary"]
          : classes["button--secondary"],
        isFitContent && classes["button--fit-content"]
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Buttons;
