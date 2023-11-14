import { SIDEBAR_CONFIG } from "../config/SideBar.config";

import styled from "@emotion/styled";
import { CreateOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)({
  "& > ul": {
    padding: "10px 0 0 0",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  },
  "& > ul > a >li > svg": {
    marginRight: 20,
  },
  "& > ul > a": {
    textDecoration: "none",
    color: "inherit",
  },
});
// const ComposeButton = styled(Button)({
//   background: "#c2e7ff",
//   color: "#001d25",
//   padding: 16,
//   borderRadius: 16,
//   minWidth: 140,
//   textTransform: "none",
// });

export default function SideBarContent() {
  const navigate = useNavigate();

  return (
    <Container style={{ paddingTop: "1rem" }}>
      <List>
        {SIDEBAR_CONFIG.map((data) => (
          <ListItemButton
            disableRipple
            onClick={() => navigate(data.path)}
            style={
              data.path === window.location.pathname
                ? { background: "#55bc55", color: "#ffffff" }
                : null
            }
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <data.icon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={data.title} />
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
}
