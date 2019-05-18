import React, { Component } from 'react';
import { connect } from 'react-redux';
import Presentation from './Presentation';

export class Container extends Component {
	render() {
		return <Presentation />;
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Container);
