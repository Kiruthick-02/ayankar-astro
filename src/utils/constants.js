// App Information
export const APP_NAME = 'Aynkaran Astro Center'
export const APP_TAGLINE = 'Discover Your Cosmic Destiny'
export const APP_DESCRIPTION = 'Authentic Vedic astrology consultations for birth chart analysis, marriage matching, career guidance, and more.'
export const APP_URL = 'https://aynkaranastro.in'

// Contact Information
export const CONTACT_INFO = {
  phone: {
    primary: '+91 98765 43210',
    secondary: '+91 98765 43211',
    whatsapp: '+91 98765 43210'
  },
  email: {
    general: 'contact@aynkaranastro.in',
    support: 'support@aynkaranastro.in',
    bookings: 'bookings@aynkaranastro.in'
  },
  address: {
    line1: '123 Spiritual Lane',
    line2: 'Divine City',
    city: 'Cosmic State',
    pincode: '12345',
    country: 'India'
  },
  hours: {
    weekday: '9:00 AM - 8:00 PM',
    weekend: '10:00 AM - 4:00 PM',
    timezone: 'IST (UTC+5:30)'
  }
}

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/aynkaranastro',
  instagram: 'https://instagram.com/aynkaranastro',
  youtube: 'https://youtube.com/aynkaranastro',
  twitter: 'https://twitter.com/aynkaranastro',
  linkedin: 'https://linkedin.com/company/aynkaranastro'
}

// Zodiac Signs Data
export const ZODIAC_SIGNS = [
  { sign: 'Aries', symbol: '♈', date: 'Mar 21 - Apr 19', element: 'Fire', ruler: 'Mars', qualities: ['Bold', 'Ambitious', 'Passionate'] },
  { sign: 'Taurus', symbol: '♉', date: 'Apr 20 - May 20', element: 'Earth', ruler: 'Venus', qualities: ['Reliable', 'Patient', 'Practical'] },
  { sign: 'Gemini', symbol: '♊', date: 'May 21 - Jun 20', element: 'Air', ruler: 'Mercury', qualities: ['Adaptable', 'Versatile', 'Curious'] },
  { sign: 'Cancer', symbol: '♋', date: 'Jun 21 - Jul 22', element: 'Water', ruler: 'Moon', qualities: ['Intuitive', 'Emotional', 'Protective'] },
  { sign: 'Leo', symbol: '♌', date: 'Jul 23 - Aug 22', element: 'Fire', ruler: 'Sun', qualities: ['Confident', 'Generous', 'Charismatic'] },
  { sign: 'Virgo', symbol: '♍', date: 'Aug 23 - Sep 22', element: 'Earth', ruler: 'Mercury', qualities: ['Analytical', 'Practical', 'Diligent'] },
  { sign: 'Libra', symbol: '♎', date: 'Sep 23 - Oct 22', element: 'Air', ruler: 'Venus', qualities: ['Diplomatic', 'Fair', 'Social'] },
  { sign: 'Scorpio', symbol: '♏', date: 'Oct 23 - Nov 21', element: 'Water', ruler: 'Mars/Pluto', qualities: ['Resourceful', 'Passionate', 'Determined'] },
  { sign: 'Sagittarius', symbol: '♐', date: 'Nov 22 - Dec 21', element: 'Fire', ruler: 'Jupiter', qualities: ['Optimistic', 'Adventurous', 'Honest'] },
  { sign: 'Capricorn', symbol: '♑', date: 'Dec 22 - Jan 19', element: 'Earth', ruler: 'Saturn', qualities: ['Disciplined', 'Responsible', 'Ambitious'] },
  { sign: 'Aquarius', symbol: '♒', date: 'Jan 20 - Feb 18', element: 'Air', ruler: 'Saturn/Uranus', qualities: ['Innovative', 'Independent', 'Humanitarian'] },
  { sign: 'Pisces', symbol: '♓', date: 'Feb 19 - Mar 20', element: 'Water', ruler: 'Jupiter/Neptune', qualities: ['Compassionate', 'Artistic', 'Intuitive'] }
]

// Planets in Astrology
export const PLANETS = [
  { name: 'Sun', symbol: '☉', represents: 'Ego, Identity, Vitality', transitPeriod: '1 month' },
  { name: 'Moon', symbol: '☽', represents: 'Emotions, Instincts, Habits', transitPeriod: '2.5 days' },
  { name: 'Mercury', symbol: '☿', represents: 'Communication, Intellect, Reasoning', transitPeriod: '3 weeks' },
  { name: 'Venus', symbol: '♀', represents: 'Love, Beauty, Harmony', transitPeriod: '4-5 weeks' },
  { name: 'Mars', symbol: '♂', represents: 'Action, Desire, Energy', transitPeriod: '6-7 weeks' },
  { name: 'Jupiter', symbol: '♃', represents: 'Expansion, Luck, Wisdom', transitPeriod: '1 year' },
  { name: 'Saturn', symbol: '♄', represents: 'Restriction, Discipline, Karma', transitPeriod: '2.5 years' },
  { name: 'Rahu', symbol: '☊', represents: 'Obsession, Illusion, Desire', transitPeriod: '1.5 years' },
  { name: 'Ketu', symbol: '☋', represents: 'Detachment, Spirituality, Past Life', transitPeriod: '1.5 years' }
]

// Houses in Birth Chart
export const HOUSES = [
  { number: 1, name: 'First House', represents: 'Self, Appearance, Personality', sign: 'Aries' },
  { number: 2, name: 'Second House', represents: 'Wealth, Values, Family', sign: 'Taurus' },
  { number: 3, name: 'Third House', represents: 'Communication, Siblings, Short Trips', sign: 'Gemini' },
  { number: 4, name: 'Fourth House', represents: 'Home, Mother, Emotional Security', sign: 'Cancer' },
  { number: 5, name: 'Fifth House', represents: 'Creativity, Children, Romance, Speculation', sign: 'Leo' },
  { number: 6, name: 'Sixth House', represents: 'Health, Service, Daily Routine, Enemies', sign: 'Virgo' },
  { number: 7, name: 'Seventh House', represents: 'Marriage, Partnerships, Business', sign: 'Libra' },
  { number: 8, name: 'Eighth House', represents: 'Transformation, Inheritance, Occult', sign: 'Scorpio' },
  { number: 9, name: 'Ninth House', represents: 'Higher Learning, Religion, Long Travel', sign: 'Sagittarius' },
  { number: 10, name: 'Tenth House', represents: 'Career, Status, Father, Public Image', sign: 'Capricorn' },
  { number: 11, name: 'Eleventh House', represents: 'Gains, Friends, Social Network', sign: 'Aquarius' },
  { number: 12, name: 'Twelfth House', represents: 'Loss, Liberation, Foreign Lands, Expenses', sign: 'Pisces' }
]

// Services Configuration
export const SERVICES_CONFIG = {
  currency: 'INR',
  currencySymbol: '₹',
  gstRate: 0.18,
  platformFee: 0,
  minBookingAdvance: 24, // hours
  maxBookingAdvance: 90, // days
  cancellationPolicy: {
    freeBefore: 24, // hours
    chargeBefore: 4, // hours
    chargePercent: 50
  },
  reschedulingAllowed: true,
  maxReschedules: 2
}

// Time Slots
export const TIME_SLOTS = [
  '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
]

// Consultation Modes
export const CONSULTATION_MODES = [
  { id: 'video', name: 'Video Call', icon: 'Video', description: 'Face-to-face consultation via secure video call' },
  { id: 'audio', name: 'Audio Call', icon: 'Phone', description: 'Voice-only consultation for privacy' },
  { id: 'chat', name: 'Text Chat', icon: 'MessageSquare', description: 'Real-time text-based consultation' },
  { id: 'inperson', name: 'In-Person', icon: 'MapPin', description: 'Visit our center for face-to-face session' }
]

// Languages Supported
export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' }
]

// API Endpoints
export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    verifyEmail: '/auth/verify-email'
  },
  user: {
    profile: '/user/profile',
    bookings: '/user/bookings',
    preferences: '/user/preferences',
    notifications: '/user/notifications'
  },
  services: {
    list: '/services',
    details: (id) => `/services/${id}`,
    availability: '/services/availability'
  },
  bookings: {
    create: '/bookings',
    list: '/bookings',
    details: (id) => `/bookings/${id}`,
    cancel: (id) => `/bookings/${id}/cancel`,
    reschedule: (id) => `/bookings/${id}/reschedule`
  },
  payments: {
    create: '/payments/create',
    verify: '/payments/verify',
    history: '/payments/history'
  },
  horoscope: {
    daily: (sign) => `/horoscope/daily/${sign}`,
    weekly: (sign) => `/horoscope/weekly/${sign}`,
    monthly: (sign) => `/horoscope/monthly/${sign}`,
    yearly: (sign) => `/horoscope/yearly/${sign}`,
    compatibility: '/horoscope/compatibility',
    birthChart: '/horoscope/birth-chart'
  }
}

// Local Storage Keys
export const STORAGE_KEYS = {
  authToken: 'aact_auth_token',
  refreshToken: 'aact_refresh_token',
  user: 'aact_user',
  preferences: 'aact_preferences',
  cart: 'aact_cart',
  recentViews: 'aact_recent_views',
  lastHoroscope: 'aact_last_horoscope'
}

// Cookie Names
export const COOKIE_NAMES = {
  session: 'aact_session',
  consent: 'aact_cookie_consent',
  referrer: 'aact_referrer'
}

// Routes
export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  serviceDetails: (id) => `/services/${id}`,
  horoscope: '/horoscope',
  book: '/book',
  contact: '/contact',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  profile: '/profile',
  myBookings: '/my-bookings',
  privacy: '/privacy',
  terms: '/terms',
  refund: '/refund-policy',
  notFound: '*'
}

// SEO Meta Tags Template
export const SEO_TEMPLATES = {
  home: {
    title: 'Aynkaran Astro Center | Authentic Vedic Astrology Consultations',
    description: 'Discover your cosmic destiny with expert Vedic astrologers. Birth chart analysis, marriage matching, career guidance, and more. 15+ years of trusted service.',
    keywords: 'vedic astrology, birth chart, kundali matching, horoscope, astrologer india'
  },
  services: {
    title: 'Our Astrology Services | Aynkaran Astro Center',
    description: 'Comprehensive astrological services including birth chart analysis, marriage matching, vastu consultation, and gemstone therapy. Book your session today.',
    keywords: 'astrology services, birth chart reading, marriage matching, vastu shastra, gemstone therapy'
  },
  about: {
    title: 'About Us | Aynkaran Astro Center',
    description: 'Learn about Aynkaran Astro Center, our team of expert astrologers, and our 15+ year journey in providing authentic Vedic astrology guidance.',
    keywords: 'about aynkaran, astrologers india, vedic astrology experts, astrology center'
  },
  horoscope: {
    title: 'Daily Horoscope | Aynkaran Astro Center',
    description: 'Read your daily horoscope predictions for all zodiac signs. Get insights on love, career, finance, and health based on planetary positions.',
    keywords: 'daily horoscope, zodiac predictions, today horoscope, astrology forecast'
  },
  book: {
    title: 'Book Consultation | Aynkaran Astro Center',
    description: 'Schedule your personalized astrology consultation. Choose from video, audio, or in-person sessions with our expert astrologers.',
    keywords: 'book astrologer, astrology consultation, schedule reading, online astrology'
  },
  contact: {
    title: 'Contact Us | Aynkaran Astro Center',
    description: 'Get in touch with Aynkaran Astro Center. Call, email, or visit us for astrology consultations and inquiries.',
    keywords: 'contact astrologer, astrology center contact, book appointment'
  }
}

// Error Messages
export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  timeout: 'Request timed out. Please try again.',
  unauthorized: 'Please login to continue.',
  forbidden: 'You do not have permission to access this resource.',
  notFound: 'The requested resource was not found.',
  validation: 'Please check your input and try again.',
  server: 'Server error. Please try again later.',
  payment: 'Payment failed. Please try again or use a different method.',
  booking: 'Booking failed. The selected slot may no longer be available.'
}

// Success Messages
export const SUCCESS_MESSAGES = {
  bookingCreated: 'Your consultation has been booked successfully!',
  paymentSuccess: 'Payment completed successfully!',
  profileUpdated: 'Profile updated successfully!',
  passwordChanged: 'Password changed successfully!',
  emailVerified: 'Email verified successfully!',
  messageSent: 'Message sent successfully! We will get back to you soon.'
}

// Validation Rules
export const VALIDATION_RULES = {
  name: {
    min: 2,
    max: 50,
    pattern: /^[a-zA-Z\s]+$/
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    pattern: /^[0-9]{10}$/,
    format: '+91 XXXXX XXXXX'
  },
  password: {
    min: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
  },
  pincode: {
    pattern: /^[0-9]{6}$/
  }
}

// Analytics Events
export const ANALYTICS_EVENTS = {
  pageView: 'page_view',
  serviceView: 'service_view',
  bookingInitiated: 'booking_initiated',
  bookingCompleted: 'booking_completed',
  paymentInitiated: 'payment_initiated',
  paymentCompleted: 'payment_completed',
  horoscopeViewed: 'horoscope_viewed',
  contactFormSubmitted: 'contact_form_submitted',
  signup: 'sign_up',
  login: 'login',
  search: 'search'
}