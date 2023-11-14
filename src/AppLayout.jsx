import React from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import { Box } from "@mui/material";

function AppLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <Box sx={{ mt: 10, ml: 33 }}>{children}</Box>
    </React.Fragment>
  );
}

export default AppLayout;
