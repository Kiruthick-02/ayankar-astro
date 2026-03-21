import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Sun,
  Moon,
  Star,
  ArrowRight,
  Heart   // ✅ ADD THIS
} from 'lucide-react'
import FadeIn from '../animations/FadeIn'
import { getDailyHoroscope } from '../../services/horoscopeService'

const zodiacSigns = [
  { sign: 'Aries', symbol: '♈', date: 'Mar 21 - Apr 19', element: 'Fire', icon: '🔥' },
  { sign: 'Taurus', symbol: '♉', date: 'Apr 20 - May 20', element: 'Earth', icon: '🌍' },
  { sign: 'Gemini', symbol: '♊', date: 'May 21 - Jun 20', element: 'Air', icon: '💨' },
  { sign: 'Cancer', symbol: '♋', date: 'Jun 21 - Jul 22', element: 'Water', icon: '💧' },
  { sign: 'Leo', symbol: '♌', date: 'Jul 23 - Aug 22', element: 'Fire', icon: '🔥' },
  { sign: 'Virgo', symbol: '♍', date: 'Aug 23 - Sep 22', element: 'Earth', icon: '🌍' },
  { sign: 'Libra', symbol: '♎', date: 'Sep 23 - Oct 22', element: 'Air', icon: '💨' },
  { sign: 'Scorpio', symbol: '♏', date: 'Oct 23 - Nov 21', element: 'Water', icon: '💧' },
  { sign: 'Sagittarius', symbol: '♐', date: 'Nov 22 - Dec 21', element: 'Fire', icon: '🔥' },
  { sign: 'Capricorn', symbol: '♑', date: 'Dec 22 - Jan 19', element: 'Earth', icon: '🌍' },
  { sign: 'Aquarius', symbol: '♒', date: 'Jan 20 - Feb 18', element: 'Air', icon: '💨' },
  { sign: 'Pisces', symbol: '♓', date: 'Feb 19 - Mar 20', element: 'Water', icon: '💧' },
]

const elementColors = {
  Fire: 'from-red-500 via-orange-500 to-amber-500',
  Earth: 'from-emerald-500 via-green-500 to-teal-500',
  Air: 'from-sky-500 via-blue-500 to-indigo-500',
  Water: 'from-blue-600 via-indigo-500 to-purple-500'
}

const elementBgColors = {
  Fire: 'bg-red-500/10 border-red-500/20',
  Earth: 'bg-emerald-500/10 border-emerald-500/20',
  Air: 'bg-sky-500/10 border-sky-500/20',
  Water: 'bg-blue-500/10 border-blue-500/20'
}

export default function HoroscopePreview() {
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[0])
  const [horoscopeData, setHoroscopeData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetchHoroscope(selectedSign.sign)
  }, [selectedSign])

  const fetchHoroscope = async (sign) => {
    setLoading(true)
    try {
      const data = await getDailyHoroscope(sign)
      setHoroscopeData(data)
    } catch (error) {
      console.error('Error fetching horoscope:', error)
    } finally {
      setLoading(false)
    }
  }

  const navigate = (direction) => {
    let newIndex
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % zodiacSigns.length
    } else {
      newIndex = (currentIndex - 1 + zodiacSigns.length) % zodiacSigns.length
    }
    setCurrentIndex(newIndex)
    setSelectedSign(zodiacSigns[newIndex])
  }

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-200">Daily Cosmic Guidance</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-6">
            Today's <span className="text-gold-gradient">Horoscope</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Discover what the stars have aligned for you today. Select your zodiac sign 
            to reveal personalized cosmic insights.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Zodiac Navigation */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <button 
                  onClick={() => navigate('prev')}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-white/60 text-sm font-medium">
                  {currentIndex + 1} / {zodiacSigns.length}
                </span>
                <button 
                  onClick={() => navigate('next')}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {zodiacSigns.map((zodiac, idx) => (
                  <motion.button
                    key={zodiac.sign}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setCurrentIndex(idx)
                      setSelectedSign(zodiac)
                    }}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
                      selectedSign.sign === zodiac.sign
                        ? `bg-gradient-to-br ${elementColors[zodiac.element]} text-white shadow-lg`
                        : 'glass text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-2xl">{zodiac.symbol}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">{zodiac.sign}</span>
                  </motion.button>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-1">{selectedSign.icon}</div>
                  <div className="text-white/50 text-xs">Element</div>
                  <div className="text-white font-semibold text-sm">{selectedSign.element}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">📅</div>
                  <div className="text-white/50 text-xs">Date Range</div>
                  <div className="text-white font-semibold text-sm">{selectedSign.date}</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Horoscope Display */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSign.sign}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`glass rounded-2xl p-8 relative overflow-hidden ${elementBgColors[selectedSign.element]}`}>
                  {/* Header */}
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div 
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${elementColors[selectedSign.element]} flex items-center justify-center text-4xl shadow-lg`}
                    >
                      {selectedSign.symbol}
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-cinzel font-bold text-white mb-1">
                        {selectedSign.sign}
                      </h3>
                      <p className="text-white/60 text-sm">{getCurrentDate()}</p>
                      <div className="flex items-center gap-2 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < 4 ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`} 
                          />
                        ))}
                        <span className="text-white/40 text-xs ml-2">Today's Rating</span>
                      </div>
                    </div>
                  </div>

                  {/* Loading State */}
                  {loading ? (
                    <div className="flex items-center justify-center py-12">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full"
                      />
                    </div>
                  ) : (
                    <>
                      {/* Horoscope Categories */}
                      <div className="space-y-4 mb-8">
                        {[
                          { icon: Sun, label: 'General', color: 'text-amber-400', key: 'general' },
                          { icon: Heart, label: 'Love', color: 'text-pink-400', key: 'love' },
                          { icon: Sparkles, label: 'Career', color: 'text-blue-400', key: 'career' },
                        ].map((category) => (
                          <motion.div
                            key={category.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="glass rounded-xl p-4 flex items-start gap-4"
                          >
                            <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0`}>
                              <category.icon className={`w-5 h-5 ${category.color}`} />
                            </div>
                            <div>
                              <h4 className={`font-semibold ${category.color} mb-1`}>{category.label}</h4>
                              <p className="text-white/70 text-sm leading-relaxed">
                                {horoscopeData?.[category.key] || "The cosmic energies are aligning in your favor today. Stay open to new possibilities and trust your intuition."}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Lucky Elements */}
                      <div className="grid grid-cols-3 gap-3 mb-8">
                        {[
                          { label: 'Lucky Number', value: horoscopeData?.luckyNumber || '7' },
                          { label: 'Lucky Color', value: horoscopeData?.luckyColor || 'Royal Blue' },
                          { label: 'Lucky Time', value: horoscopeData?.luckyTime || '10:00 AM' },
                        ].map((item, idx) => (
                          <div key={idx} className="glass rounded-lg p-3 text-center">
                            <div className="text-white/50 text-xs mb-1">{item.label}</div>
                            <div className="text-amber-400 font-semibold text-sm">{item.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link to="/horoscope">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full btn-primary flex items-center justify-center gap-2 group"
                        >
                          Read Full Horoscope
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </Link>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}