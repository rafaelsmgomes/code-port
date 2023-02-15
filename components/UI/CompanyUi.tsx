import styled from '@emotion/styled'

export const Anchor = styled.section(({ theme }) => ({
  gridColumn: 'sidebar/ end',
  paddingLeft: theme.grid.gap,
  paddingTop: 32,
  display: 'grid',
  gridTemplateColumns: `repeat(8, 1fr)`,
  columnGap: theme.grid.gap,
  gridRowGap: 16,
  gridAutoRows: 'min-content',
}))
