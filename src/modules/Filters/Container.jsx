import React, { Component } from 'react';
import { connect } from 'react-redux';
import Presentation from './Presentation';
import * as actions from './store/actions';
import { bindActionCreators } from 'redux';
import { NAME } from './constants';

export class Container extends Component {
	render() {
		return <Presentation {...this.props} />;
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Container);
