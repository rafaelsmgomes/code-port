import { BtnPrimary } from '../UI/Buttons'
import { Badge, Copy } from '../UI/Typography'

export type LandingCardProps = {}

const LandingPreview = (props: LandingCardProps) => {
  return (
    <div
      css={(t) => ({
        padding: '96px 0',
        gridColumn: 'start / end',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      })}
    >
      <div css={{ marginBottom: 48, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div
          css={(t) => ({
            margin: '0 auto',
            display: 'inline-block',
            backgroundColor: t.colors.primary[50],
            padding: '4px 10px',
            borderRadius: 16,
            fontSize: 14,
            marginBottom: 22,
          })}
        >
          <Badge>New feature</Badge>
          <span>Check out the team dashboard</span>
        </div>
        <h1 css={{ fontSize: 60, fontFamily: 'Inter', fontWeight: 600, lineHeight: '72px', marginBottom: 24 }}>
          Beautiful analytics to grow smarter
        </h1>
        <Copy
          css={(t) => ({
            width: 768,
            textAlign: 'center',
            fontSize: 20,
            color: t.colors.gray[500],
            fontWeight: 400,
          })}
        >
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted
          by over 4,000 startups.
        </Copy>
      </div>
      <BtnPrimary>Sign Up</BtnPrimary>
    </div>
  )
}

export default LandingPreview
