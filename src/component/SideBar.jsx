import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SIDEBAR_CONFIG } from "../config/SideBar.config";

const Container = styled(Box)({
  "& > ul": {
    padding: "10px 0 0 0",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  },
  "& > ul > li": {
    marginLeft: 10,
  },
  "& > ul > a >li > svg": {
    marginRight: 20,
  },
  "& > ul > a": {
    textDecoration: "none",
    color: "inherit",
  },
});

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "250px",
        position: "fixed",
        bgcolor: "white",
        height: "100%",
        border: 2,
        borderColor: "#eeeeee",
      }}
    >
      <Container style={{ paddingTop: "1rem" }}>
        <List>
          {SIDEBAR_CONFIG.map((data, i) => (
            <ListItemButton
              key={i}
              disableRipple
              onClick={() => navigate(data.path)}
              style={
                data.path === window.location.pathname
                  ? { background: "#55bc55", color: "#ffffff" }
                  : null
              }
            >
              <ListItemIcon sx={{ color: "inherit", marginLeft: 1.5 }}>
                <data.icon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={data.title} />
            </ListItemButton>
          ))}
        </List>
      </Container>
    </Box>
  );
}
