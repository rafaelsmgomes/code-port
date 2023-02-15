import gql from 'graphql-tag'

const FinancialStatementsSchemas = gql`
  enum ReportedCurrency {
    USD
  }

  enum Period {
    FY
    Q1
    Q2
    Q3
    Q4
  }

  type IncomeStatement {
    date: String!
    symbol: String!
    reportedCurrency: ReportedCurrency!
    cik: String!
    fillingDate: String!
    acceptedDate: String!
    calendarYear: String!
    period: Period!
    revenue: Float!
    costOfRevenue: Float!
    grossProfit: Float!
    grossProfitRatio: Float!
    researchAndDevelopmentExpenses: Float!
    generalAndAdministrativeExpenses: Float!
    sellingAndMarketingExpenses: Float!
    sellingGeneralAndAdministrativeExpenses: Float!
    otherExpenses: Float!
    operatingExpenses: Float!
    costAndExpenses: Float!
    interestIncome: Float!
    interestExpense: Float!
    depreciationAndAmortization: Float!
    ebitda: Float!
    ebitdaratio: Float!
    operatingIncome: Float!
    operatingIncomeRatio: Float!
    totalOtherIncomeExpensesNet: Float!
    incomeBeforeTax: Float!
    incomeBeforeTaxRatio: Float!
    incomeTaxExpense: Float!
    netIncome: Float!
    netIncomeRatio: Float!
    eps: Float!
    epsdiluted: Float!
    weightedAverageShsOut: Float!
    weightedAverageShsOutDil: Float!
    link: String!
    finalLink: String!
  }

  type BalanceSheet {
    date: String!
    symbol: String!
    reportedCurrency: ReportedCurrency!
    cik: String
    fillingDate: String
    acceptedDate: String
    calendarYear: String
    period: Period!
    cashAndCashEquivalents: Float!
    shortTermInvestments: Float
    cashAndShortTermInvestments: Float
    netReceivables: Float
    inventory: Float
    otherCurrentAssets: Float
    totalCurrentAssets: Float
    propertyPlantEquipmentNet: Float
    goodwill: Float
    intangibleAssets: Float
    goodwillAndIntangibleAssets: Float
    longTermInvestments: Float
    taxAssets: Float
    otherNonCurrentAssets: Float
    totalNonCurrentAssets: Float
    otherAssets: Float
    totalAssets: Float
    accountPayables: Float
    shortTermDebt: Float
    taxPayables: Float
    deferredRevenue: Float
    otherCurrentLiabilities: Float
    totalCurrentLiabilities: Float
    longTermDebt: Float
    deferredRevenueNonCurrent: Float
    deferredTaxLiabilitiesNonCurrent: Float
    otherNonCurrentLiabilities: Float
    totalNonCurrentLiabilities: Float
    otherLiabilities: Float
    capitalLeaseObligations: Float
    totalLiabilities: Float
    preferredStock: Float
    commonStock: Float
    retainedEarnings: Float
    accumulatedOtherComprehensiveIncomeLoss: Float
    othertotalStockholdersEquity: Float
    totalStockholdersEquity: Float
    totalLiabilitiesAndStockholdersEquity: Float
    minorityInterest: Float
    totalEquity: Float
    totalLiabilitiesAndTotalEquity: Float
    totalInvestments: Float
    totalDebt: Float!
    netDebt: Float
    link: String
    finalLink: String
  }

  type CashFlow {
    date: String!
    symbol: String!
    reportedCurrency: ReportedCurrency
    cik: String
    fillingDate: String
    acceptedDate: String
    calendarYear: String
    period: Period
    netIncome: Float
    depreciationAndAmortization: Float
    deferredIncomeTax: Float
    stockBasedCompensation: Float
    changeInWorkingCapital: Float
    accountsReceivables: Float
    inventory: Float
    accountsPayables: Float
    otherWorkingCapital: Float
    otherNonCashItems: Float
    netCashProvidedByOperatingActivities: Float
    investmentsInPropertyPlantAndEquipment: Float
    acquisitionsNet: Float
    purchasesOfInvestments: Float
    salesMaturitiesOfInvestments: Float
    otherInvestingActivites: Float
    netCashUsedForInvestingActivites: Float
    debtRepayment: Float
    commonStockIssued: Float
    commonStockRepurchased: Float
    dividendsPaid: Float
    otherFinancingActivites: Float
    netCashUsedProvidedByFinancingActivities: Float
    effectOfForexChangesOnCash: Float
    netChangeInCash: Float
    cashAtEndOfPeriod: Float
    cashAtBeginningOfPeriod: Float
    operatingCashFlow: Float
    capitalExpenditure: Float
    freeCashFlow: Float
    link: String
    finalLink: String
  }
`

export default FinancialStatementsSchemas
