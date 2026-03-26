import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeIn from '../animations/FadeIn'

const features = [
  '20+ Years of Experience',
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
    offset: ['start end', 'end start']
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section ref={containerRef} className="py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <FadeIn direction="left" className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden glass">
    <img
      src="/assets/images/center.png"
      alt="Astrologer"
      className="w-full h-full object-cover "
              />
            </div>
          </FadeIn>

          {/* Content Side */}
          <FadeIn direction="right">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-6 leading-tight">
              Stellar <span className="text-gold-gradient">Astrology</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-6">
              In this Universe, our Earth is unique among planets. Each human and species has distinct traits due to cosmic energy, a truth acknowledged even by modern science.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Just like fingerprints and retina, every person possesses unique body structure, character, and health, granted by cosmic energy at birth.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Accurate calculations and precise birth times are essential to generate truly personalized horoscopes and predictions for every individual.
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

            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Read Our Story
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}