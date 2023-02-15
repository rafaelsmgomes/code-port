import { useEffect, useState } from 'react'

export const usePageHeight = () => {
  const [height, setHeight] = useState(1200)
  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [height])
  return height
}
