import { useTheme } from '@emotion/react'
import { LinearGradient } from '@visx/gradient'
import ParentSize from '@visx/responsive/lib/components/ParentSizeModern'
import { scaleLinear, scaleTime } from '@visx/scale'
import { Bar } from '@visx/shape'
import { defaultStyles, useTooltip, useTooltipInPortal } from '@visx/tooltip'
import { extent } from 'd3-array'
import { useMemo } from 'react'
import { GetDividendPerShareQuery, useGetDividendPerShareQuery } from '../../../graphql/generated/graphql-operations'

export type DivBarsProps = {
  data: GetDividendPerShareQuery
  width: number
  height: number
  margin?: { top: number; left: number; right: number; bottom: number }
  animate?: boolean
}
const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: 'rgba(0,0,0,0.9)',
  color: 'white',
}
let tooltipTimeout: number

const defaultMargin = { top: 0, right: 0, bottom: 25, left: 0 }
// TODO- get data that I need to make a pie chart
// DivYield - EPS - Revenue/share -
const DivBarsWithData = ({ animate = true, height, margin = defaultMargin, width, data }: DivBarsProps) => {
  const { colors } = useTheme()
  const { keyMetrics } = data

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom
  const xScale = useMemo(
    () =>
      scaleTime({
        range: [0, innerWidth],
        domain: extent(keyMetrics, (d) => new Date(d.date)) as [Date, Date],
      }),
    [innerWidth, keyMetrics]
  )
  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight, 0],
        domain: [0, Math.max(...keyMetrics.map((d) => d.dividendYield ?? 0))],
      }),
    [innerHeight, keyMetrics]
  )
  const {
    hideTooltip,
    showTooltip,
    tooltipData,
    tooltipOpen,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip({
    tooltipOpen: true,
  })
  const { containerRef } = useTooltipInPortal({})

  return (
    <div ref={containerRef} css={{ outline: '1px solid' }}>
      <svg width={width} height={height}>
        <LinearGradient id='bar-gradient' to={colors.primary[900]} from={colors.primary[600]} fromOpacity={0.8} />
        <g css={{ transform: `translateY(${margin.top}px)` }}>
          {keyMetrics.map((d, i) => {
            return (
              <Bar
                rx={4}
                key={i}
                x={xScale(new Date(d.date!)) + i}
                y={innerHeight - yScale(d.dividendYield ?? 0)}
                width={innerWidth / keyMetrics.length - 10}
                fill={`url(#bar-gradient)`}
                height={yScale(d.dividendYield ?? 0)}
              />
            )
          })}
        </g>
      </svg>
    </div>
  )
}

const DividendBars = ({ symbol, height }: { symbol: string; height?: number }) => {
  const { data, loading, error } = useGetDividendPerShareQuery({ variables: { symbol, limit: 10 } })

  if (loading || !data) return <>Loading</>
  if (error) {
    console.log(error)
    return <>No data</>
  }
  // console.log('div: ', data)

  return <ParentSize>{({ width, height }) => <DivBarsWithData data={data} width={width} height={height} />}</ParentSize>
}

export default DividendBars
