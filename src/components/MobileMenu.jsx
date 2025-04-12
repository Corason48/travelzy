"use client"

import { Link } from "react-router-dom"
import { Package, X, Bell, HelpCircle, List } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent } from "./ui/sheet"

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="p-0 w-[280px] bg-white">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="text-2xl font-bold" onClick={onClose}>
                Home
              </Link>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X size={24} />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-auto py-4">
            <nav className="space-y-6">
              <div className="px-4">
                <Link to="/profile" className="flex items-center gap-3 py-2" onClick={onClose}>
                  <Package size={20} />
                  <span>Edit profile</span>
                </Link>
              </div>

              <div className="px-4">
                <Link to="/notifications" className="flex items-center gap-3 py-2" onClick={onClose}>
                  <Bell size={20} />
                  <span>Notification</span>
                </Link>
              </div>

              <div className="px-4">
                <Link to="/history" className="flex items-center gap-3 py-2" onClick={onClose}>
                  <List size={20} />
                  <span>Historique</span>
                </Link>
              </div>

              <div className="px-4">
                <Link to="/help" className="flex items-center gap-3 py-2" onClick={onClose}>
                  <HelpCircle size={20} />
                  <span>Help</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
