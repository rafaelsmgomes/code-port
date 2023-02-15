import React, { CSSProperties, useCallback, useMemo } from 'react'
import { defaultStyles, TooltipWithBounds, Tooltip, useTooltip, useTooltipInPortal } from '@visx/tooltip'
import { timeFormat } from 'd3-time-format'
import { bisector, extent, max } from 'd3-array'
import { scaleTime, scaleLinear } from '@visx/scale'
import { localPoint } from '@visx/event'
import { GridColumns, GridRows } from '@visx/grid'
import { AreaClosed, Bar, Line } from '@visx/shape'
import { LinearGradient } from '@visx/gradient'
import { useTheme } from '@emotion/react'
import { curveMonotoneX } from '@visx/curve'
import { AxisLeft, AxisBottom } from '@visx/axis'
import { SortedPricesArr } from './PriceChart'
import { useInView } from 'react-intersection-observer'
import { useRootMargin } from '../../../hooks/useRootMargin'
import { useAtom } from 'jotai'
import { sidebarStateAtom } from '../sidebar/Sidebar'

export const background = '#3b6978'
export const background2 = '#204051'
export const accentColor = '#edffea'
export const accentColorDark = '#75daad'

const tooltipStyles: CSSProperties = {
  ...defaultStyles,
  background: 'blue',
  border: '1px solid white',
  color: 'white',
}

const formatDate = timeFormat('%b %d, %y')

const getDate = (d: SortedPricesArr[number]) => d.date
const getStockValue = (d: SortedPricesArr[number]) => d.close
const bisectDate = bisector<SortedPricesArr[number], Date>((d) => d.date).left

type PriceChartWithDataProps = {
  data: SortedPricesArr
  width: number
  height: number
  margin?: { top: number; left: number; right: number; bottom: number }
}
let prevYPos = 0
const setScrollDirection = () => {
  let direction: 'up' | 'down' = 'up'

  console.log(window.scrollY)
  console.log(prevYPos)
  if (window.scrollY > prevYPos) {
    direction = 'down'
  } else {
    direction = 'up'
  }
  prevYPos = window.scrollY
  console.log({ direction })
  console.log({ prevYPos })
}

export const PriceChartWithData = ({
  data,
  width,
  height,
  margin = { top: 20, left: 50, bottom: 50, right: 0 },
}: PriceChartWithDataProps) => {
  const theme = useTheme()
  const rootMargin = useRootMargin()
  const [_, setSelected] = useAtom(sidebarStateAtom)
  const { ref: viewRef } = useInView({
    threshold: 0,
    rootMargin,
    onChange: (inView, e) => {
      // if (inView) setSelected('')
    },
  })
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const {
    hideTooltip,
    showTooltip,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<SortedPricesArr[number]>()
  const { containerRef } = useTooltipInPortal()

  const dateScale = useMemo(
    () =>
      scaleTime({
        range: [margin.left, innerWidth + margin.left],
        domain: extent(data, getDate) as [Date, Date],
      }),
    [innerWidth, margin.left, data]
  )
  const priceScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight + margin.top, margin.top],
        domain: [0, max(data, getStockValue) || 0],
        nice: true,
      }),
    [margin.top, innerHeight, data]
  )

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
    [showTooltip, data, dateScale, priceScale]
  )

  return (
    <div
      css={{
        position: 'relative',
        backgroundColor: theme.colors.base.white,
        borderRadius: 8,
      }}
      ref={viewRef}
    >
      <svg width={width} height={height} ref={containerRef} css={{ zIndex: 1, position: 'relative' }}>
        <LinearGradient
          id='area-background-gradient'
          from={theme.colors.primary[100]}
          to={theme.colors.base.white}
          toOpacity={0.5}
        />
        <LinearGradient
          id='area-gradient'
          from={theme.colors.primary[200]}
          to={theme.colors.primary[200]}
          toOpacity={0.1}
        />
        <GridRows
          scale={priceScale}
          width={innerWidth}
          left={margin.left}
          css={{ strokeDasharray: '1,3', color: theme.colors.primary[900], strokeOpacity: 0, pointerEvents: 'none' }}
        />
        <GridColumns
          top={margin.top}
          scale={dateScale}
          height={innerHeight}
          css={{
            strokeDasharray: '1,3',
            color: 'red',
            strokeOpacity: 1,
            pointerEvents: 'none',
          }}
        />
        <AxisLeft
          scale={priceScale}
          left={margin.left}
          hideTicks
          hideAxisLine
          tickComponent={({ x, y, formattedValue, ...props }) => {
            return (
              <text x={x} y={y} {...props} css={{ fontFamily: 'Geometria', fontSize: 13 }}>
                {formattedValue}
              </text>
            )
          }}
        />
        <AxisBottom
          scale={dateScale}
          top={margin.top + innerHeight}
          hideTicks
          hideAxisLine
          tickComponent={({ formattedValue, ...props }) => (
            <text {...props} css={{ fontFamily: 'Geometria', fontSize: 13 }}>
              {formattedValue}
            </text>
          )}
        />
        <AreaClosed<SortedPricesArr[number]>
          data={data}
          x={(d) => dateScale(getDate(d)) ?? 0}
          y={(d) => priceScale(getStockValue(d)) ?? 0}
          yScale={priceScale}
          strokeWidth={1}
          // stroke="url(#area-gradient)"
          fill='url(#area-background-gradient)'
          stroke={theme.colors.primary[900]}
          // fill="transparent"
          curve={curveMonotoneX}
        />

        <Bar
          x={margin.left}
          y={margin.top}
          width={innerWidth}
          height={innerHeight}
          fill='transparent'
          opacity={0}
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
              stroke={theme.colors.primary[900]}
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
              fill={'red'}
              stroke='white'
              strokeWidth={2}
              pointerEvents='none'
            />
          </g>
        )}
      </svg>
      {tooltipData && (
        <div>
          <TooltipWithBounds
            key={Math.random()}
            top={tooltipTop - 12}
            left={tooltipLeft + 12}
            style={tooltipStyles}
          >{`$${getStockValue(tooltipData).toFixed(2)}`}</TooltipWithBounds>
          <Tooltip
            top={innerHeight + margin.top - 14}
            left={tooltipLeft}
            style={{
              ...defaultStyles,
              minWidth: 72,
              textAlign: 'center',
              transform: 'translateX(-50%)',
            }}
          >
            {formatDate(getDate(tooltipData))}
          </Tooltip>
        </div>
      )}
    </div>
  )
}
