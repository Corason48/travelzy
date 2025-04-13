import downloadImg from "../assets/download.jpeg"
import { Link } from "react-router-dom"
import { Search, Heart, MapPin } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter } from "../components/ui/card"

// Sample data
const popularDestinations = [
  {
    id: 1,
    name: "CVK Park Bosphorus Hotel Istanbul",
    location: "United Kingdom",
    rating: 4.2,
    price: 240,
    image: downloadImg,
  },
  {
    id: 2,
    name: "CVK Park Bosphorus Hotel Istanbul",
    location: "United Kingdom",
    rating: 4.2,
    price: 240,
    image: downloadImg,
  },
  {
    id: 3,
    name: "CVK Park Bosphorus Hotel Istanbul",
    location: "United Kingdom",
    rating: 4.2,
    price: 240,
    image: downloadImg,
  },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <Link to="/popular-destinations" className="text-lg font-semibold hover:text-blue-500">
            Popular Destinations
          </Link>
          <Link to="/hotels" className="text-lg font-semibold hover:text-blue-500">
            Special Offers
          </Link>
          <Link to="/loyalty" className="text-lg font-semibold hover:text-blue-500">
            About us
          </Link>
          <Link to="/contact" className="text-lg font-semibold hover:text-blue-500">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/notifications">
            <Button variant="ghost" size="icon">
              <div className="relative">
                <Search className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </div>
            </Button>
          </Link>
          <Link to="/profile">
            <Button className="bg-red-400 hover:bg-red-500 rounded-full">John D.</Button>
          </Link>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Popular Destinations</h2>
          <Link to="/hotels">
            <Button variant="link" className="text-blue-500">
              View All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white rounded-full">
                  <Heart size={18} />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{destination.name}</h3>
                <div className="flex items-center mt-1 text-gray-500">
                  <MapPin size={16} className="mr-1" />
                  <span>{destination.location}</span>
                </div>
                <div className="flex mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(destination.rating) ? "text-red-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-2 inline-block bg-gray-100 px-2 py-1 rounded">
                  <span className="font-medium">{destination.rating}</span>
                  <span className="ml-1 text-sm">Very Good</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="text-red-400 font-bold text-xl">
                  ${destination.price}
                  <span className="text-sm font-normal">/person</span>
                </div>
                <Button className="bg-green-400 hover:bg-green-500">Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Special Offers</h2>
          <Link to="/loyalty">
            <Button variant="link" className="text-blue-500">
              View All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">20% OFF</div>
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white rounded-full">
                  <Heart size={18} />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{destination.name}</h3>
                <div className="flex items-center mt-1 text-gray-500">
                  <MapPin size={16} className="mr-1" />
                  <span>{destination.location}</span>
                </div>
                <div className="flex mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(destination.rating) ? "text-red-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div>
                  <span className="text-gray-400 line-through mr-2">${destination.price * 1.2}</span>
                  <span className="text-red-400 font-bold text-xl">${destination.price}</span>
                </div>
                <Button className="bg-green-400 hover:bg-green-500">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <footer className="mt-12 bg-[#172432] text-white p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-gray-300">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/special-offers" className="hover:text-gray-300">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations" className="hover:text-gray-300">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/supports" className="hover:text-gray-300">
                  Supports
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gray-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-gray-300">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>+123 456 789</li>
              <li>info@travelzy.com</li>
              <li>ESI, Oued Samar, Algiers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow us on</h3>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link to="#" className="hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link to="#" className="hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>Copyright © TravelZy 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}
