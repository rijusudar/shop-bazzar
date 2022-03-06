import React from "react";
import clsx from "clsx";

import { ChipGroupProps } from "./ChipGroup.types";

import styles from "./ChipGroup.module.css";

const ChipGroup = ({
  legend,
  value,
  hoverValue,
  id,
  children,
  className,
  topRightContent
}: ChipGroupProps) => {
  const hintErrorId = `${id}-hint-error`;
  const curValue = hoverValue || value;
  return (
    <fieldset
      id={id}
      className={clsx(
        styles["chip-group"],
        styles["fieldset-reset"],
        className
      )}
      aria-describedby={hintErrorId}
    >
      <div className={styles["content-alignment"]}>
        <legend className={styles["chip-group__legend"]}>
          <label>{legend}:</label>
          <label className={styles["chip-group__value"]}>{curValue}</label>
        </legend>
        {topRightContent && (
          <div className={styles["chip-group__extra"]}>{topRightContent}</div>
        )}
      </div>
      <div className={styles["chip-group__chips"]} id={styles.ChipGroup}>
        {children}
      </div>
    </fieldset>
  );
};

export default ChipGroup;
