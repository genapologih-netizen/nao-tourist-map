import { useState, useEffect } from 'react'

export function useBreakpoint() {
  const [bp, setBp] = useState(() => ({
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 640 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth < 1024 : false,
  }))
  useEffect(() => {
    const fn = () => setBp({
      isMobile: window.innerWidth < 640,
      isTablet: window.innerWidth < 1024,
    })
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return bp
}
