"use client"

import { useState } from "react"
import { Info, CreditCard } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import Logo from "@/components/Logo"

export default function PaymentConfirmationPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "",
    ccv: "",
    expirationMonth: "",
    expirationYear: "",
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
    discount: "20%",
    offerPrice: "$123.28",
    totalAmount: "$576.32",
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden shadow-xl">
          <CardHeader className="bg-white border-b flex flex-col items-center">
            <div className="mb-4 text-center">
              <Logo/>
            </div>
            <div className="flex items-center self-start">
              <CreditCard className="mr-2 text-[#e66a5e]" />
              <CardTitle>Card</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="md:flex">
              <div className="p-6 md:w-2/3 border-b md:border-b-0 md:border-r">
                <p className="mb-6 text-gray-600">Please review your information and confirm the payment.</p>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label className="block mb-2 font-medium">Your Full Name</label>
                      <div className="relative">
                        <Input
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                        />
                        <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 font-medium">Card Number</label>
                      <Input
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 - - - - - - - - - - -"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 font-medium">CCV</label>
                        <Input name="ccv" value={formData.ccv} onChange={handleChange} placeholder="- - -" />
                      </div>

                      <div>
                        <label className="block mb-2 font-medium">Expiration Date</label>
                        <Input
                          name="expirationDate"
                          value={formData.expirationDate}
                          onChange={handleChange}
                          placeholder="MM / YY"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 bg-[#e66a5e] text-white hover:bg-[#d55d51] border-[#e66a5e]"
                        onClick={() => navigate(-1)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1 bg-[#183957] hover:bg-[#122c43]">
                        Confirm
                      </Button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="p-6 md:w-1/3 bg-[#f5f5f5]">
                <h3 className="text-xl font-bold mb-6">Ödeme Özeti</h3>

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

                  <div className="border-t border-dashed border-gray-300 my-4"></div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-600">Total Amount Payable</span>
                      <div className="text-2xl font-bold">{reservationData.totalAmount}</div>
                    </div>
                    <div className="text-[#183957]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
