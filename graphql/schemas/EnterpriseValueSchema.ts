import gql from 'graphql-tag'

export const EnterpriseValueSchema = gql`
  type EnterpriseValue {
    symbol: String!
    date: String!
    stockPrice: Float
    numberOfShares: Float
    marketCapitalization: Float
    minusCashAndCashEquivalents: Float
    addTotalDebt: Float
    enterpriseValue: Float
  }
`
