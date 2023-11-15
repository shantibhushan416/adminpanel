import React from "react";
import WaveForm from "../../component/WebForm";
import { Button, Card, CardContent, CardHeader, Divider } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function AccountCard() {
  return (
    <Card sx={{ boxShadow: 3, height: 350 }} variant="plain">
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
              sx={{
                mr: 2,
                color: "black",
                border: "1px solid black",
                textTransform: "none",
                fontWeight: 600,
                fontSize: 12,
                borderColor: "lightgray",
              }}
            >
              Manage
            </Button>
            <Button
              variant="outlined"
              size="small"
              endIcon={<KeyboardArrowDown />}
              sx={{
                color: "black",
                border: "1px solid black",
                textTransform: "none",
                fontWeight: 600,
                fontSize: 12,
                borderColor: "lightgray",
              }}
            >
              January
            </Button>
          </>
        }
      />
      <Divider />
      <CardContent style={{ padding: "0" ,height:"300px"}}>
        <WaveForm />
      </CardContent>
    </Card>
  );
}
