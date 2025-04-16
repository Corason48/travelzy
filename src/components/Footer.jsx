import { Link, Outlet, useLocation } from "react-router-dom"
import { Facebook, Instagram, PinIcon as Pinterest, Twitter } from "lucide-react"
import Logo from "./Logo"

function Footer() {
  const location = useLocation()
  

if (
  location.pathname.includes("reservations") ||
  location.pathname.includes("profile")||
  location.pathname.includes("payment-confirmation") ||
  location.pathname.includes("payment-success")||
  location.pathname.includes("loyalty")||
  location.pathname.includes("create-offer")
) {
  return null
}
  return (
    <footer className="bg-[#183957] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Logo and copyright */}
        <div className="mb-8">
          <Logo/>
          <p className="text-sm mt-2">Copyright © TravelZy 2025 All rights reserved</p>
        </div>

        {/* Grid with Menu, Information, and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
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

          {/* Information Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
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

          {/* Contact Info & Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>+123 456 789</li>
              <li>info@travelzy.com</li>
              <li>ESI, Oued Samar, Algiers</li>
            </ul>

            <h3 className="text-lg font-bold mt-6 mb-4">Follow us on</h3>
            <div className="flex gap-4">
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

export default Footer
