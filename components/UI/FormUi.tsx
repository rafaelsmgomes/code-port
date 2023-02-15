import styled from '@emotion/styled'

export const Input = styled.input(({ theme }) => ({
  padding: '8px 14px',
  gap: 8,
  background: '#FFFFFF',
  border: '1px solid #D0D5DD',

  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
  borderRadius: '8px',
  fontSize: 16,
  lineHeight: 1.5,
  transition: 'all .1s ease-in',
  ':active, :focus': {
    outline: `1px solid ${theme.colors.primary[300]}`,
    border: `1px solid ${theme.colors.primary[300]}`,
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF',
  },
  '::placeholder': {
    color: theme.colors.gray[500],
  },
}))
