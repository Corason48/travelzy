"use client"

import { useState } from "react"
import { ChevronLeft, Check } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import ProfileSidebar from "../components/ProfileSidebar"

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "Mehrab",
    lastName: "Bozorgi",
    email: "Mehrabbozorgi.business@gmail.com",
    address: "33062 Zboncak isle",
    contactNumber: "58077.79",
    city: "Mehrab",
    state: "Bozorgi",
    password: "sbdfbnd65sfdvb s",
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="md:hidden flex items-center mb-6">
        <Link to="/" className="mr-4">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold">Home</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left sidebar on desktop */}
        <ProfileSidebar />

        {/* Main content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Profile</h2>
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
              <AvatarFallback>MB</AvatarFallback>
            </Avatar>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">First Name</label>
                <Input name="firstName" value={formData.firstName} onChange={handleChange} disabled={!isEditing} />
              </div>

              <div>
                <label className="block mb-2 font-medium">Last Name</label>
                <Input name="lastName" value={formData.lastName} onChange={handleChange} disabled={!isEditing} />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <div className="relative">
                <Input name="email" value={formData.email} onChange={handleChange} disabled={!isEditing} />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                  <Check size={20} />
                </div>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Address</label>
              <Input name="address" value={formData.address} onChange={handleChange} disabled={!isEditing} />
            </div>

            <div>
              <label className="block mb-2 font-medium">Contact Number</label>
              <Input
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">City</label>
                <Select
                  value={formData.city}
                  onValueChange={(value) => handleSelectChange("city", value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mehrab">Mehrab</SelectItem>
                    <SelectItem value="new-york">New York</SelectItem>
                    <SelectItem value="london">London</SelectItem>
                    <SelectItem value="paris">Paris</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block mb-2 font-medium">State</label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => handleSelectChange("state", value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bozorgi">Bozorgi</SelectItem>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="tx">Texas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Password</label>
              <div className="relative">
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                  <Check size={20} />
                </div>
              </div>
            </div>

            {isEditing ? (
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 text-red-400 border-red-400"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-[#e66a5e] hover:bg-[#d55d51]">
                  Save
                </Button>
              </div>
            ) : (
              <div className="flex justify-center pt-4">
                <Button type="button" className="bg-[#e66a5e] hover:bg-[#d55d51]" onClick={() => setIsEditing(true)}>
                  Edit profile
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
