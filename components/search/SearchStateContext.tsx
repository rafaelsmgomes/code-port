import noop from 'lodash/fp/noop'
import { createContext, ReactNode, useState } from 'react'

export type SearchStateContextType = {
  searchState: any
  setSearchState: (searchState: any) => void
}

const SearchStateContext = createContext<SearchStateContextType>({
  searchState: {},
  setSearchState: noop,
})

interface ISearchStateProviderProps {
  initialSearchState?: Record<string, unknown>
  children: ReactNode
}

export const SearchStateProvider = ({ children, initialSearchState }: ISearchStateProviderProps) => {
  const [searchState, setSearchState] = useState(initialSearchState)

  return <SearchStateContext.Provider value={{ searchState, setSearchState }}>{children}</SearchStateContext.Provider>
}

export const SearchStateConsumer = SearchStateContext.Consumer

export default SearchStateContext
