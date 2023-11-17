import React from "react";
import { Box } from "@mui/material";
import Header from "./component/Header";
import SideBar from "./component/SideBar";


function AppLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <Box sx={{ mt: 10, ml: 33, mr: 1,mb:1 }}>
        {children}
      </Box>
    </React.Fragment>
  );
}

export default AppLayout;
