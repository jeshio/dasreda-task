import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { loader as graphqlLoader } from 'graphql.macro';
import withDebouncedProps from 'react-debounced-props';
import * as FiltersModule from 'src/modules/Filters';
import debounce from 'src/utils/debounce';
import Presentation from './Presentation';
import getMonthAgoDate from './utils/getMonthAgoDate';

const repositoriesListQuery = graphqlLoader(
	'./queries/repositoriesList.graphql'
);

const graphqlQueries = [
	graphql(repositoriesListQuery, {
		name: 'repositoriesList',
		options: ({
			filtersState: { license },
			debounceFiltersState: { name },
		}) => {
			return {
				variables: {
					queryString: Container.getQueryString({ license, name }),
				},
			};
		},
	}),
];

export class Container extends Component {
	static getQueryString = ({ license, name }) => {
		let extraFilters = '';
		if (license.length > 0) {
			extraFilters += ` license:${license}`;
		}

		return `language:JavaScript "${name}" in:name sort:stars created:>=${getMonthAgoDate()}${extraFilters}`;
	};

	get repositoriesList() {
		const { loading, error, search } = this.props.repositoriesList;

		const items =
			loading || error || !search
				? []
				: search.edges.map(({ node, cursor }) => ({
						cursor,
						...node,
						stars: node.stargazers.totalCount,
						license: node.licenseInfo ? node.licenseInfo.name : '',
				  }));

		return { ...this.props.repositoriesList, items };
	}

	get nextClickHandler() {
		return () => {
			const {
				repositoriesList: { fetchMore, loading, error, search },
				filtersState: { license },
				debounceFiltersState: { name },
			} = this.props;

			if (loading || error || !search) return;

			const lastCursor = search.edges[search.edges.length - 1].cursor;

			fetchMore({
				query: repositoriesListQuery,
				variables: {
					queryString: Container.getQueryString({ license, name }),
					cursor: lastCursor,
				},
				updateQuery: (previousResult, { fetchMoreResult }) => {
					return {
						...previousResult,
						search: {
							...previousResult.search,
							edges: [
								...previousResult.search.edges,
								...fetchMoreResult.search.edges,
							],
						},
					};
				},
			});
		};
	}

	render() {
		return (
			<Presentation
				repositoriesList={this.repositoriesList}
				onNextClick={this.nextClickHandler}
			/>
		);
	}
}

const mapStateToProps = store => {
	const filtersState = store[FiltersModule.NAME];

	return { filtersState, debounceFiltersState: filtersState };
};

const mapDispatchToProps = {};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withDebouncedProps(['debounceFiltersState'], f => debounce(f, 500)),
	...graphqlQueries
)(Container);
