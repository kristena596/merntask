"use client";
import { AdminFooter } from "@/components/admin/footer";
import { AdminNavBar } from "@/components/admin/navbar";
import { AdminSidebar } from "@/components/admin/sidebar";
import AuthProvider from "@/providers/AuthProvider";
import React, { useState } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AuthProvider>
      <div className="flex min-h-screen relative max-h-screen overflow-y-hidden">
        <AdminSidebar isOpen={isOpen} onToggle={toggleSidebar} />
        <div className="flex-1 flex flex-col overflow-auto">
          <AdminNavBar onToggle={toggleSidebar} />
          <main className="flex-1 p-6">{children}</main>
          <AdminFooter />
        </div>
      </div>
    </AuthProvider>
  );
}