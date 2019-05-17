import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { loader as graphqlLoader } from 'graphql.macro';
import * as FiltersSubModule from 'src/modules/Repositories/Filters';
import getSubModuleState from 'src/helpers/getSubModuleState';
import Presentation from './Presentation';
import { MODULE_NAME } from '../constants';
import getMonthAgoDate from './utils/getMonthAgoDate';

const repositoriesListQuery = graphqlLoader(
	'./queries/repositoriesList.graphql'
);

const graphqlQueries = [
	graphql(repositoriesListQuery, {
		name: 'repositoriesList',
		options: ({ filtersState: { license } }) => {
			let extraFilters = '';
			if (license.length > 0) {
				extraFilters += ` license:${license}`;
			}
			return {
				variables: {
					queryString: `language:JavaScript sort:stars created:>=${getMonthAgoDate()}${extraFilters}`,
				},
			};
		},
	}),
];

export class Container extends Component {
	get repositoriesList() {
		const { loading, error, search } = this.props.repositoriesList;
		const { filtersState } = this.props;

		const items =
			loading || error || !search
				? []
				: search.edges
						.map(({ node }) => ({
							...node,
							stars: node.stargazers.totalCount,
							license: node.licenseInfo ? node.licenseInfo.name : '',
						}))
						.filter(({ name }) => String(name).includes(filtersState.name));

		return { ...this.props.repositoriesList, items };
	}

	render() {
		return (
			<Presentation {...this.props} repositoriesList={this.repositoriesList} />
		);
	}
}

const mapStateToProps = state => {
	const filtersState = getSubModuleState(
		state,
		MODULE_NAME,
		FiltersSubModule.NAME
	);

	return { filtersState };
};

const mapDispatchToProps = {};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	...graphqlQueries
)(Container);
