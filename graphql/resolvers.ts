import { apiFetcher } from '../lib/axiosApi'
import { Resolvers } from './generated/resolvers-types'
import { PrismaClient } from '@prisma/client'
import { GraphqlContext } from '../pages/api/graphql'
import { formatTimeToDash, sortByDate } from './utils'
import { IBalanceSheet, ICashFlow, IIncomeStatement } from '../models/fmp'

export interface ValueMapContext {
  db: PrismaClient
}
const userProfile = {
  id: String(1),
  name: 'John Smith',
  status: 'cached',
}
const resolvers: Resolvers<GraphqlContext> = {
  Query: {
    viewer: (_parent, _args, _context, _info) => {
      return userProfile
    },
    incomeStatement: async (_parent, args, ctx, info) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')

      const { symbol, quarter, limit } = args
      const incomeStatement: IIncomeStatement[] = await apiFetcher
        .get(`/api/v3/income-statement/${symbol.toUpperCase()}`, {
          params: { period: quarter ? 'quarter' : undefined, limit },
        })
        .then((res) => res.data)

      return incomeStatement.reverse()
    },
    ttmIncomeStatement: async (_, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')

      const { symbol } = args
      const yearlyIncomeStatements: IIncomeStatement[] = await apiFetcher
        .get(`/api/v3/income-statement/${symbol.toUpperCase()}`)
        .then((res) => res.data)
      const last4QuartersIncomeStatements: IIncomeStatement[] = await apiFetcher
        .get(`/api/v3/income-statement/${symbol.toUpperCase()}`, {
          params: { period: 'quarter', limit: 4 },
        })
        .then((res) => res.data)

      const ttmIncStatement = last4QuartersIncomeStatements.sort(sortByDate).reduce((acc, cur) => {
        let key: keyof typeof cur
        for (key in cur) {
          if (typeof cur[key] === 'number') {
            acc = { ...acc, [key]: ((acc[key] as number) || 0) + (cur[key] as number) }
          } else {
            acc = { ...acc, [key]: cur[key] }
          }
        }
        return acc
      }, {} as IIncomeStatement)

      yearlyIncomeStatements.reverse()
      if (ttmIncStatement.period !== 'Q4') {
        yearlyIncomeStatements.push(ttmIncStatement)
      }

      return yearlyIncomeStatements
    },
    balanceSheet: async (_parent, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')

      const { symbol, quarter, limit } = args

      return await apiFetcher
        .get(`/api/v3/balance-sheet-statement/${symbol.toUpperCase()}`, {
          params: { period: quarter ? 'quarter' : undefined, limit },
        })
        .then((res) => res.data)
    },
    ttmBalanceSheet: async (_, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized')
      const { symbol } = args
      const yearlyBalanceSheet: IBalanceSheet[] = await apiFetcher
        .get(`/api/v3/balance-sheet-statement/${symbol.toUpperCase()}`)
        .then((res) => res.data)
      const lastQuarterBalSheet: IBalanceSheet[] = await apiFetcher(
        `/api/v3/balance-sheet-statement/${symbol.toUpperCase()}`,
        { params: { period: 'quarter', limit: 1 } }
      ).then((res) => res.data)

      const sortedYearly = yearlyBalanceSheet.sort(sortByDate)
      const lastQuarter = lastQuarterBalSheet.pop()
      if (lastQuarter?.date !== 'Q4' && lastQuarter) {
        sortedYearly.push(lastQuarter)
      }
      return sortedYearly
    },
    cashFlow: async (_parent, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')

      const { symbol, quarter, limit } = args

      const cashFlow: ICashFlow[] = await apiFetcher
        .get(`/api/v3/cash-flow-statement/${symbol.toUpperCase()}`, {
          params: { period: quarter ? 'quarter' : undefined, limit },
        })
        .then((res) => res.data)
      return cashFlow.reverse()
    },
    ttmCashFlow: async (_, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized')
      const { symbol } = args

      const yearly: ICashFlow[] = await apiFetcher
        .get(`api/v3/cash-flow-statement/${symbol.toUpperCase()}`)
        .then((res) => res.data)

      const quarter: ICashFlow[] = await apiFetcher
        .get(`api/v3/cash-flow-statement/${symbol.toUpperCase()}`, { params: { period: 'quarter', limit: 1 } })
        .then((res) => res.data)

      const sorted = yearly.sort(sortByDate)
      const ttmYear = quarter.sort(sortByDate).reduce((acc, cur) => {
        let key: keyof typeof cur
        for (key in cur) {
          if (typeof cur[key] === 'number') {
            acc = { ...acc, [key]: ((acc[key] as number) || 0) + (cur[key] as number) }
          } else {
            acc = { ...acc, [key]: cur[key] }
          }
        }
        return acc
      }, {} as ICashFlow)

      if (ttmYear.date !== 'Q4') {
        sorted.push(ttmYear)
      }

      return sorted
    },
    ttmRatios: async (_, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')

      const { symbol } = args

      return await apiFetcher.get(`/api/v3/ratios-ttm/${symbol.toUpperCase()}`, {}).then((res) => res.data[0])
    },
    keyMetricsTTM: async (_, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')
      const { symbol } = args

      return await apiFetcher.get(`/api/v3/key-metrics-ttm/${symbol.toUpperCase()}`, {}).then((res) => res.data[0])
    },
    keyMetrics: async (_, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')
      const { symbol, limit, quarter } = args
      return await apiFetcher
        .get(`/api/v3/key-metrics/${symbol.toUpperCase()}`, {
          params: { period: quarter ? 'quarter' : undefined, limit },
        })
        .then((res) => res.data)
    },
    financialRatios: async (_, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')

      const { symbol, quarter, limit } = args

      return await apiFetcher
        .get(`/api/v3/ratios/${symbol.toUpperCase()}`, {
          params: { period: quarter ? 'quarter' : undefined, limit },
        })
        .then((res) => res.data)
    },
    enterpriseValue: async (_, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')
      const { symbol, quarter, limit } = args
      return await apiFetcher
        .get(`/api/v3/enterprise-values/${symbol.toUpperCase()}`, {
          params: { period: quarter ? 'quarter' : undefined, limit },
        })
        .then((res) => res.data[0])
    },
    prices: async (_parent, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')
      const { symbol, fromDate } = args

      let date: Date
      if (!!fromDate) {
        date = new Date(fromDate)
      } else {
        date = new Date()
        date.setFullYear(date.getFullYear() - 15)
      }
      const startingFrom = formatTimeToDash(date)

      return await apiFetcher
        .get(`/api/v3/historical-price-full/${symbol.toUpperCase()}`, {
          params: { serietype: 'line', from: startingFrom },
        })
        .then((res) => res.data)
    },
    quote: async (_parent, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')
      const { symbol } = args
      return await apiFetcher.get(`/api/v3/quote-short/${symbol.toUpperCase()}`).then((res) => res.data[0])
    },
    longQuote: async (_parent, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')
      const { symbol } = args
      return await apiFetcher.get(`/api/v3/quote/${symbol.toUpperCase()}`).then((res) => res.data[0])
    },
    companyProfile: async (_root, args, ctx) => {
      if (!ctx.session?.user) throw new Error('Not authorized!')
      const { symbol } = args

      const profile = await apiFetcher.get(`/api/v3/profile/${symbol.toUpperCase()}`).then((res) => res.data[0])
      return profile
    },
  },
  Mutation: {
    updateName(_parent, _args, _context, _info) {
      userProfile.name = _args.name
      return userProfile
    },
  },
}

export default resolvers
