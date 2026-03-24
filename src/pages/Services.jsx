import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Sparkles, 
  Heart, 
  Briefcase, 
  Home, 
  Calendar, 
  Gem,
  Baby,
  Palette,
  Scale,
  ArrowRight,
  Check,
  Clock,
  IndianRupee,
  ChevronDown
} from 'lucide-react'
import FadeIn from '../components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer'

const allServices = [
  {
    id: 1,
    icon: Sparkles,
    title: 'Full Horoscope Study',
    price: 0,
    duration: '0 mins',
    category: 'Personal',
    popular: true,
    description: 'Complete horoscope analysis covering all major life areas and Dasa predictions.',
    features: [
      'Love & Marriage',
      'Education',
      'Family',
      'Health',
      'Career',
      'Wealth & Asset',
      'Current Dasa Analysis',
      'Next Dasa Predictions',
      'Supporting In Running Dasa' 
    ],
  },
  {
  id: 2,
  icon: Heart,
  title: 'Marriage & Love',
  price: 0,
  duration: '0 mins',
  category: 'Relationships',
  popular: true,
  description: 'Complete guidance for marriage compatibility, timing, and resolving relationship issues.',

  features: {
    matching: [
      'Natchatra Matching',
      'Rasi & Lagna Compatibility',
      'Dasha & Bhuthi Analysis',
      'Kalathira Karakas',
      'Supporting Grahas for Marriage'
    ],
    issues: [
      'Delay in Marriage',
      'Marriage Timing',
      'Married Life Issues',
      'Breakup & Divorce',
      'Other Relationship Issues'
    ]
  },

},
  {
  id: 3,
  icon: Sparkles,
  title: 'Study & Higher Study',
  price: 0,
  duration: '0 mins',
  category: 'Personal',
  popular: false,
  description: 'Complete guidance for education success, higher studies, and choosing the right career path.',

  features: {
    education: [
      'Success in Education',
      'Higher Studies Guidance',
      'Entrance Exam Success',
      'Study Abroad Opportunities'
    ],
    issues: [
      'Issues in Studies',
      'How to Overcome Study Problems'
    ],
    fields: [
      'Medicine',
      'Pharmacy',
      'Engineering',
      'Science',
      'Arts',
      'Accounts',
      'Chartered Accountant',
      'Travel & Marketing'
    ]
  },
},
  {
  id: 4,
  icon: Baby,
  title: 'Child Birth',
  price: 0,
  duration: '0 mins',
  category: 'Family',
  popular: false,
  description: 'Guidance on childbirth timing, delays, children’s health, and parent-child relationships.',

  features: {
    timing: [
      'Why Childbirth Delay',
      'When We Can Have Child',
      'Struggles in Childbirth'
    ],
    child: [
      'Children Health',
      'Parent-Child Relationship'
    ],
    twins: [
      'Horoscope for Twins',
      'Predictions for Twins'
    ]
  },

},
  {
  id: 5,
  icon: Briefcase,
  title: 'Career – Job / Business',
  price: 0,
  duration: '0 mins',
  category: 'Professional',
  popular: true,
  description: 'Complete guidance on career growth, job opportunities, business success, and profession selection.',

  features: {
    job: [
      'Career / Job Analysis',
      'Government Job Possibility',
      'Promotion in Job',
      'Issues in Job',
      'Foreign Job Opportunities'
    ],
    business: [
      'Type of Business',
      'Trading or Service',
      'Import & Export',
      'Profit or Loss in Business',
      'Partnership Business'
    ],
    finance: [
      'Share Market Success',
      'Business Growth',
      'Next Level in Profession'
    ],
    professions: [
      'Engineering',
      'Doctor',
      'Builder',
      'Advocate',
      'Art',
      'Finance'
    ]
  },

},
  {
  id: 6,
  icon: Scale,
  title: 'Health & Issues',
  price: 0,
  duration: '0 mins',
  category: 'Guidance',
  popular: false,
  description: 'Insights into general health, potential issues, surgery success, mental & physical health, and natural remedies.',

  features: {
    general: [
      'General Health',
      'Potential Health Issues',
      'Is It Curable',
      'Free from Hospitalisation'
    ],
    treatment: [
      'Success of Surgery',
      'Mental Health',
      'Physical Health'
    ],
    remedies: [
      'Suitable Natural Medicine'
    ]
  },

},
  {
  id: 7,
  icon: Home,
  title: 'Wealth & Asset',
  price: 0,
  duration: '0 mins',
  category: 'Professional',
  popular: false,
  description: 'Guidance for buying/selling houses, managing properties, rentals, land, and other wealth-related matters.',

  features: {
    houses: [
      'Buying House',
      'Selling House',
      'When I Will Have House',
      'Type of House Possibilities'
    ],
    properties: [
      'Having Business Properties',
      'Rental House',
      'Rent from Properties',
      'Types of Land Properties',
      'Issues in Properties'
    ]
  },

},
  {
  id: 8,
  icon: Sparkles,
  title: 'Prasanna / Horary Predictions',
  price: 0,
  duration: '0 mins',
  category: 'Guidance',
  popular: false,
  description: 'Quick, accurate predictions for one question without a full horoscope. Sub-questions are included.',

  features: {
    predictions: [
      'Best Prediction Method Without Horoscope',
      'Only One Question For Any Doubts',
      'Sub Questions Related To Main Question',
      'Answers From Universe',
      'If Your Question Is True – You Will Get Correct Answers'
    ]
  },

},
  {
  id: 9,
  icon: IndianRupee,
  title: 'Income & Loan',
  price: 0,
  duration: '0 mins',
  category: 'Professional',
  popular: false,
  description: 'Insights on sources of income, income growth, loans, repayment issues, and financial stability.',

  features: {
    income: [
      'Types of Income',
      'Income Growth',
      'Getting Loan',
      'Possibility of Loan Closure'
    ],
    issues: [
      'Issues in Income',
      'Issues in Loan Repayment'
    ]
  },
}
]
const categories = ['All', 'Personal', 'Relationships', 'Professional', 'Space', 'Timing', 'Remedies', 'Family', 'Guidance']

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeService, setActiveService] = useState(null)

  const flattenFeatures = (features) =>
    Array.isArray(features) ? features : Object.values(features).flat()

  const openServiceDetails = (service) => setActiveService(service)
  const closeServiceDetails = () => setActiveService(null)

  // Filter services by category or show all
  const filteredServices = selectedCategory === 'All'
    ? allServices
    : allServices.filter(s => s.category === selectedCategory)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="page-transition pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Offerings
          </span>
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-white mb-6">
            Astrological <span className="text-gold-gradient">Services</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Comprehensive cosmic guidance tailored to your unique needs. Choose from our range of authentic Vedic astrology services.
          </p>
        </FadeIn>

        {/* Category Tabs */}
        <FadeIn delay={0.2} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory(category)
                  closeServiceDetails() // close details modal on tab change
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-400 text-slate-900'
                    : 'glass text-white/70 hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className={`glass rounded-2xl p-8 flex flex-col relative ${
                service.popular ? 'ring-2 ring-amber-400/50' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-amber-400 text-slate-900 text-xs font-bold rounded-full">
                  POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title and Price */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-cinzel font-bold text-white">
                  {service.title}
                </h3>
                <div className="text-right">
                  <div className="text-amber-400 font-bold text-lg flex items-center gap-1">
                    <IndianRupee className="w-4 h-4" />
                    {formatPrice(service.price || 0)}
                  </div>
                  <div className="text-white/50 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {service.duration || '0 mins'}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Features preview */}
              <div className="space-y-2 mb-6">
                {flattenFeatures(service.features).slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {flattenFeatures(service.features).length > 3 && (
                  <div
                    className="text-amber-400/70 text-xs pl-6 cursor-pointer select-none"
                    onClick={() => openServiceDetails(service)}
                  >
                    +{flattenFeatures(service.features).length - 3} more features
                  </div>
                )}
              </div>

              {/* Details button */}
              <button
              
                onClick={() => openServiceDetails(service)}
                className="flex items-center gap-1 justify-center py-3 rounded-lg glass text-white/70 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Details
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Book Now Button */}
              <Link to={`/book?service=${service.id}`} className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 text-sm"
                >
                  Book Now
                  <ChevronDown className="w-4 h-4 rotate-90" />
                </motion.button>
              </Link>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <FadeIn className="text-center py-20">
            <p className="text-white/50 text-lg">No services found in this category</p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-amber-400 hover:underline"
            >
              View all services
            </button>
          </FadeIn>
        )}

        {/* Details Modal */}
<AnimatePresence>
  {activeService && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative w-full max-w-3xl rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-amber-400/20 shadow-2xl shadow-amber-500/10 p-6 md:p-8 text-white"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-amber-400/5 blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={closeServiceDetails}
          className="absolute right-4 top-4 text-white/60 hover:text-white transition"
          aria-label="Close details"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-cinzel font-bold text-white mb-2">
            {activeService.title}
          </h3>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            {activeService.description}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent my-4" />

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-amber-400 text-sm font-semibold tracking-wide uppercase mb-3">
            Features Included
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            {flattenFeatures(activeService.features).map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-sm text-white/80 bg-white/5 hover:bg-white/10 transition rounded-lg px-3 py-2"
              >
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <button
            onClick={closeServiceDetails}
            className="px-5 py-2 rounded-lg border border-white/20 text-white/70 hover:bg-white/10 transition text-sm"
          >
            Close
          </button>

          <Link to={`/book?service=${activeService.id}`}>
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold text-sm shadow-lg shadow-amber-500/30 hover:scale-105 transition">
              Book Now
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </div>
  )
}