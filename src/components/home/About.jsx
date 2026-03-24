import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check, Award, Users, BookOpen } from 'lucide-react'
import FadeIn from '../animations/FadeIn'

const features = [
  '0+ Years of Experience',
  'Certified Vedic Astrologers',
  '100% Confidential Consultations',
  'Personalized Remedies',
  '24/7 Online Support',
  'Satisfaction Guaranteed'
]

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <FadeIn direction="left" className="relative">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="aspect-square rounded-3xl overflow-hidden glass relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-amber-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="w-64 h-64 mx-auto border-2 border-amber-400/30 rounded-full flex items-center justify-center relative"
                    >
                      {/* Zodiac Symbols Circle */}
                      {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((sign, i) => (
                        <span
                          key={i}
                          className="absolute text-2xl text-amber-400/60"
                          style={{
                            transform: `rotate(${i * 30}deg) translateY(-120px) rotate(-${i * 30}deg)`
                          }}
                        >
                          {sign}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div 
                style={{ rotate }}
                className="absolute -top-6 -right-6 glass rounded-2xl p-4 z-20"
              >
                <Award className="w-8 h-8 text-amber-400 mb-2" />
                <div className="text-2xl font-bold text-white">0+</div>
                <div className="text-xs text-white/60">Years Exp.</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 z-20"
              >
                <Users className="w-8 h-8 text-purple-400 mb-2" />
                <div className="text-2xl font-bold text-white">0+</div>
                <div className="text-xs text-white/60">Happy Clients</div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Content Side */}
          <FadeIn direction="right">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-6 leading-tight">
              Ancient Wisdom Meets <span className="text-gold-gradient">Modern Guidance</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Founded on the principles of authentic Vedic astrology, Aynkaran Astro Center 
              brings centuries of celestial knowledge to help you navigate life's journey. 
              Our team of expert astrologers combines traditional wisdom with contemporary 
              insights to provide accurate, actionable guidance.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="text-white/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Read Our Story
            </motion.button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}