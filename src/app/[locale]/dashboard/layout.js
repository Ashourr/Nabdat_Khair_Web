"use client";
import Header from "@/dashboard/header/Header";
import Sidebar from "@/dashboard/sidebar/Sidebar";
import "../../globals.css";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div style={{ display: "flex" }} className="min-h-screen">
      <Sidebar isMobileOpen={sidebarOpen} onMobileToggle={setSidebarOpen} />
      <div style={{ flex: "1" }}>
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main style={{ padding: "2rem" }} className="p-6">{children}</main>
      </div>
    </div>
  );
}
