import styles from './Table.module.scss'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { GetTtmFinancialsQuery, useGetTtmFinancialsQuery } from '../../../graphql/generated/graphql-operations'
import numeral from 'numeral'
import { Cell, DateVal, FlowVal, TableHead, HeadVal, HeaderInc } from './TableUi'
import { Box } from '../../UI/Grid'
import { useEffect, useRef } from 'react'

type MergedType = ReturnType<typeof mergeArrays>

const fmtNum = (num: number) => numeral(num / 1000000).format('0,0')

export type TableWithDataProps = {
  // data: GetIncomeStatementQuery['incomeStatement']
  data: GetTtmFinancialsQuery
}
const colHelper = createColumnHelper<MergedType[number]>()
const columns = [
  colHelper.accessor('date', {
    id: 'Date',
    cell: ({ getValue, row }) => {
      // const dateVal = row.date.split('-').slice(0, 2).reverse().join('/')

      const { period } = row.original
      const date = getValue().split('-').slice(0, 2).reverse().join('/')
      const dateVal = period === 'FY' ? date : `TTM ${date}`
      return (
        <DateVal css={(t) => ({ backgroundColor: t.colors.gray[600], color: t.colors.base.white })}>{dateVal}</DateVal>
      )
    },
    header: () => <HeadVal>Year</HeadVal>,
  }),
  colHelper.accessor('revenue', {
    header: () => <HeaderInc>Revenue</HeaderInc>,
    cell: ({ getValue }) => <FlowVal val={getValue()}>{fmtNum(getValue())}</FlowVal>,
  }),
  colHelper.accessor('ebitda', {
    id: 'Ebitda',
    header: () => <HeaderInc>EBITDA</HeaderInc>,
    cell: ({ getValue }) => <FlowVal val={getValue()}>{fmtNum(getValue())}</FlowVal>,
  }),
  colHelper.accessor('depreciationAndAmortization', {
    cell: ({ getValue }) => <FlowVal val={-getValue<number>()}>{fmtNum(getValue())}</FlowVal>,
    header: () => <HeaderInc>D&A</HeaderInc>,
  }),
  colHelper.accessor((row) => row.ebitda - row.depreciationAndAmortization, {
    id: 'EBIT',
    cell: ({ getValue }) => <FlowVal val={getValue()}>{fmtNum(getValue())}</FlowVal>,
    header: () => <HeaderInc>EBIT</HeaderInc>,
  }),
  colHelper.accessor((row) => row.interestIncome - row.interestExpense, {
    id: 'Interest',
    cell: ({ getValue }) => <FlowVal val={getValue<number>()}>{fmtNum(getValue())}</FlowVal>,
    header: () => <HeaderInc>Net Interest</HeaderInc>,
  }),
  colHelper.accessor('incomeTaxExpense', {
    cell: ({ getValue }) => <FlowVal val={-getValue<number>()}>{fmtNum(-getValue<number>())}</FlowVal>,
    header: () => <HeaderInc>Taxes</HeaderInc>,
  }),
  colHelper.accessor('netIncome', {
    id: 'Net Inc',
    cell: ({ getValue }) => <FlowVal val={getValue()}>{fmtNum(getValue())}</FlowVal>,
    header: () => <HeaderInc>Net Inc.</HeaderInc>,
  }),
  colHelper.accessor('totalDebt', {
    header: () => <HeaderInc>Debt</HeaderInc>,
    cell: ({ getValue }) => <FlowVal val={getValue() ?? 0}>{fmtNum(getValue() ?? 0)}</FlowVal>,
  }),
]

const TableWithData = ({ data }: TableWithDataProps) => {
  const merged = mergeArrays(data)
  console.log('🚀 ~ file: Table.tsx ~ line 76 ~ TableWithData ~ merged', merged)

  const table = useReactTable({ data: merged, columns, getCoreRowModel: getCoreRowModel() })
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    ref.current.scrollTop = ref.current.scrollHeight
  }, [])

  return (
    <Box
      ref={ref}
      css={(t) => ({
        // gridColumn: '1 / -1 ',
        width: 'min-content',
        maxWidth: '100%',
        display: 'block',
        margin: '0 auto',
        padding: 0,
        border: t.colors.gray[200],
        // justifySelf: 'center',
        position: 'relative',
        justifySelf: 'center',
        maxHeight: `calc(70vh - ${t.headerHeight}px)`,
        overflow: 'scroll',
        // overflowX: 'scroll',
      })}
    >
      <table css={{ borderSpacing: 0, borderRadius: 8, position: 'unset' }}>
        <thead css={{ position: 'unset' }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} css={{ position: 'unset' }}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Cell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  )
}

type TableProps = {
  symbol: string
}

const FinancialsTable = ({ symbol }: TableProps) => {
  // const { data, loading, error } = useGetIncomeStatementQuery({ variables: { symbol } })
  const { data, loading, error } = useGetTtmFinancialsQuery({ variables: { symbol } })
  if (loading || !data) return <h1>Loading...</h1>
  if (error) return <h1>An error has occurred</h1>

  return <TableWithData data={data}></TableWithData>
}

export default FinancialsTable

const mergeArrays = (data: GetTtmFinancialsQuery) => {
  const { ttmBalanceSheet, ttmCashFlow, ttmIncomeStatement } = data
  const merged = ttmBalanceSheet.map((obj) => ({
    ...obj,
    ...ttmCashFlow.find((x) => x.date === obj.date),
    ...ttmIncomeStatement.find((x) => x.date === obj.date),
  }))
  return merged
}
