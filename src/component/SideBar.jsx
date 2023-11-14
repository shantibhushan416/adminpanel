import { grey } from "@mui/material/colors";
import SideBarContent from "./SideBarContent";
import { Box, Drawer } from "@mui/material";

export default function SideBar() {
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
      <SideBarContent />
    </Box>
  );
}
