import styled from '@emotion/styled'
import { ParentSize } from '@visx/responsive'
import numeral from 'numeral'
import { useMemo } from 'react'

import { useGetProfileDataQuery, GetProfileDataQuery } from '../../../graphql/generated/graphql-operations'
import { formatTimeToDash } from '../../../graphql/utils'
import { inMillions } from '../../../utils/helpers'
import { Box } from '../../UI/Grid'
import { Badge, Copy, LgCopy, TextTooltip } from '../../UI/Typography'
import DividendBars from '../DividendBars/DividendBars'
import { sortPricesArr } from '../PriceChart/PriceChart'
import RadialBars from '../RadialBar/RadialBar'
import { COMPANY_PROFILE_OVERVIEW } from '../sidebar/constants'
import CompanyDescription from './CompanyDescription'
import OneYearChart from './OneYearChart'

export type CompanyProfileProps = {
  symbol: string
}

type CompanyProfileDataProps = {
  symbol: string
  data: GetProfileDataQuery
}

const CompanyProfile = ({ symbol }: CompanyProfileProps) => {
  const date = new Date()

  date.setFullYear(date.getFullYear() - 2)
  const fromDate = formatTimeToDash(date)

  const { data, loading, error } = useGetProfileDataQuery({ variables: { symbol, fromDate } })

  if (loading || !data) return <></>
  if (error) {
    console.log(error)
    return <></>
  }

  return <CompanyProfileWithData data={data} symbol={symbol} />
}

const CompanyProfileWithData = ({ data, symbol }: CompanyProfileDataProps) => {
  const { companyProfile, metrics, incomeStatement, quote, ev } = data
  const { historical } = data.prices

  const sortedPricesArr = useMemo(() => sortPricesArr(historical), [historical])
  const [lowRange, highRange] = companyProfile.range.split('-')

  return (
    <div id={COMPANY_PROFILE_OVERVIEW}>
      <Box css={{ gridColumn: '1/-1', padding: 0, overflow: 'hidden' }}>
        <div css={{ width: '100%', height: 250 }}>
          <ParentSize>
            {({ height, width }) => <OneYearChart data={sortedPricesArr} height={height} width={width} />}
          </ParentSize>
        </div>
        <HeaderGroup>
          <HeaderSymbol>
            <DisplayHeaderSymbol>{companyProfile.symbol}</DisplayHeaderSymbol>
          </HeaderSymbol>
          <div>
            <LgCopy css={{ fontWeight: 500, fontSize: 32, marginBottom: 4, marginTop: 0 }}>
              {companyProfile.companyName}
            </LgCopy>
            <Copy css={{ fontSize: 13 }}>
              {companyProfile.country} / {companyProfile.industry} / {companyProfile.sector}
            </Copy>
          </div>
          <div css={{ marginLeft: 'auto', padding: '0 14px' }}>
            <Copy css={{ fontSize: 14 }}>Latest price</Copy>
            <div css={{ display: 'flex', alignItems: 'center' }}>
              <Copy css={(t) => ({ fontSize: 26, color: t.colors.primary[700], fontWeight: 500, marginRight: 4 })}>
                $ {quote.price.toFixed(2)}
              </Copy>
              <div css={{ display: 'flex' }}>
                <Badge css={{ marginRight: 4, position: 'relative', ':hover': { span: { display: 'block' } } }}>
                  {((quote.price / Number(highRange) - 1) * 100).toFixed(1)}%<TextTooltip>From 1 year high</TextTooltip>
                </Badge>
              </div>
            </div>
            <Copy css={{ fontSize: 14 }}>
              1 year range:{' '}
              <span css={(t) => ({ color: t.colors.primary[900], fontWeight: 500 })}>{companyProfile.range}</span>
            </Copy>
          </div>
        </HeaderGroup>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            padding: '0 20px 16px',
            gap: 16,
          }}
        >
          <BoardCont css={{}}>
            <BoardHeader>Market Value</BoardHeader>
            <RatioEle title='Market Cap' ratio={`${numeral(inMillions(metrics.marketCapTTM ?? 0)).format('0,0')}M`} />
            <RatioEle
              title='Cash and Equivalents'
              ratio={`- ${numeral(inMillions(ev.minusCashAndCashEquivalents ?? 0)).format('0,0')}M`}
            />
            <RatioEle title='Total Debt' ratio={`+ ${numeral(inMillions(ev.addTotalDebt ?? 0)).format('0,0')}M`} />
            <hr
              css={{
                display: 'block',
                height: '1px',
                border: '0',
                borderTop: '1px solid #ccc',
                margin: '16px 0',
                padding: '0',
              }}
            />
            <RatioEle
              title='Enterprise Value'
              ratio={`${numeral(inMillions(metrics.enterpriseValueTTM ?? 0)).format('0,0')}M`}
            />
          </BoardCont>
          <BoardCont css={{ gridArea: '1/2 ' }}>
            <BoardHeader>Revenue</BoardHeader>
            <RatioEle title='Revenue/Share' ratio={`${metrics.revenuePerShareTTM?.toFixed(2)}`} />
            <RatioEle title='Net Income/Share' ratio={`${metrics.netIncomePerShareTTM?.toFixed(2)}`} />
            <RatioEle title='Op. Cash Flow/Share' ratio={`${metrics.operatingCashFlowPerShareTTM?.toFixed(2)}`} />
            <RatioEle title='Free Cash Flow/Share' ratio={`${metrics.freeCashFlowPerShareTTM?.toFixed(2)}`} />
            <RatioEle title='EPS' ratio={incomeStatement[0].eps.toFixed(2)} />
            <RatioEle title='EPS diluted' ratio={incomeStatement[0].epsdiluted.toFixed(2)} />
          </BoardCont>
          <BoardCont css={{ gridArea: '' }}>
            <BoardHeader>Assets per share</BoardHeader>
            <RatioEle title='Book Value/Share' ratio={`${metrics.bookValuePerShareTTM?.toFixed(2)}`} />
            <RatioEle title='Tangible Book Value/Share' ratio={`${metrics.tangibleBookValuePerShareTTM?.toFixed(2)}`} />
            <RatioEle title='Cash/Share' ratio={`${metrics.cashPerShareTTM?.toFixed(2)}`} />
          </BoardCont>
          <BoardCont>
            <BoardHeader>Price Ratios</BoardHeader>
            <RatioEle title='P/E' ratio={`${metrics.peRatioTTM?.toFixed(2)}`} />
            <RatioEle title='Price/Sales' ratio={`${metrics.priceToSalesRatioTTM?.toFixed(2)}`} />
            <RatioEle title='P/Book' ratio={`${metrics.pbRatioTTM?.toFixed(2)}`} />
            <RatioEle title='P/Tangible Book V.' ratio={`${metrics.ptbRatioTTM?.toFixed(2)}`} />
          </BoardCont>
          <BoardCont css={{ gridArea: '2/1' }}>
            <BoardHeader>Enterprise Value Ratios</BoardHeader>
            <RatioEle title='EV/Sales' ratio={`${metrics.evToSalesTTM?.toFixed(2)}`} />
            <RatioEle title='EV/EBITDA' ratio={`${metrics.enterpriseValueOverEBITDATTM?.toFixed(2)}`} />
            <RatioEle title='EV/Op. Cash Flow' ratio={`${metrics.evToOperatingCashFlowTTM?.toFixed(2)}`} />
            <RatioEle title='EV/Free Cash Flow' ratio={`${metrics.evToFreeCashFlowTTM?.toFixed(2)}`} />
          </BoardCont>
          <BoardCont css={{ gridRow: 'span 2' }}>
            <BoardHeader>Shareholder Profitability</BoardHeader>
            <RatioEle title='Earnings Yield' ratio={`${metrics.earningsYieldTTM?.toFixed(2)}`} />
            <RatioEle title='Free Cash Flow Yield' ratio={`${metrics.freeCashFlowYieldTTM?.toFixed(2)}`} />
            <RatioEle title='Income Quality' ratio={`${metrics.incomeQualityTTM?.toFixed(2)}`} />
            <RatioEle title='Dividend/Share' ratio={`${metrics.dividendPerShareTTM?.toFixed(2)}`} />
            <RatioEle title='Dividend Yield' ratio={`${metrics.dividendYieldPercentageTTM?.toFixed(2)}`} />
            <div css={{ height: 175, width: '100%' }}>
              {/* <DividendBars symbol={symbol} /> */}
              <RadialBars symbol={symbol} />
            </div>
          </BoardCont>
          <BoardCont css={{}}>
            <BoardHeader>Dividends</BoardHeader>
            <div css={{ height: 200 }}>
              <DividendBars symbol={symbol} />
            </div>
          </BoardCont>
        </div>
      </Box>
      <CompanyDescription companyProfile={companyProfile} />
    </div>
  )
}

const HeaderGroup = styled.div({
  position: 'relative',
  padding: 14,
  color: 'white',
  display: 'flex',
  alignItems: 'start',
  marginTop: 0,
})

const HeaderSymbol = styled.div(({ theme: t }) => ({
  display: 'flex',
  position: 'relative',
  backgroundColor: t.colors.primary[50],
  borderRadius: 16,
  minWidth: 120,
  padding: '0 12px',
  height: 120,
  zIndex: 10,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 16,
  marginTop: -50,
}))

const DisplayHeaderSymbol = styled(Copy)(({ theme: t }) => ({
  fontSize: 28,
  fontWeight: 400,
  fontFamily: 'Inter',
  display: 'block',
  color: t.colors.primary[600],
}))

const RatioEle = ({
  title,
  ratio,
  className,
}: {
  title: string
  ratio?: number | string | null
  className?: string
}) => {
  if (typeof ratio === 'undefined') return <></>

  return (
    <div
      css={(t) => ({
        display: 'grid',
        gridTemplateColumns: '75% 25%',
        fontWeight: 500,
        fontSize: 12,
        marginBottom: 8,
      })}
      className={className}
    >
      <p
        css={(t) => ({
          justifyContent: 'center',
          color: t.colors.gray[900],

          verticalAlign: 'bottom',
          fontWeight: 400,
        })}
      >
        {title}
      </p>
      <p
        css={(t) => ({
          color: t.colors.primary[600],
          justifySelf: 'end',
          fontWeight: 500,
          fontSize: 13,
        })}
      >
        {ratio}
      </p>
    </div>
  )
}
const BoardCont = styled.div(({ theme: t }) => ({
  padding: 10,
  paddingBottom: 5,
  borderRadius: 8,
  border: `1px solid ${t.colors.gray[200]}`,
  // backgroundColor: t.colors.primary[50],
  boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
}))

const BoardHeader = styled.h2(({ theme: t }) => ({
  color: t.colors.gray[900],
  fontSize: 16,
  marginBottom: 12,
  fontWeight: 500,
}))

export default CompanyProfile
