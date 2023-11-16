import React from "react";
import BarChart from "../../component/barcharts/BarChart";
import { Button, Card, CardContent, CardHeader, Divider } from "@mui/material";

function InvoiceCard() {
  return (
    <Card sx={{ boxShadow: 3, height: 350 }} variant="plain">
      <CardHeader
        title="Invoices owed to you"
        titleTypographyProps={{ fontSize: "14px", fontWeight: 600 }}
        action={
          <Button
            size="small"
            sx={{
              color: "#55bc55",
              backgroundColor: "rgba(3,152,51,0.1)",
              textTransform: "none",
            }}
          >
            New Sales Invoice
          </Button>
        }
      />
      <Divider />
      <CardContent>
        <BarChart/>
      </CardContent>
    </Card>
  );
}

export default InvoiceCard;
