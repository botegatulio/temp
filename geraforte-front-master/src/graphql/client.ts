import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(
  process.env.GRAPHQL_HOST ? `${process.env.GRAPHQL_HOST}/graphql` : ''
)
export default client
