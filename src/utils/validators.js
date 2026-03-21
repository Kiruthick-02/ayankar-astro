import { VALIDATION_RULES, ZODIAC_SIGNS } from './constants'

// Email Validation
export const isValidEmail = (email) => {
  if (!email) return false
  return VALIDATION_RULES.email.pattern.test(email)
}

// Phone Validation
export const isValidPhone = (phone) => {
  if (!phone) return false
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '')
  return VALIDATION_RULES.phone.pattern.test(cleaned)
}

// Name Validation
export const isValidName = (name) => {
  if (!name) return false
  const trimmed = name.trim()
  if (trimmed.length < VALIDATION_RULES.name.min) return false
  if (trimmed.length > VALIDATION_RULES.name.max) return false
  return VALIDATION_RULES.name.pattern.test(trimmed)
}

// Password Validation
export const isValidPassword = (password) => {
  if (!password) return false
  if (password.length < VALIDATION_RULES.password.min) return false
  return VALIDATION_RULES.password.pattern.test(password)
}

export const getPasswordStrength = (password) => {
  let strength = 0
  if (password.length >= 8) strength++
  if (password.length >= 12) strength++
  if (/[a-z]/.test(password)) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/\d/.test(password)) strength++
  if (/[@$!%*?&]/.test(password)) strength++
  
  const levels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong']
  return {
    score: strength,
    level: levels[Math.min(strength, 5)],
    color: ['#EF4444', '#EF4444', '#F59E0B', '#3B82F6', '#22C55E', '#22C55E'][Math.min(strength, 5)]
  }
}

// PIN Code Validation
export const isValidPincode = (pincode) => {
  if (!pincode) return false
  return VALIDATION_RULES.pincode.pattern.test(pincode)
}

// Date Validation
export const isValidDate = (date) => {
  if (!date) return false
  const d = new Date(date)
  return d instanceof Date && !isNaN(d)
}

export const isFutureDate = (date) => {
  if (!isValidDate(date)) return false
  return new Date(date) > new Date()
}

export const isPastDate = (date) => {
  if (!isValidDate(date)) return false
  return new Date(date) < new Date()
}

export const isAdult = (birthDate, age = 18) => {
  if (!isValidDate(birthDate)) return false
  const today = new Date()
  const birth = new Date(birthDate)
  let calculatedAge = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    calculatedAge--
  }
  
  return calculatedAge >= age
}

// Time Validation
export const isValidTime = (time) => {
  if (!time) return false
  const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
  return regex.test(time)
}

// URL Validation
export const isValidUrl = (url) => {
  if (!url) return false
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// File Validation
export const isValidFileType = (file, allowedTypes) => {
  if (!file || !allowedTypes) return false
  return allowedTypes.includes(file.type)
}

export const isValidFileSize = (file, maxSizeMB) => {
  if (!file || !maxSizeMB) return false
  const maxSizeBytes = maxSizeMB * 1024 * 1024
  return file.size <= maxSizeBytes
}

// Booking Validation
export const validateBookingData = (data) => {
  const errors = {}

  if (!data.serviceId) {
    errors.service = 'Please select a service'
  }

  if (!data.date) {
    errors.date = 'Please select a date'
  } else if (!isFutureDate(data.date)) {
    errors.date = 'Please select a future date'
  }

  if (!data.time) {
    errors.time = 'Please select a time slot'
  }

  if (!data.name || !isValidName(data.name)) {
    errors.name = 'Please enter a valid name (2-50 characters, letters only)'
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid 10-digit phone number'
  }

  if (data.birthDate && !isValidDate(data.birthDate)) {
    errors.birthDate = 'Please enter a valid birth date'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Contact Form Validation
export const validateContactForm = (data) => {
  const errors = {}

  if (!data.name || !isValidName(data.name)) {
    errors.name = 'Please enter your name'
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email'
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!data.inquiryType) {
    errors.inquiryType = 'Please select an inquiry type'
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Login/Register Validation
export const validateLoginData = (data) => {
  const errors = {}

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email'
  }

  if (!data.password || data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const validateRegisterData = (data) => {
  const errors = {}

  if (!data.name || !isValidName(data.name)) {
    errors.name = 'Please enter your full name'
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email'
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!isValidPassword(data.password)) {
    errors.password = 'Password must be 8+ characters with uppercase, lowercase, number and special character'
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }

  if (!data.termsAccepted) {
    errors.terms = 'You must accept the terms and conditions'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Horoscope/Birth Data Validation
export const validateBirthData = (data) => {
  const errors = {}

  if (!data.name || !isValidName(data.name)) {
    errors.name = 'Please enter a valid name'
  }

  if (!data.birthDate || !isValidDate(data.birthDate)) {
    errors.birthDate = 'Please enter a valid birth date'
  } else if (isFutureDate(data.birthDate)) {
    errors.birthDate = 'Birth date cannot be in the future'
  }

  if (!data.birthTime || !isValidTime(data.birthTime)) {
    errors.birthTime = 'Please enter a valid birth time (HH:MM)'
  }

  if (!data.birthPlace || data.birthPlace.trim().length < 3) {
    errors.birthPlace = 'Please enter a valid birth place'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Payment Validation
export const validatePaymentData = (data) => {
  const errors = {}

  if (!data.amount || data.amount <= 0) {
    errors.amount = 'Invalid amount'
  }

  if (!data.currency) {
    errors.currency = 'Currency is required'
  }

  if (!data.bookingId) {
    errors.booking = 'Booking reference is required'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Sanitize Input
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input
  
  // Remove script tags and dangerous attributes
  return input
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim()
}

// Validate Coupon Code
export const isValidCouponFormat = (code) => {
  if (!code) return false
  // Alphanumeric, 4-20 characters
  const regex = /^[A-Z0-9]{4,20}$/i
  return regex.test(code)
}

// Check if time slot is valid
export const isValidTimeSlot = (time, availableSlots) => {
  if (!time || !availableSlots) return false
  return availableSlots.includes(time)
}

// Validate GST Number (India)
export const isValidGSTIN = (gstin) => {
  if (!gstin) return false
  const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
  return regex.test(gstin)
}

// Validate PAN Number (India)
export const isValidPAN = (pan) => {
  if (!pan) return false
  const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
  return regex.test(pan)
}

// Validate Aadhaar Number (India)
export const isValidAadhaar = (aadhaar) => {
  if (!aadhaar) return false
  const cleaned = aadhaar.replace(/\s/g, '')
  const regex = /^[0-9]{12}$/
  return regex.test(cleaned)
}

// Form Field Validator Component Helper
export const createFieldValidator = (value, rules) => {
  const errors = []
  
  if (rules.required && !value) {
    errors.push('This field is required')
  }
  
  if (rules.minLength && value.length < rules.minLength) {
    errors.push(`Minimum ${rules.minLength} characters required`)
  }
  
  if (rules.maxLength && value.length > rules.maxLength) {
    errors.push(`Maximum ${rules.maxLength} characters allowed`)
  }
  
  if (rules.pattern && !rules.pattern.test(value)) {
    errors.push(rules.message || 'Invalid format')
  }
  
  if (rules.custom && !rules.custom(value)) {
    errors.push(rules.customMessage || 'Invalid value')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// Export all validators
export default {
  isValidEmail,
  isValidPhone,
  isValidName,
  isValidPassword,
  getPasswordStrength,
  isValidPincode,
  isValidDate,
  isFutureDate,
  isPastDate,
  isAdult,
  isValidTime,
  isValidUrl,
  isValidFileType,
  isValidFileSize,
  validateBookingData,
  validateContactForm,
  validateLoginData,
  validateRegisterData,
  validateBirthData,
  validatePaymentData,
  sanitizeInput,
  isValidCouponFormat,
  isValidTimeSlot,
  isValidGSTIN,
  isValidPAN,
  isValidAadhaar,
  createFieldValidator
}