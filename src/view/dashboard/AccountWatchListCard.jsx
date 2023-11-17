import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { useRandomData } from "./DashBoardContext";

const Header = styled(Typography)({
  fontWeight: 600,
  opacity: 0.5,
  fontSize: 14,
});

export default function AccountWatchListCard() {
  const { tableData } = useRandomData();

  return (
    <Card sx={{ boxShadow: 3, height: 350 }} variant="plain">
      <CardHeader
        title="Account watchlist"
        titleTypographyProps={{ fontSize: "14px", fontWeight: 600 }}
      />
      <Divider />
      <CardContent style={{ padding: "0" }}>
        <Table>
          <TableHead style={{ marginBottom: "5px" }}>
            <TableRow>
              <TableCell
                size="small"
                colSpan={2}
                sx={{ borderBottom: "none", pb: 1, pt: 1 }}
              >
                <Header>Account</Header>
              </TableCell>
              <TableCell
                size="small"
                align="left"
                scope="col"
                sx={{ borderBottom: "none", pb: 1, pt: 1, width: 100 }}
              >
                <Header>This Month</Header>
              </TableCell>
              <TableCell
                size="small"
                align="left"
                scope="col"
                sx={{
                  borderBottom: "none",
                  pb: 1,
                  pt: 1,
                  width: 100,
                }}
              >
                <Header>YTD</Header>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  colSpan={2}
                  style={{
                    borderBottom: "none",
                    pb: "5px",
                    pl: "16px",
                    fontWeight: 600,
                  }}
                >
                  {row.account}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    borderBottom: "none",
                    pb: "5px",
                    pl: "16px",
                    width: 100,
                    fontWeight: 600,
                  }}
                >
                  {row.thisMonth}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    borderBottom: "none",
                    pb: "5px",
                    pl: "16px",
                    width: 100,
                    fontWeight: 600,
                  }}
                >
                  {row.ytd}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
