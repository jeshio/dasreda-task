import React, { PureComponent } from 'react';
import CLicense from './components/CLicense';
import styled from 'styled-components';
import CName from './components/CName';

const Root = styled.div`
	padding: 1rem 0;
	display: flex;
`;

const Field = styled.div`
	padding: 0 0.25rem;
`;

export default class Presentation extends PureComponent {
	handleChangeFilter = name => value =>
		this.props.actions.changeFilters({ [name]: value });

	render() {
		const { subModuleStore } = this.props;
		return (
			<Root>
				<Field>
					<CLicense
						value={subModuleStore.license}
						onChange={this.handleChangeFilter('license')}
					/>
				</Field>
				<Field>
					<CName
						value={subModuleStore.name}
						onChange={this.handleChangeFilter('name')}
					/>
				</Field>
			</Root>
		);
	}
}
