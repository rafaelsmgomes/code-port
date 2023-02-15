import { useRef, useState, useEffect } from 'react'
interface Section {
  top: number
  coverage: number
  yPosToDocument: number
  isIntersecting: boolean
  intersectionRatio: number
}
type IntersectionEntities = Record<string, Section>

interface IntersectionPayload {
  keys: string[]
  entities: IntersectionEntities
}

interface Options {
  checkLimits: boolean
}
export default function useScrollLimit(options: Options) {
  const anchorRef = useRef('')
  const intersectionEntitiesRef = useRef<IntersectionEntities>({})
  useEffect(() => {
    function scrollHandler() {
      let offset = 0
      if (anchorRef.current && anchorRef.current in intersectionEntitiesRef.current) {
        offset = intersectionEntitiesRef.current[anchorRef.current].yPosToDocument
      } else if (anchorRef.current && anchorRef.current.length > 0) {
        const element = document.getElementById(anchorRef.current)
        const body = document.body
        const documentElement = document.documentElement
        const scrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop
        const clientTop = documentElement.clientTop || body.clientTop || 0
        offset = (element && element.getBoundingClientRect().top + scrollTop - clientTop) || 0
      }
      const { scrollY, innerHeight } = window
      const limitTop = offset
      const limitBottom = offset + innerHeight
      const windowTop = scrollY
      const windowBottom = scrollY + innerHeight
    }
    window.onscroll = scrollHandler

    return () => {
      window.onscroll = null
    }
  }, [])
}
