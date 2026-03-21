import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Home, 
  Search, 
  ArrowLeft,
  Sparkles,
  Star
} from 'lucide-react'

const stars = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2
}))

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Lost Constellation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 opacity-10"
      >
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full"
            style={{
              transform: `rotate(${deg}deg) translateX(120px)`,
              left: '50%',
              top: '50%',
              marginLeft: '-4px',
              marginTop: '-4px'
            }}
          />
        ))}
        <svg className="absolute inset-0 w-full h-full">
          <circle cx="50%" cy="50%" r="120" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="1" strokeDasharray="5,5" />
        </svg>
      </motion.div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* 404 Text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600">
            404
          </h1>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center -mt-4"
          >
            <Sparkles className="w-12 h-12 text-amber-400" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-4">
            Lost in the Cosmos
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for seems to have drifted into another dimension. 
            Let us guide you back to familiar stars.
          </p>
        </motion.div>

        {/* Suggested Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-4 text-amber-400">
            <Search className="w-5 h-5" />
            <span className="font-semibold">Popular Destinations</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Services', path: '/services' },
              { label: 'Book Now', path: '/book' },
              { label: 'Horoscope', path: '/horoscope' },
              { label: 'Contact', path: '/contact' },
              { label: 'About Us', path: '/about' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-full glass text-sm text-white/70 hover:text-amber-400 hover:bg-amber-400/10 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 opacity-20"
        >
          <Star className="w-8 h-8 text-amber-400" />
        </motion.div>
        
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 opacity-20"
        >
          <Star className="w-6 h-6 text-purple-400" />
        </motion.div>
      </div>
    </div>
  )
}