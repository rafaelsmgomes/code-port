import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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

export type GetCompanyProfileQueryVariables = Exact<{
  symbol: Scalars['String'];
}>;


export type GetCompanyProfileQuery = { __typename?: 'Query', companyProfile: { __typename?: 'CompanyProfile', symbol: string, price: number, mktCap: number, lastDiv: number, range: string, changes: number, companyName: string, currency: string, country: string, dcf: number, dcfDiff?: number | null, description: string, exchangeShortName: string, fullTimeEmployees: string, industry: string, ipoDate: string, isAdr: boolean, isEtf: boolean, isFund: boolean, state: string, sector: string, website: string, zip: string } };

export type GetDividendDataQueryVariables = Exact<{
  symbol: Scalars['String'];
}>;


export type GetDividendDataQuery = { __typename?: 'Query', keyMetricsTTM: { __typename?: 'KeyMetricsTTM', payoutRatioTTM?: number | null } };

export type GetDividendPerShareQueryVariables = Exact<{
  symbol: Scalars['String'];
  quarter?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Float']>;
}>;


export type GetDividendPerShareQuery = { __typename?: 'Query', keyMetrics: Array<{ __typename?: 'KeyMetrics', dividendYield?: number | null, date: string }> };

export type GetPricesQueryVariables = Exact<{
  symbol: Scalars['String'];
  fromDate?: InputMaybe<Scalars['String']>;
}>;


export type GetPricesQuery = { __typename?: 'Query', prices: { __typename?: 'Prices', symbol: string, historical: Array<{ __typename?: 'HistoricalType', date: string, close: number }> } };

export type GetProfileDataQueryVariables = Exact<{
  symbol: Scalars['String'];
  fromDate?: InputMaybe<Scalars['String']>;
}>;


export type GetProfileDataQuery = { __typename?: 'Query', companyProfile: { __typename?: 'CompanyProfile', symbol: string, description: string, exchangeShortName: string, industry: string, ipoDate: string, mktCap: number, range: string, ceo: string, country: string, sector: string, website: string, companyName: string, changes: number, currency: string, fullTimeEmployees: string }, prices: { __typename?: 'Prices', historical: Array<{ __typename?: 'HistoricalType', close: number, date: string }> }, metrics: { __typename?: 'KeyMetricsTTM', marketCapTTM?: number | null, enterpriseValueTTM?: number | null, revenuePerShareTTM?: number | null, netIncomePerShareTTM?: number | null, operatingCashFlowPerShareTTM?: number | null, freeCashFlowPerShareTTM?: number | null, cashPerShareTTM?: number | null, bookValuePerShareTTM?: number | null, tangibleBookValuePerShareTTM?: number | null, peRatioTTM?: number | null, priceToSalesRatioTTM?: number | null, pbRatioTTM?: number | null, ptbRatioTTM?: number | null, evToSalesTTM?: number | null, enterpriseValueOverEBITDATTM?: number | null, evToOperatingCashFlowTTM?: number | null, evToFreeCashFlowTTM?: number | null, earningsYieldTTM?: number | null, freeCashFlowYieldTTM?: number | null, incomeQualityTTM?: number | null, dividendPerShareTTM?: number | null, dividendYieldPercentageTTM?: number | null, payoutRatioTTM?: number | null, shareholdersEquityPerShareTTM?: number | null, debtToEquityTTM?: number | null, debtToAssetsTTM?: number | null, netDebtToEBITDATTM?: number | null, interestCoverageTTM?: number | null, roicTTM?: number | null, roeTTM?: number | null, returnOnTangibleAssetsTTM?: number | null }, ev: { __typename?: 'EnterpriseValue', minusCashAndCashEquivalents?: number | null, addTotalDebt?: number | null }, incomeStatement: Array<{ __typename?: 'IncomeStatement', eps: number, epsdiluted: number }>, quote: { __typename?: 'Quote', price: number } };

export type ProfilePartialFragment = { __typename?: 'CompanyProfile', symbol: string, description: string, exchangeShortName: string, industry: string, ipoDate: string, mktCap: number, range: string, ceo: string, country: string, sector: string, website: string, companyName: string, changes: number, currency: string, fullTimeEmployees: string };

export type TtmRatiosFragment = { __typename?: 'FinancialRatioTTM', debtRatioTTM?: number | null, dividendPerShareTTM?: number | null, dividendYieldTTM?: number | null, enterpriseValueMultipleTTM?: number | null, freeCashFlowOperatingCashFlowRatioTTM?: number | null, freeCashFlowPerShareTTM?: number | null, interestCoverageTTM?: number | null, longTermDebtToCapitalizationTTM?: number | null, netProfitMarginTTM?: number | null, payoutRatioTTM?: number | null, priceBookValueRatioTTM?: number | null, priceCashFlowRatioTTM?: number | null, priceEarningsRatioTTM?: number | null, priceFairValueTTM?: number | null, priceSalesRatioTTM?: number | null, priceToBookRatioTTM?: number | null, priceToSalesRatioTTM?: number | null, returnOnAssetsTTM?: number | null, returnOnCapitalEmployedTTM?: number | null, returnOnEquityTTM?: number | null };

export type LatestIncStatementFragment = { __typename?: 'IncomeStatement', eps: number, epsdiluted: number };

export type KeyMetricsPartialFragment = { __typename?: 'KeyMetricsTTM', marketCapTTM?: number | null, enterpriseValueTTM?: number | null, revenuePerShareTTM?: number | null, netIncomePerShareTTM?: number | null, operatingCashFlowPerShareTTM?: number | null, freeCashFlowPerShareTTM?: number | null, cashPerShareTTM?: number | null, bookValuePerShareTTM?: number | null, tangibleBookValuePerShareTTM?: number | null, peRatioTTM?: number | null, priceToSalesRatioTTM?: number | null, pbRatioTTM?: number | null, ptbRatioTTM?: number | null, evToSalesTTM?: number | null, enterpriseValueOverEBITDATTM?: number | null, evToOperatingCashFlowTTM?: number | null, evToFreeCashFlowTTM?: number | null, earningsYieldTTM?: number | null, freeCashFlowYieldTTM?: number | null, incomeQualityTTM?: number | null, dividendPerShareTTM?: number | null, dividendYieldPercentageTTM?: number | null, payoutRatioTTM?: number | null, shareholdersEquityPerShareTTM?: number | null, debtToEquityTTM?: number | null, debtToAssetsTTM?: number | null, netDebtToEBITDATTM?: number | null, interestCoverageTTM?: number | null, roicTTM?: number | null, roeTTM?: number | null, returnOnTangibleAssetsTTM?: number | null };

export type GetTtmRatioQueryVariables = Exact<{
  symbol: Scalars['String'];
}>;


export type GetTtmRatioQuery = { __typename?: 'Query', ttmRatios: { __typename?: 'FinancialRatioTTM', assetTurnoverTTM?: number | null, debtRatioTTM?: number | null, dividendPerShareTTM?: number | null, dividendYieldTTM?: number | null, enterpriseValueMultipleTTM?: number | null, freeCashFlowOperatingCashFlowRatioTTM?: number | null, freeCashFlowPerShareTTM?: number | null, interestCoverageTTM?: number | null, longTermDebtToCapitalizationTTM?: number | null, netProfitMarginTTM?: number | null, payoutRatioTTM?: number | null, priceBookValueRatioTTM?: number | null, priceCashFlowRatioTTM?: number | null, priceEarningsRatioTTM?: number | null, priceFairValueTTM?: number | null, priceSalesRatioTTM?: number | null, priceToBookRatioTTM?: number | null, priceToSalesRatioTTM?: number | null, returnOnAssetsTTM?: number | null, returnOnCapitalEmployedTTM?: number | null, returnOnEquityTTM?: number | null } };

export type IncomeStatementPartialFragment = { __typename?: 'IncomeStatement', date: string, period: Period, revenue: number, ebitda: number, netIncome: number, grossProfitRatio: number, depreciationAndAmortization: number, eps: number, incomeTaxExpense: number, interestExpense: number, interestIncome: number, incomeBeforeTax: number, otherExpenses: number, researchAndDevelopmentExpenses: number, operatingIncome: number };

export type BsFragment = { __typename?: 'BalanceSheet', date: string, totalDebt: number };

export type CfFragment = { __typename?: 'CashFlow', date: string, operatingCashFlow?: number | null, capitalExpenditure?: number | null, depreciationAndAmortization?: number | null, freeCashFlow?: number | null, netCashUsedForInvestingActivites?: number | null };

export type GetIncomeStatementQueryVariables = Exact<{
  symbol: Scalars['String'];
}>;


export type GetIncomeStatementQuery = { __typename?: 'Query', incomeStatement: Array<{ __typename?: 'IncomeStatement', date: string, period: Period, revenue: number, ebitda: number, netIncome: number, grossProfitRatio: number, depreciationAndAmortization: number, eps: number, incomeTaxExpense: number, interestExpense: number, interestIncome: number, incomeBeforeTax: number, otherExpenses: number, researchAndDevelopmentExpenses: number, operatingIncome: number }> };

export type GetTtmFinancialsQueryVariables = Exact<{
  symbol: Scalars['String'];
}>;


export type GetTtmFinancialsQuery = { __typename?: 'Query', ttmIncomeStatement: Array<{ __typename?: 'IncomeStatement', date: string, period: Period, revenue: number, ebitda: number, netIncome: number, grossProfitRatio: number, depreciationAndAmortization: number, eps: number, incomeTaxExpense: number, interestExpense: number, interestIncome: number, incomeBeforeTax: number, otherExpenses: number, researchAndDevelopmentExpenses: number, operatingIncome: number }>, quarterIncomeStatement: Array<{ __typename?: 'IncomeStatement', date: string, period: Period, revenue: number, ebitda: number, netIncome: number, grossProfitRatio: number, depreciationAndAmortization: number, eps: number, incomeTaxExpense: number, interestExpense: number, interestIncome: number, incomeBeforeTax: number, otherExpenses: number, researchAndDevelopmentExpenses: number, operatingIncome: number }>, ttmBalanceSheet: Array<{ __typename?: 'BalanceSheet', date: string, totalDebt: number }>, quarterBalanceSheet: Array<{ __typename?: 'BalanceSheet', date: string, totalDebt: number }>, ttmCashFlow: Array<{ __typename?: 'CashFlow', date: string, operatingCashFlow?: number | null, capitalExpenditure?: number | null, depreciationAndAmortization?: number | null, freeCashFlow?: number | null, netCashUsedForInvestingActivites?: number | null }>, quarterCashFlow: Array<{ __typename?: 'CashFlow', date: string, operatingCashFlow?: number | null, capitalExpenditure?: number | null, depreciationAndAmortization?: number | null, freeCashFlow?: number | null, netCashUsedForInvestingActivites?: number | null }> };

export type UpdateNameMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type UpdateNameMutation = { __typename?: 'Mutation', updateName: { __typename?: 'User', id: string, name: string, status: string } };

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { __typename?: 'Query', viewer: { __typename?: 'User', status: string, id: string, name: string } };

export type PartialFragment = { __typename?: 'User', id: string, name: string };

export const ProfilePartialFragmentDoc = gql`
    fragment ProfilePartial on CompanyProfile {
  symbol
  description
  exchangeShortName
  industry
  ipoDate
  mktCap
  range
  ceo
  country
  sector
  website
  companyName
  changes
  currency
  fullTimeEmployees
  website
}
    `;
export const TtmRatiosFragmentDoc = gql`
    fragment TtmRatios on FinancialRatioTTM {
  debtRatioTTM
  dividendPerShareTTM
  dividendYieldTTM
  enterpriseValueMultipleTTM
  freeCashFlowOperatingCashFlowRatioTTM
  freeCashFlowPerShareTTM
  interestCoverageTTM
  longTermDebtToCapitalizationTTM
  netProfitMarginTTM
  payoutRatioTTM
  priceBookValueRatioTTM
  priceCashFlowRatioTTM
  priceEarningsRatioTTM
  priceFairValueTTM
  priceSalesRatioTTM
  priceToBookRatioTTM
  priceToSalesRatioTTM
  returnOnAssetsTTM
  returnOnCapitalEmployedTTM
  returnOnEquityTTM
}
    `;
export const LatestIncStatementFragmentDoc = gql`
    fragment LatestIncStatement on IncomeStatement {
  eps
  epsdiluted
}
    `;
export const KeyMetricsPartialFragmentDoc = gql`
    fragment KeyMetricsPartial on KeyMetricsTTM {
  marketCapTTM
  enterpriseValueTTM
  revenuePerShareTTM
  netIncomePerShareTTM
  operatingCashFlowPerShareTTM
  freeCashFlowPerShareTTM
  cashPerShareTTM
  bookValuePerShareTTM
  tangibleBookValuePerShareTTM
  peRatioTTM
  priceToSalesRatioTTM
  pbRatioTTM
  ptbRatioTTM
  evToSalesTTM
  enterpriseValueOverEBITDATTM
  evToOperatingCashFlowTTM
  evToFreeCashFlowTTM
  earningsYieldTTM
  freeCashFlowYieldTTM
  incomeQualityTTM
  dividendPerShareTTM
  dividendYieldPercentageTTM
  payoutRatioTTM
  shareholdersEquityPerShareTTM
  debtToEquityTTM
  debtToAssetsTTM
  netDebtToEBITDATTM
  interestCoverageTTM
  roicTTM
  roeTTM
  returnOnTangibleAssetsTTM
}
    `;
export const IncomeStatementPartialFragmentDoc = gql`
    fragment IncomeStatementPartial on IncomeStatement {
  date
  period
  revenue
  ebitda
  netIncome
  grossProfitRatio
  depreciationAndAmortization
  eps
  incomeTaxExpense
  interestExpense
  interestIncome
  incomeBeforeTax
  otherExpenses
  researchAndDevelopmentExpenses
  operatingIncome
}
    `;
export const BsFragmentDoc = gql`
    fragment BS on BalanceSheet {
  date
  totalDebt
}
    `;
export const CfFragmentDoc = gql`
    fragment CF on CashFlow {
  date
  operatingCashFlow
  capitalExpenditure
  depreciationAndAmortization
  freeCashFlow
  netCashUsedForInvestingActivites
}
    `;
export const PartialFragmentDoc = gql`
    fragment Partial on User {
  id
  name
}
    `;
export const GetCompanyProfileDocument = gql`
    query GetCompanyProfile($symbol: String!) {
  companyProfile(symbol: $symbol) {
    symbol
    price
    mktCap
    lastDiv
    range
    changes
    companyName
    currency
    country
    dcf
    dcfDiff
    description
    exchangeShortName
    fullTimeEmployees
    industry
    ipoDate
    isAdr
    isEtf
    isFund
    state
    sector
    website
    zip
  }
}
    `;

/**
 * __useGetCompanyProfileQuery__
 *
 * To run a query within a React component, call `useGetCompanyProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyProfileQuery({
 *   variables: {
 *      symbol: // value for 'symbol'
 *   },
 * });
 */
export function useGetCompanyProfileQuery(baseOptions: Apollo.QueryHookOptions<GetCompanyProfileQuery, GetCompanyProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyProfileQuery, GetCompanyProfileQueryVariables>(GetCompanyProfileDocument, options);
      }
export function useGetCompanyProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyProfileQuery, GetCompanyProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyProfileQuery, GetCompanyProfileQueryVariables>(GetCompanyProfileDocument, options);
        }
export type GetCompanyProfileQueryHookResult = ReturnType<typeof useGetCompanyProfileQuery>;
export type GetCompanyProfileLazyQueryHookResult = ReturnType<typeof useGetCompanyProfileLazyQuery>;
export type GetCompanyProfileQueryResult = Apollo.QueryResult<GetCompanyProfileQuery, GetCompanyProfileQueryVariables>;
export const GetDividendDataDocument = gql`
    query GetDividendData($symbol: String!) {
  keyMetricsTTM(symbol: $symbol) {
    payoutRatioTTM
  }
}
    `;

/**
 * __useGetDividendDataQuery__
 *
 * To run a query within a React component, call `useGetDividendDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDividendDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDividendDataQuery({
 *   variables: {
 *      symbol: // value for 'symbol'
 *   },
 * });
 */
export function useGetDividendDataQuery(baseOptions: Apollo.QueryHookOptions<GetDividendDataQuery, GetDividendDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDividendDataQuery, GetDividendDataQueryVariables>(GetDividendDataDocument, options);
      }
export function useGetDividendDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDividendDataQuery, GetDividendDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDividendDataQuery, GetDividendDataQueryVariables>(GetDividendDataDocument, options);
        }
export type GetDividendDataQueryHookResult = ReturnType<typeof useGetDividendDataQuery>;
export type GetDividendDataLazyQueryHookResult = ReturnType<typeof useGetDividendDataLazyQuery>;
export type GetDividendDataQueryResult = Apollo.QueryResult<GetDividendDataQuery, GetDividendDataQueryVariables>;
export const GetDividendPerShareDocument = gql`
    query GetDividendPerShare($symbol: String!, $quarter: Boolean, $limit: Float) {
  keyMetrics(symbol: $symbol, quarter: $quarter, limit: $limit) {
    dividendYield
    date
  }
}
    `;

/**
 * __useGetDividendPerShareQuery__
 *
 * To run a query within a React component, call `useGetDividendPerShareQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDividendPerShareQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDividendPerShareQuery({
 *   variables: {
 *      symbol: // value for 'symbol'
 *      quarter: // value for 'quarter'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetDividendPerShareQuery(baseOptions: Apollo.QueryHookOptions<GetDividendPerShareQuery, GetDividendPerShareQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDividendPerShareQuery, GetDividendPerShareQueryVariables>(GetDividendPerShareDocument, options);
      }
export function useGetDividendPerShareLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDividendPerShareQuery, GetDividendPerShareQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDividendPerShareQuery, GetDividendPerShareQueryVariables>(GetDividendPerShareDocument, options);
        }
export type GetDividendPerShareQueryHookResult = ReturnType<typeof useGetDividendPerShareQuery>;
export type GetDividendPerShareLazyQueryHookResult = ReturnType<typeof useGetDividendPerShareLazyQuery>;
export type GetDividendPerShareQueryResult = Apollo.QueryResult<GetDividendPerShareQuery, GetDividendPerShareQueryVariables>;
export const GetPricesDocument = gql`
    query GetPrices($symbol: String!, $fromDate: String) {
  prices(symbol: $symbol, fromDate: $fromDate) {
    symbol
    historical {
      date
      close
    }
  }
}
    `;

/**
 * __useGetPricesQuery__
 *
 * To run a query within a React component, call `useGetPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPricesQuery({
 *   variables: {
 *      symbol: // value for 'symbol'
 *      fromDate: // value for 'fromDate'
 *   },
 * });
 */
export function useGetPricesQuery(baseOptions: Apollo.QueryHookOptions<GetPricesQuery, GetPricesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPricesQuery, GetPricesQueryVariables>(GetPricesDocument, options);
      }
export function useGetPricesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPricesQuery, GetPricesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPricesQuery, GetPricesQueryVariables>(GetPricesDocument, options);
        }
export type GetPricesQueryHookResult = ReturnType<typeof useGetPricesQuery>;
export type GetPricesLazyQueryHookResult = ReturnType<typeof useGetPricesLazyQuery>;
export type GetPricesQueryResult = Apollo.QueryResult<GetPricesQuery, GetPricesQueryVariables>;
export const GetProfileDataDocument = gql`
    query getProfileData($symbol: String!, $fromDate: String) {
  companyProfile(symbol: $symbol) {
    ...ProfilePartial
  }
  prices(symbol: $symbol, fromDate: $fromDate) {
    historical {
      close
      date
    }
  }
  metrics: keyMetricsTTM(symbol: $symbol) {
    ...KeyMetricsPartial
  }
  ev: enterpriseValue(symbol: $symbol) {
    minusCashAndCashEquivalents
    addTotalDebt
  }
  incomeStatement(symbol: $symbol, limit: 4, quarter: true) {
    ...LatestIncStatement
  }
  quote(symbol: $symbol) {
    price
  }
}
    ${ProfilePartialFragmentDoc}
${KeyMetricsPartialFragmentDoc}
${LatestIncStatementFragmentDoc}`;

/**
 * __useGetProfileDataQuery__
 *
 * To run a query within a React component, call `useGetProfileDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileDataQuery({
 *   variables: {
 *      symbol: // value for 'symbol'
 *      fromDate: // value for 'fromDate'
 *   },
 * });
 */
export function useGetProfileDataQuery(baseOptions: Apollo.QueryHookOptions<GetProfileDataQuery, GetProfileDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileDataQuery, GetProfileDataQueryVariables>(GetProfileDataDocument, options);
      }
export function useGetProfileDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileDataQuery, GetProfileDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileDataQuery, GetProfileDataQueryVariables>(GetProfileDataDocument, options);
        }
export type GetProfileDataQueryHookResult = ReturnType<typeof useGetProfileDataQuery>;
export type GetProfileDataLazyQueryHookResult = ReturnType<typeof useGetProfileDataLazyQuery>;
export type GetProfileDataQueryResult = Apollo.QueryResult<GetProfileDataQuery, GetProfileDataQueryVariables>;
export const GetTtmRatioDocument = gql`
    query GetTTMRatio($symbol: String!) {
  ttmRatios(symbol: $symbol) {
    assetTurnoverTTM
    debtRatioTTM
    dividendPerShareTTM
    dividendYieldTTM
    enterpriseValueMultipleTTM
    freeCashFlowOperatingCashFlowRatioTTM
    freeCashFlowPerShareTTM
    interestCoverageTTM
    longTermDebtToCapitalizationTTM
    netProfitMarginTTM
    payoutRatioTTM
    priceBookValueRatioTTM
    priceCashFlowRatioTTM
    priceEarningsRatioTTM
    priceFairValueTTM
    priceSalesRatioTTM
    priceToBookRatioTTM
    priceToSalesRatioTTM
    returnOnAssetsTTM
    returnOnCapitalEmployedTTM
    returnOnEquityTTM
  }
}
    `;

/**
 * __useGetTtmRatioQuery__
 *
 * To run a query within a React component, call `useGetTtmRatioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTtmRatioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTtmRatioQuery({
 *   variables: {
 *      symbol: // value for 'symbol'
 *   },
 * });
 */
export function useGetTtmRatioQuery(baseOptions: Apollo.QueryHookOptions<GetTtmRatioQuery, GetTtmRatioQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTtmRatioQuery, GetTtmRatioQueryVariables>(GetTtmRatioDocument, options);
      }
export function useGetTtmRatioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTtmRatioQuery, GetTtmRatioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTtmRatioQuery, GetTtmRatioQueryVariables>(GetTtmRatioDocument, options);
        }
export type GetTtmRatioQueryHookResult = ReturnType<typeof useGetTtmRatioQuery>;
export type GetTtmRatioLazyQueryHookResult = ReturnType<typeof useGetTtmRatioLazyQuery>;
export type GetTtmRatioQueryResult = Apollo.QueryResult<GetTtmRatioQuery, GetTtmRatioQueryVariables>;
export const GetIncomeStatementDocument = gql`
    query GetIncomeStatement($symbol: String!) {
  incomeStatement(symbol: $symbol) {
    ...IncomeStatementPartial
  }
}
    ${IncomeStatementPartialFragmentDoc}`;

/**
 * __useGetIncomeStatementQuery__
 *
 * To run a query within a React component, call `useGetIncomeStatementQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIncomeStatementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIncomeStatementQuery({
 *   variables: {
 *      symbol: // value for 'symbol'
 *   },
 * });
 */
export function useGetIncomeStatementQuery(baseOptions: Apollo.QueryHookOptions<GetIncomeStatementQuery, GetIncomeStatementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIncomeStatementQuery, GetIncomeStatementQueryVariables>(GetIncomeStatementDocument, options);
      }
export function useGetIncomeStatementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIncomeStatementQuery, GetIncomeStatementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIncomeStatementQuery, GetIncomeStatementQueryVariables>(GetIncomeStatementDocument, options);
        }
export type GetIncomeStatementQueryHookResult = ReturnType<typeof useGetIncomeStatementQuery>;
export type GetIncomeStatementLazyQueryHookResult = ReturnType<typeof useGetIncomeStatementLazyQuery>;
export type GetIncomeStatementQueryResult = Apollo.QueryResult<GetIncomeStatementQuery, GetIncomeStatementQueryVariables>;
export const GetTtmFinancialsDocument = gql`
    query GetTtmFinancials($symbol: String!) {
  ttmIncomeStatement(symbol: $symbol) {
    ...IncomeStatementPartial
  }
  quarterIncomeStatement: incomeStatement(symbol: $symbol, quarter: true) {
    ...IncomeStatementPartial
  }
  ttmBalanceSheet(symbol: $symbol) {
    ...BS
  }
  quarterBalanceSheet: balanceSheet(symbol: $symbol, quarter: true) {
    ...BS
  }
  ttmCashFlow(symbol: $symbol) {
    ...CF
  }
  quarterCashFlow: cashFlow(symbol: $symbol, quarter: true) {
    ...CF
  }
}
    ${IncomeStatementPartialFragmentDoc}
${BsFragmentDoc}
${CfFragmentDoc}`;

/**
 * __useGetTtmFinancialsQuery__
 *
 * To run a query within a React component, call `useGetTtmFinancialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTtmFinancialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTtmFinancialsQuery({
 *   variables: {
 *      symbol: // value for 'symbol'
 *   },
 * });
 */
export function useGetTtmFinancialsQuery(baseOptions: Apollo.QueryHookOptions<GetTtmFinancialsQuery, GetTtmFinancialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTtmFinancialsQuery, GetTtmFinancialsQueryVariables>(GetTtmFinancialsDocument, options);
      }
export function useGetTtmFinancialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTtmFinancialsQuery, GetTtmFinancialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTtmFinancialsQuery, GetTtmFinancialsQueryVariables>(GetTtmFinancialsDocument, options);
        }
export type GetTtmFinancialsQueryHookResult = ReturnType<typeof useGetTtmFinancialsQuery>;
export type GetTtmFinancialsLazyQueryHookResult = ReturnType<typeof useGetTtmFinancialsLazyQuery>;
export type GetTtmFinancialsQueryResult = Apollo.QueryResult<GetTtmFinancialsQuery, GetTtmFinancialsQueryVariables>;
export const UpdateNameDocument = gql`
    mutation UpdateName($name: String!) {
  updateName(name: $name) {
    id
    name
    status
  }
}
    `;
export type UpdateNameMutationFn = Apollo.MutationFunction<UpdateNameMutation, UpdateNameMutationVariables>;

/**
 * __useUpdateNameMutation__
 *
 * To run a mutation, you first call `useUpdateNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNameMutation, { data, loading, error }] = useUpdateNameMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNameMutation, UpdateNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNameMutation, UpdateNameMutationVariables>(UpdateNameDocument, options);
      }
export type UpdateNameMutationHookResult = ReturnType<typeof useUpdateNameMutation>;
export type UpdateNameMutationResult = Apollo.MutationResult<UpdateNameMutation>;
export type UpdateNameMutationOptions = Apollo.BaseMutationOptions<UpdateNameMutation, UpdateNameMutationVariables>;
export const ViewerDocument = gql`
    query Viewer {
  viewer {
    ...Partial
    status
  }
}
    ${PartialFragmentDoc}`;

/**
 * __useViewerQuery__
 *
 * To run a query within a React component, call `useViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerQuery(baseOptions?: Apollo.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
      }
export function useViewerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
        }
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export type ViewerQueryResult = Apollo.QueryResult<ViewerQuery, ViewerQueryVariables>;