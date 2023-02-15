import { Box } from '../UI/Grid'
import { ItemHeader } from '../UI/Typography'

export type LandingCardProps = {}

const LandingCard = (props: LandingCardProps) => {
  return (
    <div css={{ gridColumn: 'start/end', paddingTop: 32, position: 'relative' }}>
      <img src='/svgs/line_pattern.svg' alt='' css={{ position: 'absolute', bottom: -50, right: -20 }} />
      <img
        src='/svgs/line_pattern.svg'
        alt=''
        css={{ position: 'absolute', top: 300, left: -20, objectFit: 'cover', width: 100, height: 400 }}
      />
      <div
        css={(t) => ({
          backgroundColor: t.colors.primary[700],
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '96px 0px 192px',

          background: `linear-gradient(26.57deg, ${t.colors.primary[700]} 8.33%, ${t.colors.primary[600]} 85%)`,
          borderRadius: '24px',
        })}
      >
        <div css={{ marginBottom: 24, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <h1
            css={(t) => ({
              fontFamily: 'Inter',
              fontWeight: 600,
              color: t.colors.base.white,
              fontSize: 72,
              lineHeight: '90px',
            })}
          >
            Analyse your stocks.
          </h1>
          <h1
            css={(t) => ({
              fontFamily: 'Inter',
              fontWeight: 600,
              color: t.colors.primary[200],
              fontSize: 72,
              lineHeight: '90px',
            })}
          >
            Smarter.
          </h1>
        </div>
        <p
          css={(t) => ({
            fontSize: 20,
            width: 768,
            color: t.colors.primary[200],
            textAlign: 'center',
            marginBottom: 48,
          })}
        >
          Powerfull descriptive visualizations to help you analise and manage your investments. Find a stock your
          interested in an look through our tools to get your own conclusions on their business.
        </p>
      </div>
      <Box css={{ position: 'relative', backgroundColor: 'white', width: '75%', margin: '0 auto', marginTop: -75 }}>
        <ItemHeader>Financials over time</ItemHeader>
        <div css={{ height: 350 }}></div>
      </Box>
    </div>
  )
}

export default LandingCard
