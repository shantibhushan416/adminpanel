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
import { green } from "@mui/material/colors";
import styled from "@emotion/styled";

const LegendBox = styled(Box)({
  height: "15px",
  width: "15px",
  // display: "inline-block",
  borderRadius: 2,
});

export default function CashFlowCard() {
  return (
    <Card
      style={{ height: "286px" }}
      sx={{ boxShadow: 3, bgcolor: "white" }}
      variant="plain"
    >
      <CardHeader
        title="Total cash flow"
        titleTypographyProps={{ fontSize: "14px", fontWeight: 600 }}
        action={
          <Stack padding={{paddingTop:"1.5px"}} direction="row" gap={2}>
            <Stack direction="row" alignItems="center" gap={1}>
              <LegendBox
                sx={{
                  bgcolor: "#59a271",
                }}
              ></LegendBox>
              <Typography sx={{ fontSize: 14 }}>In</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1}>
              <LegendBox
                sx={{
                  bgcolor: green[500],
                }}
              ></LegendBox>
              <Typography sx={{ fontSize: 14 }}>Out</Typography>
            </Stack>
          </Stack>
        }
      />
      <Divider />
      <CardContent></CardContent>
    </Card>
  );
}
