import * as React from "react";
import { Logo } from "../constants/Constants";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Tooltip,
  styled,
} from "@mui/material";

import { Adb, ArrowDropDown, Notifications } from "@mui/icons-material";
import Search from "./Search";

const LOGO = styled("img")({
  width: "content-fit",
  height: "50px",
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
            <LOGO src={Logo} />
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
