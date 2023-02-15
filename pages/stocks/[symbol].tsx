import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { ReactElement } from 'react'

import Header from '../../components/header/Header'
import PriceChart from '../../components/Company/PriceChart/PriceChart'
import { BaseGrid, Box, MainSection } from '../../components/UI/Grid'
import { sidebarStateAtom } from '../../components/Company/sidebar/Sidebar'
import { useTheme } from '@emotion/react'
import CompanyProfile from '../../components/Company/Profile/CompanyProfile'
import FinancialsTable from '../../components/Company/Table/Table'
import SymbolQuery from '../../components/queries/SymbolQuery'
import { initializeApollo } from '../../lib/apollo'
import prisma from '../../lib/prisma'
import { InView } from 'react-intersection-observer'
import { useIntersectionListener } from '../../hooks/useIntersectionListener'
import { useRootMargin } from '../../hooks/useRootMargin'
import { useAtom } from 'jotai'
import { COMPANY_PROFILE_OVERVIEW } from '../../components/Company/sidebar/constants'

// import 'intersection-observer-debugger'

export default function Page({ symbol }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const theme = useTheme()
  const rootMargin = useRootMargin()
  const [_, setSelected] = useAtom(sidebarStateAtom)
  const { handleIntersectionUpdate, selected } = useIntersectionListener()
  console.log(selected)

  /* const { data, status } = useSession()
  const router = useRouter()

  if (!data) return <h1>Loading</h1>
  if (status !== 'authenticated') {
    router.push('/')
  }
  if (!data.user.isActive || status !== 'authenticated')
    return (
      <>
        <Header />
        <h1>User not active</h1>
      </>
    ) */
  return (
    <div css={{ backgroundColor: theme.colors.gray[50] }}>
      <SymbolQuery symbol={symbol}>
        <Header />
        <BaseGrid>
          {/* <Sidebar /> */}
          <MainSection>
            <InView
              rootMargin={rootMargin}
              onChange={(_, ioEntry) => {
                setSelected(COMPANY_PROFILE_OVERVIEW)
              }}
            >
              <CompanyProfile symbol={symbol} />
            </InView>
            <Box css={{ gridColumn: '1 / -1 ', height: 500 }}>
              <PriceChart symbol={symbol} />
            </Box>

            <FinancialsTable symbol={symbol} />
          </MainSection>
        </BaseGrid>
      </SymbolQuery>
    </div>
  )
}

Page.getLayout = function (page: ReactElement) {
  return (
    <>
      <main>{page}</main>
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext<{ symbol: string }>) {
  const maxAge = 60 * 10 // in seconds
  const revalidate = 60 * 5 // in seconds
  // ctx.res.setHeader('Cache-Control', `public, s-maxage=${maxAge}, stale-while-revalidate=${revalidate}`)
  try {
    const { symbol } = ctx.params!
    const { req, res } = ctx
    // const session = await unstable_getServerSession(req, res, authOptions)
    // if (!session) throw new Error('Not authorized')

    const apolloClient = initializeApollo({}, { req, res, session: null, prisma })
    // await apolloClient.query<GetCompanyProfileQuery>({
    //   query: GetCompanyProfileDocument,
    //   variables: { symbol },
    // })
    // await apolloClient.query<PricesQuery>({
    //   query: PricesDocument,
    //   variables: { symbol },
    // })

    return {
      props: {
        symbol,
        initialApolloState: apolloClient.cache.extract(),
      },
    }
  } catch (err) {
    console.log(err)

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}
