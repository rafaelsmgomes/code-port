import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'

export const PrimaryBtnLg = styled.button(({ theme }) => ({
  display: 'flex',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  padding: '10px 18px',
  color: '#fff',
  lineHeight: 1.5,
  backgroundColor: theme.colors.primary[600],
  border: `1px solid ${theme.colors.primary[600]}`,
  borderRadius: 4,
  cursor: 'pointer',
  fontSize: 16,
  fontFamily: 'Geometria',
  fontWeight: 500,
  marginBottom: '2rem',
  ':hover': {
    backgroundColor: theme.colors.primary[700],
    border: `1px solid ${theme.colors.primary[700]}`,
  },
  ':disabled': {
    backgroundColor: theme.colors.gray[500],
    borderColor: theme.colors.gray[500],
    cursor: 'not-allowed',
  },
}))

export const BtnPrimary = styled.button(({ theme }) => ({
  display: 'flex',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  padding: '10px 18px',
  color: '#fff',
  lineHeight: 1.5,
  backgroundColor: theme.colors.primary[600],
  border: `1px solid ${theme.colors.primary[600]}`,
  borderRadius: 4,
  cursor: 'pointer',
  fontSize: 16,
  fontFamily: 'Geometria',
  fontWeight: 400,
  ':hover': {
    backgroundColor: theme.colors.primary[700],
    border: `1px solid ${theme.colors.primary[700]}`,
  },
  ':disabled': {
    backgroundColor: theme.colors.gray[500],
    borderColor: theme.colors.gray[500],
    cursor: 'not-allowed',
  },
}))

export const BtnSecondary = styled.button(({ theme }) => ({
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  padding: '10px 18px',
  color: theme.colors.gray[700],
  lineHeight: 1.5,
  backgroundColor: theme.colors.base.white,
  border: `1px solid ${theme.colors.gray[300]}`,
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: 16,
  fontFamily: 'Geometria',
  fontWeight: 400,
  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
  ':hover': {
    backgroundColor: theme.colors.gray[50],
  },
  ':disabled': {
    backgroundColor: theme.colors.gray[500],
    borderColor: theme.colors.gray[500],
    cursor: 'not-allowed',
  },
  ':active': {},
}))

export const BtnSmSec = styled.button(({ theme }) => ({
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  padding: '6px 12px',
  color: theme.colors.gray[700],
  lineHeight: 1.5,
  backgroundColor: theme.colors.base.white,
  border: `1px solid ${theme.colors.gray[300]}`,
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: 14,
  fontFamily: 'Geometria',
  fontWeight: 400,
  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
  ':hover': {
    backgroundColor: theme.colors.gray[50],
  },
  ':disabled': {
    backgroundColor: theme.colors.gray[500],
    borderColor: theme.colors.gray[500],
    cursor: 'not-allowed',
  },
  ':active': {},
}))

export const LinkButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  fontFamily: 'Geometria',
  backgroundColor: 'transparent',
  backgroundRepeat: 'no-repeat',
  border: 'none',
  cursor: 'pointer',
  color: theme.colors.gray[500],
  fontSize: 16,
  lineHeight: 1,
  ':hover': {
    color: theme.colors.gray[700],
    fill: theme.colors.gray[700],
    stroke: theme.colors.gray[700],
  },

  '> *': {
    marginRight: 0,
    fontSize: 'inherit',
    lineHeight: 1,
  },
  '> *:not(:last-child)': {
    marginRight: 12,
    fontSize: 'inherit',
    flexShrink: 0,
    flexGrow: 0,
    fill: theme.colors.gray[500],
  },
}))

export const SocialBtn = styled.button(({ theme }) => ({
  display: 'flex',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  padding: '10px 18px',
  color: theme.colors.gray[700],
  lineHeight: 1.5,
  backgroundColor: theme.colors.base.white,
  border: `1px solid ${theme.colors.gray[300]}`,
  borderRadius: 4,
  cursor: 'pointer',
  fontSize: 16,
  fontFamily: 'Geometria',
  boxShadow: '0px 1px 2px #1018280D',
  fontWeight: 500,
  marginBottom: '2rem',
  ':hover': {
    backgroundColor: theme.colors.gray[100],
  },
  ':disabled': {
    backgroundColor: theme.colors.gray[500],
    borderColor: theme.colors.gray[500],
    cursor: 'not-allowed',
  },
}))
