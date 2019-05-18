import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { loader as graphqlLoader } from 'graphql.macro';
import Presentation from './Presentation';
import * as actions from './store/actions';
import { bindActionCreators } from 'redux';
import { NAME } from './constants';

const licensesListQuery = graphqlLoader('./queries/licensesList.graphql');

const graphqlQueries = [
	graphql(licensesListQuery, {
		name: 'licensesList',
	}),
];

export class Container extends Component {
	render() {
		return (
			<Presentation
				subModuleStore={this.props.subModuleStore}
				actions={this.props.actions}
				licenses={this.props.licensesList.licenses}
			/>
		);
	}
}

const mapStateToProps = store => {
	const state = store[NAME];
	return {
		subModuleStore: state,
	};
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	...graphqlQueries
)(Container);
