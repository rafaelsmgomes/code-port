import { useState, useRef, useCallback } from 'react'

interface IntersectionPayload {
  keys: string[]
  entities: IntersectionEntities
}

interface Section {
  top: number
  coverage: number
  yPosToDocument: number
  isIntersecting: boolean
  intersectionRatio: number
}

type IntersectionEntities = Record<string, Section>

const sortCoverageDescending = (entities: IntersectionEntities) => (a: any, b: any) => {
  const { coverage: coverageA } = entities[a]
  const { coverage: coverageB } = entities[b]
  return coverageB - coverageA
}

const sortIntersectionRatioDescending = (entities: IntersectionEntities) => (a: any, b: any) =>
  entities[b].intersectionRatio - entities[a].intersectionRatio

const sortTopPostionToZeroAscending = (entities: IntersectionEntities) => (a: any, b: any) =>
  entities[b].intersectionRatio - entities[a].intersectionRatio

const sortYPosToDocumentAscending = (entities: IntersectionEntities) => (a: any, b: any) =>
  entities[a].yPosToDocument - entities[b].yPosToDocument

type Score = Record<string, number>

const getScore = (ranks: string[][]) => {
  let score: Score = {}
  for (let i = 0; i < ranks.length; i++) {
    score = ranks[i].reduce((a, b, i) => {
      const currentScore = a[b] || 0
      return { ...a, [b]: currentScore + i }
    }, score)
  }
  return score
}

export const getSelected = ({ keys, entities }: IntersectionPayload): string => {
  // console.log({ entities })
  //  Sort by intersection ratio
  const intersectionRatio = [...keys].sort(sortIntersectionRatioDescending(entities))
  console.log({ intersectionRatio })

  //  Filter out elements with negative top positions and sort
  const topPositionToZero = [...keys].filter((n) => entities[n].top > 0).sort(sortTopPostionToZeroAscending(entities))
  console.log({ topPositionToZero })

  //  Sort by coverage
  const coverage = [...keys].sort(sortCoverageDescending(entities))

  //  Sort by elements y position relative to the document
  const yPosToDocument = [...keys].sort(sortYPosToDocumentAscending(entities))

  // Score the results
  const score = getScore([intersectionRatio, topPositionToZero, coverage, yPosToDocument])

  //  Find the lowest score
  const min: number = Math.min(...Object.values(score))

  // Filer all losers out of these results
  const filteredResults = Object.entries(score).filter((n) => n[1] === min)

  //  Incase there is a draw, the element with the lowest yPosToDocument wins
  const selected: string[] = filteredResults
    .sort((a, b) => entities[a[0]].yPosToDocument - entities[b[0]].yPosToDocument)
    .map((n) => n[0])
  //
  return selected[0] || ''
}

export function useIntersectionListener(onIntersectionUpdate?: (data: IntersectionPayload) => void) {
  const [selected, setSelected] = useState('')
  const intersectorsKeys = useRef<string[]>([])
  const intersectionEntities = useRef<IntersectionEntities>({})

  const handleIntersectionUpdate = useCallback(
    (data: IntersectionPayload, targetSelection: string) => {
      if (targetSelection) setSelected(targetSelection)
      onIntersectionUpdate && onIntersectionUpdate(data)
    },
    [onIntersectionUpdate]
  )

  return {
    selected,
    handleIntersectionUpdate: useCallback(
      (ioEntry: IntersectionObserverEntry, anchor: string) => {
        const {
          isIntersecting,
          intersectionRatio,
          boundingClientRect: { top },
          intersectionRect: { height },
        } = ioEntry

        if (anchor.length === 0) return

        let keys: string[] = intersectorsKeys.current
        let entities: IntersectionEntities = {}

        const index = keys.findIndex((n) => n === anchor)
        // Is the target of the event intersecting
        if (index > -1 && isIntersecting) {
          // No? Remove it for the intersectors list
          keys = [...keys.slice(0, index), ...keys.slice(index + 1)]
        } else if (index === -1 && isIntersecting) {
          // Yes? Add it to the intersectors list
          keys.push(anchor)
        }

        if (typeof document !== 'undefined') {
          const body = document.body
          const documentElement = document.documentElement
          let scrollTop = 0
          try {
            scrollTop = window.scrollY || documentElement.scrollTop || body.scrollTop
          } catch (err) {
            scrollTop = 0
          }

          const clientTop = documentElement.clientTop || body.clientTop || 0

          entities = {
            ...intersectionEntities.current,
            [anchor]: {
              top,
              coverage: height / window.innerHeight,
              isIntersecting,
              intersectionRatio,
              yPosToDocument: top + scrollTop - clientTop,
            },
          }
          const selected = getSelected({ keys, entities })

          handleIntersectionUpdate({ keys, entities }, selected)
          // Cache intersectors
          intersectorsKeys.current = keys
          intersectionEntities.current = entities
        }
      },
      [handleIntersectionUpdate]
    ),
  }
}
