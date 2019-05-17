import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import repositoriesList from './queries/repositoriesList';
import Presentation from './Presentation';

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
	graphql(repositoriesList(minCreatedDate()), {
		name: 'repositoriesList',
	}),
];

export class Container extends Component {
	get repositoriesList() {
		const { loading, error, search } = this.props.repositoriesList;
		console.log(this.props.repositoriesList);

		const items =
			loading || error || !search
				? []
				: search.edges.map(({ node }) => ({
						...node,
						stars: node.stargazers.totalCount,
				  }));

		return { ...this.props.repositoriesList, items };
	}

	render() {
		return (
			<Presentation {...this.props} repositoriesList={this.repositoriesList} />
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	...graphqlQueries
)(Container);
