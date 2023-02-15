import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

// export const BaseGrid = styled.div(({ theme }) => ({
//   position: 'relative',
// }))

export const BaseGrid = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`container mx-auto ${className}`}>{children}</div>
)

export const Box = styled.div(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: 8,
  fontSize: 16,
  border: '1px solid #EAECF0',
  padding: 24,
  gridColumn: '1 / -1',
  marginBottom: 16,

  boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
}))

export const MainSection = styled.section(({ theme }) => ({
  gridColumn: 'start/ end',
  marginLeft: -theme.grid.gap,
  paddingLeft: theme.grid.gap,
  paddingTop: 32,
  // display: 'grid',
  // gridTemplateColumns: `repeat(8, 1fr)`,
  // columnGap: theme.grid.gutter,
  // gridRowGap: 16,
  // gridAutoRows: 'min-content',
  // backgroundColor: theme.colors.base.white,
}))
export const SubSection = styled.section(({ theme }) => ({
  marginLeft: -theme.grid.gap,
  paddingLeft: theme.grid.gap,
  display: 'grid',
  gridTemplateColumns: `repeat(8, 1fr)`,
  columnGap: theme.grid.gap,
  gridRowGap: 16,
  gridAutoRows: 'min-content',
  gridColumn: '1/-1',
  // backgroundColor: theme.colors.base.white,
}))
