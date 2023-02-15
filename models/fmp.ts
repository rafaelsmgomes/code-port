export interface IIncomeStatement {
  date: string
  symbol: Symbol
  reportedCurrency: ReportedCurrency
  cik: string
  fillingDate: string
  acceptedDate: string
  calendarYear: string
  period: Period
  revenue: number
  costOfRevenue: number
  grossProfit: number
  grossProfitRatio: number
  researchAndDevelopmentExpenses: number
  generalAndAdministrativeExpenses: number
  sellingAndMarketingExpenses: number
  sellingGeneralAndAdministrativeExpenses: number
  otherExpenses: number
  operatingExpenses: number
  costAndExpenses: number
  interestIncome: number
  interestExpense: number
  depreciationAndAmortization: number
  ebitda: number
  ebitdaratio: number
  operatingIncome: number
  operatingIncomeRatio: number
  totalOtherIncomeExpensesNet: number
  incomeBeforeTax: number
  incomeBeforeTaxRatio: number
  incomeTaxExpense: number
  netIncome: number
  netIncomeRatio: number
  eps: number
  epsdiluted: number
  weightedAverageShsOut: number
  weightedAverageShsOutDil: number
  link: string
  finalLink: string
}

enum Period {
  Fy = 'FY',
  Q1 = 'Q1',
  Q2 = 'Q2',
  Q3 = 'Q3',
  Q4 = 'Q4',
}

enum ReportedCurrency {
  Usd = 'USD',
}

enum Symbol {
  Aapl = 'AAPL',
}

interface CompanyProfileType {
  symbol: string
  price: number
  beta: number
  volAvg: number
  mktCap: number
  lastDiv: number
  range: string
  changes: number
  companyName: string
  currency: string
  cik: string
  isin: string
  cusip: string
  exchange: string
  exchangeShortName: string
  industry: string
  website: string
  description: string
  ceo: string
  sector: string
  country: string
  fullTimeEmployees: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  dcfDiff: number
  dcf: number
  image: string
  ipoDate: string
  defaultImage: boolean
  isEtf: boolean
  isActivelyTrading: boolean
  isAdr: boolean
  isFund: boolean
}

// Historical Daily Prices Type

type PricesType = {
  symbol: string
  historical: HistoricalType[]
}

type HistoricalType = {
  date: string
  close: number
}
// Generated by https://quicktype.io

export interface AvailableTraded {
  symbol: string
  name: string
  price: number
  exchange: Exchange
  exchangeShortName: ExchangeShortName
}

enum Exchange {
  AmericanStockExchange = 'American Stock Exchange',
  Amsterdam = 'Amsterdam',
  Athens = 'Athens',
  Bats = 'BATS',
  Berlin = 'Berlin',
  Brussels = 'Brussels',
  Budapest = 'Budapest',
  BuenosAires = 'Buenos Aires',
  CanadianSEC = 'Canadian Sec',
  Copenhagen = 'Copenhagen',
  Dubai = 'Dubai',
  Dusseldorf = 'Dusseldorf',
  FTSEIndex = 'FTSE Index',
  Frankfurt = 'Frankfurt',
  Fukuoka = 'Fukuoka',
  Hamburg = 'Hamburg',
  Helsinki = 'Helsinki',
  Hkse = 'HKSE',
  Iceland = 'Iceland',
  Iob = 'IOB',
  Irish = 'Irish',
  IstanbulStockExchange = 'Istanbul Stock Exchange',
  JakartaStockExchange = 'Jakarta Stock Exchange',
  Johannesburg = 'Johannesburg',
  Kosdaq = 'KOSDAQ',
  Kse = 'KSE',
  Lisbon = 'Lisbon',
  LondonStockExchange = 'London Stock Exchange',
  Lse = 'LSE',
  MadridStockExchange = 'Madrid Stock Exchange',
  Mcx = 'MCX',
  Mexico = 'Mexico',
  Milan = 'Milan',
  Munich = 'Munich',
  NASDAQCapitalMarket = 'NASDAQ Capital Market',
  NASDAQGlobalMarket = 'NASDAQ Global Market',
  NASDAQGlobalSelect = 'NASDAQ Global Select',
  NYSEAmerican = 'NYSE American',
  Nasdaq = 'Nasdaq',
  NasdaqCapitalMarket = 'Nasdaq Capital Market',
  NasdaqGS = 'NasdaqGS',
  NasdaqGlobalSelect = 'Nasdaq Global Select',
  NationalStockExchangeOfIndia = 'National Stock Exchange of India',
  Neo = 'NEO',
  NewYorkStockExchange = 'New York Stock Exchange',
  NewYorkStockExchangeArca = 'New York Stock Exchange Arca',
  Nzse = 'NZSE',
  OsloStockExchange = 'Oslo Stock Exchange',
  OtherOTC = 'Other OTC',
  Paris = 'Paris',
  Prague = 'Prague',
  Qatar = 'Qatar',
  Santiago = 'Santiago',
  Saudi = 'Saudi',
  Ses = 'SES',
  Shanghai = 'Shanghai',
  Shenzhen = 'Shenzhen',
  Stockholm = 'Stockholm',
  StockholmStockExchange = 'Stockholm Stock Exchange',
  Stuttgart = 'Stuttgart',
  SwissExchange = 'Swiss Exchange',
  SãoPaulo = 'São Paulo',
  TaipeiExchange = 'Taipei Exchange',
  Taiwan = 'Taiwan',
  Tallinn = 'Tallinn',
  TelAviv = 'Tel Aviv',
  Thailand = 'Thailand',
  Tokyo = 'Tokyo',
  TorontoStockExchange = 'Toronto Stock Exchange',
  Tsxv = 'TSXV',
  Vienna = 'Vienna',
  WarsawStockExchange = 'Warsaw Stock Exchange',
  Xetra = 'XETRA',
}

export enum ExchangeShortName {
  Amex = 'AMEX',
  Ams = 'AMS',
  Ase = 'ASE',
  Ath = 'ATH',
  BER = 'BER',
  Bats = 'BATS',
  Bud = 'BUD',
  Bue = 'BUE',
  Cph = 'CPH',
  Dfm = 'DFM',
  Doh = 'DOH',
  Dus = 'DUS',
  Etf = 'ETF',
  Euronext = 'EURONEXT',
  Fgi = 'FGI',
  Fka = 'FKA',
  Ham = 'HAM',
  Hel = 'HEL',
  Hkse = 'HKSE',
  Ice = 'ICE',
  Iob = 'IOB',
  Ist = 'IST',
  Jkt = 'JKT',
  Jnb = 'JNB',
  Jpx = 'JPX',
  Koe = 'KOE',
  Ksc = 'KSC',
  Lis = 'LIS',
  Lse = 'LSE',
  Mcx = 'MCX',
  Mex = 'MEX',
  Mil = 'MIL',
  Mun = 'MUN',
  MutualFund = 'MUTUAL_FUND',
  Nasdaq = 'NASDAQ',
  Neo = 'NEO',
  Nse = 'NSE',
  Nyse = 'NYSE',
  Ose = 'OSE',
  Otc = 'OTC',
  Pra = 'PRA',
  Sau = 'SAU',
  Set = 'SET',
  Sgo = 'SGO',
  Shh = 'SHH',
  Shz = 'SHZ',
  Six = 'SIX',
  Sto = 'STO',
  Stu = 'STU',
  TLV = 'TLV',
  Tai = 'TAI',
  Tal = 'TAL',
  Tsx = 'TSX',
  Two = 'TWO',
  Vie = 'VIE',
  Wse = 'WSE',
  Xetra = 'XETRA',
}

export interface IBalanceSheet {
  date: string
  symbol: string
  reportedCurrency: ReportedCurrency
  cik: string
  fillingDate: string
  acceptedDate: string
  calendarYear: string
  period: Period
  cashAndCashEquivalents: number
  shortTermInvestments: number
  cashAndShortTermInvestments: number
  netReceivables: number
  inventory: number
  otherCurrentAssets: number
  totalCurrentAssets: number
  propertyPlantEquipmentNet: number
  goodwill: number
  intangibleAssets: number
  goodwillAndIntangibleAssets: number
  longTermInvestments: number
  taxAssets: number
  otherNonCurrentAssets: number
  totalNonCurrentAssets: number
  otherAssets: number
  totalAssets: number
  accountPayables: number
  shortTermDebt: number
  taxPayables: number
  deferredRevenue: number
  otherCurrentLiabilities: number
  totalCurrentLiabilities: number
  longTermDebt: number
  deferredRevenueNonCurrent: number
  deferredTaxLiabilitiesNonCurrent: number
  otherNonCurrentLiabilities: number
  totalNonCurrentLiabilities: number
  otherLiabilities: number
  capitalLeaseObligations: number
  totalLiabilities: number
  preferredStock: number
  commonStock: number
  retainedEarnings: number
  accumulatedOtherComprehensiveIncomeLoss: number
  othertotalStockholdersEquity: number
  totalStockholdersEquity: number
  totalLiabilitiesAndStockholdersEquity: number
  minorityInterest: number
  totalEquity: number
  totalLiabilitiesAndTotalEquity: number
  totalInvestments: number
  totalDebt: number
  netDebt: number
  link: string
  finalLink: string
}

export interface ICashFlow {
  date: string
  symbol: string
  reportedCurrency: ReportedCurrency
  cik: string
  fillingDate: string
  acceptedDate: string
  calendarYear: string
  period: Period
  netIncome: number
  depreciationAndAmortization: number
  deferredIncomeTax: number
  stockBasedCompensation: number
  changeInWorkingCapital: number
  accountsReceivables: number
  inventory: number
  accountsPayables: number
  otherWorkingCapital: number
  otherNonCashItems: number
  netCashProvidedByOperatingActivities: number
  investmentsInPropertyPlantAndEquipment: number
  acquisitionsNet: number
  purchasesOfInvestments: number
  salesMaturitiesOfInvestments: number
  otherInvestingActivites: number
  netCashUsedForInvestingActivites: number
  debtRepayment: number
  commonStockIssued: number
  commonStockRepurchased: number
  dividendsPaid: number
  otherFinancingActivites: number
  netCashUsedProvidedByFinancingActivities: number
  effectOfForexChangesOnCash: number
  netChangeInCash: number
  cashAtEndOfPeriod: number
  cashAtBeginningOfPeriod: number
  operatingCashFlow: number
  capitalExpenditure: number
  freeCashFlow: number
  link: string
  finalLink: string
}

interface IFinancialRatios {
  symbol: string
  date: string
  period: Period
  currentRatio: number
  quickRatio: number
  cashRatio: number
  daysOfSalesOutstanding: number
  daysOfInventoryOutstanding: number
  operatingCycle: number
  daysOfPayablesOutstanding: number
  cashConversionCycle: number
  grossProfitMargin: number
  operatingProfitMargin: number
  pretaxProfitMargin: number
  netProfitMargin: number
  effectiveTaxRate: number
  returnOnAssets: number
  returnOnEquity: number
  returnOnCapitalEmployed: number
  netIncomePerEBT: number
  ebtPerEbit: number
  ebitPerRevenue: number
  debtRatio: number
  debtEquityRatio: number
  longTermDebtToCapitalization: number | null
  totalDebtToCapitalization: number | null
  interestCoverage: number | null
  cashFlowToDebtRatio: number | null
  companyEquityMultiplier: number
  receivablesTurnover: number
  payablesTurnover: number
  inventoryTurnover: number
  fixedAssetTurnover: number
  assetTurnover: number
  operatingCashFlowPerShare: number
  freeCashFlowPerShare: number
  cashPerShare: number
  payoutRatio: number
  operatingCashFlowSalesRatio: number
  freeCashFlowOperatingCashFlowRatio: number
  cashFlowCoverageRatios: number | null
  shortTermCoverageRatios: number | null
  capitalExpenditureCoverageRatio: number
  dividendPaidAndCapexCoverageRatio: number | null
  dividendPayoutRatio: number | null
  priceBookValueRatio: number
  priceToBookRatio: number
  priceToSalesRatio: number
  priceEarningsRatio: number
  priceToFreeCashFlowsRatio: number
  priceToOperatingCashFlowsRatio: number
  priceCashFlowRatio: number
  priceEarningsToGrowthRatio: number
  priceSalesRatio: number
  dividendYield: number | null
  enterpriseValueMultiple: number
  priceFairValue: number
}

interface IFinancialRatioTTM {
  dividendYielTTM: number
  dividendYielPercentageTTM: number
  peRatioTTM: number
  pegRatioTTM: number
  payoutRatioTTM: number
  currentRatioTTM: number
  quickRatioTTM: number
  cashRatioTTM: number
  daysOfSalesOutstandingTTM: number
  daysOfInventoryOutstandingTTM: number
  operatingCycleTTM: number
  daysOfPayablesOutstandingTTM: number
  cashConversionCycleTTM: number
  grossProfitMarginTTM: number
  operatingProfitMarginTTM: number
  pretaxProfitMarginTTM: number
  netProfitMarginTTM: number
  effectiveTaxRateTTM: number
  returnOnAssetsTTM: number
  returnOnEquityTTM: number
  returnOnCapitalEmployedTTM: number
  netIncomePerEBTTTM: number
  ebtPerEbitTTM: number
  ebitPerRevenueTTM: number
  debtRatioTTM: number
  debtEquityRatioTTM: number
  longTermDebtToCapitalizationTTM: number
  totalDebtToCapitalizationTTM: number
  interestCoverageTTM: number
  cashFlowToDebtRatioTTM: number
  companyEquityMultiplierTTM: number
  receivablesTurnoverTTM: number
  payablesTurnoverTTM: number
  inventoryTurnoverTTM: number
  fixedAssetTurnoverTTM: number
  assetTurnoverTTM: number
  operatingCashFlowPerShareTTM: number
  freeCashFlowPerShareTTM: number
  cashPerShareTTM: number
  operatingCashFlowSalesRatioTTM: number
  freeCashFlowOperatingCashFlowRatioTTM: number
  cashFlowCoverageRatiosTTM: number
  shortTermCoverageRatiosTTM: number
  capitalExpenditureCoverageRatioTTM: number
  dividendPaidAndCapexCoverageRatioTTM: number
  priceBookValueRatioTTM: number
  priceToBookRatioTTM: number
  priceToSalesRatioTTM: number
  priceEarningsRatioTTM: number
  priceToFreeCashFlowsRatioTTM: number
  priceToOperatingCashFlowsRatioTTM: number
  priceCashFlowRatioTTM: number
  priceEarningsToGrowthRatioTTM: number
  priceSalesRatioTTM: number
  dividendYieldTTM: number
  enterpriseValueMultipleTTM: number
  priceFairValueTTM: number
  dividendPerShareTTM: number
}

interface IEnterpriseValue {
  symbol: string
  date: string
  stockPrice: number
  numberOfShares: number
  marketCapitalization: number
  minusCashAndCashEquivalents: number
  addTotalDebt: number
  enterpriseValue: number
}

interface ICashFlowStatement {
  date: string
  symbol: string
  reportedCurrency: string
  cik: string
  fillingDate: string
  acceptedDate: string
  calendarYear: string
  period: Period
  netIncome: number
  depreciationAndAmortization: number
  deferredIncomeTax: number
  stockBasedCompensation: number
  changeInWorkingCapital: number
  accountsReceivables: number
  inventory: number
  accountsPayables: number
  otherWorkingCapital: number
  otherNonCashItems: number
  netCashProvidedByOperatingActivities: number
  investmentsInPropertyPlantAndEquipment: number
  acquisitionsNet: number
  purchasesOfInvestments: number
  salesMaturitiesOfInvestments: number
  otherInvestingActivites: number
  netCashUsedForInvestingActivites: number
  debtRepayment: number
  commonStockIssued: number
  commonStockRepurchased: number
  dividendsPaid: number
  otherFinancingActivites: number
  netCashUsedProvidedByFinancingActivities: number
  effectOfForexChangesOnCash: number
  netChangeInCash: number
  cashAtEndOfPeriod: number
  cashAtBeginningOfPeriod: number
  operatingCashFlow: number
  capitalExpenditure: number
  freeCashFlow: number
  link: string
  finalLink: string
}

interface IKeyMetrics {
  symbol: string
  date: Date
  period: Period
  revenuePerShare: number
  netIncomePerShare: number
  operatingCashFlowPerShare: number
  freeCashFlowPerShare: number
  cashPerShare: number
  bookValuePerShare: number
  tangibleBookValuePerShare: number
  shareholdersEquityPerShare: number
  interestDebtPerShare: number
  marketCap: number
  enterpriseValue: number
  peRatio: number
  priceToSalesRatio: number
  pocfratio: number
  pfcfRatio: number
  pbRatio: number
  ptbRatio: number
  evToSales: number
  enterpriseValueOverEBITDA: number
  evToOperatingCashFlow: number
  evToFreeCashFlow: number
  earningsYield: number
  freeCashFlowYield: number
  debtToEquity: number
  debtToAssets: number
  netDebtToEBITDA: number
  currentRatio: number
  interestCoverage: number | null
  incomeQuality: number
  dividendYield: number | null
  payoutRatio: number
  salesGeneralAndAdministrativeToRevenue: number
  researchAndDdevelopementToRevenue: number
  intangiblesToTotalAssets: number
  capexToOperatingCashFlow: number
  capexToRevenue: number
  capexToDepreciation: number
  stockBasedCompensationToRevenue: number
  grahamNumber: number
  roic: number
  returnOnTangibleAssets: number
  grahamNetNet: number
  workingCapital: number
  tangibleAssetValue: number | null
  netCurrentAssetValue: number
  investedCapital: number
  averageReceivables: number
  averagePayables: number
  averageInventory: number
  daysSalesOutstanding: number
  daysPayablesOutstanding: number
  daysOfInventoryOnHand: number
  receivablesTurnover: number
  payablesTurnover: number
  inventoryTurnover: number
  roe: number
  capexPerShare: number
}