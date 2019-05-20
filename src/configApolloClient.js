import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import DebounceLink from 'apollo-link-debounce';
import { loader as graphqlLoader } from 'graphql.macro';
import gql from 'graphql-tag';

const typeDefs = graphqlLoader('./types.graphql');

const GRAPHQL_API_URL = 'https://api.github.com/graphql';

export default function configApolloClient() {
	const DEFAULT_DEBOUNCE_TIMEOUT = 250;
	const cache = new InMemoryCache();
	const link = ApolloLink.from([
		new DebounceLink(DEFAULT_DEBOUNCE_TIMEOUT),
		new HttpLink({
			uri: GRAPHQL_API_URL,
			headers: {
				authorization: `Bearer ${
					process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
				}`,
			},
		}),
	]);

	cache.writeData({
		data: {
			filters: {
				__typename: 'Filters',
				name: '',
				license: '',
			},
		},
	});

	return new ApolloClient({
		cache,
		link,
		typeDefs,
		resolvers: {
			Mutation: {
				updateFilters: (_, { filters }, { cache }) => {
					const query = gql`
						{
							filters {
								name
								license
							}
						}
					`;
					const { filters: currentFilters } = cache.readQuery({ query });

					cache.writeData({
						data: { filters: { ...currentFilters, ...filters } },
					});
					return null;
				},
			},
		},
	});
}
