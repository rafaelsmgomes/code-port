import 'normalize.css'
import '../styles/globals.scss'
import type { AppInitialProps, AppProps } from 'next/app'
import { Global, ThemeProvider } from '@emotion/react'
import { emotionTheme, globalStyles } from '../theme/theme'
import { SessionProvider } from 'next-auth/react'
import styled from '@emotion/styled'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { Session } from 'next-auth'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

// FIXME - the "| any" at the end of the type does not need to be there / may break the typescript somewhere else
type PagePropsType = { initialApolloState: any; session: Session } | any

type AppPropsWithLayout = AppProps<PagePropsType> & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        {/* <SearchStateProvider initialSearchState={{}}> */}
        <ThemeProvider theme={emotionTheme}>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </ThemeProvider>
        {/* </SearchStateProvider> */}
      </ApolloProvider>
    </SessionProvider>
  )
}

export default MyApp
