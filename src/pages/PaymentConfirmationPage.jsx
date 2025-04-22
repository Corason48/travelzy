"use client"

import { useState, useEffect } from "react"
import { Info, CreditCard, Loader2 } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { usePayment } from "../context/PaymentContext"
import { Alert, AlertDescription } from "../components/ui/alert"

export default function PaymentConfirmationPage() {
  const navigate = useNavigate()
  const { paymentState, updatePaymentDetails, processPayment } = usePayment()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  // Form state initialized from context
  const [formData, setFormData] = useState({
    fullName: paymentState.paymentDetails.fullName || "",
    cardNumber: paymentState.paymentDetails.cardNumber || "",
    ccv: paymentState.paymentDetails.ccv || "",
    expirationDate: paymentState.paymentDetails.expirationDate || "",
  })

  // Redirect if no payment details are available
  useEffect(() => {
    if (!paymentState.paymentDetails.cardNumber && !paymentState.reservationDetails.reservationNumber) {
      navigate("/payment")
    }
  }, [paymentState, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Update context as user types
    updatePaymentDetails({ [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Process payment through the context
      const success = await processPayment()

      if (success) {
        // Navigate to success page
        navigate("/payment-success")
      } else {
        setError("Payment processing failed. Please try again.")
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  if (!paymentState.reservationDetails.reservationNumber) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Loading payment information...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-center">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 bg-[#1c1c1c] rotate-45 transform origin-center"></div>
                <div className="absolute top-0 left-0 w-8 h-8 bg-[#e66a5e] rounded-tl-lg"></div>
              </div>
              <span className="text-2xl font-bold text-[#183957]">TravelZy</span>
            </div>
          </Link>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card className="overflow-hidden">
          <CardHeader className="bg-white border-b">
            <div className="flex items-center">
              <CreditCard className="mr-2 text-[#e66a5e]" />
              <CardTitle>Payment Confirmation</CardTitle>
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
                          required
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
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 font-medium">CCV</label>
                        <Input name="ccv" value={formData.ccv} onChange={handleChange} placeholder="- - -" required />
                      </div>

                      <div>
                        <label className="block mb-2 font-medium">Expiration Date</label>
                        <Input
                          name="expirationDate"
                          value={formData.expirationDate}
                          onChange={handleChange}
                          placeholder="MM / YY"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 bg-[#e66a5e] text-white hover:bg-[#d55d51] border-[#e66a5e]"
                        onClick={() => navigate("/payment")}
                        disabled={isSubmitting}
                      >
                        Back
                      </Button>
                      <Button type="submit" className="flex-1 bg-[#183957] hover:bg-[#122c43]" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          "Confirm Payment"
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="p-6 md:w-1/3 bg-[#f5f5f5]">
                <h3 className="text-xl font-bold mb-6">Payment Summary</h3>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reservation Number</span>
                    <span className="font-medium">{paymentState.reservationDetails.reservationNumber}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Destination</span>
                    <span className="font-medium">
                      {paymentState.reservationDetails.destination || "Not specified"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Travel Dates</span>
                    <span className="font-medium">
                      {paymentState.reservationDetails.startDate
                        ? `${new Date(paymentState.reservationDetails.startDate).toLocaleDateString()} - ${new Date(paymentState.reservationDetails.endDate).toLocaleDateString()}`
                        : "Not specified"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-medium">{paymentState.reservationDetails.discount}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Offer Price</span>
                    <span className="font-medium">{formatCurrency(paymentState.reservationDetails.offerPrice)}</span>
                  </div>

                  <div className="border-t border-dashed border-gray-300 my-4"></div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-600">Total Amount Payable</span>
                      <div className="text-2xl font-bold">
                        {formatCurrency(paymentState.reservationDetails.totalAmount)}
                      </div>
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
