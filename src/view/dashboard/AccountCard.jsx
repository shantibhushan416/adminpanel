import React from "react";
import { Button, Card, CardContent, CardHeader, Divider } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import WaveForm from "../../component/WaveForm";
import { useRandomData, useRandomDataGenerator } from "./DashBoardContext";

export default function AccountCard() {
  const { chartData } = useRandomData();
  const generateRandomData = useRandomDataGenerator();

  return (
    <Card sx={{ boxShadow: 3, height: 350 }} variant="plain">
      <CardHeader
        title="Checking Account"
        titleTypographyProps={{ fontSize: "14px", fontWeight: 600 }}
        action={
          <Button
            variant="outlined"
            size="small"
            endIcon={<KeyboardArrowDown />}
            sx={{
              color: "black",
              borderColor: "lightgray",
              textTransform: "none",
            }}
            onClick={() => generateRandomData()}
          >
            Randomize Data
          </Button>
        }
      />
      <Divider />
      <CardContent style={{ padding: "0", height: "300px" }}>
        <WaveForm data={chartData} yAxisKey="accounts" xAxisKey="id" />
      </CardContent>
    </Card>
  );
}
