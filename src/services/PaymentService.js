// This file will contain all the API calls related to payments
// For now, it's just a placeholder with mock implementations

// Mock API delay to simulate network requests
const mockApiDelay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms))

export const paymentService = {
  // Process a payment
  processPayment: async (paymentDetails, reservationDetails) => {
    // Simulate API call
    await mockApiDelay(1500)

    // Simulate validation
    if (!paymentDetails.cardNumber || !paymentDetails.ccv) {
      throw new Error("Invalid payment details")
    }

    // Return a mock successful response
    return {
      success: true,
      transactionId: `TX-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      timestamp: new Date().toISOString(),
    }
  },

  // Get payment receipt
  getReceipt: async (reservationNumber) => {
    // Simulate API call
    await mockApiDelay(800)

    // Return mock receipt data
    return {
      reservationNumber,
      paymentDate: new Date().toISOString(),
      paymentId: `PAY-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      status: "Completed",
      amount: 576.32,
      currency: "USD",
    }
  },

  // Get reservation details
  getReservationDetails: async (reservationId) => {
    // Simulate API call
    await mockApiDelay(600)

    // Return mock reservation data
    return {
      reservationNumber: reservationId || `RES-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      discount: "20%",
      offerPrice: 123.28,
      totalAmount: 576.32,
      destination: "Paris, France",
      startDate: "2025-06-15",
      endDate: "2025-06-22",
    }
  },

  // Cancel a payment
  cancelPayment: async (transactionId) => {
    // Simulate API call
    await mockApiDelay(1000)

    // Return mock cancellation confirmation
    return {
      success: true,
      message: "Payment cancelled successfully",
      refundId: `REF-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    }
  },
}
