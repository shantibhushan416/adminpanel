import * as Icons from "@mui/icons-material";
import Dashboard from "../view/dashboard/Dashboard";

export const SIDEBAR_CONFIG = [
  {
    name: "Dashboard",
    title: "Dashboard",
    icon: Icons.Dashboard,
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    name: "AccountBalance",
    title: "Account",
    icon: Icons.AccountBalanceWallet,
    path: "/account-balance",
    Component: Dashboard,
  },
  {
    name: "AttachMoney",
    title: "Attach",
    icon: Icons.AttachMoney,
    path: "/attach-money",
    Component: Dashboard,
  },
  {
    name: "Report",
    title: "Report",
    icon: Icons.Summarize,
    path: "/report",
    Component: Dashboard,
  },
  {
    name: "Advisor",
    title: "Advisor",
    icon: Icons.Person,
    path: "/advisor",
    Component: Dashboard,
  },
  {
    name: "Contacts",
    title: "Contacts",
    icon: Icons.Contacts,
    path: "/contacts",
    Component: Dashboard,
  },
];
