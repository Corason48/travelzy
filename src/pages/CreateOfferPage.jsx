"use client"

import { useState } from "react"
import { ChevronLeft, Calendar, Plus } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Link } from "react-router-dom"

export default function CreateOfferPage() {
  const [formData, setFormData] = useState({
    title: "",
    destination: "",
    startDate: "",
    endDate: "",
    price: "",
    status: "",
    description: "",
    image: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Create New Travel Offer</h1>
        <div className="md:hidden">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ChevronLeft size={24} />
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Offer Title</label>
              <Input name="title" value={formData.title} onChange={handleChange} placeholder="Enter offer title" />
            </div>

            <div>
              <label className="block mb-2 font-medium">Destination</label>
              <Input
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Enter destination"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Start Date</label>
              <div className="relative">
                <Input
                  type="text"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  placeholder="mm/dd/yyyy"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">End Date</label>
              <div className="relative">
                <Input
                  type="text"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  placeholder="mm/dd/yyyy"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Price</label>
              <Input name="price" value={formData.price} onChange={handleChange} placeholder="Enter price" />
            </div>

            <div>
              <label className="block mb-2 font-medium">Status</label>
              <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Description</label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="min-h-[100px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Picture</label>
              <div className="border border-[#e66a5e] rounded-md bg-gray-100 h-[200px] flex items-center justify-center cursor-pointer">
                {formData.image ? (
                  <img
                    src={URL.createObjectURL(formData.image) || "/placeholder.svg"}
                    alt="Preview"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <Plus size={32} className="mx-auto mb-2" />
                    <span>Picture</span>
                  </div>
                )}
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.files[0] }))}
                  id="image-upload"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button variant="outline" className="bg-[#e66a5e] text-white hover:bg-[#d55d51] border-[#e66a5e]">
              Cancel
            </Button>
            <Button type="submit" className="bg-[#183957] hover:bg-[#122c43]">
              Confirm
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
