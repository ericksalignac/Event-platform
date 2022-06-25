import { ApolloClient, InMemoryCache } from "@apollo/client" 

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4tvhk730ahj01uh0rnu8xco/master',
  cache: new InMemoryCache()
})