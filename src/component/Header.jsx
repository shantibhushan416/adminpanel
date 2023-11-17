import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Tooltip,
  styled,
} from "@mui/material";
import { ArrowDropDown, Notifications } from "@mui/icons-material";
import Search from "./Search";

const LOGO = styled("img")({
  width: "content-fit",
  height: "35px",
  marginLeft: 10,
});

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "black" }}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <LOGO src="https://desk.assiduus.in/content/images/2023/08/Assiduus_TM_Logo--1-.png" alt="Logo" />
          </Typography>
          <Search />
          <Notifications style={{ color: "black" }} />
          <Box sx={{ flexGrow: 0 }} style={{ marginLeft: "2rem" }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
          <ArrowDropDown style={{ color: "black", marginLeft: "0.5rem" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;
