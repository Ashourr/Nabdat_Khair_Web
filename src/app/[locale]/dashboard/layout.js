import DashboardShell from "@/dashboard/DashboardShell";
import "../../globals.css";

export default function RootLayout({ children }) {
  return <DashboardShell>{children}</DashboardShell>;
}
