import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
  styled
} from "@mui/material";
import { green } from "@mui/material/colors";


const LegendBox = styled(Box)({
  height: "15px",
  width: "15px",
  borderRadius: 2,
});

export default function CashFlowCard() {
  return (
    <Card sx={{ boxShadow: 3, height: 350 }} variant="plain">
      <CardHeader
        title="Total cash flow"
        titleTypographyProps={{ fontSize: "14px", fontWeight: 600 }}
        action={
          <Stack padding={{ paddingTop: "1.5px" }} direction="row" gap={2}>
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
