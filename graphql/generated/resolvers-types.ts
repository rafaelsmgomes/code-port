import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BalanceSheet = {
  __typename?: 'BalanceSheet';
  acceptedDate?: Maybe<Scalars['String']>;
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  calendarYear?: Maybe<Scalars['String']>;
  capitalLeaseObligations?: Maybe<Scalars['Float']>;
  cashAndCashEquivalents: Scalars['Float'];
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  cik?: Maybe<Scalars['String']>;
  commonStock?: Maybe<Scalars['Float']>;
  date: Scalars['String'];
  deferredRevenue?: Maybe<Scalars['Float']>;
  deferredRevenueNonCurrent?: Maybe<Scalars['Float']>;
  deferredTaxLiabilitiesNonCurrent?: Maybe<Scalars['Float']>;
  fillingDate?: Maybe<Scalars['String']>;
  finalLink?: Maybe<Scalars['String']>;
  goodwill?: Maybe<Scalars['Float']>;
  goodwillAndIntangibleAssets?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  minorityInterest?: Maybe<Scalars['Float']>;
  netDebt?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  otherAssets?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  othertotalStockholdersEquity?: Maybe<Scalars['Float']>;
  period: Period;
  preferredStock?: Maybe<Scalars['Float']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  reportedCurrency: ReportedCurrency;
  retainedEarnings?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  shortTermInvestments?: Maybe<Scalars['Float']>;
  symbol: Scalars['String'];
  taxAssets?: Maybe<Scalars['Float']>;
  taxPayables?: Maybe<Scalars['Float']>;
  totalAssets?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalDebt: Scalars['Float'];
  totalEquity?: Maybe<Scalars['Float']>;
  totalInvestments?: Maybe<Scalars['Float']>;
  totalLiabilities?: Maybe<Scalars['Float']>;
  totalLiabilitiesAndStockholdersEquity?: Maybe<Scalars['Float']>;
  totalLiabilitiesAndTotalEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
};

export type CashFlow = {
  __typename?: 'CashFlow';
  acceptedDate?: Maybe<Scalars['String']>;
  accountsPayables?: Maybe<Scalars['Float']>;
  accountsReceivables?: Maybe<Scalars['Float']>;
  acquisitionsNet?: Maybe<Scalars['Float']>;
  calendarYear?: Maybe<Scalars['String']>;
  capitalExpenditure?: Maybe<Scalars['Float']>;
  cashAtBeginningOfPeriod?: Maybe<Scalars['Float']>;
  cashAtEndOfPeriod?: Maybe<Scalars['Float']>;
  changeInWorkingCapital?: Maybe<Scalars['Float']>;
  cik?: Maybe<Scalars['String']>;
  commonStockIssued?: Maybe<Scalars['Float']>;
  commonStockRepurchased?: Maybe<Scalars['Float']>;
  date: Scalars['String'];
  debtRepayment?: Maybe<Scalars['Float']>;
  deferredIncomeTax?: Maybe<Scalars['Float']>;
  depreciationAndAmortization?: Maybe<Scalars['Float']>;
  dividendsPaid?: Maybe<Scalars['Float']>;
  effectOfForexChangesOnCash?: Maybe<Scalars['Float']>;
  fillingDate?: Maybe<Scalars['String']>;
  finalLink?: Maybe<Scalars['String']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  investmentsInPropertyPlantAndEquipment?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  netCashProvidedByOperatingActivities?: Maybe<Scalars['Float']>;
  netCashUsedForInvestingActivites?: Maybe<Scalars['Float']>;
  netCashUsedProvidedByFinancingActivities?: Maybe<Scalars['Float']>;
  netChangeInCash?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  operatingCashFlow?: Maybe<Scalars['Float']>;
  otherFinancingActivites?: Maybe<Scalars['Float']>;
  otherInvestingActivites?: Maybe<Scalars['Float']>;
  otherNonCashItems?: Maybe<Scalars['Float']>;
  otherWorkingCapital?: Maybe<Scalars['Float']>;
  period?: Maybe<Period>;
  purchasesOfInvestments?: Maybe<Scalars['Float']>;
  reportedCurrency?: Maybe<ReportedCurrency>;
  salesMaturitiesOfInvestments?: Maybe<Scalars['Float']>;
  stockBasedCompensation?: Maybe<Scalars['Float']>;
  symbol: Scalars['String'];
};

export type CompanyProfile = {
  __typename?: 'CompanyProfile';
  address: Scalars['String'];
  beta: Scalars['Float'];
  ceo: Scalars['String'];
  changes: Scalars['Float'];
  cik?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  companyName: Scalars['String'];
  country: Scalars['String'];
  currency: Scalars['String'];
  cusip?: Maybe<Scalars['String']>;
  dcf: Scalars['Float'];
  dcfDiff?: Maybe<Scalars['Float']>;
  defaultImage: Scalars['Boolean'];
  description: Scalars['String'];
  exchange: Scalars['String'];
  exchangeShortName: Scalars['String'];
  fullTimeEmployees: Scalars['String'];
  image: Scalars['String'];
  industry: Scalars['String'];
  ipoDate: Scalars['String'];
  isActivelyTrading: Scalars['Boolean'];
  isAdr: Scalars['Boolean'];
  isEtf: Scalars['Boolean'];
  isFund: Scalars['Boolean'];
  isin?: Maybe<Scalars['String']>;
  lastDiv: Scalars['Float'];
  mktCap: Scalars['Float'];
  phone: Scalars['String'];
  price: Scalars['Float'];
  range: Scalars['String'];
  sector: Scalars['String'];
  state: Scalars['String'];
  symbol: Scalars['String'];
  volAvg: Scalars['Float'];
  website: Scalars['String'];
  zip: Scalars['String'];
};

export type EnterpriseValue = {
  __typename?: 'EnterpriseValue';
  addTotalDebt?: Maybe<Scalars['Float']>;
  date: Scalars['String'];
  enterpriseValue?: Maybe<Scalars['Float']>;
  marketCapitalization?: Maybe<Scalars['Float']>;
  minusCashAndCashEquivalents?: Maybe<Scalars['Float']>;
  numberOfShares?: Maybe<Scalars['Float']>;
  stockPrice?: Maybe<Scalars['Float']>;
  symbol: Scalars['String'];
};

export type FinancialRatioTtm = {
  __typename?: 'FinancialRatioTTM';
  assetTurnoverTTM?: Maybe<Scalars['Float']>;
  capitalExpenditureCoverageRatioTTM?: Maybe<Scalars['Float']>;
  cashConversionCycleTTM?: Maybe<Scalars['Float']>;
  cashFlowCoverageRatiosTTM?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  cashPerShareTTM?: Maybe<Scalars['Float']>;
  cashRatioTTM?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  daysOfInventoryOutstandingTTM?: Maybe<Scalars['Float']>;
  daysOfPayablesOutstandingTTM?: Maybe<Scalars['Float']>;
  daysOfSalesOutstandingTTM?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtRatioTTM?: Maybe<Scalars['Float']>;
  dividendPaidAndCapexCoverageRatioTTM?: Maybe<Scalars['Float']>;
  dividendPerShareTTM?: Maybe<Scalars['Float']>;
  dividendYielPercentageTTM?: Maybe<Scalars['Float']>;
  dividendYielTTM?: Maybe<Scalars['Float']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  ebitPerRevenueTTM?: Maybe<Scalars['Float']>;
  ebtPerEbitTTM?: Maybe<Scalars['Float']>;
  effectiveTaxRateTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  fixedAssetTurnoverTTM?: Maybe<Scalars['Float']>;
  freeCashFlowOperatingCashFlowRatioTTM?: Maybe<Scalars['Float']>;
  freeCashFlowPerShareTTM?: Maybe<Scalars['Float']>;
  grossProfitMarginTTM?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  inventoryTurnoverTTM?: Maybe<Scalars['Float']>;
  longTermDebtToCapitalizationTTM?: Maybe<Scalars['Float']>;
  netIncomePerEBTTTM?: Maybe<Scalars['Float']>;
  netProfitMarginTTM?: Maybe<Scalars['Float']>;
  operatingCashFlowPerShareTTM?: Maybe<Scalars['Float']>;
  operatingCashFlowSalesRatioTTM?: Maybe<Scalars['Float']>;
  operatingCycleTTM?: Maybe<Scalars['Float']>;
  operatingProfitMarginTTM?: Maybe<Scalars['Float']>;
  payablesTurnoverTTM?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  peRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  pretaxProfitMarginTTM?: Maybe<Scalars['Float']>;
  priceBookValueRatioTTM?: Maybe<Scalars['Float']>;
  priceCashFlowRatioTTM?: Maybe<Scalars['Float']>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceEarningsToGrowthRatioTTM?: Maybe<Scalars['Float']>;
  priceFairValueTTM?: Maybe<Scalars['Float']>;
  priceSalesRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToOperatingCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  receivablesTurnoverTTM?: Maybe<Scalars['Float']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  shortTermCoverageRatiosTTM?: Maybe<Scalars['Float']>;
  totalDebtToCapitalizationTTM?: Maybe<Scalars['Float']>;
};

export type FinancialRatios = {
  __typename?: 'FinancialRatios';
  assetTurnover?: Maybe<Scalars['Float']>;
  capitalExpenditureCoverageRatio?: Maybe<Scalars['Float']>;
  cashConversionCycle?: Maybe<Scalars['Float']>;
  cashFlowCoverageRatios?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatio?: Maybe<Scalars['Float']>;
  cashPerShare?: Maybe<Scalars['Float']>;
  cashRatio?: Maybe<Scalars['Float']>;
  companyEquityMultiplier?: Maybe<Scalars['Float']>;
  currentRatio?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  daysOfInventoryOutstanding?: Maybe<Scalars['Float']>;
  daysOfPayablesOutstanding?: Maybe<Scalars['Float']>;
  daysOfSalesOutstanding?: Maybe<Scalars['Float']>;
  debtEquityRatio?: Maybe<Scalars['Float']>;
  debtRatio?: Maybe<Scalars['Float']>;
  dividendPaidAndCapexCoverageRatio?: Maybe<Scalars['Float']>;
  dividendPayoutRatio?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  ebitPerRevenue?: Maybe<Scalars['Float']>;
  ebtPerEbit?: Maybe<Scalars['Float']>;
  effectiveTaxRate?: Maybe<Scalars['Float']>;
  enterpriseValueMultiple?: Maybe<Scalars['Float']>;
  fixedAssetTurnover?: Maybe<Scalars['Float']>;
  freeCashFlowOperatingCashFlowRatio?: Maybe<Scalars['Float']>;
  freeCashFlowPerShare?: Maybe<Scalars['Float']>;
  grossProfitMargin?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  inventoryTurnover?: Maybe<Scalars['Float']>;
  longTermDebtToCapitalization?: Maybe<Scalars['Float']>;
  netIncomePerEBT?: Maybe<Scalars['Float']>;
  netProfitMargin?: Maybe<Scalars['Float']>;
  operatingCashFlowPerShare?: Maybe<Scalars['Float']>;
  operatingCashFlowSalesRatio?: Maybe<Scalars['Float']>;
  operatingCycle?: Maybe<Scalars['Float']>;
  operatingProfitMargin?: Maybe<Scalars['Float']>;
  payablesTurnover?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  period?: Maybe<Period>;
  pretaxProfitMargin?: Maybe<Scalars['Float']>;
  priceBookValueRatio?: Maybe<Scalars['Float']>;
  priceCashFlowRatio?: Maybe<Scalars['Float']>;
  priceEarningsRatio?: Maybe<Scalars['Float']>;
  priceEarningsToGrowthRatio?: Maybe<Scalars['Float']>;
  priceFairValue?: Maybe<Scalars['Float']>;
  priceSalesRatio?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatio?: Maybe<Scalars['Float']>;
  priceToOperatingCashFlowsRatio?: Maybe<Scalars['Float']>;
  priceToSalesRatio?: Maybe<Scalars['Float']>;
  quickRatio?: Maybe<Scalars['Float']>;
  receivablesTurnover?: Maybe<Scalars['Float']>;
  returnOnAssets?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployed?: Maybe<Scalars['Float']>;
  returnOnEquity?: Maybe<Scalars['Float']>;
  shortTermCoverageRatios?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
  totalDebtToCapitalization?: Maybe<Scalars['Float']>;
};

export type HistoricalType = {
  __typename?: 'HistoricalType';
  close: Scalars['Float'];
  date: Scalars['String'];
};

export type IncomeStatement = {
  __typename?: 'IncomeStatement';
  acceptedDate: Scalars['String'];
  calendarYear: Scalars['String'];
  cik: Scalars['String'];
  costAndExpenses: Scalars['Float'];
  costOfRevenue: Scalars['Float'];
  date: Scalars['String'];
  depreciationAndAmortization: Scalars['Float'];
  ebitda: Scalars['Float'];
  ebitdaratio: Scalars['Float'];
  eps: Scalars['Float'];
  epsdiluted: Scalars['Float'];
  fillingDate: Scalars['String'];
  finalLink: Scalars['String'];
  generalAndAdministrativeExpenses: Scalars['Float'];
  grossProfit: Scalars['Float'];
  grossProfitRatio: Scalars['Float'];
  incomeBeforeTax: Scalars['Float'];
  incomeBeforeTaxRatio: Scalars['Float'];
  incomeTaxExpense: Scalars['Float'];
  interestExpense: Scalars['Float'];
  interestIncome: Scalars['Float'];
  link: Scalars['String'];
  netIncome: Scalars['Float'];
  netIncomeRatio: Scalars['Float'];
  operatingExpenses: Scalars['Float'];
  operatingIncome: Scalars['Float'];
  operatingIncomeRatio: Scalars['Float'];
  otherExpenses: Scalars['Float'];
  period: Period;
  reportedCurrency: ReportedCurrency;
  researchAndDevelopmentExpenses: Scalars['Float'];
  revenue: Scalars['Float'];
  sellingAndMarketingExpenses: Scalars['Float'];
  sellingGeneralAndAdministrativeExpenses: Scalars['Float'];
  symbol: Scalars['String'];
  totalOtherIncomeExpensesNet: Scalars['Float'];
  weightedAverageShsOut: Scalars['Float'];
  weightedAverageShsOutDil: Scalars['Float'];
};

export type KeyMetrics = {
  __typename?: 'KeyMetrics';
  averageInventory?: Maybe<Scalars['Float']>;
  averagePayables?: Maybe<Scalars['Float']>;
  averageReceivables?: Maybe<Scalars['Float']>;
  bookValuePerShare?: Maybe<Scalars['Float']>;
  capexPerShare?: Maybe<Scalars['Float']>;
  capexToDepreciation?: Maybe<Scalars['Float']>;
  capexToOperatingCashFlow?: Maybe<Scalars['Float']>;
  capexToRevenue?: Maybe<Scalars['Float']>;
  cashPerShare?: Maybe<Scalars['Float']>;
  currentRatio?: Maybe<Scalars['Float']>;
  date: Scalars['String'];
  daysOfInventoryOnHand?: Maybe<Scalars['Float']>;
  daysPayablesOutstanding?: Maybe<Scalars['Float']>;
  daysSalesOutstanding?: Maybe<Scalars['Float']>;
  debtToAssets?: Maybe<Scalars['Float']>;
  debtToEquity?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  earningsYield?: Maybe<Scalars['Float']>;
  enterpriseValue?: Maybe<Scalars['Float']>;
  enterpriseValueOverEBITDA?: Maybe<Scalars['Float']>;
  evToFreeCashFlow?: Maybe<Scalars['Float']>;
  evToOperatingCashFlow?: Maybe<Scalars['Float']>;
  evToSales?: Maybe<Scalars['Float']>;
  freeCashFlowPerShare?: Maybe<Scalars['Float']>;
  freeCashFlowYield?: Maybe<Scalars['Float']>;
  grahamNetNet?: Maybe<Scalars['Float']>;
  grahamNumber?: Maybe<Scalars['Float']>;
  incomeQuality?: Maybe<Scalars['Float']>;
  intangiblesToTotalAssets?: Maybe<Scalars['Float']>;
  interestCoverage?: Maybe<Scalars['Float']>;
  interestDebtPerShare?: Maybe<Scalars['Float']>;
  inventoryTurnover?: Maybe<Scalars['Float']>;
  investedCapital?: Maybe<Scalars['Float']>;
  marketCap?: Maybe<Scalars['Float']>;
  netCurrentAssetValue?: Maybe<Scalars['Float']>;
  netDebtToEBITDA?: Maybe<Scalars['Float']>;
  netIncomePerShare?: Maybe<Scalars['Float']>;
  operatingCashFlowPerShare?: Maybe<Scalars['Float']>;
  payablesTurnover?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  pbRatio?: Maybe<Scalars['Float']>;
  peRatio?: Maybe<Scalars['Float']>;
  period: Period;
  pfcfRatio?: Maybe<Scalars['Float']>;
  pocfratio?: Maybe<Scalars['Float']>;
  priceToSalesRatio?: Maybe<Scalars['Float']>;
  ptbRatio?: Maybe<Scalars['Float']>;
  receivablesTurnover?: Maybe<Scalars['Float']>;
  researchAndDdevelopementToRevenue?: Maybe<Scalars['Float']>;
  returnOnTangibleAssets?: Maybe<Scalars['Float']>;
  revenuePerShare?: Maybe<Scalars['Float']>;
  roe?: Maybe<Scalars['Float']>;
  roic?: Maybe<Scalars['Float']>;
  salesGeneralAndAdministrativeToRevenue?: Maybe<Scalars['Float']>;
  shareholdersEquityPerShare?: Maybe<Scalars['Float']>;
  stockBasedCompensationToRevenue?: Maybe<Scalars['Float']>;
  symbol: Scalars['String'];
  tangibleAssetValue?: Maybe<Scalars['Float']>;
  tangibleBookValuePerShare?: Maybe<Scalars['Float']>;
  workingCapital?: Maybe<Scalars['Float']>;
};

export type KeyMetricsTtm = {
  __typename?: 'KeyMetricsTTM';
  averageInventoryTTM?: Maybe<Scalars['Float']>;
  averagePayablesTTM?: Maybe<Scalars['Float']>;
  averageReceivablesTTM?: Maybe<Scalars['Float']>;
  bookValuePerShareTTM?: Maybe<Scalars['Float']>;
  capexPerShareTTM?: Maybe<Scalars['Float']>;
  capexToDepreciationTTM?: Maybe<Scalars['Float']>;
  capexToOperatingCashFlowTTM?: Maybe<Scalars['Float']>;
  capexToRevenueTTM?: Maybe<Scalars['Float']>;
  cashPerShareTTM?: Maybe<Scalars['Float']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  daysOfInventoryOnHandTTM?: Maybe<Scalars['Float']>;
  daysPayablesOutstandingTTM?: Maybe<Scalars['Float']>;
  daysSalesOutstandingTTM?: Maybe<Scalars['Float']>;
  debtToAssetsTTM?: Maybe<Scalars['Float']>;
  debtToEquityTTM?: Maybe<Scalars['Float']>;
  debtToMarketCapTTM?: Maybe<Scalars['Float']>;
  dividendPerShareTTM?: Maybe<Scalars['Float']>;
  dividendYieldPercentageTTM?: Maybe<Scalars['Float']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  earningsYieldTTM?: Maybe<Scalars['Float']>;
  enterpriseValueOverEBITDATTM?: Maybe<Scalars['Float']>;
  enterpriseValueTTM?: Maybe<Scalars['Float']>;
  evToFreeCashFlowTTM?: Maybe<Scalars['Float']>;
  evToOperatingCashFlowTTM?: Maybe<Scalars['Float']>;
  evToSalesTTM?: Maybe<Scalars['Float']>;
  freeCashFlowPerShareTTM?: Maybe<Scalars['Float']>;
  freeCashFlowYieldTTM?: Maybe<Scalars['Float']>;
  grahamNetNetTTM?: Maybe<Scalars['Float']>;
  grahamNumberTTM?: Maybe<Scalars['Float']>;
  incomeQualityTTM?: Maybe<Scalars['Float']>;
  intangiblesToTotalAssetsTTM?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  interestDebtPerShareTTM?: Maybe<Scalars['Float']>;
  inventoryTurnoverTTM?: Maybe<Scalars['Float']>;
  investedCapitalTTM?: Maybe<Scalars['Float']>;
  marketCapTTM?: Maybe<Scalars['Float']>;
  netCurrentAssetValueTTM?: Maybe<Scalars['Float']>;
  netDebtToEBITDATTM?: Maybe<Scalars['Float']>;
  netIncomePerShareTTM?: Maybe<Scalars['Float']>;
  operatingCashFlowPerShareTTM?: Maybe<Scalars['Float']>;
  payablesTurnoverTTM?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  pbRatioTTM?: Maybe<Scalars['Float']>;
  peRatioTTM?: Maybe<Scalars['Float']>;
  pfcfRatioTTM?: Maybe<Scalars['Float']>;
  pocfratioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  ptbRatioTTM?: Maybe<Scalars['Float']>;
  receivablesTurnoverTTM?: Maybe<Scalars['Float']>;
  researchAndDevelopementToRevenueTTM?: Maybe<Scalars['Float']>;
  returnOnTangibleAssetsTTM?: Maybe<Scalars['Float']>;
  revenuePerShareTTM?: Maybe<Scalars['Float']>;
  roeTTM?: Maybe<Scalars['Float']>;
  roicTTM?: Maybe<Scalars['Float']>;
  salesGeneralAndAdministrativeToRevenueTTM?: Maybe<Scalars['Float']>;
  shareholdersEquityPerShareTTM?: Maybe<Scalars['Float']>;
  stockBasedCompensationToRevenueTTM?: Maybe<Scalars['Float']>;
  tangibleAssetValueTTM?: Maybe<Scalars['Float']>;
  tangibleBookValuePerShareTTM?: Maybe<Scalars['Float']>;
  workingCapitalTTM?: Maybe<Scalars['Float']>;
};

export type LongQuote = {
  __typename?: 'LongQuote';
  avgVolume?: Maybe<Scalars['Float']>;
  change?: Maybe<Scalars['Float']>;
  changesPercentage?: Maybe<Scalars['Float']>;
  dayHigh?: Maybe<Scalars['Float']>;
  dayLow?: Maybe<Scalars['Float']>;
  earningsAnnouncement?: Maybe<Scalars['String']>;
  eps?: Maybe<Scalars['Float']>;
  exchange?: Maybe<Scalars['String']>;
  marketCap?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  open?: Maybe<Scalars['Float']>;
  pe?: Maybe<Scalars['Float']>;
  previousClose?: Maybe<Scalars['Float']>;
  price: Scalars['Float'];
  priceAvg50?: Maybe<Scalars['Float']>;
  priceAvg200?: Maybe<Scalars['Float']>;
  sharesOutstanding?: Maybe<Scalars['Float']>;
  symbol: Scalars['String'];
  timestamp: Scalars['Float'];
  volume?: Maybe<Scalars['Float']>;
  yearHigh?: Maybe<Scalars['Float']>;
  yearLow?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateName: User;
};


export type MutationUpdateNameArgs = {
  name: Scalars['String'];
};

export enum Period {
  Fy = 'FY',
  Q1 = 'Q1',
  Q2 = 'Q2',
  Q3 = 'Q3',
  Q4 = 'Q4'
}

export type Prices = {
  __typename?: 'Prices';
  historical: Array<HistoricalType>;
  symbol: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  balanceSheet: Array<BalanceSheet>;
  cashFlow: Array<CashFlow>;
  companyProfile: CompanyProfile;
  enterpriseValue: EnterpriseValue;
  financialRatios: Array<Maybe<FinancialRatios>>;
  incomeStatement: Array<IncomeStatement>;
  keyMetrics: Array<KeyMetrics>;
  keyMetricsTTM: KeyMetricsTtm;
  longQuote: LongQuote;
  prices: Prices;
  quote: Quote;
  ttmBalanceSheet: Array<BalanceSheet>;
  ttmCashFlow: Array<CashFlow>;
  ttmIncomeStatement: Array<IncomeStatement>;
  ttmRatios: FinancialRatioTtm;
  viewer: User;
};


export type QueryBalanceSheetArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  quarter?: InputMaybe<Scalars['Boolean']>;
  symbol: Scalars['String'];
};


export type QueryCashFlowArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  quarter?: InputMaybe<Scalars['Boolean']>;
  symbol: Scalars['String'];
};


export type QueryCompanyProfileArgs = {
  symbol: Scalars['String'];
};


export type QueryEnterpriseValueArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  quarter?: InputMaybe<Scalars['Boolean']>;
  symbol: Scalars['String'];
};


export type QueryFinancialRatiosArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  quarter?: InputMaybe<Scalars['Boolean']>;
  symbol: Scalars['String'];
};


export type QueryIncomeStatementArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  quarter?: InputMaybe<Scalars['Boolean']>;
  symbol: Scalars['String'];
};


export type QueryKeyMetricsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  quarter?: InputMaybe<Scalars['Boolean']>;
  symbol: Scalars['String'];
};


export type QueryKeyMetricsTtmArgs = {
  symbol: Scalars['String'];
};


export type QueryLongQuoteArgs = {
  symbol: Scalars['String'];
};


export type QueryPricesArgs = {
  fromDate?: InputMaybe<Scalars['String']>;
  symbol: Scalars['String'];
};


export type QueryQuoteArgs = {
  symbol: Scalars['String'];
};


export type QueryTtmBalanceSheetArgs = {
  symbol: Scalars['String'];
};


export type QueryTtmCashFlowArgs = {
  symbol: Scalars['String'];
};


export type QueryTtmIncomeStatementArgs = {
  symbol: Scalars['String'];
};


export type QueryTtmRatiosArgs = {
  symbol: Scalars['String'];
};

export type Quote = {
  __typename?: 'Quote';
  price: Scalars['Float'];
  symbol: Scalars['String'];
  volume: Scalars['Float'];
};

export enum ReportedCurrency {
  Usd = 'USD'
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BalanceSheet: ResolverTypeWrapper<BalanceSheet>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CashFlow: ResolverTypeWrapper<CashFlow>;
  CompanyProfile: ResolverTypeWrapper<CompanyProfile>;
  EnterpriseValue: ResolverTypeWrapper<EnterpriseValue>;
  FinancialRatioTTM: ResolverTypeWrapper<FinancialRatioTtm>;
  FinancialRatios: ResolverTypeWrapper<FinancialRatios>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  HistoricalType: ResolverTypeWrapper<HistoricalType>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IncomeStatement: ResolverTypeWrapper<IncomeStatement>;
  KeyMetrics: ResolverTypeWrapper<KeyMetrics>;
  KeyMetricsTTM: ResolverTypeWrapper<KeyMetricsTtm>;
  LongQuote: ResolverTypeWrapper<LongQuote>;
  Mutation: ResolverTypeWrapper<{}>;
  Period: Period;
  Prices: ResolverTypeWrapper<Prices>;
  Query: ResolverTypeWrapper<{}>;
  Quote: ResolverTypeWrapper<Quote>;
  ReportedCurrency: ReportedCurrency;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BalanceSheet: BalanceSheet;
  Boolean: Scalars['Boolean'];
  CashFlow: CashFlow;
  CompanyProfile: CompanyProfile;
  EnterpriseValue: EnterpriseValue;
  FinancialRatioTTM: FinancialRatioTtm;
  FinancialRatios: FinancialRatios;
  Float: Scalars['Float'];
  HistoricalType: HistoricalType;
  ID: Scalars['ID'];
  IncomeStatement: IncomeStatement;
  KeyMetrics: KeyMetrics;
  KeyMetricsTTM: KeyMetricsTtm;
  LongQuote: LongQuote;
  Mutation: {};
  Prices: Prices;
  Query: {};
  Quote: Quote;
  String: Scalars['String'];
  User: User;
};

export type BalanceSheetResolvers<ContextType = any, ParentType extends ResolversParentTypes['BalanceSheet'] = ResolversParentTypes['BalanceSheet']> = {
  acceptedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountPayables?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  accumulatedOtherComprehensiveIncomeLoss?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  calendarYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  capitalLeaseObligations?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashAndCashEquivalents?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  cashAndShortTermInvestments?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cik?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commonStock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deferredRevenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deferredRevenueNonCurrent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deferredTaxLiabilitiesNonCurrent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fillingDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finalLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  goodwill?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  goodwillAndIntangibleAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  intangibleAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  inventory?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longTermDebt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longTermInvestments?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minorityInterest?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netDebt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netReceivables?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  otherAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  otherCurrentAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  otherCurrentLiabilities?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  otherLiabilities?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  otherNonCurrentAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  otherNonCurrentLiabilities?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  othertotalStockholdersEquity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  preferredStock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  propertyPlantEquipmentNet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reportedCurrency?: Resolver<ResolversTypes['ReportedCurrency'], ParentType, ContextType>;
  retainedEarnings?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shortTermDebt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shortTermInvestments?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  taxAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxPayables?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalCurrentAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalCurrentLiabilities?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalDebt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalEquity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalInvestments?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalLiabilities?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalLiabilitiesAndStockholdersEquity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalLiabilitiesAndTotalEquity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalNonCurrentAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalNonCurrentLiabilities?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalStockholdersEquity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CashFlowResolvers<ContextType = any, ParentType extends ResolversParentTypes['CashFlow'] = ResolversParentTypes['CashFlow']> = {
  acceptedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountsPayables?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  accountsReceivables?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  acquisitionsNet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  calendarYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  capitalExpenditure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashAtBeginningOfPeriod?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashAtEndOfPeriod?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  changeInWorkingCapital?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cik?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commonStockIssued?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commonStockRepurchased?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  debtRepayment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deferredIncomeTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  depreciationAndAmortization?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendsPaid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  effectOfForexChangesOnCash?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fillingDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finalLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  freeCashFlow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  inventory?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  investmentsInPropertyPlantAndEquipment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  netCashProvidedByOperatingActivities?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netCashUsedForInvestingActivites?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netCashUsedProvidedByFinancingActivities?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netChangeInCash?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netIncome?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  operatingCashFlow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  otherFinancingActivites?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  otherInvestingActivites?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  otherNonCashItems?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  otherWorkingCapital?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  purchasesOfInvestments?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reportedCurrency?: Resolver<Maybe<ResolversTypes['ReportedCurrency']>, ParentType, ContextType>;
  salesMaturitiesOfInvestments?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stockBasedCompensation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompanyProfile'] = ResolversParentTypes['CompanyProfile']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  beta?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ceo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  changes?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  cik?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cusip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dcf?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dcfDiff?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  defaultImage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exchange?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exchangeShortName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullTimeEmployees?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  industry?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ipoDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActivelyTrading?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isAdr?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isEtf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFund?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastDiv?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mktCap?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  range?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sector?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  volAvg?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnterpriseValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['EnterpriseValue'] = ResolversParentTypes['EnterpriseValue']> = {
  addTotalDebt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enterpriseValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  marketCapitalization?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minusCashAndCashEquivalents?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numberOfShares?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stockPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinancialRatioTtmResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialRatioTTM'] = ResolversParentTypes['FinancialRatioTTM']> = {
  assetTurnoverTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capitalExpenditureCoverageRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashConversionCycleTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashFlowCoverageRatiosTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashFlowToDebtRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashPerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  companyEquityMultiplierTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  daysOfInventoryOutstandingTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  daysOfPayablesOutstandingTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  daysOfSalesOutstandingTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debtEquityRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debtRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendPaidAndCapexCoverageRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendPerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendYielPercentageTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendYielTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendYieldTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ebitPerRevenueTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ebtPerEbitTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  effectiveTaxRateTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  enterpriseValueMultipleTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fixedAssetTurnoverTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  freeCashFlowOperatingCashFlowRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  freeCashFlowPerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossProfitMarginTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  interestCoverageTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  inventoryTurnoverTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longTermDebtToCapitalizationTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netIncomePerEBTTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netProfitMarginTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  operatingCashFlowPerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  operatingCashFlowSalesRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  operatingCycleTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  operatingProfitMarginTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payablesTurnoverTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payoutRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  peRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pegRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pretaxProfitMarginTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceBookValueRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceCashFlowRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceEarningsRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceEarningsToGrowthRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceFairValueTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceSalesRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceToBookRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceToFreeCashFlowsRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceToOperatingCashFlowsRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceToSalesRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quickRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  receivablesTurnoverTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  returnOnAssetsTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  returnOnCapitalEmployedTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  returnOnEquityTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shortTermCoverageRatiosTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalDebtToCapitalizationTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinancialRatiosResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialRatios'] = ResolversParentTypes['FinancialRatios']> = {
  assetTurnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capitalExpenditureCoverageRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashConversionCycle?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashFlowCoverageRatios?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashFlowToDebtRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashPerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  companyEquityMultiplier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  daysOfInventoryOutstanding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  daysOfPayablesOutstanding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  daysOfSalesOutstanding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debtEquityRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debtRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendPaidAndCapexCoverageRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendPayoutRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendYield?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ebitPerRevenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ebtPerEbit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  effectiveTaxRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  enterpriseValueMultiple?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fixedAssetTurnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  freeCashFlowOperatingCashFlowRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  freeCashFlowPerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossProfitMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  interestCoverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  inventoryTurnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longTermDebtToCapitalization?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netIncomePerEBT?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netProfitMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  operatingCashFlowPerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  operatingCashFlowSalesRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  operatingCycle?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  operatingProfitMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payablesTurnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payoutRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  pretaxProfitMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceBookValueRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceCashFlowRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceEarningsRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceEarningsToGrowthRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceFairValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceSalesRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceToBookRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceToFreeCashFlowsRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceToOperatingCashFlowsRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceToSalesRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quickRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  receivablesTurnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  returnOnAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  returnOnCapitalEmployed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  returnOnEquity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shortTermCoverageRatios?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalDebtToCapitalization?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HistoricalTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HistoricalType'] = ResolversParentTypes['HistoricalType']> = {
  close?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncomeStatementResolvers<ContextType = any, ParentType extends ResolversParentTypes['IncomeStatement'] = ResolversParentTypes['IncomeStatement']> = {
  acceptedDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  calendarYear?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cik?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  costAndExpenses?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  costOfRevenue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  depreciationAndAmortization?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ebitda?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ebitdaratio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  eps?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  epsdiluted?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  fillingDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  finalLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  generalAndAdministrativeExpenses?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  grossProfit?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  grossProfitRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  incomeBeforeTax?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  incomeBeforeTaxRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  incomeTaxExpense?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  interestExpense?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  interestIncome?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  netIncome?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  netIncomeRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  operatingExpenses?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  operatingIncome?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  operatingIncomeRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  otherExpenses?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  reportedCurrency?: Resolver<ResolversTypes['ReportedCurrency'], ParentType, ContextType>;
  researchAndDevelopmentExpenses?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  revenue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sellingAndMarketingExpenses?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sellingGeneralAndAdministrativeExpenses?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalOtherIncomeExpensesNet?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weightedAverageShsOut?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weightedAverageShsOutDil?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyMetricsResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyMetrics'] = ResolversParentTypes['KeyMetrics']> = {
  averageInventory?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averagePayables?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averageReceivables?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bookValuePerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capexPerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capexToDepreciation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capexToOperatingCashFlow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capexToRevenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashPerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  daysOfInventoryOnHand?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  daysPayablesOutstanding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  daysSalesOutstanding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debtToAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debtToEquity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendYield?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  earningsYield?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  enterpriseValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  enterpriseValueOverEBITDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  evToFreeCashFlow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  evToOperatingCashFlow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  evToSales?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  freeCashFlowPerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  freeCashFlowYield?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grahamNetNet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grahamNumber?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  incomeQuality?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  intangiblesToTotalAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  interestCoverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  interestDebtPerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  inventoryTurnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  investedCapital?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  marketCap?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netCurrentAssetValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netDebtToEBITDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netIncomePerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  operatingCashFlowPerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payablesTurnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payoutRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pbRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  peRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  pfcfRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pocfratio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceToSalesRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ptbRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  receivablesTurnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  researchAndDdevelopementToRevenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  returnOnTangibleAssets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  revenuePerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  roe?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  roic?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  salesGeneralAndAdministrativeToRevenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shareholdersEquityPerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stockBasedCompensationToRevenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tangibleAssetValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tangibleBookValuePerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  workingCapital?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyMetricsTtmResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyMetricsTTM'] = ResolversParentTypes['KeyMetricsTTM']> = {
  averageInventoryTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averagePayablesTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averageReceivablesTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bookValuePerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capexPerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capexToDepreciationTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capexToOperatingCashFlowTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capexToRevenueTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cashPerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  daysOfInventoryOnHandTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  daysPayablesOutstandingTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  daysSalesOutstandingTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debtToAssetsTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debtToEquityTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debtToMarketCapTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendPerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendYieldPercentageTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendYieldTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  earningsYieldTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  enterpriseValueOverEBITDATTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  enterpriseValueTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  evToFreeCashFlowTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  evToOperatingCashFlowTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  evToSalesTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  freeCashFlowPerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  freeCashFlowYieldTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grahamNetNetTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grahamNumberTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  incomeQualityTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  intangiblesToTotalAssetsTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  interestCoverageTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  interestDebtPerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  inventoryTurnoverTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  investedCapitalTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  marketCapTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netCurrentAssetValueTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netDebtToEBITDATTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netIncomePerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  operatingCashFlowPerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payablesTurnoverTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payoutRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pbRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  peRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pfcfRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pocfratioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceToSalesRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ptbRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  receivablesTurnoverTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  researchAndDevelopementToRevenueTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  returnOnTangibleAssetsTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  revenuePerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  roeTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  roicTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  salesGeneralAndAdministrativeToRevenueTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shareholdersEquityPerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stockBasedCompensationToRevenueTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tangibleAssetValueTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tangibleBookValuePerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  workingCapitalTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LongQuoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['LongQuote'] = ResolversParentTypes['LongQuote']> = {
  avgVolume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  changesPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dayHigh?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dayLow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  earningsAnnouncement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eps?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  exchange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marketCap?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  open?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pe?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  previousClose?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceAvg50?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceAvg200?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sharesOutstanding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  yearHigh?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  yearLow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  updateName?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateNameArgs, 'name'>>;
};

export type PricesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Prices'] = ResolversParentTypes['Prices']> = {
  historical?: Resolver<Array<ResolversTypes['HistoricalType']>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  balanceSheet?: Resolver<Array<ResolversTypes['BalanceSheet']>, ParentType, ContextType, RequireFields<QueryBalanceSheetArgs, 'symbol'>>;
  cashFlow?: Resolver<Array<ResolversTypes['CashFlow']>, ParentType, ContextType, RequireFields<QueryCashFlowArgs, 'symbol'>>;
  companyProfile?: Resolver<ResolversTypes['CompanyProfile'], ParentType, ContextType, RequireFields<QueryCompanyProfileArgs, 'symbol'>>;
  enterpriseValue?: Resolver<ResolversTypes['EnterpriseValue'], ParentType, ContextType, RequireFields<QueryEnterpriseValueArgs, 'symbol'>>;
  financialRatios?: Resolver<Array<Maybe<ResolversTypes['FinancialRatios']>>, ParentType, ContextType, RequireFields<QueryFinancialRatiosArgs, 'symbol'>>;
  incomeStatement?: Resolver<Array<ResolversTypes['IncomeStatement']>, ParentType, ContextType, RequireFields<QueryIncomeStatementArgs, 'symbol'>>;
  keyMetrics?: Resolver<Array<ResolversTypes['KeyMetrics']>, ParentType, ContextType, RequireFields<QueryKeyMetricsArgs, 'symbol'>>;
  keyMetricsTTM?: Resolver<ResolversTypes['KeyMetricsTTM'], ParentType, ContextType, RequireFields<QueryKeyMetricsTtmArgs, 'symbol'>>;
  longQuote?: Resolver<ResolversTypes['LongQuote'], ParentType, ContextType, RequireFields<QueryLongQuoteArgs, 'symbol'>>;
  prices?: Resolver<ResolversTypes['Prices'], ParentType, ContextType, RequireFields<QueryPricesArgs, 'symbol'>>;
  quote?: Resolver<ResolversTypes['Quote'], ParentType, ContextType, RequireFields<QueryQuoteArgs, 'symbol'>>;
  ttmBalanceSheet?: Resolver<Array<ResolversTypes['BalanceSheet']>, ParentType, ContextType, RequireFields<QueryTtmBalanceSheetArgs, 'symbol'>>;
  ttmCashFlow?: Resolver<Array<ResolversTypes['CashFlow']>, ParentType, ContextType, RequireFields<QueryTtmCashFlowArgs, 'symbol'>>;
  ttmIncomeStatement?: Resolver<Array<ResolversTypes['IncomeStatement']>, ParentType, ContextType, RequireFields<QueryTtmIncomeStatementArgs, 'symbol'>>;
  ttmRatios?: Resolver<ResolversTypes['FinancialRatioTTM'], ParentType, ContextType, RequireFields<QueryTtmRatiosArgs, 'symbol'>>;
  viewer?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type QuoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Quote'] = ResolversParentTypes['Quote']> = {
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BalanceSheet?: BalanceSheetResolvers<ContextType>;
  CashFlow?: CashFlowResolvers<ContextType>;
  CompanyProfile?: CompanyProfileResolvers<ContextType>;
  EnterpriseValue?: EnterpriseValueResolvers<ContextType>;
  FinancialRatioTTM?: FinancialRatioTtmResolvers<ContextType>;
  FinancialRatios?: FinancialRatiosResolvers<ContextType>;
  HistoricalType?: HistoricalTypeResolvers<ContextType>;
  IncomeStatement?: IncomeStatementResolvers<ContextType>;
  KeyMetrics?: KeyMetricsResolvers<ContextType>;
  KeyMetricsTTM?: KeyMetricsTtmResolvers<ContextType>;
  LongQuote?: LongQuoteResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Prices?: PricesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Quote?: QuoteResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

