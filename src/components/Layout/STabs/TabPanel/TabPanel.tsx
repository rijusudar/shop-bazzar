import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { TabPanelProps } from "./TabPanel.types";
import styles from "./TabPanel.module.css";

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography className={styles["tab-panel"]}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
