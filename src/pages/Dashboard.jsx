import downloadImg from "../assets/download.jpeg"
import { Link } from "react-router-dom"
import { Search, Heart, MapPin } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter } from "../components/ui/card"
import Header from "@/components/Header"

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
        <div className="max-md:hidden">
        <Header/>
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
    </div>
  )
}
