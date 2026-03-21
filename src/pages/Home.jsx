import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import About from '../components/home/About'
import Testimonials from '../components/home/Testimonials'
import HoroscopePreview from '../components/home/HoroscopePreview'
import ContactCTA from '../components/home/ContactCTA'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.4 }
  }
}

export default function Home() {
  useSmoothScroll()

  useEffect(() => {
    // Preload critical resources
    const preloadImages = () => {
      const images = [
        // Add critical image URLs here
      ]
      images.forEach(src => {
        const img = new Image()
        img.src = src
      })
    }
    
    preloadImages()
  }, [])

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-transition"
    >
      <Hero />
      <Services />
      <About />
      <HoroscopePreview />
      <Testimonials />
      <ContactCTA />
    </motion.div>
  )
}