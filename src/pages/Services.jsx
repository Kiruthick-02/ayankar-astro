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
    title: 'Birth Chart Analysis',
    price: 2999,
    duration: '45 mins',
    category: 'Personal',
    popular: true,
    description: 'Comprehensive analysis of your natal chart including planetary positions, houses, and aspects. Understand your personality, strengths, challenges, and life purpose.',
    features: ['Natal Chart Reading', 'Planetary Analysis', 'Life Path Insights', 'Remedial Measures', 'Yearly Forecast'],
    process: ['Share birth details', 'Chart preparation', 'Detailed analysis', 'Remedies provided']
  },
  {
    id: 2,
    icon: Heart,
    title: 'Marriage Matching',
    price: 3999,
    duration: '60 mins',
    category: 'Relationships',
    popular: true,
    description: 'Detailed Kundali matching using Ashtakoota and Dashakoota methods. Analyze compatibility across 36 gunas for a harmonious married life.',
    features: ['Guna Milan (36 Points)', 'Nadi Dosha Check', 'Manglik Analysis', 'Compatibility Score', 'Remedial Solutions'],
    process: ['Both charts analyzed', 'Compatibility check', 'Dosha identification', 'Matching report']
  },
  {
    id: 3,
    icon: Briefcase,
    title: 'Career & Finance',
    price: 2499,
    duration: '45 mins',
    category: 'Professional',
    popular: false,
    description: 'Astrological guidance for professional growth, job changes, promotions, and financial investments. Identify favorable periods for career moves.',
    features: ['Career Path Analysis', 'Job Change Timing', 'Business Prospects', 'Wealth Indicators', 'Investment Guidance'],
    process: ['Current analysis', 'Opportunity timing', 'Growth periods', 'Action plan']
  },
  {
    id: 4,
    icon: Home,
    title: 'Vastu Shastra',
    price: 4999,
    duration: '90 mins',
    category: 'Space',
    popular: false,
    description: 'Complete Vastu analysis for your home or office. Get recommendations for layout, directions, and energy flow optimization.',
    features: ['Site Analysis', 'Directional Planning', 'Energy Flow Correction', 'Remedial Solutions', 'Floor Plan Review'],
    process: ['Site/Plan review', 'Energy analysis', 'Problem identification', 'Correction plan']
  },
  {
    id: 5,
    icon: Calendar,
    title: 'Muhurat Selection',
    price: 1999,
    duration: '30 mins',
    category: 'Timing',
    popular: false,
    description: 'Find the most auspicious dates and times for important events like weddings, business launches, property purchase, and more.',
    features: ['Wedding Dates', 'Business Launch', 'Property Purchase', 'Travel Timing', 'Event Planning'],
    process: ['Event details', 'Auspicious calculation', 'Date options', 'Final selection']
  },
  {
    id: 6,
    icon: Gem,
    title: 'Gemstone Therapy',
    price: 1499,
    duration: '30 mins',
    category: 'Remedies',
    popular: false,
    description: 'Personalized gemstone recommendations based on your birth chart. Learn which stones enhance positive planetary influences.',
    features: ['Birth Stone Analysis', 'Wearing Instructions', 'Metal Selection', 'Activation Rituals', 'Care Guidelines'],
    process: ['Chart analysis', 'Stone recommendation', 'Wearing guide', 'Purchase assistance']
  },
  {
    id: 7,
    icon: Baby,
    title: 'Child Birth Analysis',
    price: 2999,
    duration: '45 mins',
    category: 'Family',
    popular: false,
    description: 'Favorable periods for conception and child birth. Analyze progeny prospects and remedies for delays.',
    features: ['Fertility Timing', 'Progeny Prospects', 'Remedial Pujas', 'Name Selection', 'Child Chart Preview'],
    process: ['Couple charts', 'Fertility window', 'Remedies if needed', 'Ongoing support']
  },
  {
    id: 8,
    icon: Palette,
    title: 'Color & Number Therapy',
    price: 999,
    duration: '20 mins',
    category: 'Personal',
    popular: false,
    description: 'Discover your lucky colors, numbers, and directions based on numerology and astrology for daily life enhancement.',
    features: ['Lucky Numbers', 'Favorable Colors', 'Direction Analysis', 'Daily Guidance', 'Vehicle Numbers'],
    process: ['Numerology chart', 'Astrology sync', 'Personal report', 'Daily tips']
  },
  {
    id: 9,
    icon: Scale,
    title: 'Legal & Health',
    price: 2499,
    duration: '45 mins',
    category: 'Guidance',
    popular: false,
    description: 'Astrological insights regarding legal matters and health concerns. Identify favorable periods and potential challenges.',
    features: ['Legal Outcome Prediction', 'Health Indicators', 'Recovery Timing', 'Preventive Measures', 'Second Opinion'],
    process: ['Concern analysis', 'Timing check', 'Outcome probability', 'Guidance provided']
  }
]

const categories = ['All', 'Personal', 'Relationships', 'Professional', 'Space', 'Timing', 'Remedies', 'Family', 'Guidance']

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedService, setExpandedService] = useState(null)

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

        {/* Category Filter */}
        <FadeIn delay={0.2} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
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
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`glass rounded-2xl p-8 h-full flex flex-col hover-glow group relative overflow-hidden ${
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title & Price */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-cinzel font-bold text-white group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-amber-400 font-bold text-lg flex items-center gap-1">
                        <IndianRupee className="w-4 h-4" />
                        {service.price.toLocaleString()}
                      </div>
                      <div className="text-white/50 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-sm text-white/70">
                        <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-amber-400/70 text-xs pl-6">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mb-6"
                      >
                        <div className="pt-4 border-t border-white/10">
                          <h4 className="text-amber-400 text-sm font-semibold mb-3">Process</h4>
                          <div className="flex gap-2 overflow-x-auto pb-2">
                            {service.process.map((step, idx) => (
                              <div key={idx} className="flex-shrink-0 glass rounded-lg px-3 py-2 text-xs text-white/70">
                                <span className="text-amber-400 mr-2">{idx + 1}.</span>
                                {step}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setExpandedService(
                        expandedService === service.id ? null : service.id
                      )}
                      className="flex-1 py-3 rounded-lg glass text-white/70 text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-1"
                    >
                      Details
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        expandedService === service.id ? 'rotate-180' : ''
                      }`} />
                    </motion.button>
                    
                    <Link to={`/book?service=${service.id}`} className="flex-[2]">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full btn-primary flex items-center justify-center gap-2 text-sm"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <FadeIn className="text-center py-20">
            <Sparkles className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/50 text-lg">No services found in this category</p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-amber-400 hover:underline"
            >
              View all services
            </button>
          </FadeIn>
        )}

        {/* Bottom CTA */}
        <FadeIn delay={0.4} className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-cinzel font-bold text-white mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              We offer personalized consultation packages tailored to your specific needs. 
              Contact us for a custom solution.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Contact for Custom Quote
              </motion.button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}