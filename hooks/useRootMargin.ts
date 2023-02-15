import { useTheme } from '@emotion/react'
import { usePageHeight } from './usePageHeight'

export const useRootMargin = (num: number = 64) => {
  const pageHeight = usePageHeight()
  const theme = useTheme()

  return `${-(theme.headerHeight + num)}px 0px ${-(pageHeight - theme.headerHeight - num - 1)}px`
}
