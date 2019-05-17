import gql from 'graphql-tag';

export default function repositoriesList(minCreatedDate) {
	return gql`
  {
    rateLimit {
      cost
      remaining
      resetAt
    }
    search(
      query: "language:JavaScript sort:stars created:>${minCreatedDate}"
      type: REPOSITORY
      first: 50
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            description
            url
            stargazers {
              totalCount
            }
            createdAt
          }
        }
      }
    }
  }
  `;
}
