import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { loader as graphqlLoader } from 'graphql.macro';
import Presentation from './Presentation';

const licensesListQuery = graphqlLoader('./queries/licensesList.graphql');
const updateFiltersQuery = graphqlLoader('./queries/updateFilters.graphql');
const filtersQuery = graphqlLoader('./queries/filters.graphql');

const graphqlQueries = [
	graphql(filtersQuery, {
		name: 'filtersList',
	}),
	graphql(licensesListQuery, {
		name: 'licensesList',
	}),
	graphql(updateFiltersQuery, {
		props: ({ mutate }) => ({
			updateFilters: filters => mutate({ variables: { filters } }),
		}),
	}),
];

export class Container extends Component {
	render() {
		console.log(this.props);

		return (
			<Presentation
				filters={this.props.filtersList.filters}
				actions={this.props.actions}
				licenses={this.props.licensesList.licenses}
				onFiltersUpdate={this.props.updateFilters}
			/>
		);
	}
}

export default compose(...graphqlQueries)(Container);
