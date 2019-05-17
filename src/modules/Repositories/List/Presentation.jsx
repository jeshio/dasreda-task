import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CList from './components/CList';

export default class Presentation extends PureComponent {
	static propTypes = {
		repositoriesList: PropTypes.object.isRequired,
	};

	render() {
		const { repositoriesList } = this.props;
		return (
			<div>
				<CList {...repositoriesList} />
			</div>
		);
	}
}
