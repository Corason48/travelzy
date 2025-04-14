import React from 'react'
import { useState } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
import { Package, Home, Users, BarChart3, LogOut, Menu, Bell, DollarSignIcon } from "lucide-react"
import Logo from "./Logo"
const Sidebar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
  
    const isActive = (path) => location.pathname === path

  if (
    location.pathname.includes("reservations") ||
    location.pathname.includes("profile")||
    location.pathname.includes("payment")||
    location.pathname.includes("hotels")||
    location.pathname.includes("payment-confirmation")||
    location.pathname.includes("payment-success")
  ) {
    return <Outlet/>
  }
  return (
    <div className="flex flex-1">
    {/* Desktop Sidebar */}
    <div className="hidden md:flex flex-col w-[220px] bg-[#183957] text-white shadow-lg">
      <div className="flex flex-col items-center p-6 border-b border-gray-700">
        <div className="h-24 w-24 mt-6 border-2 border-white rounded-full bg-gray-300 flex items-center justify-center">
          MN
        </div>
        <div className="mt-2 text-center">
          <h3 className="font-semibold">Manager Name</h3>
        </div>
      </div>

      <nav className="flex-1 mt-6">
        <ul className="space-y-2 px-2">
          <li>
            <Link
              to="/"
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive("/") ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <Home size={20} />
              <span>Offres</span>
            </Link>
          </li>
          <li>
            <Link
              to="/reservations"
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive("/reservations") ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <Package size={20} />
              <span>Reservations</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive("/profile") ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <Users size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/loyalty"
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive("/loyalty") ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <Package size={20} />
              <span>Loyalty</span>
            </Link>
          </li>
          <li>
            <Link
              to="/payment"
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive("/payment") ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <DollarSignIcon size={20} />
              <span>Payment</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="p-4 mt-auto border-t border-gray-700">
        <Link
          to="/logout"
          className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/10 transition-colors"
        >
          <LogOut size={20} />
          <span>Log Out</span>
        </Link>
      </div>
    </div>

    {/* Mobile Header and Main Content */}
    <div className="flex flex-col flex-1">
      <header className="flex items-center justify-between p-4 border-b bg-white md:hidden">
        <button
          className="p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
        <Logo/>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <Bell size={24} />
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white h-full w-[280px] p-4 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#183957]">Menu</h2>
              <button
                className="p-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                X
              </button>
            </div>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="block py-2 text-[#183957] hover:text-blue-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reservations"
                    className="block py-2 text-[#183957] hover:text-blue-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Reservations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/loyalty"
                    className="block py-2 text-[#183957] hover:text-blue-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Loyalty
                  </Link>
                </li>
                <li>
                  <Link
                    to="/payment"
                    className="block py-2 text-[#183957] hover:text-blue-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Payment
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 bg-white">
        <Outlet />
      </main>
    </div>
  </div>
    
  )
}

export default Sidebar
