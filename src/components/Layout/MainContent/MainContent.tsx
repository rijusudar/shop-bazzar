import React from "react";
import Grid from "@mui/material/Grid";

import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import CenterPane from "../CenterPane/CenterPane";

import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

const MainContent = () => {
  return (
    <LayoutWrapper element="section">
      <Grid container>
        <LeftPane />
        <CenterPane />
        <RightPane />
      </Grid>
    </LayoutWrapper>
  );
};

export default MainContent;
