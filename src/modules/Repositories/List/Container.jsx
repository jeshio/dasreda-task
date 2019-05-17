import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { loader as graphqlLoader } from 'graphql.macro';
import * as FiltersSubModule from 'src/modules/Repositories/Filters';
import getSubModuleState from 'src/helpers/getSubModuleState';
import Presentation from './Presentation';
import { MODULE_NAME } from '../constants';

const repositoriesListQuery = graphqlLoader(
	'./queries/repositoriesList.graphql'
);

const minCreatedDate = () => {
	// a month ago
	const date = new Date();
	date.setMonth(date.getMonth() - 1);
	// format YYYY-MM-DD
	const minCreatedDate = `${date.getFullYear()}-${`${date.getMonth() +
		1}`.padStart(2, '0')}-${date
		.getDate()
		.toString()
		.padStart(2, '0')}`;
	return minCreatedDate;
};

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
					queryString: `language:JavaScript sort:stars created:>${minCreatedDate()}${extraFilters}`,
				},
			};
		},
	}),
];

export class Container extends Component {
	get repositoriesList() {
		const { loading, error, search } = this.props.repositoriesList;

		const items =
			loading || error || !search
				? []
				: search.edges.map(({ node }) => ({
						...node,
						stars: node.stargazers.totalCount,
						license: node.licenseInfo ? node.licenseInfo.name : '',
				  }));

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
