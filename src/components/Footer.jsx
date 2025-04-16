import { Link, useLocation } from "react-router-dom"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Logo from "./Logo"

function Footer() {
  const location = useLocation()

  if (
    location.pathname.includes("reservations") ||
    location.pathname.includes("profile") ||
    location.pathname.includes("payment-confirmation") ||
    location.pathname.includes("payment-success") ||
    location.pathname.includes("loyalty") ||
    location.pathname.includes("create-offer")
  ) {
    return null
  }

  return (
    <footer className="bg-[#172432] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and copyright */}
          <div className="flex items-center">
        <div className="relative h-10 w-10">
          <div className="absolute top-0 left-0 h-0 w-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-[#172489]" />
          <div className="absolute top-1 left-3 h-0 w-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#ff6b6b]" />
        </div>
        <span className="ml-2 text-2xl font-bold text-white">TravelZy</span>
      </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-[#e66a5e]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-[#e66a5e]">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-[#e66a5e]">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#e66a5e]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#e66a5e]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Information</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/destinations" className="hover:text-[#e66a5e]">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/supports" className="hover:text-[#e66a5e]">
                  Supports
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#e66a5e]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#e66a5e]">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li>+123 456 789</li>
              <li>info@travelzy.com</li>
              <li>ESI, Oued Samar, Algiers</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Follow us on</h3>
            <div className="flex gap-4">
              <Link
                to="#"
                className="bg-white text-[#172432] p-2 rounded-full hover:bg-[#e66a5e] hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                to="#"
                className="bg-white text-[#172432] p-2 rounded-full hover:bg-[#e66a5e] hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 12a4 4 0 0 1 8 0c0 1.1-.6 2.2-1.3 3.3a13 13 0 0 1-2.7 2.7 1 1 0 0 1-1 0 13 13 0 0 1-2.7-2.7C7.7 14.2 7 13.1 7 12"></path>
                  <path d="M12 12v9"></path>
                  <path d="M12 3v3"></path>
                  <path d="M5 7.3C3.7 8.1 3 9.3 3 10.7c0 3.7 3 5.3 9 13.3 6-8 9-9.6 9-13.3 0-1.4-.7-2.6-2-3.4"></path>
                </svg>
              </Link>
              <Link
                to="#"
                className="bg-white text-[#172432] p-2 rounded-full hover:bg-[#e66a5e] hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                to="#"
                className="bg-white text-[#172432] p-2 rounded-full hover:bg-[#e66a5e] hover:text-white transition-colors"
              >
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
