"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { HelpCircle, Loader2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"
import PaymentMethodIcons from "../components/payment-method-icons"
import Header from "../components/Header"
import { usePayment } from "../context/PaymentContext"

import { useToast } from "../hooks/use-toast"
import { paymentService } from "@/services/PaymentService"

export default function PaymentPage() {
  const navigate = useNavigate()
  const { paymentState, updatePaymentDetails, updateReservationDetails, setPaymentStatus } = usePayment()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
  })

  // Load reservation details on component mount
  useEffect(() => {
    const fetchReservationDetails = async () => {
      try {
        setIsLoading(true)
        // In the future, this would get the reservation ID from URL params or state
        const reservationId = new URLSearchParams(window.location.search).get("reservationId") || null

        // Get reservation details from API
        const details = await paymentService.getReservationDetails(reservationId)

        // Update context with reservation details
        updateReservationDetails(details)
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to load reservation details:", error)
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load reservation details. Please try again.",
        })
        setIsLoading(false)
      }
    }

    fetchReservationDetails()
  }, [updateReservationDetails, toast])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, "")
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ")
    return formatted.substring(0, 19) // Limit to 16 digits plus spacing
  }

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value)
    setFormData((prev) => ({ ...prev, cardNumber: formatted }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.cardNumber || !formData.month || !formData.year || !formData.cvv) {
      toast({
        variant: "destructive",
        title: "Invalid Information",
        description: "Please fill in all required payment fields.",
      })
      return
    }

    // Update payment details in context
    updatePaymentDetails({
      fullName: formData.name,
      cardNumber: formData.cardNumber,
      ccv: formData.cvv,
      expirationDate: `${formData.month}/${formData.year}`,
    })

    // Reset payment status to idle before navigating
    setPaymentStatus("idle")

    // Navigate to confirmation page
    navigate("/payment-confirmation")
  }

  // Generate month options
  const months = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1
    return { value: month.toString().padStart(2, "0"), label: month.toString().padStart(2, "0") }
  })

  // Generate year options (current year + 20 years)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 21 }, (_, i) => {
    const year = currentYear + i
    return { value: year.toString(), label: year.toString() }
  })

  // if (isLoading) {
  //   return (
  //     <div className="container mx-auto p-4 max-w-4xl flex items-center justify-center min-h-[60vh]">
  //       <div className="text-center">
  //         <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-[#1c1c1c]" />
  //         <p>Loading payment information...</p>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <Header />
      <h1 className="text-2xl font-bold text-[#183957] mb-6">Credit Card Details</h1>

      {/* Payment Method Icons */}
      <div className="mb-6">
        <PaymentMethodIcons />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name on Card */}
          <div className="space-y-2">
            <Label htmlFor="name">Name on Card</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter name on card"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Card Number */}
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
              value={formData.cardNumber}
              onChange={handleCardNumberChange}
              required
              maxLength={19}
            />
          </div>

          {/* Card Expiration */}
          <div className="space-y-2">
            <Label>Card Expiration</Label>
            <div className="grid grid-cols-2 gap-4">
              <Select value={formData.month} onValueChange={(value) => handleSelectChange("month", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={formData.year} onValueChange={(value) => handleSelectChange("year", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year.value} value={year.value}>
                      {year.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Card Security Code (CVV) */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="cvv">Card Security Code</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full p-0">
                      <HelpCircle className="h-4 w-4" />
                      <span className="sr-only">CVV help</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The 3 or 4 digit code on the back of your card</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="cvv"
              name="cvv"
              placeholder="Code"
              value={formData.cvv}
              onChange={handleChange}
              required
              maxLength={4}
            />
          </div>

          {/* Section Heading: Billing Address */}
          <div className="col-span-1 md:col-span-2 mt-4">
            <h2 className="text-xl font-bold text-[#183957] mb-4">Billing Address</h2>
          </div>

          {/* Country */}
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="dz">Algeria</SelectItem>
                {/* Add more countries if needed */}
              </SelectContent>
            </Select>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
          </div>

          {/* City */}
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          </div>

          {/* State */}
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
          </div>

          {/* ZIP Code */}
          <div className="col-span-1 md:col-span-2 space-y-2">
            <Label htmlFor="zipCode">ZIP Code</Label>
            <Input
              id="zipCode"
              name="zipCode"
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>

          {/* Section Heading: Contact Information */}
          <div className="col-span-1 md:col-span-2 mt-4">
            <h2 className="text-xl font-bold text-[#183957] mb-4">Contact Information</h2>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full mt-8 bg-[#183957] hover:bg-[#183957]/90 text-white py-4">
          {typeof window !== "undefined" && window.innerWidth < 768 ? "Continue" : "Pay"}
        </Button>
      </form>
    </div>
  )
}
