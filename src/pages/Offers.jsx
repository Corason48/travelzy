import { useState } from "react"
import { Search, SlidersHorizontal, Clock, Users, Car } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Link } from "react-router-dom"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../components/ui/dialog"
import { Badge } from "../components/ui/badge"
import downloadImg from "../assets/download.jpeg"
// Sample data
const promotions = [
  {
    id: 1,
    title: "Westminster to Greenwich River Thames",
    image: downloadImg,
    duration: "2 hours",
    transport: true,
    familyPlan: true,
    rating: 4.5,
    reviews: 584,
    price: 35.0,
    activity: "WATER ACTIVITIES",
  },
  {
    id: 2,
    title: "Westminster to Greenwich River Thames",
    image: downloadImg,
    duration: "2 hours",
    transport: true,
    familyPlan: true,
    rating: 4.5,
    reviews: 584,
    price: 35.0,
    activity: "WATER ACTIVITIES",
  },
  {
    id: 3,
    title: "Westminster to Greenwich River Thames",
    image: downloadImg,
    duration: "2 hours",
    transport: true,
    familyPlan: true,
    rating: 4.5,
    reviews: 584,
    price: 35.0,
    activity: "WATER ACTIVITIES",
  },
  {
    id: 4,
    title: "Westminster to Greenwich River Thames",
    image: downloadImg,
    duration: "2 hours",
    transport: true,
    familyPlan: true,
    rating: 4.5,
    reviews: 584,
    price: 35.0,
    activity: "WATER ACTIVITIES",
  },
  {
    id: 5,
    title: "Westminster to Greenwich River Thames",
    image: downloadImg,
    duration: "2 hours",
    transport: true,
    familyPlan: true,
    rating: 4.5,
    reviews: 584,
    price: 35.0,
    activity: "WATER ACTIVITIES",
  },
  {
    id: 6,
    title: "Westminster to Greenwich River Thames",
    image: downloadImg,
    duration: "2 hours",
    transport: true,
    familyPlan: true,
    rating: 4.5,
    reviews: 584,
    price: 35.0,
    activity: "WATER ACTIVITIES",
  },
  {
    id: 7,
    title: "Westminster to Greenwich River Thames",
    image: downloadImg,
    duration: "2 hours",
    transport: true,
    familyPlan: true,
    rating: 4.5,
    reviews: 584,
    price: 35.0,
    activity: "WATER ACTIVITIES",
  },
  {
    id: 8,
    title: "Westminster to Greenwich River Thames",
    image: downloadImg,
    duration: "2 hours",
    transport: true,
    familyPlan: true,
    rating: 4.5,
    reviews: 584,
    price: 35.0,
    activity: "WATER ACTIVITIES",
  },
  {
    id: 9,
    title: "Westminster to Greenwich River Thames",
    image: downloadImg,
    duration: "2 hours",
    transport: true,
    familyPlan: true,
    rating: 4.5,
    reviews: 584,
    price: 35.0,
    activity: "WATER ACTIVITIES",
  },
]

export default function Offers() {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedPromoId, setSelectedPromoId] = useState(null)

  const handleDeleteClick = (id) => {
    setSelectedPromoId(id)
    setIsDeleteDialogOpen(true)
  }

  const handleConfirmDelete = () => {
    console.log(`Deleting promotion with ID: ${selectedPromoId}`)
    // Here you would actually delete the item
    setIsDeleteDialogOpen(false)
  }

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= Math.floor(rating)
                ? "text-yellow-400"
                : star - 0.5 <= rating
                  ? "text-yellow-400"
                  : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Loyalty and promotions</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input placeholder="Search Here..." className="pl-10 w-[250px] rounded-full" />
          </div>
          <Button variant="outline" className="rounded-full">
            <SlidersHorizontal size={18} className="mr-2" />
            Filters
          </Button>
          <Link to="/create-offer">
            <Button className="bg-[#e66a5e] hover:bg-[#d55d51] rounded-full">+ New Offer</Button>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {promotions.map((promo) => (
          <div key={promo.id} className="bg-white rounded-lg shadow overflow-hidden border">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/5">
                <img src={promo.image || "/placeholder.svg"} alt={promo.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <Badge className="bg-[#183957] text-white mb-2">{promo.activity}</Badge>
                    <div className="flex items-center gap-1 mb-1">
                      {renderStars(promo.rating)}
                      <span className="text-sm text-gray-500">({promo.reviews} reviews)</span>
                    </div>
                    <h3 className="text-lg font-bold">{promo.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{promo.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car size={16} />
                        <span>Transport</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>Family Plan</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="text-[#e66a5e] font-bold text-xl">
                      ${promo.price.toFixed(2)}
                      <div className="text-sm font-normal">per person</div>
                    </div>
                    <Button
                      className="bg-[#e66a5e] hover:bg-[#d55d51] mt-2"
                      onClick={() => handleDeleteClick(promo.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="w-full max-w-md mx-auto">
          Load More
        </Button>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete this offer? This action cannot be undone.</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-red-500 hover:bg-red-600" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
