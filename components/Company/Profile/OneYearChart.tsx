import { scaleLinear, scaleTime } from '@visx/scale'
import { defaultStyles, Tooltip, TooltipWithBounds, useTooltip, useTooltipInPortal } from '@visx/tooltip'
import { CSSProperties, useCallback, useMemo } from 'react'
import { SortedPricesArr } from '../PriceChart/PriceChart'
import { bisector, extent, max, min } from 'd3-array'
import { LinearGradient } from '@visx/gradient'
import { emotionTheme } from '../../../theme/theme'
import { AreaClosed, Bar, Line, LinePath } from '@visx/shape'
import { curveMonotoneX } from '@visx/curve'
import { localPoint } from '@visx/event'
import { formatTimeToDash } from '../../../graphql/utils'

export type OneYearChartProps = {
  data: SortedPricesArr
  width: number
  height: number
  margin?: { top: number; left: number; right: number; bottom: number }
}

const getDate = (d: SortedPricesArr[number]) => d.date
const getStockValue = (d: SortedPricesArr[number]) => d.close
const bisectDate = bisector<SortedPricesArr[number], Date>((d) => d.date).left

const OneYearChart = ({
  data,
  height,
  width,
  margin = { top: 0, left: 0, bottom: 0, right: 2 },
}: OneYearChartProps) => {
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const dateScale = useMemo(
    () => scaleTime({ range: [margin.left, innerWidth + margin.left], domain: extent(data, getDate) as [Date, Date] }),
    [innerWidth, margin.left, data]
  )

  const priceScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight + margin.top, margin.top],
        domain: [min(data, getStockValue)! * 0.98 || 0, max(data, getStockValue)! * 1.02 || 0],
      }),
    [margin, innerHeight, data]
  )

  const {
    hideTooltip,
    showTooltip,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<SortedPricesArr[number]>({
    tooltipOpen: true,
  })
  const { containerRef } = useTooltipInPortal({})
  const handleTooltip = useCallback(
    (e: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
      const { x } = localPoint(e) || { x: 0 }
      const x0 = dateScale.invert(x)
      const index = bisectDate(data, x0, 1)
      const d0 = data[index - 1]
      const d1 = data[index]
      let d = d0
      if (d1 && getDate(d1)) {
        d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0
      }
      showTooltip({
        tooltipData: d,
        tooltipLeft: x,
        tooltipTop: priceScale(getStockValue(d)),
      })
    },
    [dateScale, data, showTooltip, priceScale]
  )

  return (
    <div
      css={(t) => ({
        position: 'relative',
        backgroundColor: t.colors.base.black,
        overflow: 'hidden',
      })}
    >
      <img
        src='/images/mesh-bg.png'
        alt=''
        css={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover', width: '100%', height: '100%' }}
      />
      <svg width={width} height={height} ref={containerRef} css={{ zIndex: 1, position: 'relative', marginBottom: -5 }}>
        <LinearGradient
          id='area-gradient'
          from={`${emotionTheme.colors.violet[400]}`}
          to={emotionTheme.colors.violet[400]}
          toOpacity={0.05}
          fromOpacity={0.15}
        />
        <AreaClosed<SortedPricesArr[number]>
          data={data}
          x={(d) => dateScale(getDate(d)) ?? 0}
          y={(d) => priceScale(getStockValue(d)) ?? 0}
          yScale={priceScale}
          stroke={'transparent'}
          fill='url(#area-gradient)'
          strokeWidth={0}
          curve={curveMonotoneX}
        />
        <LinePath<SortedPricesArr[number]>
          data={data}
          x={(d) => dateScale(getDate(d)) ?? 0}
          y={(d) => priceScale(getStockValue(d)) ?? 0}
          // yScale={priceScale}
          stroke={emotionTheme.colors.primary[700]}
          // fill="url(#area-gradient)"
          strokeWidth={2}
          curve={curveMonotoneX}
        />
        <Bar
          x={margin.left}
          y={margin.top}
          width={innerWidth}
          height={innerHeight}
          fill='transparent'
          opacity={0.1}
          rx={14}
          onTouchStart={handleTooltip}
          onTouchMove={handleTooltip}
          onMouseMove={handleTooltip}
          onMouseLeave={() => hideTooltip()}
        />
        {tooltipData && (
          <g>
            <Line
              from={{ x: tooltipLeft, y: margin.top }}
              to={{ x: tooltipLeft, y: innerHeight + margin.top }}
              stroke={emotionTheme.colors.primary[900]}
              strokeWidth={2}
              pointerEvents='none'
              strokeDasharray='5,2'
            />
            <circle
              cx={tooltipLeft}
              cy={tooltipTop + 1}
              r={4}
              fill='black'
              fillOpacity={0.1}
              stroke='black'
              strokeOpacity={1}
              strokeWidth={2}
              pointerEvents='none'
            />
            <circle
              cx={tooltipLeft}
              cy={tooltipTop}
              r={4}
              fill={emotionTheme.colors.violet[900]}
              stroke='white'
              strokeWidth={2}
              pointerEvents='none'
            />
          </g>
        )}
      </svg>
      <div
        css={(t) => ({
          position: 'absolute',
          top: 1,
          left: 14,
          padding: 6,
          color: t.colors.primary[700],
          backgroundColor: t.colors.base.white,
          borderRadius: 4,
          fontSize: 12,
        })}
      >
        Recent 2 year history
      </div>
      {tooltipData && (
        <div>
          <TooltipWithBounds
            key={Math.random()}
            top={15}
            left={tooltipLeft}
            style={{ ...defaultStyles, zIndex: 10, borderRadius: 8, padding: 8 }}
          >
            <div
              css={{
                position: 'relative',
                paddingLeft: 12,
                display: 'flex',
                height: 14,
                alignItems: 'center',

                marginBottom: 8,
                ':before': {
                  width: 4,
                  borderRadius: 8,
                  height: '100%',
                  content: '""',
                  backgroundColor: emotionTheme.colors.primary[600],
                  position: 'absolute',
                  left: 0,
                  top: 0,
                },
              }}
            >
              <span css={{ color: emotionTheme.colors.primary[600] }}>{`$${getStockValue(tooltipData).toFixed(
                2
              )}`}</span>
            </div>
            <p css={(t) => ({ fontSize: 'inherit', color: t.colors.gray[500] })}>
              {formatTimeToDash(getDate(tooltipData))}
            </p>
          </TooltipWithBounds>
          {/* <Tooltip
            top={innerHeight + margin.top - 14}
            left={tooltipLeft}
            style={{
              ...defaultStyles,
              minWidth: 72,
              textAlign: 'center',
              transform: 'translateX(-50%)',
            }}
          >
            {formatTimeToDash(getDate(tooltipData))}
          </Tooltip> */}
        </div>
      )}
    </div>
  )
}

export default OneYearChart
