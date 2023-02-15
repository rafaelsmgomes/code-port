import { useTheme } from '@emotion/react'
import Image from 'next/image'
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react'
import searchClient from '../../lib/algolia/searchClient'
import { Configure, InstantSearch, useHits, useSearchBox } from 'react-instantsearch-hooks-web'
import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions } from 'downshift'
import debounce from 'lodash/fp/debounce'

import searchIcon from '../../public/svgs/search-lg.png'

import { Input } from '../UI/FormUi'
import { CompanySearchType } from '../../scripts/algoliaDb'
import { SearchBoxConnectorParams } from 'instantsearch.js/es/connectors/search-box/connectSearchBox'
import { BaseHit, Hit } from 'instantsearch.js'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { Badge } from '../UI/Typography'

export type SearchBarProps = {}
const SearchBar = (props: SearchBarProps) => {
  return (
    <InstantSearch
      searchClient={{
        search: (queries): Readonly<Promise<any>> => {
          if (queries.every(({ params }) => !params?.query)) {
            return Promise.resolve({
              results: queries.map(() => ({
                hits: [],
                nbHits: 0,
                nbPages: 0,
                page: 0,
                processingTimeMS: 0,
              })),
            })
          }
          return searchClient.search(queries)
        },
      }}
      indexName={'valuemap'}
    >
      <CustomSearchBox />
      <Configure typoTolerance={false} hitsPerPage={6} />
    </InstantSearch>
  )
}

const CustomSearchBox = (props?: SearchBoxConnectorParams) => {
  const theme = useTheme()
  const router = useRouter()
  const [value, setValue] = useState<string>()
  const [isFocused, setIsFocused] = useState(false)
  const [selectedItem, setSelectedItem] = useState<CompanySearchType | null | undefined>()
  const stateReducer = useCallback(
    (
      state: UseComboboxState<CompanySearchType>,
      actionAndChanges: UseComboboxStateChangeOptions<CompanySearchType>
    ) => {
      const { type, changes } = actionAndChanges
      switch (type) {
        // case useCombobox.stateChangeTypes.InputBlur:
        //   return { isOpen: false }
        // case useCombobox.stateChangeTypes.InputKeyDownEnter: {
        //   console.log(state.selectedItem)
        //   router.push(`/stocks/[symbol]`, `/stocks/${state.selectedItem?.symbol[0]}`)
        //   return { ...changes }
        // }
        default:
          return changes
      }
    },
    []
  )

  const { hits } = useHits<BaseHit & CompanySearchType>()
  const { clear, query, refine } = useSearchBox(props)

  const { isOpen, getMenuProps, getComboboxProps, getInputProps, getItemProps, highlightedIndex, openMenu } =
    useCombobox({
      items: hits,
      itemToString: (item) => (item ? item.name : ''),
      selectedItem,
      onInputValueChange: ({ inputValue }) => setValue(inputValue),
      stateReducer,
      onSelectedItemChange(changes) {
        const { selectedItem } = changes
        if (!!selectedItem) return void router.push(`/stocks/${selectedItem.symbol[0]}`)
        return
      },
    })

  const hasSearch = query !== ''
  const hasResults = hits.length > 0

  const debounceRefine = useMemo(() => debounce(220, refine), [refine])

  useEffect(() => {
    if (!value) return
    debounceRefine(value)
  }, [value, debounceRefine])

  return (
    <div css={{ position: 'relative' }}>
      <div {...getComboboxProps()}>
        <Input
          autoCapitalize='off'
          autoComplete='off'
          autoCorrect='off'
          {...getInputProps({
            type: 'text',
            onFocus: () => {
              setIsFocused(true)
              if (hasSearch && hits.length > 0) {
                openMenu()
              }
            },
            onBlur: () => {
              setIsFocused(false)
            },
            placeholder: 'Search company or symbol',
            'aria-label': 'Search company or symbol',
            spellCheck: false,
          })}
          css={{
            padding: '4px',
            paddingLeft: 40,
            width: 320,
            boxShadow: `0px 2px 4px ${theme.colors.red[300]}10, 0px 1px 2px ${theme.colors.red[300]}06, 0px 0px 0px 4px ${theme.colors.primary[500]}10`,
            ':focus': {
              boxShadow: `0px 2px 4px ${theme.colors.red[300]}10, 0px 1px 2px ${theme.colors.red[300]}06, 0px 0px 0px 4px ${theme.colors.primary[500]}40`,
            },
          }}
        />
        <div
          css={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: 14,
            opacity: isFocused ? 1 : 0.6,
          }}
        >
          <Image src={searchIcon} width={16} height={16} alt='Search Icon' />
        </div>
      </div>
      {isOpen && (
        <SearchDropdown>
          {hasSearch && !hasResults && (
            <p
              css={{
                margin: 0,
                marginLeft: 'auto',
                letterSpacing: 1,
                fontSize: 14,
                lineHeight: 1.33,
                color: theme.colors.gray[700],
                fontWeight: 300,
                padding: '10px 14px',
              }}
            >
              No records found
            </p>
          )}
          <div {...getMenuProps({})} css={{ top: '100%' }}>
            {hits.map((item, index) => {
              const isSelected = highlightedIndex === index
              return (
                <ItemDropdown
                  item={item}
                  isSelected={isSelected}
                  index={index}
                  key={index}
                  {...getItemProps({
                    item,
                    index,
                    onKeyDown: (e) => {
                      console.log(e.altKey)
                      if (e.key === 'Enter') {
                        console.log(e.altKey)
                      }
                    },
                  })}
                />
              )
            })}
          </div>
          <p
            css={{
              padding: '0 14px',
              textAlign: 'right',
              marginTop: 14,
              fontWeight: 500,
              color: theme.colors.gray[400],
              fontSize: 12,
            }}
          >
            Press enter to select
          </p>
        </SearchDropdown>
      )}
      {!isOpen && <div {...getMenuProps()} css={{ display: 'none' }}></div>}
    </div>
  )
}

const SearchDropdown = styled.div(({ theme }) => ({
  position: 'absolute',

  width: 400,
  boxSizing: 'border-box',
  borderTop: `solid 1px ${theme.colors.gray[100]}`,
  padding: '10px 0',
  left: 0,
  zIndex: 3,
  display: 'block',
  top: '100%',
  marginTop: 8,
  right: 0,
  border: `1px solid ${theme.colors.gray[200]}`,
  // boxShadow: `0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)`,
  boxShadow: `0px 12px 16px -4px ${theme.colors.primary[300]}80, 0px 4px 6px -2px ${theme.colors.primary[300]}80`,
  borderRadius: 8,
  backgroundColor: theme.colors.base.white,
}))

export default SearchBar

type ItemDropDownProps = {
  item: Hit<BaseHit & CompanySearchType>
  index: number
  isSelected: boolean
}
const ItemDropdown = forwardRef<HTMLAnchorElement, ItemDropDownProps>(({ index, isSelected, item, ...props }, ref) => {
  const theme = useTheme()
  let linkHref = `/stocks/${item.symbol[0]}`
  return (
    <a css={{ textDecoration: 'none' }} href={linkHref} {...props} ref={ref}>
      <div
        css={{
          color: isSelected ? theme.colors.base.black : theme.colors.gray[600],
          backgroundColor: isSelected ? theme.colors.gray[50] : undefined,
          padding: '10px 14px',
          borderBottom: `1px solid ${theme.colors.gray[200]}`,
        }}
      >
        <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <p css={{ fontSize: 18, fontWeight: 500, marginRight: 14 }}>{item.name}</p>
          <div>
            <Badge
              css={[
                { backgroundColor: theme.colors.gray[100], color: theme.colors.gray[700] },
                isSelected && {
                  backgroundColor: theme.colors.purple[50],
                  color: theme.colors.purple[700],
                },
              ]}
            >
              {item.exchangeShortName}
            </Badge>
          </div>
        </div>
        <div>
          {item.symbol.map((symbol, i) => (
            <ItemSymbol key={i} css={{ color: isSelected ? theme.colors.gray[700] : undefined }}>
              {symbol}
            </ItemSymbol>
          ))}
        </div>
      </div>
    </a>
  )
})

const ItemSymbol = styled.span(({ theme }) => ({
  fontWeight: 600,
  color: theme.colors.gray[400],
  marginRight: 4,
  fontSize: 12,
}))
