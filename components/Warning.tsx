import { useTheme } from '@emotion/react'

export type WarningProps = {}

const Warning = (props: WarningProps) => {
  const theme = useTheme()
  return (
    <div css={{ gridColumn: '1/-1' }}>
      <p
        css={{
          fontSize: 18,
          textAlign: 'center',
          backgroundColor: theme.colors.red[50],
          padding: '16px 16px',
          borderRadius: 8,
          border: `1px solid ${theme.colors.red[500]}`,
          color: theme.colors.red[700],
          fontWeight: 500,
        }}
      >
        We're still in beta! If you want to signin, please wait a few more days!!
      </p>
    </div>
  )
}

export default Warning
