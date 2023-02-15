import { useTheme } from '@emotion/react'
import { LinearGradient } from '@visx/gradient'
import ParentSize from '@visx/responsive/lib/components/ParentSizeModern'
import { scaleLinear } from '@visx/scale'
import { Arc } from '@visx/shape'
import { defaultStyles } from '@visx/tooltip'
import { useMemo } from 'react'
import { GetDividendDataQuery, useGetDividendDataQuery } from '../../../graphql/generated/graphql-operations'

export type RadialBarProps = {
  data: GetDividendDataQuery
  width: number
  height: number
  margin?: { top: number; left: number; right: number; bottom: number }
}
const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: 'rgba(0,0,0,0.9)',
  color: 'white',
}

const defaultMargin = { top: 0, right: 0, bottom: 0, left: 0 }
const RadialBarsWithData = ({ height, margin = defaultMargin, width, data }: RadialBarProps) => {
  const { colors } = useTheme()
  const { keyMetricsTTM } = data
  const { PI } = Math

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom
  const centerX = innerWidth / 2
  const centerY = innerHeight / 2

  const scale = useMemo(
    () =>
      scaleLinear({
        range: [0, 2 * PI],
        domain: [0, 1],
      }),
    [PI]
  )

  return (
    <div>
      <svg width={width} height={height} css={{ zzzoutline: '1px solid gold' }}>
        <g css={{ transform: `translate(${centerX}px,${centerY}px)`, zzzoutline: '1px solid gold' }}>
          <Arc
            cornerRadius={20}
            innerRadius={innerHeight / 2 - 22}
            outerRadius={innerHeight / 2 - 10}
            startAngle={0}
            endAngle={scale(1)}
            key={'base'}
            fill={colors.primary[300]}
            opacity={0.5}
          />
          <Arc
            cornerRadius={20}
            innerRadius={innerHeight / 2 - 22}
            outerRadius={innerHeight / 2 - 10}
            startAngle={0}
            endAngle={scale(keyMetricsTTM.payoutRatioTTM ?? 0)}
            key={'payout'}
            fill={(keyMetricsTTM.payoutRatioTTM ?? 0) > 1 ? colors.red[900] : colors.primary[800]}
          />
        </g>
        <text
          x={width / 2}
          y={height / 2 + 22}
          css={(t) => ({
            fill: (keyMetricsTTM.payoutRatioTTM ?? 0) > 1 ? t.colors.red[800] : t.colors.gray[900],
            fontSize: 28,
            textAnchor: 'middle',
            fontWeight: 500,
          })}
        >
          {((keyMetricsTTM.payoutRatioTTM ?? 0) * 100).toFixed(2)}%
        </text>
        <text
          x={width / 2}
          y={height / 2 - 12}
          css={(t) => ({ fill: t.colors.gray[500], fontSize: 14, textAnchor: 'middle', fontWeight: 500 })}
        >
          Payout Ratio
        </text>
      </svg>
    </div>
  )
}

const RadialBars = ({ symbol }: { symbol: string }) => {
  const { data, loading, error } = useGetDividendDataQuery({ variables: { symbol } })

  if (loading || !data) return <></>
  if (error) {
    console.log(error)
    return <></>
  }

  return (
    <ParentSize>{({ width, height }) => <RadialBarsWithData data={data} width={width} height={height} />}</ParentSize>
  )
}

export default RadialBars
