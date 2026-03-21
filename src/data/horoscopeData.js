export const zodiacSigns = [
  { 
    sign: 'Aries', 
    symbol: '♈', 
    date: 'Mar 21 - Apr 19', 
    element: 'Fire', 
    ruler: 'Mars',
    qualities: ['Courageous', 'Determined', 'Confident', 'Enthusiastic'],
    luckyNumbers: [9, 18, 27, 36],
    luckyColors: ['Red', 'Scarlet', 'Carmine'],
    compatibleWith: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius']
  },
  { 
    sign: 'Taurus', 
    symbol: '♉', 
    date: 'Apr 20 - May 20', 
    element: 'Earth', 
    ruler: 'Venus',
    qualities: ['Reliable', 'Patient', 'Practical', 'Devoted'],
    luckyNumbers: [6, 15, 24, 33],
    luckyColors: ['Green', 'Pink'],
    compatibleWith: ['Virgo', 'Capricorn', 'Cancer', 'Pisces']
  },
  { 
    sign: 'Gemini', 
    symbol: '♊', 
    date: 'May 21 - Jun 20', 
    element: 'Air', 
    ruler: 'Mercury',
    qualities: ['Gentle', 'Affectionate', 'Curious', 'Adaptable'],
    luckyNumbers: [5, 14, 23, 32],
    luckyColors: ['Light-Green', 'Yellow'],
    compatibleWith: ['Libra', 'Aquarius', 'Aries', 'Leo']
  },
  { 
    sign: 'Cancer', 
    symbol: '♋', 
    date: 'Jun 21 - Jul 22', 
    element: 'Water', 
    ruler: 'Moon',
    qualities: ['Tenacious', 'Highly Imaginative', 'Loyal', 'Emotional'],
    luckyNumbers: [2, 11, 20, 29],
    luckyColors: ['White', 'Silver'],
    compatibleWith: ['Scorpio', 'Pisces', 'Taurus', 'Virgo']
  },
  { 
    sign: 'Leo', 
    symbol: '♌', 
    date: 'Jul 23 - Aug 22', 
    element: 'Fire', 
    ruler: 'Sun',
    qualities: ['Creative', 'Passionate', 'Generous', 'Warm-hearted'],
    luckyNumbers: [1, 10, 19, 28],
    luckyColors: ['Gold', 'Yellow', 'Orange'],
    compatibleWith: ['Aries', 'Sagittarius', 'Gemini', 'Libra']
  },
  { 
    sign: 'Virgo', 
    symbol: '♍', 
    date: 'Aug 23 - Sep 22', 
    element: 'Earth', 
    ruler: 'Mercury',
    qualities: ['Loyal', 'Analytical', 'Kind', 'Hardworking'],
    luckyNumbers: [5, 14, 23, 32],
    luckyColors: ['Beige', 'Pale-Yellow'],
    compatibleWith: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio']
  },
  { 
    sign: 'Libra', 
    symbol: '♎', 
    date: 'Sep 23 - Oct 22', 
    element: 'Air', 
    ruler: 'Venus',
    qualities: ['Cooperative', 'Diplomatic', 'Gracious', 'Fair-minded'],
    luckyNumbers: [6, 15, 24, 33],
    luckyColors: ['Pink', 'Green'],
    compatibleWith: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius']
  },
  { 
    sign: 'Scorpio', 
    symbol: '♏', 
    date: 'Oct 23 - Nov 21', 
    element: 'Water', 
    ruler: 'Mars/Pluto',
    qualities: ['Resourceful', 'Brave', 'Passionate', 'Stubborn'],
    luckyNumbers: [9, 18, 27, 36],
    luckyColors: ['Scarlet', 'Red', 'Rust'],
    compatibleWith: ['Cancer', 'Pisces', 'Virgo', 'Capricorn']
  },
  { 
    sign: 'Sagittarius', 
    symbol: '♐', 
    date: 'Nov 22 - Dec 21', 
    element: 'Fire', 
    ruler: 'Jupiter',
    qualities: ['Generous', 'Idealistic', 'Great Sense of Humor'],
    luckyNumbers: [3, 12, 21, 30],
    luckyColors: ['Blue', 'Violet'],
    compatibleWith: ['Aries', 'Leo', 'Libra', 'Aquarius']
  },
  { 
    sign: 'Capricorn', 
    symbol: '♑', 
    date: 'Dec 22 - Jan 19', 
    element: 'Earth', 
    ruler: 'Saturn',
    qualities: ['Responsible', 'Disciplined', 'Self-control', 'Good Managers'],
    luckyNumbers: [4, 13, 22, 31],
    luckyColors: ['Brown', 'Black'],
    compatibleWith: ['Taurus', 'Virgo', 'Scorpio', 'Pisces']
  },
  { 
    sign: 'Aquarius', 
    symbol: '♒', 
    date: 'Jan 20 - Feb 18', 
    element: 'Air', 
    ruler: 'Saturn/Uranus',
    qualities: ['Progressive', 'Original', 'Independent', 'Humanitarian'],
    luckyNumbers: [4, 13, 22, 31],
    luckyColors: ['Light-Blue', 'Silver'],
    compatibleWith: ['Gemini', 'Libra', 'Aries', 'Sagittarius']
  },
  { 
    sign: 'Pisces', 
    symbol: '♓', 
    date: 'Feb 19 - Mar 20', 
    element: 'Water', 
    ruler: 'Jupiter/Neptune',
    qualities: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle'],
    luckyNumbers: [7, 16, 25, 34],
    luckyColors: ['Mauve', 'Lilac', 'Purple'],
    compatibleWith: ['Scorpio', 'Cancer', 'Taurus', 'Capricorn']
  }
]

export const dailyHoroscopeTemplates = {
  Aries: {
    general: "Your ruling planet Mars energizes you today. Take initiative on pending projects.",
    love: "Passion runs high. Express your feelings openly to strengthen bonds.",
    career: "Leadership opportunities emerge. Your assertiveness impresses superiors.",
    finance: "Avoid impulsive purchases. Focus on long-term investments.",
    health: "Channel excess energy into physical exercise. Sports are favored."
  },
  Taurus: {
    general: "Venus brings stability. Focus on building lasting foundations today.",
    love: "Romance deepens through shared sensual experiences. Cook together.",
    career: "Patience pays off. Your steady approach solves complex problems.",
    finance: "Financial security improves. Consider real estate investments.",
    health: "Indulge in self-care. Massage or spa treatments rejuvenate you."
  },
  Gemini: {
    general: "Mercury sharpens your wit. Excellent day for negotiations and writing.",
    love: "Communication sparks romance. Deep conversations strengthen intimacy.",
    career: "Multitasking succeeds. Handle diverse projects simultaneously.",
    finance: "Research before investing. Information is your greatest asset.",
    health: "Mental stimulation prevents restlessness. Read or learn something new."
  },
  Cancer: {
    general: "The Moon heightens intuition. Trust your gut feelings today.",
    love: "Emotional connections deepen. Create a cozy, intimate atmosphere.",
    career: "Nurturing colleagues builds loyalty. Your empathy is an asset.",
    finance: "Home-related expenses arise. Budget for family needs.",
    health: "Emotional eating is a risk. Practice mindful consumption."
  },
  Leo: {
    general: "The Sun illuminates your path. Step into the spotlight confidently.",
    love: "Grand romantic gestures succeed. Plan something spectacular.",
    career: "Recognition comes your way. Accept praise graciously.",
    finance: "Speculative investments may pay off. Trust your judgment.",
    health: "Heart-healthy activities favored. Cardio exercises boost energy."
  },
  Virgo: {
    general: "Mercury aids analysis. Perfect day for detailed planning.",
    love: "Practical help shows affection. Assist your partner with tasks.",
    career: "Attention to detail prevents errors. Double-check important work.",
    finance: "Budget review is productive. Cut unnecessary expenses.",
    health: "Digestive health focus. Eat clean, organic foods today."
  },
  Libra: {
    general: "Venus promotes harmony. Seek balance in all interactions.",
    love: "Partnership decisions require compromise. Find middle ground.",
    career: "Diplomacy resolves conflicts. Mediate disputes successfully.",
    finance: "Joint financial planning is favored. Discuss shared goals.",
    health: "Balance work and rest. Avoid extremes in lifestyle."
  },
  Scorpio: {
    general: "Pluto intensifies experiences. Embrace transformation today.",
    love: "Depth and passion define romance. Meaningful intimacy awaits.",
    career: "Research uncovers hidden information. Investigation succeeds.",
    finance: "Joint resources need attention. Review shared accounts.",
    health: "Detoxification is beneficial. Hydrate and cleanse your system."
  },
  Sagittarius: {
    general: "Jupiter expands horizons. Adventure calls—answer it.",
    love: "Spontaneity sparks romance. Try something new together.",
    career: "International connections prosper. Think globally.",
    finance: "Travel investments pay off. Plan future journeys.",
    health: "Outdoor activities rejuvenate. Nature heals your spirit."
  },
  Capricorn: {
    general: "Saturn rewards discipline. Your hard work gains recognition.",
    love: "Commitment strengthens. Serious discussions about future.",
    career: "Authority figures favor you. Seek mentorship or promotion.",
    finance: "Conservative investments succeed. Patience builds wealth.",
    health: "Bone and joint health focus. Strength training is beneficial."
  },
  Aquarius: {
    general: "Uranus inspires innovation. Break from routine today.",
    love: "Unconventional approaches succeed. Surprise your partner.",
    career: "Technology aids progress. Implement new systems.",
    finance: "Alternative investments intrigue. Research cryptocurrencies.",
    health: "Circulation needs attention. Try rebounding or swimming."
  },
  Pisces: {
    general: "Neptune enhances creativity. Artistic pursuits flourish.",
    love: "Soulmate connections deepen. Spiritual bonds strengthen.",
    career: "Intuitive insights guide decisions. Trust your dreams.",
    finance: "Charitable giving returns blessings. Donate generously.",
    health: "Feet need care. Reflexology or foot massage helps."
  }
}

export const getDailyHoroscope = (sign) => {
  const templates = dailyHoroscopeTemplates[sign] || dailyHoroscopeTemplates.Aries
  
  // Add some randomness to make it feel dynamic
  const variations = ['excellent', 'favorable', 'challenging', 'transformative', 'promising']
  const randomVariation = variations[Math.floor(Math.random() * variations.length)]
  
  return {
    ...templates,
    general: `${templates.general} Today brings ${randomVariation} energies.`,
    rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
    luckyNumbers: zodiacSigns.find(z => z.sign === sign)?.luckyNumbers.slice(0, 3).join(', '),
    luckyTime: `${Math.floor(Math.random() * 12 + 6)}:${Math.floor(Math.random() * 6) * 10 || '00'} ${Math.random() > 0.5 ? 'AM' : 'PM'}`
  }
}