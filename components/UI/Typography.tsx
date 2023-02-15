import styled from '@emotion/styled'

export const DisplaySBd = styled.h3(({ theme }) => ({
  fontFamily: 'Inter, Roboto, Avenir',
  fontSize: 30,
  lineHeight: 1.3,
  fontWeight: 500,
  color: theme.colors.gray[900],
}))

export const LgCopy = styled.p(({ theme }) => ({
  fontFamily: 'Geometria',
  fontWeight: 'normal',
  fontSize: 26,
  color: theme.colors.gray[700],
}))

export const Copy = styled.p(({ theme }) => ({
  fontFamily: 'Geometria',
  fontWeight: 'normal',
  fontSize: 16,
  lineHeight: 1.5,
  color: theme.colors.gray[500],
}))

export const TextSm = styled.p(({ theme }) => ({
  fontFamily: 'Geometria',
  fontSize: 14,
  lineHeight: '20px',
  fontWeight: 400,
  color: theme.colors.gray[700],
}))

export const ItemHeader = styled.h2(({ theme }) => ({
  fontFamily: 'Geometria',
  fontWeight: 500,
  fontSize: 22,
  lineHeight: 1.5,
  color: theme.colors.gray[900],
}))

export const ItemDisplay = styled.p(({ theme }) => ({
  fontFamily: 'Geometria',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 1.5,
  color: theme.colors.gray[500],
}))

export const ItemStats = styled.p(({ theme }) => ({
  fontFamily: 'Geometria',
  fontWeight: 600,
  fontSize: 14,
  color: theme.colors.gray[700],
}))

export const Badge = styled.span(({ theme }) => ({
  padding: '2px 8px',
  display: 'inline-block',
  borderRadius: 16,
  backgroundColor: theme.colors.purple[50],
  color: theme.colors.purple[700],
  fontWeight: 500,
  fontSize: 12,
  textAlign: 'center',
}))

export const TextTooltip = styled.span(({ theme: t }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translate(-50%,-150%)',
  width: 'max-content',
  color: 'white',
  backgroundColor: t.colors.gray[900],
  padding: 8,
  borderRadius: 4,
  display: 'none',
  ':after': {
    position: 'absolute',
    left: '50%',
    top: '100%',
    transform: 'translateX(-50%)',
    content: '""',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: `${t.colors.gray[900]} transparent transparent transparent`,
  },
}))
