import gql from 'graphql-tag'

const PricesSchema = gql`
  type Prices {
    symbol: String!
    historical: [HistoricalType!]!
  }

  type HistoricalType {
    date: String!
    close: Float!
  }

  type LongQuote {
    symbol: String!
    name: String!
    price: Float!
    changesPercentage: Float
    change: Float
    dayLow: Float
    dayHigh: Float
    yearHigh: Float
    yearLow: Float
    marketCap: Float
    priceAvg50: Float
    priceAvg200: Float
    volume: Float
    avgVolume: Float
    exchange: String
    open: Float
    previousClose: Float
    eps: Float
    pe: Float
    earningsAnnouncement: String
    sharesOutstanding: Float
    timestamp: Float!
  }

  type Quote {
    symbol: String!
    price: Float!
    volume: Float!
  }
`

export default PricesSchema
