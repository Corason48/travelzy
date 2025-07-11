"use client"

import { CheckCircle } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { useEffect } from "react"
import { usePayment } from "../context/PaymentContext"

export default function PaymentSuccessPage() {
  const navigate = useNavigate()
  const { paymentState, resetPayment } = usePayment()

  // Redirect if payment status is not success
  useEffect(() => {
    if (paymentState.status !== "success") {
      navigate("/payment")
    }

    // Reset payment state when leaving the page
    return () => {
      resetPayment()
    }
  }, [paymentState.status, navigate, resetPayment])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="mb-6">
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

        <div className="my-12">
          <h2 className="text-xl font-bold text-[#183957] mb-2">Your payment was successful.</h2>
          <p className="text-gray-600 mb-8">Thank you for your reservation.</p>

          <div className="flex justify-center">
            <div className="text-[#e66a5e] w-24 h-24">
              <CheckCircle size={96} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <Link to="/">
            <Button variant="ghost" className="text-[#7c87aa] hover:text-[#183957]">
              Home
            </Button>
          </Link>
          <Link to="/reservations">
            <Button variant="ghost" className="text-[#7c87aa] hover:text-[#183957]">
              My Reservations
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" className="text-[#7c87aa] hover:text-[#183957]">
              Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
