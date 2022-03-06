import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabPanel from "./TabPanel/TabPanel";

import LinkText from "../../UI/LinkText/LinkText";

import styles from "./STabs.module.css";

const STabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `stab-${index}`,
      "aria-controls": `stab-panel-${index}`
    };
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="stabs">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Delivery" {...a11yProps(1)} />
          <Tab label="Fit" {...a11yProps(2)} />
          <Tab label="Share" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className={styles["stab__panel"]}>
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky. it
        has a straight fit with well defined shoulders and a shawl collar
        culminating in a button and has been flawlessly finished with three jet
        pockets with a sartorial feel.
        <span className={styles["stab__typography"]}>
          See the
          <LinkText element="a" href="#">
            {" "}
            EDITOR’S NOTE
          </LinkText>
        </span>
        <span className={styles["stab__typography"]}>
          Learn about the
          <LinkText element="a" href="#">
            {" "}
            DESIGNER
          </LinkText>
        </span>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
};

export default STabs;
