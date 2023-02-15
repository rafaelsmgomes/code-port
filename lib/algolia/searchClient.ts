import algoliasearch from 'algoliasearch/lite'
import { createInMemoryCache } from '@algolia/cache-in-memory'

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_API_KEY, {
  responsesCache: createInMemoryCache(),
})
searchClient.initIndex('valuemap')

export default searchClient
