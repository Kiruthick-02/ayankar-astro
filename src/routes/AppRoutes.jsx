import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import BookConsultation from '../pages/BookConsultation'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (navigationType === 'PUSH' || navigationType === 'POP') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [pathname, navigationType])

  return null
}

// Page transition wrapper
const PageTransition = ({ children }) => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default function AppRouter() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
  <Route path="/" element={<Layout />}>
    <Route index element={<PageTransition><Home /></PageTransition>} />
    <Route path="about" element={<PageTransition><About /></PageTransition>} />
    <Route path="services" element={<PageTransition><Services /></PageTransition>} />
    <Route path="book" element={<PageTransition><BookConsultation /></PageTransition>} />
    <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
    <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
  </Route>
</Routes>
      </AnimatePresence>
    </>
  )
}