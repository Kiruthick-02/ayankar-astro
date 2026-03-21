import { api } from './api'

// Mock horoscope data for development
const mockHoroscopes = {
  Aries: {
    general: "Today brings dynamic energy perfect for initiating new projects. Your ruling planet Mars empowers you to take decisive action.",
    love: "Passionate encounters are highlighted. Express your feelings openly.",
    career: "Leadership opportunities arise. Take charge with confidence.",
    finance: "Investments in new ventures look promising.",
    health: "High energy levels favor physical activities.",
    luckyNumber: '9',
    luckyColor: 'Red',
    luckyTime: '06:00 AM - 08:00 AM',
    compatibility: 'Leo, Sagittarius'
  },
  Taurus: {
    general: "Stability and comfort are your themes today. Focus on building lasting foundations.",
    love: "Romantic gestures bring deep satisfaction. Quality time matters.",
    career: "Steady progress rewards your patience. Financial discussions go well.",
    finance: "Conservative investments yield steady returns.",
    health: "Grounding activities like gardening or cooking benefit you.",
    luckyNumber: '6',
    luckyColor: 'Green',
    luckyTime: '02:00 PM - 04:00 PM',
    compatibility: 'Virgo, Capricorn'
  },
  Gemini: {
    general: "Communication flows effortlessly. Share your ideas with the world.",
    love: "Intellectual connections spark romance. Engage in stimulating conversations.",
    career: "Networking brings opportunities. Attend social events.",
        finance: "Multiple income streams may open up. Stay adaptable.",
    health: "Mental stimulation keeps you energized. Read, learn, explore.",
    luckyNumber: '5',
    luckyColor: 'Yellow',
    luckyTime: '10:00 AM - 12:00 PM',
    compatibility: 'Libra, Aquarius'
  },
  Cancer: {
    general: "Emotional intuition is heightened. Trust your gut feelings today.",
    love: "Deep emotional bonds strengthen. Home and family bring joy.",
    career: "Nurturing projects flourish. Support colleagues generously.",
    finance: "Property matters are favored. Consider real estate.",
    health: "Self-care rituals restore balance. Hydrate well.",
    luckyNumber: '2',
    luckyColor: 'Silver',
    luckyTime: '08:00 PM - 10:00 PM',
    compatibility: 'Scorpio, Pisces'
  },
  Leo: {
    general: "Your natural charisma shines brightly. Center stage calls to you.",
    love: "Grand romantic gestures are favored. Express love boldly.",
    career: "Recognition for your talents arrives. Accept applause gracefully.",
    finance: "Creative ventures prove profitable. Invest in your passions.",
    health: "Heart-centered activities energize you. Dance, create, celebrate.",
    luckyNumber: '1',
    luckyColor: 'Gold',
    luckyTime: '12:00 PM - 02:00 PM',
    compatibility: 'Aries, Sagittarius'
  },
  Virgo: {
    general: "Attention to detail brings success. Organize and optimize.",
    love: "Practical acts of service show love. Small gestures matter.",
    career: "Efficiency improvements impress superiors. Streamline processes.",
    finance: "Budget reviews reveal savings opportunities. Plan meticulously.",
    health: "Digestive health requires attention. Eat mindfully.",
    luckyNumber: '6',
    luckyColor: 'Navy Blue',
    luckyTime: '09:00 AM - 11:00 AM',
    compatibility: 'Taurus, Capricorn'
  },
  Libra: {
    general: "Balance and harmony are your goals today. Seek beauty everywhere.",
    love: "Partnership matters come to the forefront. Negotiate fairly.",
    career: "Collaborative projects succeed. Mediate conflicts diplomatically.",
    finance: "Joint ventures look promising. Seek expert advice.",
    health: "Balance work and rest. Aesthetic environments soothe you.",
    luckyNumber: '6',
    luckyColor: 'Pink',
    luckyTime: '04:00 PM - 06:00 PM',
    compatibility: 'Gemini, Aquarius'
  },
  Scorpio: {
    general: "Transformation and depth characterize your day. Embrace change.",
    love: "Intense emotional connections form. Vulnerability strengthens bonds.",
    career: "Research and investigation yield breakthroughs. Dig deeper.",
    finance: "Hidden opportunities emerge. Trust your instincts.",
    health: "Detoxification processes are favored. Release what no longer serves.",
    luckyNumber: '9',
    luckyColor: 'Maroon',
    luckyTime: '10:00 PM - 12:00 AM',
    compatibility: 'Cancer, Pisces'
  },
  Sagittarius: {
    general: "Adventure calls to your free spirit. Expand your horizons.",
    love: "Exciting new connections may form. Keep an open mind.",
    career: "International opportunities arise. Think globally.",
    finance: "Risk-taking may reward you. Calculate carefully.",
    health: "Outdoor activities rejuvenate. Explore nature.",
    luckyNumber: '3',
    luckyColor: 'Purple',
    luckyTime: '11:00 AM - 01:00 PM',
    compatibility: 'Aries, Leo'
  },
  Capricorn: {
    general: "Ambition drives you toward long-term goals. Climb steadily.",
    love: "Commitment deepens through shared responsibilities.",
    career: "Authority positions beckon. Lead with integrity.",
    finance: "Long-term investments mature. Patience pays off.",
    health: "Bone and joint health require attention. Maintain posture.",
    luckyNumber: '8',
    luckyColor: 'Brown',
    luckyTime: '07:00 AM - 09:00 AM',
    compatibility: 'Taurus, Virgo'
  },
  Aquarius: {
    general: "Innovation and originality set you apart. Think differently.",
    love: "Unconventional approaches to romance succeed. Be unique.",
    career: "Technology and humanitarian projects align. Innovate boldly.",
    finance: "Futuristic investments intrigue. Research emerging markets.",
    health: "Circulation benefits from movement. Try new exercises.",
    luckyNumber: '4',
    luckyColor: 'Electric Blue',
    luckyTime: '03:00 PM - 05:00 PM',
    compatibility: 'Gemini, Libra'
  },
  Pisces: {
    general: "Spiritual and creative energies flow through you. Dream big.",
    love: "Soulmate connections deepen. Romance feels magical.",
    career: "Artistic and healing professions flourish. Trust your vision.",
    finance: "Intuitive financial decisions prove correct. Listen within.",
    health: "Feet and lymphatic system need care. Swim, dance, flow.",
    luckyNumber: '7',
    luckyColor: 'Sea Green',
    luckyTime: '06:00 PM - 08:00 PM',
    compatibility: 'Cancer, Scorpio'
  }
}

const HOROSCOPE_ENDPOINTS = {
  daily: (sign) => `/horoscope/daily/${sign}`,
  weekly: (sign) => `/horoscope/weekly/${sign}`,
  monthly: (sign) => `/horoscope/monthly/${sign}`,
  yearly: (sign) => `/horoscope/yearly/${sign}`,
  compatibility: '/horoscope/compatibility',
  birthChart: '/horoscope/birth-chart'
}

export const horoscopeService = {
  // Get daily horoscope
  async getDailyHoroscope(sign, date = new Date()) {
    try {
      // Try API first
      const response = await api.get(HOROSCOPE_ENDPOINTS.daily(sign), {
        date: date.toISOString().split('T')[0]
      })
      return response
    } catch (error) {
      // Fallback to mock data
      console.log('Using mock horoscope data for', sign)
      return mockHoroscopes[sign] || mockHoroscopes.Aries
    }
  },

  // Get weekly horoscope
  async getWeeklyHoroscope(sign) {
    try {
      return await api.get(HOROSCOPE_ENDPOINTS.weekly(sign))
    } catch (error) {
      // Generate weekly from daily
      const daily = mockHoroscopes[sign] || mockHoroscopes.Aries
      return {
        ...daily,
        weekOverview: "This week brings transformative energies. Focus on personal growth.",
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, i) => ({
          day,
          rating: Math.floor(Math.random() * 3) + 3,
          highlight: i === 2 ? "Best day for important decisions" : "Favorable for routine tasks"
        }))
      }
    }
  },

  // Get monthly horoscope
  async getMonthlyHoroscope(sign, month = new Date().getMonth()) {
    try {
      return await api.get(HOROSCOPE_ENDPOINTS.monthly(sign), { month })
    } catch (error) {
      const daily = mockHoroscopes[sign] || mockHoroscopes.Aries
      return {
        ...daily,
        monthOverview: `Month ${month + 1} brings opportunities for growth and reflection.`,
        keyDates: [5, 12, 18, 25].map(d => ({
          date: d,
          event: d % 2 === 0 ? "Favorable for new beginnings" : "Good for completing tasks"
        })),
        themes: ['Career Growth', 'Relationship Harmony', 'Financial Stability']
      }
    }
  },

  // Get yearly horoscope
  async getYearlyHoroscope(sign, year = new Date().getFullYear()) {
    try {
      return await api.get(HOROSCOPE_ENDPOINTS.yearly(sign), { year })
    } catch (error) {
      const daily = mockHoroscopes[sign] || mockHoroscopes.Aries
      return {
        ...daily,
        year: year,
        yearlyTheme: `Year ${year} is your year of transformation and achievement.`,
        quarters: [
          { period: 'Jan-Mar', focus: 'New Beginnings', rating: 4 },
          { period: 'Apr-Jun', focus: 'Growth & Expansion', rating: 5 },
          { period: 'Jul-Sep', focus: 'Consolidation', rating: 4 },
          { period: 'Oct-Dec', focus: 'Reflection & Planning', rating: 4 }
        ],
        majorTransits: [
          { planet: 'Jupiter', effect: 'Expansion in career' },
          { planet: 'Saturn', effect: 'Lessons in relationships' },
          { planet: 'Rahu', effect: 'Unexpected opportunities' }
        ]
      }
    }
  },

  // Get compatibility between two signs
  async getCompatibility(sign1, sign2) {
    try {
      return await api.get(HOROSCOPE_ENDPOINTS.compatibility, {
        sign1,
        sign2
      })
    } catch (error) {
      // Calculate compatibility score
      const elements = {
        Fire: ['Aries', 'Leo', 'Sagittarius'],
        Earth: ['Taurus', 'Virgo', 'Capricorn'],
        Air: ['Gemini', 'Libra', 'Aquarius'],
        Water: ['Cancer', 'Scorpio', 'Pisces']
      }
      
      const getElement = (sign) => {
        for (const [elem, signs] of Object.entries(elements)) {
          if (signs.includes(sign)) return elem
        }
        return 'Fire'
      }

      const elem1 = getElement(sign1)
      const elem2 = getElement(sign2)
      
      let score = 70 // Base score
      let description = "Moderate compatibility with room for growth."

      // Same element - high compatibility
      if (elem1 === elem2) {
        score = 85
        description = "Excellent compatibility! You share similar values and approaches."
      }
      // Complementary elements
      else if (
        (elem1 === 'Fire' && elem2 === 'Air') ||
        (elem1 === 'Air' && elem2 === 'Fire') ||
        (elem1 === 'Earth' && elem2 === 'Water') ||
        (elem1 === 'Water' && elem2 === 'Earth')
      ) {
        score = 90
        description = "Highly complementary energies! You balance each other perfectly."
      }
      // Challenging combinations
      else if (
        (elem1 === 'Fire' && elem2 === 'Water') ||
        (elem1 === 'Water' && elem2 === 'Fire')
      ) {
        score = 60
        description = "Challenging but transformative. Growth through understanding differences."
      }

      return {
        sign1,
        sign2,
        score,
        description,
        elements: { sign1: elem1, sign2: elem2 },
        aspects: {
          romance: Math.min(100, score + Math.random() * 20 - 10),
          friendship: Math.min(100, score + Math.random() * 20 - 10),
          communication: Math.min(100, score + Math.random() * 20 - 10),
          trust: Math.min(100, score + Math.random() * 20 - 10)
        },
        advice: "Focus on open communication and mutual respect to strengthen your bond."
      }
    }
  },

  // Generate birth chart (requires precise birth details)
  async generateBirthChart(birthData) {
    try {
      return await api.post(HOROSCOPE_ENDPOINTS.birthChart, {
        name: birthData.name,
        birth_date: birthData.date,
        birth_time: birthData.time,
        birth_place: birthData.place,
        latitude: birthData.latitude,
        longitude: birthData.longitude
      })
    } catch (error) {
      // Return mock birth chart
      return {
        ascendant: 'Leo',
        sunSign: birthData.date ? getSunSign(new Date(birthData.date)) : 'Aries',
        moonSign: 'Cancer',
        planets: [
          { planet: 'Sun', sign: 'Aries', house: 1, degree: '15° 23\'' },
          { planet: 'Moon', sign: 'Cancer', house: 4, degree: '8° 45\'' },
          { planet: 'Mercury', sign: 'Aries', house: 1, degree: '22° 10\'' },
          { planet: 'Venus', sign: 'Pisces', house: 12, degree: '5° 30\'' },
          { planet: 'Mars', sign: 'Gemini', house: 3, degree: '18° 15\'' },
          { planet: 'Jupiter', sign: 'Taurus', house: 2, degree: '3° 50\'' },
          { planet: 'Saturn', sign: 'Aquarius', house: 11, degree: '28° 40\'' }
        ],
        houses: {
          1: { sign: 'Aries', ruler: 'Mars' },
          2: { sign: 'Taurus', ruler: 'Venus' },
          3: { sign: 'Gemini', ruler: 'Mercury' },
          4: { sign: 'Cancer', ruler: 'Moon' },
          5: { sign: 'Leo', ruler: 'Sun' },
          6: { sign: 'Virgo', ruler: 'Mercury' },
          7: { sign: 'Libra', ruler: 'Venus' },
          8: { sign: 'Scorpio', ruler: 'Mars' },
          9: { sign: 'Sagittarius', ruler: 'Jupiter' },
          10: { sign: 'Capricorn', ruler: 'Saturn' },
          11: { sign: 'Aquarius', ruler: 'Saturn' },
          12: { sign: 'Pisces', ruler: 'Jupiter' }
        },
        aspects: [
          { planets: ['Sun', 'Moon'], aspect: 'Square', orb: '3°', meaning: 'Inner tension between ego and emotions' },
          { planets: ['Venus', 'Mars'], aspect: 'Trine', orb: '2°', meaning: 'Harmonious expression of love and desire' }
        ],
        dashas: {
          current: { planet: 'Jupiter', start: '2020-01-01', end: '2036-01-01' },
          next: { planet: 'Saturn', start: '2036-01-01', end: '2055-01-01' }
        }
      }
    }
  },

  // Get planetary positions for today
  async getPlanetaryPositions(date = new Date()) {
    try {
      return await api.get('/horoscope/planetary-positions', {
        date: date.toISOString().split('T')[0]
      })
    } catch (error) {
      return {
        date: date.toISOString().split('T')[0],
        positions: [
          { planet: 'Sun', sign: 'Aries', degree: '15°', retrograde: false },
          { planet: 'Moon', sign: 'Libra', degree: '22°', retrograde: false },
          { planet: 'Mercury', sign: 'Pisces', degree: '8°', retrograde: true },
          { planet: 'Venus', sign: 'Pisces', degree: '3°', retrograde: false },
          { planet: 'Mars', sign: 'Cancer', degree: '18°', retrograde: false },
          { planet: 'Jupiter', sign: 'Taurus', degree: '25°', retrograde: false },
          { planet: 'Saturn', sign: 'Pisces', degree: '12°', retrograde: false }
        ],
        moonPhase: 'Waxing Gibbous',
        auspiciousTimes: {
          abhijit: '12:00 PM - 12:48 PM',
          amrit: '06:00 AM - 07:36 AM',
          laabh: '09:12 AM - 10:48 AM'
        }
      }
    }
  },

  // Get panchang (daily almanac)
  async getPanchang(date = new Date(), location = 'Delhi, India') {
    try {
      return await api.get('/horoscope/panchang', {
        date: date.toISOString().split('T')[0],
        location
      })
    } catch (error) {
      return {
        date: date.toISOString().split('T')[0],
        tithi: 'Shukla Paksha, Trayodashi',
        nakshatra: 'Chitra',
        yoga: 'Siddha',
        karana: 'Taitila',
        sunrise: '06:15 AM',
        sunset: '06:45 PM',
        moonrise: '08:30 PM',
        moonset: '07:15 AM',
        rahuKaal: '03:00 PM - 04:30 PM',
        yamaganda: '12:00 PM - 01:30 PM',
        gulika: '09:00 AM - 10:30 AM',
        abhijitMuhurat: '12:00 PM - 12:48 PM'
      }
    }
  }
}

// Helper function to determine sun sign from birth date
function getSunSign(date) {
  const month = date.getMonth() + 1
  const day = date.getDate()
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries'
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus'
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini'
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer'
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo'
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo'
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra'
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio'
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius'
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn'
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius'
  return 'Pisces'
}

// Export individual functions for convenience
export const {
  getDailyHoroscope,
  getWeeklyHoroscope,
  getMonthlyHoroscope,
  getYearlyHoroscope,
  getCompatibility,
  generateBirthChart,
  getPlanetaryPositions,
  getPanchang
} = horoscopeService

export default horoscopeService