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

function InvoiceCard() {
  return (
    <Card
      style={{ height: "286px" }}
      sx={{ boxShadow: 3, bgcolor: "white" }}
      variant="plain"
    >
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
      <CardContent></CardContent>
    </Card>
  );
}

export default InvoiceCard;