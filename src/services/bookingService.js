import { api } from './api'

const BOOKING_ENDPOINTS = {
  create: '/bookings',
  list: '/bookings',
  get: (id) => `/bookings/${id}`,
  update: (id) => `/bookings/${id}`,
  cancel: (id) => `/bookings/${id}/cancel`,
  availability: '/bookings/availability',
  payment: {
    create: '/payments/create',
    verify: '/payments/verify'
  }
}

export const bookingService = {
  // Create new booking
  async createBooking(bookingData) {
    try {
      const response = await api.post(BOOKING_ENDPOINTS.create, {
        service_id: bookingData.serviceId,
        date: bookingData.date,
        time: bookingData.time,
        customer: {
          name: bookingData.name,
          email: bookingData.email,
          phone: bookingData.phone,
          birth_date: bookingData.birthDate,
          birth_time: bookingData.birthTime,
          birth_place: bookingData.birthPlace
        },
        notes: bookingData.notes,
        amount: bookingData.amount
      })
      return response
    } catch (error) {
      console.error('Booking creation failed:', error)
      throw error
    }
  },

  // Get available time slots
  async getAvailability(date, serviceId) {
    try {
      const response = await api.get(BOOKING_ENDPOINTS.availability, {
        date,
        service_id: serviceId
      })
      return response.slots || []
    } catch (error) {
      console.error('Failed to fetch availability:', error)
      // Return mock data for demo
      return [
        '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
      ]
    }
  },

  // Get user's bookings
  async getBookings(status = null) {
    const params = status ? { status } : {}
    return await api.get(BOOKING_ENDPOINTS.list, params)
  },

  // Get single booking details
  async getBooking(id) {
    return await api.get(BOOKING_ENDPOINTS.get(id))
  },

  // Update booking
  async updateBooking(id, updates) {
    return await api.patch(BOOKING_ENDPOINTS.update(id), updates)
  },

  // Cancel booking
  async cancelBooking(id, reason) {
    return await api.post(BOOKING_ENDPOINTS.cancel(id), { reason })
  },

  // Initialize payment
  async createPaymentOrder(bookingId, amount) {
    try {
      const response = await api.post(BOOKING_ENDPOINTS.payment.create, {
        booking_id: bookingId,
        amount: amount,
        currency: 'INR'
      })
      return response
    } catch (error) {
      console.error('Payment initialization failed:', error)
      throw error
    }
  },

  // Verify payment
  async verifyPayment(paymentData) {
    return await api.post(BOOKING_ENDPOINTS.payment.verify, {
      razorpay_order_id: paymentData.razorpay_order_id,
      razorpay_payment_id: paymentData.razorpay_payment_id,
      razorpay_signature: paymentData.razorpay_signature
    })
  },

  // Calculate price with offers
  calculatePrice(basePrice, options = {}) {
    let finalPrice = basePrice
    
    // Apply discounts
    if (options.couponCode) {
      const discounts = {
        'WELCOME10': 0.10,
        'FESTIVE20': 0.20,
        'REFER25': 0.25
      }
      const discount = discounts[options.couponCode.toUpperCase()] || 0
      finalPrice = finalPrice * (1 - discount)
    }

    // Add GST
    finalPrice = finalPrice * 1.18

    return {
      basePrice,
      discount: basePrice - finalPrice / 1.18,
      gst: finalPrice - finalPrice / 1.18,
      total: Math.round(finalPrice)
    }
  },

  // Validate booking data
  validateBookingData(data) {
    const errors = {}

    if (!data.serviceId) errors.service = 'Service is required'
    if (!data.date) errors.date = 'Date is required'
    if (!data.time) errors.time = 'Time is required'
    if (!data.name?.trim()) errors.name = 'Name is required'
    if (!data.email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = 'Valid email is required'
    }
    if (!data.phone?.match(/^[0-9]{10}$/)) {
      errors.phone = 'Valid 10-digit phone number is required'
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    }
  }
}

export default bookingService