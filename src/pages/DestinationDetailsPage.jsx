"use client"

import { useState, useEffect } from "react"
import downloadImg from "../assets/download.jpeg"
import { MapPin, Star, ChevronLeft, ChevronRight, ExternalLink, ThumbsUp } from "lucide-react"
import { Button } from "../components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import Header from "@/components/Header"

// Sample destination data
const destinationData = {
  id: 1,
  name: "United Kingdom, London",
  rating: 5,
  images: [
    `${downloadImg}?height=150&width=150`,
    `${downloadImg}?height=150&width=150`,
    `${downloadImg}?height=150&width=150`,
    `${downloadImg}?height=150&width=150`,
  ],
  overview:
    "Located in Taksim Campus, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Maxim Restaurant for many years. The silhouette of the hotel is inspired by the historical texture. With its 452 luxurious rooms and suites, rich SPA and fitness area, 8 meeting rooms including a ballroom ones and 3 terraces with Bosphorus view, Istanbul largest terrace with Bosphorus view. Under the chef Levent technology infrastructure, CVK Park Bosphorus Hotel Istanbul is deserved to be the popular attraction point of the city. Room and suites are designed with a modern touch and the latest technology to provide the comfort and the convenience that you are looking for.",
  location: {
    lat: 51.505,
    lng: -0.09,
    address: "Taksim Campus, Istanbul, Turkey",
  },
  reviews: [
    {
      id: 1,
      name: "Omar Hoffman",
      rating: 5,
      avatar: `${downloadImg}?height=40&width=40`,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      name: "Chelsie Madison Robinson",
      rating: 5,
      avatar: `${downloadImg}?height=40&width=40`,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      name: "Anahi Lester",
      rating: 5,
      avatar: `${downloadImg}?height=40&width=40`,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      name: "Erik Smithson",
      rating: 5,
      avatar: `${downloadImg}?height=40&width=40`,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      name: "Terry George",
      rating: 5,
      avatar: `${downloadImg}?height=40&width=40`,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
  rules: {
    cancellation:
      "Free cancellation up to 24 hours before check-in. Cancellations made less than 24 hours before check-in are subject to a one-night charge.",
    reservation:
      "A valid credit card is required to secure your reservation. Your card will not be charged until check-in.",
    payment: "We accept all major credit cards, debit cards, and cash. A security deposit may be required at check-in.",
  },
}

export default function DestinationDetailsPage() {
  const [currentReviewPage, setCurrentReviewPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const reviewsPerPage = 3
  const totalReviewPages = Math.ceil(destinationData.reviews.length / reviewsPerPage)

  // For Leaflet map
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    link.crossOrigin = ""
    document.head.appendChild(link)

    setMapLoaded(true)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  const paginatedReviews = destinationData.reviews.slice(
    (currentReviewPage - 1) * reviewsPerPage,
    currentReviewPage * reviewsPerPage,
  )

  return (
    <div className="min-h-screen bg-white">
      <Header/>

      <main className="container mx-auto p-4">
        {/* Destination Title and Rating */}
        <div className="border rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2">
            <MapPin className="text-[#e66a5e] mt-1" size={20} />
            <div>
              <h1 className="text-2xl font-bold text-[#183957]">{destinationData.name}</h1>
              <div className="flex items-center mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < destinationData.rating ? "text-[#e66a5e] fill-[#e66a5e]" : "text-gray-300"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-4 gap-2 h-[500px]">
            <div className="col-span-2 row-span-2">
              <img
                src={destinationData.images[selectedImage] || downloadImg}
                alt={destinationData.name}
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            {destinationData.images.slice(1, 4).map((image, index) => (
              <div key={index} className="relative" onClick={() => setSelectedImage(index + 1)}>
                <img
                  src={image || downloadImg}
                  alt={`${destinationData.name} ${index + 1}`}
                  className={`w-full h-full object-cover ${index === 2 ? "rounded-tr-lg" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#183957] mb-4 pb-2 border-b border-[#e66a5e]">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{destinationData.overview}</p>
        </section>

        {/* Location / Map */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#183957] pb-2 border-b border-[#e66a5e]">Location / map</h2>
            <Button
              variant="outline"
              size="sm"
              className="text-[#e66a5e] border-[#e66a5e]"
              onClick={() => {
                // Open Google Maps in a new tab with the destination coordinates
                const googleMapsUrl = `https://www.google.com/maps?q=${destinationData.location.lat},${destinationData.location.lng}`
                window.open(googleMapsUrl, "_blank")
              }}
            >
              <ExternalLink size={16} className="mr-2" />
              View on google maps
            </Button>
          </div>

          <div className="h-[300px] rounded-lg overflow-hidden border">
            {mapLoaded && (
              <MapContainer
                center={[destinationData.location.lat, destinationData.location.lng]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[destinationData.location.lat, destinationData.location.lng]}>
                  <Popup>{destinationData.name}</Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#183957] pb-2 border-b border-[#e66a5e]">Reviews</h2>
            <Button className="bg-[#e66a5e] hover:bg-[#d55d51]">
              <ThumbsUp size={16} className="mr-2" />
              Add your review
            </Button>
          </div>

          <div className="space-y-4">
            {paginatedReviews.map((review) => (
              <div key={review.id} className="flex gap-4 p-4 border rounded-lg">
                <Avatar>
                  <AvatarImage src={review.avatar || downloadImg} alt={review.name} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{review.name}</h3>
                      <div className="flex items-center mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < review.rating ? "text-[#e66a5e] fill-[#e66a5e]" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalReviewPages > 1 && (
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setCurrentReviewPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentReviewPage === 1}
                >
                  <ChevronLeft size={16} />
                </Button>
                <span className="text-sm">
                  {currentReviewPage} of {totalReviewPages}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setCurrentReviewPage((prev) => Math.min(prev + 1, totalReviewPages))}
                  disabled={currentReviewPage === totalReviewPages}
                >
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          )}
        </section>

        {/* Rules & Policies */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#183957] mb-4 pb-2 border-b border-[#e66a5e]">Rules & Policies</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="cancellation">
              <AccordionTrigger>Cancellation</AccordionTrigger>
              <AccordionContent>{destinationData.rules.cancellation}</AccordionContent>
            </AccordionItem>

            <AccordionItem value="reservation">
              <AccordionTrigger>Reservation</AccordionTrigger>
              <AccordionContent>{destinationData.rules.reservation}</AccordionContent>
            </AccordionItem>

            <AccordionItem value="payment">
              <AccordionTrigger>Payment</AccordionTrigger>
              <AccordionContent>{destinationData.rules.payment}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  )
}
