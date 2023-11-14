import React from "react";
import { Grid } from "@mui/material";
import InvoiceCard from "./InvoiceCard";
import AccountList from "./AccountWatchListCard";
import AccountCard from "./AccountCard";
import CashFlowCard from "./CashFlowCard";

function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={6}>
        <AccountCard />
      </Grid>
      <Grid item xs={6} md={6}>
        <InvoiceCard />
      </Grid>
      <Grid item xs={6} md={6}>
        <CashFlowCard />
      </Grid>
      <Grid item xs={6} md={6}>
        <AccountList />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
