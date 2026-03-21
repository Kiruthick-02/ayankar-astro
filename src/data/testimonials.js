export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Business Owner',
    location: 'Mumbai',
    image: null,
    initials: 'PS',
    rating: 5,
    service: 'Birth Chart Analysis',
    content: 'The birth chart analysis was incredibly accurate. Dr. Sharma identified career patterns I had been experiencing for years but couldn\'t understand. Within 3 months of following the remedies, my business turned around completely. I\'m now expanding to three new locations!',
    date: '2025-12-15',
    verified: true
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Software Engineer',
    location: 'Bangalore',
    image: null,
    initials: 'RK',
    rating: 5,
    service: 'Career Guidance',
    content: 'I was stuck in a job I hated but was afraid to leave. The career consultation not only identified my ideal field (data science, which I\'m now pursuing) but also gave me the confidence to make the transition. Best decision ever—got a 40% salary bump!',
    date: '2026-01-20',
    verified: true
  },
  {
    id: 3,
    name: 'Anita Patel',
    role: 'Homemaker',
    location: 'Ahmedabad',
    image: null,
    initials: 'AP',
    rating: 5,
    service: 'Marriage Matching',
    content: 'The marriage matching service saved us from a potentially difficult alliance. The detailed analysis revealed compatibility issues that would have caused problems later. We found a better match through their guidance and have been happily married for 2 years now.',
    date: '2025-08-10',
    verified: true
  },
  {
    id: 4,
    name: 'Vikram Mehta',
    role: 'Entrepreneur',
    location: 'Delhi',
    image: null,
    initials: 'VM',
    rating: 5,
    service: 'Vastu Consultation',
    content: 'My office Vastu was completely wrong according to the analysis. After implementing the suggested changes—mostly furniture rearrangement and color changes—my team\'s productivity increased by 30% and we landed two major clients within weeks. The ROI was incredible.',
    date: '2026-02-05',
    verified: true
  },
  {
    id: 5,
    name: 'Lakshmi Devi',
    role: 'Yoga Instructor',
    location: 'Chennai',
    image: null,
    initials: 'LD',
    rating: 5,
    service: 'Gemstone Therapy',
    content: 'I was skeptical about gemstones but decided to try. The recommended blue sapphire has made a noticeable difference in my meditation practice and overall clarity. Even my students have commented on the positive energy shift. Worth every rupee!',
    date: '2025-11-28',
    verified: true
  },
  {
    id: 6,
    name: 'Arjun Reddy',
    role: 'Medical Student',
    location: 'Hyderabad',
    image: null,
    initials: 'AR',
    rating: 4,
    service: 'Education Guidance',
    content: 'The education astrology session helped me choose my specialization. The analysis correctly predicted my success in surgery over medicine, and I\'m now topping my class in surgical rotations. The planetary period guidance for exams has been spot-on.',
    date: '2026-01-15',
    verified: true
  },
  {
    id: 7,
    name: 'Sunita Gupta',
    role: 'Bank Manager',
    location: 'Pune',
    image: null,
    initials: 'SG',
    rating: 5,
    service: 'Legal Astrology',
    content: 'Facing a property dispute that had dragged for 5 years, the legal astrology consultation identified a favorable settlement period. We reached an agreement within that window, saving years of court battles. The timing precision was remarkable.',
    date: '2025-09-22',
    verified: true
  },
  {
    id: 8,
    name: 'Mohammed Khan',
    role: 'Restaurant Owner',
    location: 'Jaipur',
    image: null,
    initials: 'MK',
    rating: 5,
    service: 'Muhurat Selection',
    content: 'Opened my second restaurant on the muhurat they calculated. Despite being in a competitive location, we had a full house on opening day and have maintained 80% occupancy since. The auspicious timing definitely made a difference.',
    date: '2025-10-30',
    verified: true
  },
  {
    id: 9,
    name: 'Deepa Iyer',
    role: 'IT Consultant',
    location: 'Chennai',
    image: null,
    initials: 'DI',
    rating: 5,
    service: 'Child Birth Analysis',
    content: 'After two years of trying, the progeny astrology identified favorable conception windows we had been missing. Following their guidance, we conceived in the first suggested period! Now blessed with a healthy baby boy. Eternally grateful.',
    date: '2026-03-01',
    verified: true
  },
  {
    id: 10,
    name: 'Karan Malhotra',
    role: 'Marketing Director',
    location: 'Gurgaon',
    image: null,
    initials: 'KM',
    rating: 5,
    service: 'Annual Forecast',
    content: 'The yearly prediction for 2025 warned of a mid-year career challenge and suggested laying low during a specific period. When the restructuring happened, I was prepared and emerged stronger. The foresight was invaluable for my mental preparation.',
    date: '2025-12-30',
    verified: true
  }
]

export const getTestimonialsByService = (service) => 
  testimonials.filter(t => t.service === service)

export const getVerifiedTestimonials = () => 
  testimonials.filter(t => t.verified)

export const getRecentTestimonials = (count = 5) => 
  testimonials.slice(0, count)

export const getAverageRating = () => {
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0)
  return (total / testimonials.length).toFixed(1)
}

export const getTestimonialStats = () => ({
  total: testimonials.length,
  averageRating: getAverageRating(),
  fiveStar: testimonials.filter(t => t.rating === 5).length,
  verified: testimonials.filter(t => t.verified).length
})