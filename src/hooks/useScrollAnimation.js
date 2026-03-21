import { useEffect, useRef, useState, useCallback } from 'react'

export function useScrollAnimation(options = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

export function useParallax(speed = 0.5) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.scrollY
      const elementTop = rect.top + scrolled
      const relativeScroll = scrolled - elementTop + window.innerHeight
      
      setOffset(relativeScroll * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalScroll) * 100
      setProgress(Math.min(100, Math.max(0, currentProgress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

export function useStickyHeader(offset = 100) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > offset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return isSticky
}

export function useScrollTo() {
  const scrollTo = useCallback((target, options = {}) => {
    const { offset = 0, behavior = 'smooth' } = options
    
    let element
    if (typeof target === 'string') {
      element = document.querySelector(target)
    } else if (target instanceof HTMLElement) {
      element = target
    } else if (target?.current instanceof HTMLElement) {
      element = target.current
    }

    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior })
    }
  }, [])

  return scrollTo
}

export function useInfiniteScroll(callback, options = {}) {
  const { threshold = 100, disabled = false } = options
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (disabled) return

    const handleScroll = async () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY + window.innerHeight

      if (scrollTop >= scrollHeight - threshold && !isLoading) {
        setIsLoading(true)
        await callback()
        setIsLoading(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [callback, threshold, disabled, isLoading])

  return { isLoading }
}