"use client"

import { createContext, useContext, useState } from "react"

// Define the initial payment state
const initialPaymentState = {
  // Payment details
  paymentDetails: {
    fullName: "",
    cardNumber: "",
    ccv: "",
    expirationDate: "",
  },
  // Reservation details
  reservationDetails: {
    reservationNumber: "",
    discount: "",
    offerPrice: 0,
    totalAmount: 0,
    destination: "",
    startDate: "",
    endDate: "",
  },
  // Payment status
  status: "idle", // idle, loading, success, error
  error: null,
}

// Create the context
const PaymentContext = createContext(undefined)

// Create a provider component
export function PaymentProvider({ children }) {
  const [paymentState, setPaymentState] = useState(initialPaymentState)

  // Update payment details
  const updatePaymentDetails = (details) => {
    setPaymentState((prev) => ({
      ...prev,
      paymentDetails: {
        ...prev.paymentDetails,
        ...details,
      },
    }))
  }

  // Update reservation details
  const updateReservationDetails = (details) => {
    setPaymentState((prev) => ({
      ...prev,
      reservationDetails: {
        ...prev.reservationDetails,
        ...details,
      },
    }))
  }

  // Reset payment state
  const resetPayment = () => {
    setPaymentState(initialPaymentState)
  }

  // Set payment status
  const setPaymentStatus = (status, error = null) => {
    setPaymentState((prev) => ({
      ...prev,
      status,
      error,
    }))
  }

  // Process payment (placeholder for future API integration)
  const processPayment = async () => {
    try {
      setPaymentStatus("loading")

      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In the future, replace with actual API call:
      // const response = await paymentService.processPayment(paymentState.paymentDetails, paymentState.reservationDetails)

      // For now, simulate success
      setPaymentStatus("success")
      return true
    } catch (error) {
      setPaymentStatus("error", error.message || "Payment processing failed")
      return false
    }
  }

  // Get payment receipt (placeholder for future API integration)
  const getPaymentReceipt = async () => {
    try {
      // In the future, replace with actual API call:
      // const receipt = await paymentService.getReceipt(paymentState.reservationDetails.reservationNumber)
      // return receipt

      // For now, return the current state
      return {
        ...paymentState.reservationDetails,
        paymentDate: new Date().toISOString(),
        paymentId: `PAY-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      }
    } catch (error) {
      console.error("Failed to get receipt:", error)
      return null
    }
  }

  const value = {
    paymentState,
    updatePaymentDetails,
    updateReservationDetails,
    processPayment,
    getPaymentReceipt,
    resetPayment,
    setPaymentStatus,
  }

  return <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
}

// Custom hook to use the payment context
export function usePayment() {
  const context = useContext(PaymentContext)
  if (context === undefined) {
    throw new Error("usePayment must be used within a PaymentProvider")
  }
  return context
}
