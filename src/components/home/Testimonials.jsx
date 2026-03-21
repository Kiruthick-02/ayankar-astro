import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  User
} from 'lucide-react'
import FadeIn from '../animations/FadeIn'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Business Owner',
    location: 'Mumbai, India',
    image: null,
    content: 'The career consultation completely transformed my perspective. Within months of following the remedies suggested, I landed my dream job. The accuracy was unbelievable!',
    rating: 5,
    service: 'Career Guidance'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Software Engineer',
    location: 'Bangalore, India',
    image: null,
    content: 'I was skeptical at first, but the birth chart analysis was incredibly detailed and accurate. It helped me understand my strengths and weaknesses better than any personality test.',
    rating: 5,
    service: 'Birth Chart Analysis'
  },
  {
    id: 3,
    name: 'Anita Patel',
    role: 'Homemaker',
    location: 'Delhi, India',
    image: null,
    content: 'The marriage matching service saved us from a potentially incompatible alliance. Forever grateful to the team for their honest and detailed analysis.',
    rating: 5,
    service: 'Marriage Matching'
  },
  {
    id: 4,
    name: 'Vikram Mehta',
    role: 'Entrepreneur',
    location: 'Pune, India',
    image: null,
    content: 'Vastu consultation for my new office brought immediate positive changes. Business has been thriving since the implementation of suggested changes.',
    rating: 5,
    service: 'Vastu Consultation'
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    role: 'Doctor',
    location: 'Hyderabad, India',
    image: null,
    content: 'The gemstone therapy recommendation worked wonders for my anxiety. I feel more balanced and focused throughout my day. Highly recommend their services!',
    rating: 5,
    service: 'Gemstone Therapy'
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection)
    setCurrent((prev) => {
      if (newDirection === 1) {
        return prev === testimonials.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1
    })
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [isAutoPlaying, paginate])

  const handleManualNav = (newDirection) => {
    setIsAutoPlaying(false)
    paginate(newDirection)
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    })
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block"
          >
            Client Stories
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-4">
            Voices of <span className="text-gold-gradient">Satisfaction</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Real experiences from our valued clients who transformed their lives through cosmic guidance
          </p>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="glass rounded-3xl p-8 md:p-12 min-h-[400px] relative overflow-hidden">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-amber-400/10" />
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Service Tag */}
                <div className="flex justify-center mb-6">
                  <span className="px-4 py-1 rounded-full glass text-amber-400 text-sm font-medium">
                    {testimonials[current].service}
                  </span>
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 text-center font-light italic">
                  "{testimonials[current].content}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-purple-600 p-1"
                  >
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                      {testimonials[current].image ? (
                        <img 
                          src={testimonials[current].image} 
                          alt={testimonials[current].name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-10 h-10 text-white/40" />
                      )}
                    </div>
                  </motion.div>
                  
                  <div className="text-center">
                    <div className="font-cinzel font-bold text-white text-xl mb-1">
                      {testimonials[current].name}
                    </div>
                    <div className="text-amber-400 text-sm font-medium mb-1">
                      {testimonials[current].role}
                    </div>
                    <div className="text-white/40 text-xs flex items-center justify-center gap-1">
                      <span>📍</span>
                      {testimonials[current].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleManualNav(-1)}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-amber-400/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              {/* Dots */}
              <div className="flex gap-2 px-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setDirection(idx > current ? 1 : -1)
                      setCurrent(idx)
                      setTimeout(() => setIsAutoPlaying(true), 10000)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === current ? 'w-8 bg-amber-400' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleManualNav(1)}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-amber-400/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Side Previews */}
          <div className="hidden lg:block">
            <motion.div 
              className="absolute top-1/2 -left-32 -translate-y-1/2 w-48 glass rounded-2xl p-4 opacity-40 blur-[1px]"
              style={{ transform: 'translateY(-50%) perspective(1000px) rotateY(25deg)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10" />
                <div className="flex-1">
                  <div className="h-3 bg-white/20 rounded w-3/4 mb-2" />
                  <div className="h-2 bg-white/10 rounded w-1/2" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 -right-32 -translate-y-1/2 w-48 glass rounded-2xl p-4 opacity-40 blur-[1px]"
              style={{ transform: 'translateY(-50%) perspective(1000px) rotateY(-25deg)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10" />
                <div className="flex-1">
                  <div className="h-3 bg-white/20 rounded w-3/4 mb-2" />
                  <div className="h-2 bg-white/10 rounded w-1/2" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Badges */}
        <FadeIn delay={0.3} className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['Trusted by 10,000+', '4.9/5 Rating', '15+ Years', '100% Confidential'].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/60 text-sm">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}