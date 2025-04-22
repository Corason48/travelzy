"use client"

import { Outlet } from "react-router-dom"
import AdminSidebar from "../components/AdminSidebar"

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}