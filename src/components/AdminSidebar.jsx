"use client"

import { Link, useLocation } from "react-router-dom"
import { Package, Home, Tag, BarChart3, LogOut, HelpCircle, Settings, Award } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function AdminSidebar() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="flex flex-col w-[200px] bg-[#1c2536] text-white h-screen">
      <div className="flex flex-col items-center p-6">
        <Avatar className="h-24 w-24 border-2 border-white">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Admin" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
        <div className="mt-4 text-center">
          <h3 className="font-medium">Admin Name</h3>
          <p className="text-xs text-gray-400">Real Estate Builders</p>
        </div>
      </div>

      <nav className="flex-1 mt-6">
        <ul className="space-y-1 px-2">
          <li>
            <Link
              to="/admin/offers"
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive("/admin/offers") ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <Package size={20} />
              <span>Offres</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/reservations"
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive("/admin/reservations") ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <Home size={20} />
              <span>Reservations</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/coupon-codes"
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive("/admin/coupon-codes") ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <Tag size={20} />
              <span>Coupon codes</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/fidelity"
              className="flex items-center gap-3 px-4 py-3 rounded-md transition-colors bg-[#e66a5e]"
            >
              <Award size={20} />
              <span>Loyalty</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/statistics"
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive("/admin/statistics") ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <BarChart3 size={20} />
              <span>Statistics</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/settings"
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive("/admin/settings") ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <Settings size={20} />
              <span>Admin Space</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="p-4 mt-auto">
        <Link
          to="/admin/help"
          className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/5 transition-colors"
        >
          <HelpCircle size={20} />
          <span>Help & Support</span>
        </Link>
        <Link to="/logout" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/5 transition-colors">
          <LogOut size={20} />
          <span>Log Out</span>
        </Link>
      </div>
    </div>
  )
}
