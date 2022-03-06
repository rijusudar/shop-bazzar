import React from "react";
import Grid from "@mui/material/Grid";

import STabs from "../STabs/STabs";

import styles from "./LeftPane.module.css";

import { ViewportWidth } from "../../../utils/viewport-width";

const LeftPane = () => {
  const { width } = ViewportWidth();
  const toggleMenu = width <= 1068;
  const renderTemplate = !toggleMenu ? (
    <Grid item md={3}>
      <div className={styles["left-pane__sticky"]}>
        <STabs />
      </div>
    </Grid>
  ) : null;
  return renderTemplate;
};

export default LeftPane;
