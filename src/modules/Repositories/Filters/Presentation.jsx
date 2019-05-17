import React, { PureComponent } from 'react';
import CLicense from './components/CLicense';
import styled from 'styled-components';

const Root = styled.div`
	padding: 1rem 0;
`;

export default class Presentation extends PureComponent {
	handleChangeFilter = name => value =>
		this.props.actions.changeFilters({ [name]: value });

	render() {
		const { subModuleStore } = this.props;
		return (
			<Root>
				<CLicense
					value={subModuleStore.license}
					onChange={this.handleChangeFilter('license')}
				/>
			</Root>
		);
	}
}
