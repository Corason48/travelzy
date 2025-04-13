
import React from "react"
import downloadImg from "../assets/download.jpeg"
import { useState } from "react"
import { SlidersHorizontal, Heart, MapPin, Plane } from "lucide-react"
import { Button } from "../components/ui/button"
import { Slider } from "../components/ui/slider"
import { Checkbox } from "../components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Card } from "../components/ui/card"
import Header from "@/components/Header"

// Sample data
const hotels = [
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
  {
    id: 4,
    name: "CVK Park Bosphorus Hotel Istanbul",
    location: "United Kingdom",
    rating: 4.2,
    price: 240,
    image: downloadImg,
  },
]

const categories = [
  "Mountains & Hiking Trails",
  "Forests & National Parks",
  "Shopping & Fashion Capitals",
  "Historic Towns & Villages",
  "Beaches & Tropical Islands",
  "Traditional & Cultural Villages",
  "Religious & Spiritual Places",
]

const destinations = ["Algeria", "France", "Morocco", "Spain"]

export default function HotelListings() {
  const [priceRange, setPriceRange] = useState([50, 1200])
  const [selectedRating, setSelectedRating] = useState(null)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  return (
    <div className="container mx-auto p-4">
      <div className="max-md:hidden">
      <Header/>
      </div>
      <div className="flex flex-col md:flex-row gap-6 space-y-5">
        {/* Desktop Filters */}
        <div className="hidden md:block w-64 space-y-6">
          <h2 className="text-xl font-bold">Filters</h2>

          <Accordion type="single" collapsible defaultValue="price">
            <AccordionItem value="price">
              <AccordionTrigger>Price</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Slider value={priceRange} min={50} max={1200} step={10} onValueChange={setPriceRange} />
                  <div className="flex justify-between">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rating">
              <AccordionTrigger>Rating</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Button
                      key={rating}
                      variant={selectedRating === rating ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedRating(rating)}
                      className="min-w-[40px]"
                    >
                      {rating}+
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="category">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`category-${index}`} />
                      <label
                        htmlFor={`category-${index}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="destinations">
              <AccordionTrigger>Destinations</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {destinations.map((destination, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`destination-${index}`} />
                      <label
                        htmlFor={`destination-${index}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {destination}
                      </label>
                    </div>
                  ))}
                  <Button variant="link" className="text-red-400 p-0 h-auto">
                    +10 more
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="duration">
              <AccordionTrigger>Duration</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                    <span className="text-sm">14 Avril 2025</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                    <span className="text-sm">30 May 2025</span>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-medium mb-2">June</h3>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                        <Button
                          key={day}
                          variant={
                            [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].includes(day)
                              ? "secondary"
                              : "ghost"
                          }
                          size="sm"
                          className={`p-1 h-8 ${[14, 30].includes(day) ? "bg-blue-500 text-white" : ""}`}
                        >
                          {day}
                        </Button>
                      ))}
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button variant="link" className="text-blue-500 p-0 h-auto">
                        Whole month
                      </Button>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Filters</h2>
          <Button variant="outline" onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
            <SlidersHorizontal size={18} />
          </Button>
        </div>

        {/* Hotel Listings */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-500">
              Showing 4 of <span className="text-red-400">457 places</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Sort by:</span>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-6">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={hotel.image}
                      
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{hotel.name}</h3>
                        <div className="flex items-center mt-1 text-gray-500">
                          <MapPin size={16} className="mr-1" />
                          <span>{hotel.location}</span>
                        </div>
                        <div className="flex mt-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? "text-red-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <div className="mt-2 inline-block bg-gray-100 px-2 py-1 rounded">
                          <span className="font-medium">{hotel.rating}</span>
                          <span className="ml-1 text-sm">Very Good</span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <div className="text-red-400 font-bold text-xl">
                          ${hotel.price}
                          <span className="text-sm font-normal">/person</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4">
                        <div className="text-sm">20 Avril 2025</div>
                        <div className="flex items-center">
                          <div className="w-4 h-[1px] bg-gray-400"></div>
                          <Plane size={16} className="mx-2" />
                          <div className="w-4 h-[1px] bg-gray-400"></div>
                        </div>
                        <div className="text-sm">26 Avril 2025</div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Heart size={18} />
                      </Button>
                      <Button className="flex-1 bg-green-400 hover:bg-green-500">Details</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="rounded-full bg-red-400 text-white">
                  &lt;
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-blue-500 text-white">
                  1
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  2
                </Button>
                <div className="px-2">...</div>
                <Button variant="outline" size="icon" className="rounded-full">
                  9
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  10
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-red-400 text-white">
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
