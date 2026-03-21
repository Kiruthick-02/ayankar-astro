import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Sparkles, 
  Heart, 
  Briefcase, 
  DollarSign, 
  Activity,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import FadeIn from '../components/animations/FadeIn'

const zodiacSigns = [
  { sign: 'Aries', symbol: '♈', date: 'Mar 21 - Apr 19', element: 'Fire', ruler: 'Mars' },
  { sign: 'Taurus', symbol: '♉', date: 'Apr 20 - May 20', element: 'Earth', ruler: 'Venus' },
  { sign: 'Gemini', symbol: '♊', date: 'May 21 - Jun 20', element: 'Air', ruler: 'Mercury' },
  { sign: 'Cancer', symbol: '♋', date: 'Jun 21 - Jul 22', element: 'Water', ruler: 'Moon' },
  { sign: 'Leo', symbol: '♌', date: 'Jul 23 - Aug 22', element: 'Fire', ruler: 'Sun' },
  { sign: 'Virgo', symbol: '♍', date: 'Aug 23 - Sep 22', element: 'Earth', ruler: 'Mercury' },
  { sign: 'Libra', symbol: '♎', date: 'Sep 23 - Oct 22', element: 'Air', ruler: 'Venus' },
  { sign: 'Scorpio', symbol: '♏', date: 'Oct 23 - Nov 21', element: 'Water', ruler: 'Mars/Pluto' },
  { sign: 'Sagittarius', symbol: '♐', date: 'Nov 22 - Dec 21', element: 'Fire', ruler: 'Jupiter' },
  { sign: 'Capricorn', symbol: '♑', date: 'Dec 22 - Jan 19', element: 'Earth', ruler: 'Saturn' },
  { sign: 'Aquarius', symbol: '♒', date: 'Jan 20 - Feb 18', element: 'Air', ruler: 'Saturn/Uranus' },
  { sign: 'Pisces', symbol: '♓', date: 'Feb 19 - Mar 20', element: 'Water', ruler: 'Jupiter/Neptune' },
]

const horoscopeData = {
  general: "Today brings a wave of positive energy. The planetary alignment favors new beginnings and important decisions. Trust your intuition and take calculated risks.",
  love: "Romantic energies are high today. Existing relationships deepen through meaningful conversations. Singles may encounter someone significant in unexpected places.",
  career: "Professional opportunities present themselves. Your hard work receives recognition. Collaborative projects yield excellent results. Stay open to mentorship.",
  finance: "Financial stability improves. Past investments may show returns. Avoid impulsive purchases. Consider long-term savings plans.",
  health: "Energy levels are optimal. Physical activities are favored. Pay attention to your sleep schedule. Mental clarity brings peace of mind."
}

const elementColors = {
  Fire: 'from-red-500 to-orange-500',
  Earth: 'from-emerald-500 to-green-500',
  Air: 'from-sky-500 to-blue-500',
  Water: 'from-indigo-500 to-purple-500'
}

const luckyItems = [
  { label: 'Lucky Number', value: '7, 14, 21' },
  { label: 'Lucky Color', value: 'Royal Blue, Gold' },
  { label: 'Lucky Time', value: '10:00 AM - 12:00 PM' },
  { label: 'Lucky Direction', value: 'North-East' }
]

export default function Horoscope() {
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[0])
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  const navigateSign = (direction) => {
    const currentIndex = zodiacSigns.findIndex(z => z.sign === selectedSign.sign)
    let newIndex
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % zodiacSigns.length
    } else {
      newIndex = (currentIndex - 1 + zodiacSigns.length) % zodiacSigns.length
    }
    setSelectedSign(zodiacSigns[newIndex])
  }

  return (
    <div className="page-transition pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Daily Predictions
          </span>
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-white mb-4">
            Today's <span className="text-gold-gradient">Horoscope</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Discover what the stars have in store for you today. Select your zodiac sign to reveal your personalized cosmic guidance.
          </p>
        </FadeIn>

        {/* Date Selector */}
        <FadeIn delay={0.2} className="flex justify-center mb-12">
          <div className="glass rounded-full p-2 flex items-center gap-4">
            <button 
              onClick={() => {
                const date = new Date(selectedDate)
                date.setDate(date.getDate() - 1)
                setSelectedDate(date.toISOString().split('T')[0])
              }}
              className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2 px-4">
              <Calendar className="w-5 h-5 text-amber-400" />
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent text-white font-medium focus:outline-none"
              />
            </div>
            
            <button 
              onClick={() => {
                const date = new Date(selectedDate)
                date.setDate(date.getDate() + 1)
                setSelectedDate(date.toISOString().split('T')[0])
              }}
              className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </FadeIn>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Zodiac Selector */}
          <FadeIn direction="left" className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 sticky top-32">
              <h3 className="text-lg font-cinzel font-bold text-white mb-6 text-center">Select Your Sign</h3>
              <div className="grid grid-cols-3 gap-3">
                {zodiacSigns.map((zodiac) => (
                  <motion.button
                    key={zodiac.sign}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSign(zodiac)}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${
                      selectedSign.sign === zodiac.sign
                        ? 'bg-amber-400 text-slate-900'
                        : 'glass text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-2xl">{zodiac.symbol}</span>
                    <span className="text-xs font-medium">{zodiac.sign}</span>
                  </motion.button>
                ))}
              </div>

              {/* Selected Sign Info */}
              <motion.div
                key={selectedSign.sign}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/60 text-sm">Element</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${elementColors[selectedSign.element]} text-white`}>
                    {selectedSign.element}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Ruler</span>
                  <span className="text-white font-medium">{selectedSign.ruler}</span>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Horoscope Display */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <FadeIn>
              <motion.div
                key={selectedSign.sign}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-8 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${elementColors[selectedSign.element]} opacity-10 rounded-bl-full`} />
                
                <div className="relative z-10 flex items-center gap-6">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-5xl shadow-lg shadow-amber-500/30"
                  >
                    {selectedSign.symbol}
                  </motion.div>
                  
                  <div>
                    <h2 className="text-4xl font-cinzel font-bold text-white mb-2">{selectedSign.sign}</h2>
                    <p className="text-amber-400 text-lg">{selectedSign.date}</p>
                    <div className="flex items-center gap-2 mt-2 text-white/50 text-sm">
                      <Sparkles className="w-4 h-4" />
                      <span>Today's Rating: 
                        <span className="text-amber-400 ml-1">★★★★☆</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            {/* Prediction Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Sparkles, title: 'General', content: horoscopeData.general, color: 'text-purple-400' },
                { icon: Heart, title: 'Love & Relationships', content: horoscopeData.love, color: 'text-pink-400' },
                { icon: Briefcase, title: 'Career', content: horoscopeData.career, color: 'text-blue-400' },
                { icon: DollarSign, title: 'Finance', content: horoscopeData.finance, color: 'text-green-400' },
                { icon: Activity, title: 'Health', content: horoscopeData.health, color: 'text-red-400' },
              ].map((item, idx) => (
                <FadeIn key={item.title} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass rounded-xl p-6 h-full hover-glow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                      <h3 className="font-cinzel font-bold text-white text-lg">{item.title}</h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{item.content}</p>
                  </motion.div>
                </FadeIn>
              ))}

              {/* Lucky Items Card */}
              <FadeIn delay={0.5}>
                <div className="glass rounded-xl p-6 md:col-span-2">
                  <h3 className="font-cinzel font-bold text-white text-lg mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    Today's Lucky Elements
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {luckyItems.map((item, idx) => (
                      <div key={idx} className="text-center p-3 rounded-lg bg-white/5">
                        <div className="text-white/50 text-xs mb-1">{item.label}</div>
                        <div className="text-amber-400 font-semibold text-sm">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Navigation */}
            <FadeIn>
              <div className="flex justify-between items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigateSign('prev')}
                  className="flex items-center gap-2 px-6 py-3 glass rounded-full text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous Sign
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigateSign('next')}
                  className="flex items-center gap-2 px-6 py-3 glass rounded-full text-white hover:bg-white/10 transition-colors"
                >
                  Next Sign
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}