import gql from 'graphql-tag'

export const KeyMetricsTTMSchema = gql`
  type KeyMetricsTTM {
    # Market value of the company
    marketCapTTM: Float
    enterpriseValueTTM: Float

    # Money generation per share
    revenuePerShareTTM: Float
    netIncomePerShareTTM: Float
    operatingCashFlowPerShareTTM: Float
    freeCashFlowPerShareTTM: Float

    # Assets per share
    bookValuePerShareTTM: Float
    tangibleBookValuePerShareTTM: Float
    cashPerShareTTM: Float

    # Valuation ratios
    peRatioTTM: Float
    priceToSalesRatioTTM: Float
    pbRatioTTM: Float
    ptbRatioTTM: Float
    evToSalesTTM: Float
    enterpriseValueOverEBITDATTM: Float
    evToOperatingCashFlowTTM: Float
    evToFreeCashFlowTTM: Float

    # Profitability to shareholders metrics
    earningsYieldTTM: Float
    freeCashFlowYieldTTM: Float
    incomeQualityTTM: Float # Operating Cash Flow / Net Income (how much of the Income becomes cash flow)
    dividendPerShareTTM: Float
    dividendYieldTTM: Float
    dividendYieldPercentageTTM: Float # REV- What is the difference?
    payoutRatioTTM: Float

    # Cash flow??
    pocfratioTTM: Float # Price to Operating Cash flow ratio?
    pfcfRatioTTM: Float # Price to Free Cash Flow ratio?
    # Equity ratios
    shareholdersEquityPerShareTTM: Float

    # Debt metrics
    debtToEquityTTM: Float
    debtToAssetsTTM: Float
    netDebtToEBITDATTM: Float
    interestCoverageTTM: Float

    # Return
    roicTTM: Float
    returnOnTangibleAssetsTTM: Float
    roeTTM: Float

    # Not important
    interestDebtPerShareTTM: Float
    currentRatioTTM: Float # Assets / Liabilities
    salesGeneralAndAdministrativeToRevenueTTM: Float
    researchAndDevelopementToRevenueTTM: Float # Percentage of Revenue that becomes R&D
    intangiblesToTotalAssetsTTM: Float
    capexToOperatingCashFlowTTM: Float
    capexToRevenueTTM: Float
    capexToDepreciationTTM: Float
    stockBasedCompensationToRevenueTTM: Float
    grahamNumberTTM: Float
    grahamNetNetTTM: Float
    workingCapitalTTM: Float
    tangibleAssetValueTTM: Float
    netCurrentAssetValueTTM: Float
    investedCapitalTTM: Float
    averageReceivablesTTM: Float
    averagePayablesTTM: Float
    averageInventoryTTM: Float
    daysSalesOutstandingTTM: Float
    daysPayablesOutstandingTTM: Float
    daysOfInventoryOnHandTTM: Float
    receivablesTurnoverTTM: Float
    payablesTurnoverTTM: Float
    inventoryTurnoverTTM: Float
    capexPerShareTTM: Float
    debtToMarketCapTTM: Float
  }
`
export const KeyMetricsSchema = gql`
  type KeyMetrics {
    symbol: String!
    date: String!
    period: Period!
    revenuePerShare: Float
    netIncomePerShare: Float
    operatingCashFlowPerShare: Float
    freeCashFlowPerShare: Float
    cashPerShare: Float
    bookValuePerShare: Float
    tangibleBookValuePerShare: Float
    shareholdersEquityPerShare: Float
    interestDebtPerShare: Float
    marketCap: Float
    enterpriseValue: Float
    peRatio: Float
    priceToSalesRatio: Float
    pocfratio: Float
    pfcfRatio: Float
    pbRatio: Float
    ptbRatio: Float
    evToSales: Float
    enterpriseValueOverEBITDA: Float
    evToOperatingCashFlow: Float
    evToFreeCashFlow: Float
    earningsYield: Float
    freeCashFlowYield: Float
    debtToEquity: Float
    debtToAssets: Float
    netDebtToEBITDA: Float
    currentRatio: Float
    interestCoverage: Float
    incomeQuality: Float
    dividendYield: Float
    payoutRatio: Float
    salesGeneralAndAdministrativeToRevenue: Float
    researchAndDdevelopementToRevenue: Float
    intangiblesToTotalAssets: Float
    capexToOperatingCashFlow: Float
    capexToRevenue: Float
    capexToDepreciation: Float
    stockBasedCompensationToRevenue: Float
    grahamNumber: Float
    roic: Float
    returnOnTangibleAssets: Float
    grahamNetNet: Float
    workingCapital: Float
    tangibleAssetValue: Float
    netCurrentAssetValue: Float
    investedCapital: Float
    averageReceivables: Float
    averagePayables: Float
    averageInventory: Float
    daysSalesOutstanding: Float
    daysPayablesOutstanding: Float
    daysOfInventoryOnHand: Float
    receivablesTurnover: Float
    payablesTurnover: Float
    inventoryTurnover: Float
    roe: Float
    capexPerShare: Float
  }
`
