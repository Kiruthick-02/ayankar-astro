import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  Clock, 
  Sparkles,
  ArrowRight,
  MapPin
} from 'lucide-react'
import FadeIn from '../animations/FadeIn'

export default function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-slate-900/50 to-amber-900/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="glass rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Decorative Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 border border-amber-400/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-60 h-60 border border-purple-400/20 rounded-full"
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-12 h-12 text-amber-400" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-6 leading-tight">
                Begin Your Cosmic Journey{' '}
                <span className="text-gold-gradient">Today</span>
              </h2>
              
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                Don't let uncertainty hold you back. Our expert astrologers are ready to 
                guide you towards clarity, success, and fulfillment. Take the first step 
                towards understanding your destiny.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/book">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2 group text-lg px-10 py-4"
                  >
                    Book Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary text-lg px-10 py-4"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-white/10">
                {[
                  { icon: Phone, label: '+91 98765 43210', sublabel: 'Call Us Anytime' },
                  { icon: Mail, label: 'contact@aynkaran.in', sublabel: 'Email Us' },
                  { icon: Clock, label: '24/7 Available', sublabel: 'Round the Clock' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center mb-2">
                      <item.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <div className="text-white/50 text-xs">{item.sublabel}</div>
                  </motion.div>
                ))}
              </div>

              {/* Location Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full glass text-sm text-white/60"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>123 Spiritual Lane, Divine City, India</span>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}