import gql from 'graphql-tag'
import CompanyProfileSchema from './CompanyProfileSchema'
import { EnterpriseValueSchema } from './EnterpriseValueSchema'
import { FinancialRatiosSchema } from './FinancialRatiosSchema'
import FinancialStatementsSchemas from './FinancialStatementSchemas'
import { KeyMetricsSchema, KeyMetricsTTMSchema } from './KeyMetricsSchema'
import PricesSchema from './PricesSchema'

const Query = gql`
  type User {
    id: ID!
    name: String!
    status: String!
  }

  type Query {
    viewer: User!
    incomeStatement(symbol: String!, quarter: Boolean, limit: Float): [IncomeStatement!]!
    ttmIncomeStatement(symbol: String!): [IncomeStatement!]!
    balanceSheet(symbol: String!, quarter: Boolean, limit: Float): [BalanceSheet!]!
    ttmBalanceSheet(symbol: String!): [BalanceSheet!]!
    cashFlow(symbol: String!, quarter: Boolean, limit: Float): [CashFlow!]!
    ttmCashFlow(symbol: String!): [CashFlow!]!
    enterpriseValue(symbol: String!, quarter: Boolean, limit: Float): EnterpriseValue!
    prices(symbol: String!, fromDate: String): Prices!
    quote(symbol: String!): Quote!
    longQuote(symbol: String!): LongQuote!
    ttmRatios(symbol: String!): FinancialRatioTTM!
    keyMetricsTTM(symbol: String!): KeyMetricsTTM!
    financialRatios(symbol: String!, limit: Float, quarter: Boolean): [FinancialRatios]!
    companyProfile(symbol: String!): CompanyProfile!
    keyMetrics(symbol: String!, quarter: Boolean, limit: Float): [KeyMetrics!]!
  }
`
const Mutation = gql`
  type Mutation {
    updateName(name: String!): User!
  }
`
const Queries = [
  Query,
  FinancialStatementsSchemas,
  KeyMetricsTTMSchema,
  KeyMetricsSchema,
  PricesSchema,
  CompanyProfileSchema,
  FinancialRatiosSchema,
  EnterpriseValueSchema,
]

const typeDefs = [...Queries, Mutation]
export default typeDefs
