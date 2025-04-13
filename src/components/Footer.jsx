import { Link } from "react-router-dom"
import { Facebook, Instagram, PinIcon as Pinterest, Twitter } from "lucide-react"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="bg-[#183957] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo & Copyright */}
        <div className="flex flex-col items-center text-center">
          <Logo />
          <p className="text-xs mt-2">
            © 2025 TravelZy. All rights reserved.
          </p>
        </div>

        {/* Horizontal separator */}
        <hr className="my-6 border-white/20" />

        {/* Bottom Section: Three Columns on Desktop, Stacked on Mobile */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 text-center md:text-left">
          {/* Column 1: Menu */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-3">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#ff7757]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-[#ff7757]">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-[#ff7757]">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#ff7757]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ff7757]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Information */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-3">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/destinations" className="hover:text-[#ff7757]">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/supports" className="hover:text-[#ff7757]">
                  Supports
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#ff7757]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#ff7757]">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-3">Contact Info</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>+123 456 789</li>
              <li>info@travelzy.com</li>
              <li>ESI, Oued Samar, Algiers</li>
            </ul>

            <h3 className="text-lg font-bold mb-3">Follow us on</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <Link to="#" className="hover:text-[#ff7757]">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="hover:text-[#ff7757]">
                <Pinterest size={20} />
              </Link>
              <Link to="#" className="hover:text-[#ff7757]">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="hover:text-[#ff7757]">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
