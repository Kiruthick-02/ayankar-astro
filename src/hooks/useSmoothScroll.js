import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const useSmoothScroll = () => {
  const location = useLocation()
  const prevPathname = useRef(location.pathname)

  useEffect(() => {
    if (location.pathname !== prevPathname.current) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      prevPathname.current = location.pathname
    }
  }, [location.pathname])
}

export const useScrollToElement = (elementId, offset = 80) => {
  const scrollToElement = () => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return scrollToElement
}

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setProgress(Number(scroll))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

export const useParallax = (speed = 0.5) => {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      setOffset((scrolled - rect.top) * speed)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}