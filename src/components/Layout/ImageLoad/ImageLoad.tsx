import React from "react";

import { ImageLoadProps } from "./ImageLoad.type";

import styles from "./ImageLoad.module.css";

const ImageLoad = ({ children }: ImageLoadProps) => {
  return <div className={styles["image-load"]}>{children}</div>;
};

export default ImageLoad;
