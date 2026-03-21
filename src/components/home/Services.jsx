import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Sparkles, 
  Heart, 
  Briefcase, 
  Home, 
  Calendar, 
  Gem,
  ArrowRight
} from 'lucide-react'
import FadeIn from '../animations/FadeIn'
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer'

const services = [
  {
    icon: Sparkles,
    title: 'Birth Chart Analysis',
    description: 'Comprehensive analysis of your natal chart revealing personality traits, strengths, and life path.',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Heart,
    title: 'Marriage Matching',
    description: 'Kundali matching for compatibility analysis ensuring harmonious marital relationships.',
    color: 'from-pink-500 to-rose-600'
  },
  {
    icon: Briefcase,
    title: 'Career Guidance',
    description: 'Astrological insights for professional growth, job changes, and business success.',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: Home,
    title: 'Vastu Consultation',
    description: 'Ancient Vastu Shastra principles for positive energy flow in your living spaces.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Calendar,
    title: 'Muhurat Selection',
    description: 'Auspicious timing for important events, ceremonies, and new beginnings.',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Gem,
    title: 'Gemstone Therapy',
    description: 'Personalized gemstone recommendations to enhance planetary influences.',
    color: 'from-violet-500 to-purple-600'
  }
]

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-6">
            Cosmic Guidance For Every <span className="text-gold-gradient">Aspect of Life</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From personal growth to professional success, our comprehensive astrological services 
            illuminate your path forward.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative glass rounded-2xl p-8 overflow-hidden hover-glow"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-cinzel font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <Link 
                  to="/services"
                  className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold group/link"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="text-center mt-12">
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View All Services
            </motion.button>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}