"use client"

import { useState } from "react"
import { Info, CreditCard, FileText } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import Logo from "@/components/Logo"

export default function PaymentConfirmationPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "1234",
    ccv: "",
    expirationDate: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Navigate to success page
    navigate("/payment-success")
  }

  // Sample reservation data
  const reservationData = {
    reservationNumber: "11458523",
    discount: "%20",
    offerPrice: "$123.28",
    totalAmount: "$576.32",
  }

  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Logo */}
        <div className="text-center py-8">
          <Link to="/" className="inline-block">
            <Logo/>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Payment Form */}
          <div className="p-8 md:w-2/3">
            <div className="flex items-center mb-6">
              <div className="bg-[#e66a5e] p-2 rounded-md mr-3">
                <CreditCard className="text-white" size={20} />
              </div>
              <h2 className="text-xl font-semibold">Card</h2>
            </div>

            <p className="text-gray-600 mb-8">Please review your information and confirm the payment.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center mb-2 font-medium">
                  Your Full Name
                  <Info className="ml-2 text-gray-400" size={16} />
                </label>
                <Input name="fullName" value={formData.fullName} onChange={handleChange} className="h-12 rounded-md" />
              </div>

              <div>
                <label className="flex items-center mb-2 font-medium">
                  Card Number
                  <Info className="ml-2 text-gray-400" size={16} />
                </label>
                <Input
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 - - - - - - - - - - -"
                  className="h-12 rounded-md bg-[#fff5f3] text-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center mb-2 font-medium">
                    CCV
                    <Info className="ml-2 text-gray-400" size={16} />
                  </label>
                  <Input
                    name="ccv"
                    value={formData.ccv}
                    onChange={handleChange}
                    placeholder="- - -"
                    className="h-12 rounded-md"
                  />
                </div>

                <div>
                  <label className="flex items-center mb-2 font-medium">
                    Expiration Date
                    <Info className="ml-2 text-gray-400" size={16} />
                  </label>
                  <Input
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleChange}
                    placeholder="MM / YY"
                    className="h-12 rounded-md"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button type="submit" className="flex-1 h-12 bg-[#183957] hover:bg-[#122c43] rounded-md">
                  Confirm
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 h-12 bg-[#e66a5e] text-white hover:bg-[#d55d51] border-[#e66a5e] rounded-md"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>

          {/* Payment Summary */}
          <div className="bg-[#f5f9ff] p-8 md:w-1/3">
            <h3 className="text-xl font-bold mb-8">Ödeme Özeti</h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Reservation Number</span>
                <span className="font-medium">{reservationData.reservationNumber}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium">{reservationData.discount}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Offer Price</span>
                <span className="font-medium">{reservationData.offerPrice}</span>
              </div>

              <div className="border-t border-dashed border-gray-300 my-8"></div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-600">Total Amount Payable</span>
                  <div className="text-2xl font-bold">{reservationData.totalAmount}</div>
                </div>
                <div className="text-[#183957]">
                  <FileText size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
