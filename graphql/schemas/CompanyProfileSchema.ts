import gql from 'graphql-tag'

const CompanyProfileSchema = gql`
  type CompanyProfile {
    symbol: String!
    price: Float!
    beta: Float!
    volAvg: Float!
    mktCap: Float!
    lastDiv: Float!
    range: String!
    changes: Float!
    companyName: String!
    currency: String!
    cik: String
    isin: String
    cusip: String
    exchange: String!
    exchangeShortName: String!
    industry: String!
    website: String!
    description: String!
    ceo: String!
    sector: String!
    country: String!
    fullTimeEmployees: String!
    phone: String!
    address: String!
    city: String!
    state: String!
    zip: String!
    dcfDiff: Float
    dcf: Float!
    image: String!
    ipoDate: String!
    defaultImage: Boolean!
    isEtf: Boolean!
    isActivelyTrading: Boolean!
    isAdr: Boolean!
    isFund: Boolean!
  }
`
export default CompanyProfileSchema
