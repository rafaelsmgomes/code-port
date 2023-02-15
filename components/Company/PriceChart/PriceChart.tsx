import { TypeDefinitionNode } from 'graphql'
import { GetPricesQuery, useGetPricesQuery } from '../../../graphql/generated/graphql-operations'
import { PriceChartWithData } from './PriceChartWithData'
import { ParentSize } from '@visx/responsive'
import { useMemo } from 'react'
import { HistoricalType } from '../../../graphql/generated/resolvers-types'

export type GetPriceChartWithVisxProps = {
  symbol: string
}

export const sortPricesArr = (data: HistoricalType[]) =>
  data
    .map((el) => ({ close: el.close, date: new Date(el.date) }))
    .sort((a, b) => {
      if (a.date < b.date) return -1
      return 1
    })

export type SortedPricesArr = ReturnType<typeof sortPricesArr>

const PriceChart = ({ symbol }: GetPriceChartWithVisxProps) => {
  const { data, error, loading } = useGetPricesQuery({ variables: { symbol } })

  if (error) return <h1>Could not load resource!!</h1>
  if (!data || loading) return <h1>Loading...</h1>
  const { historical } = data.prices

  const pricesArr = sortPricesArr(historical)

  return (
    <ParentSize>
      {({ width, height }) => <PriceChartWithData data={pricesArr} width={width} height={height} />}
    </ParentSize>
  )
}

export default PriceChart
