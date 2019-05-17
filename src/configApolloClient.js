import ApolloClient from 'apollo-boost';

const GRAPHQL_API_URL = 'https://api.github.com/graphql';

export default function configApolloClient() {
	return new ApolloClient({
		uri: GRAPHQL_API_URL,
		headers: {
			authorization: `Bearer ${
				process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
			}`,
		},
	});
}
