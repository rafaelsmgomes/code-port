import { ReactNode } from 'react'
import { useGetCompanyProfileQuery } from '../../graphql/generated/graphql-operations'

export type SymbolQueryProps = {
  symbol: string
  children: ReactNode
}

const SymbolQuery = ({ symbol, children }: SymbolQueryProps) => {
  const { data, loading, error } = useGetCompanyProfileQuery({ variables: { symbol } })
  if (error) return <h1>Could not load resource!!</h1>
  if (!data || loading) return <h1>Loading...</h1>

  return <>{children}</>
}

export default SymbolQuery
