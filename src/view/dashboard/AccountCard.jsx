import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
export default function AccountCard() {
  return (
    <Card  sx={{ boxShadow: 3,height:350 }} variant="plain">
      <CardHeader
        title="Checking Account"
        titleTypographyProps={{ fontSize: "14px", fontWeight: 600 }}
        action={
          <>
            {" "}
            <Button
              variant="outlined"
              size="small"
              endIcon={<KeyboardArrowDown />}
              sx={{ mr: 2 }}
              style={{
                color: "black",
                border: "1px solid black",
                textTransform: "none",
              }}
            >
              Manage
            </Button>
            <Button
              variant="outlined"
              size="small"
              endIcon={<KeyboardArrowDown />}
              style={{
                color: "black",
                border: "1px solid black",
                textTransform: "none",
              }}
            >
              January
            </Button>
          </>
        }
      />
      <Divider />
      <CardContent style={{ padding: "0" }}></CardContent>
    </Card>
  );
}
