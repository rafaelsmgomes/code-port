import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Cell = styled.td(({ theme }) => ({
  fontSize: 13,
  textAlign: 'center',
  border: `1px solid ${theme.colors.gray[200]}`,
}))

export const Base = styled.div(({ theme }) => ({
  padding: '8px 12px',
  fontWeight: 500,
  fontSize: 13,
}))

export const DateVal = styled(Base)(({ theme }) => ({
  color: theme.colors.base.white,
}))

export const FlowVal = styled(Base)<{ val: number }>(({ val, theme }) => ({
  color: val < 0 ? theme.colors.red[600] : theme.colors.green[700],
}))

export const TableHead = styled.th(({ theme: t }) => ({
  position: 'sticky',
  // top: 60,
  top: 0,
  fontSize: 13,
  fontWeight: 500,
  border: `1px solid`,
  borderColor: t.colors.gray[50],
  borderTop: 'none',
  alignItems: 'center',
}))

export const HeadVal = styled.div(({ theme: t }) => ({
  backgroundColor: t.colors.gray[600],
  color: t.colors.base.white,
  padding: '12px',
  borderBottom: '1px solid white',
  whiteSpace: 'nowrap',
}))

export const HeaderInc = styled(HeadVal)(({ theme: t }) => ({
  backgroundColor: t.colors.green[100],
  color: t.colors.green[900],
}))
