import React from "react";
import clsx from "clsx";

import { ChipProps } from "./Chip.types";

import styles from "./Chip.module.css";

const Chip = ({
  image,
  noImage,
  label,
  unavailable = false,
  type,
  name,
  id,
  className = "",
  disabled = false,
  onChange,
  selected,
  onMouseEnter,
  onMouseLeave,
  ...props
}: ChipProps) => {
  const [bgColor, setBgColor] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState(image);

  const handleImageErrored = (event: { currentTarget: { src: string } }) => {
    if (noImage && event.currentTarget.src !== noImage) {
      setImageUrl(noImage);
    } else {
      setBgColor(true);
    }
  };

  return (
    <div className={styles.chip}>
      {image ? (
        <img
          className={styles["chip__default-image"]}
          src={imageUrl}
          onError={handleImageErrored}
          alt="default"
        />
      ) : null}
      <input
        className={clsx(
          styles["chip__input"],
          disabled ? styles["chip__input--disabled"] : ""
        )}
        id={id}
        type={type}
        name={name}
        disabled={disabled}
        onChange={onChange}
        checked={selected}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      />
      <label
        id={id}
        color="secondary"
        className={clsx(
          styles["chip__label"],
          image ? styles["chip__label--with-image"] : ""
        )}
        style={
          bgColor
            ? { backgroundColor: "#DADADA" }
            : {
                backgroundImage: image ? `url(${imageUrl})` : undefined
              }
        }
      >
        <div
          className={clsx(styles["chip__strikethrough"])}
          hidden={!unavailable}
        ></div>
        {image ? null : label}
      </label>
    </div>
  );
};

export default Chip;
