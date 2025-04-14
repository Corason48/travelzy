import { Menu, Search } from "lucide-react"
import { Button } from "./ui/button"
import Logo from "./Logo"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation & extra actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-primary hover:text-primary/80 font-medium">
              Popular Destinations
            </Link>
            <Link to="/loyalty" className="text-primary hover:text-primary/80 font-medium">
              Special Offers
            </Link>
            <Link to="/about-us" className="text-primary hover:text-primary/80 font-medium">
              About us
            </Link>
            <Link to="/contact" className="text-primary hover:text-primary/80 font-medium">
              Contact
            </Link>
          </nav>

          {/* Notifications & Profile (Desktop Only) */}
          <div className="flex items-center gap-4">
            <Link to="/notifications" className="relative">
              <Button variant="ghost" size="icon" className="p-2">
                <Search className="h-6 w-6 text-gray-600" />
              </Button>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/profile">
              <Button className="bg-red-400 hover:bg-red-500 text-white font-semibold rounded-full px-4 py-2">
                John D.
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button (Visible on mobile only) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="p-2">
            <Menu className="h-6 w-6 text-gray-600" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
