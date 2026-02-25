"use client";
import { useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import "./home-dashboard/homeDashboard.css";

export default function DashboardShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: "flex" }} className="min-h-screen">
      <Sidebar isMobileOpen={sidebarOpen} onMobileToggle={setSidebarOpen} />
      <div style={{ flex: "1" }}>
        <Header
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          isSidebarOpen={sidebarOpen}
        />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
