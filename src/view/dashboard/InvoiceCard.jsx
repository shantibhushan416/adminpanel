import { Button, Card, CardContent, CardHeader, Divider } from "@mui/material";
import { useRandomData } from "./DashBoardContext";
import BarChart from "../../component/BarChart";

function InvoiceCard() {
  const { chartData } = useRandomData();

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
      <CardContent style={{ padding: "0", height: "300px" }}>
        <BarChart data={chartData} xAxisKey="date" yAxisKey="invoices" />
      </CardContent>
    </Card>
  );
}

export default InvoiceCard;
