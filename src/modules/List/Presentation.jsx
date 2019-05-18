import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'rsuite';
import CList from './components/CList';
import CLoading from './components/CLoading';

const Root = styled.div`
	text-align: center;
	padding-bottom: 3rem;
`;

export default class Presentation extends PureComponent {
	static propTypes = {
		repositoriesList: PropTypes.object.isRequired,
		onNextClick: PropTypes.func.isRequired,
	};

	render() {
		const { repositoriesList, onNextClick } = this.props;
		return (
			<Root>
				<CList {...repositoriesList} loadingComponent={<CLoading />} />
				<Button onClick={onNextClick} appearance="primary">
					Загрузить ещё
				</Button>
			</Root>
		);
	}
}
