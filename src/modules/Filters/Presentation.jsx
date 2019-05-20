import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CLicense from './components/CLicense';
import styled from 'styled-components';
import CName from './components/CName';
import mediaDevices from 'src/styles/mediaDevices';

const Root = styled.div`
	@media ${mediaDevices.mobileL} {
		padding: 1rem 0;
		display: flex;

		& > * {
			flex: 1;
			max-width: 25rem;
		}
	}
`;

const Field = styled.div`
	padding: 0.25rem;
`;

export default class Presentation extends PureComponent {
	static propTypes = {
		licenses: PropTypes.arrayOf(PropTypes.object),
		onFiltersUpdate: PropTypes.func.isRequired,
	};

	static defaultProps = {
		licenses: [],
	};

	handleChangeFilter = name => value =>
		this.props.onFiltersUpdate({ [name]: value || '' });

	render() {
		const { filters, licenses } = this.props;
		return (
			<Root>
				<Field>
					<CLicense
						licenses={licenses}
						value={filters.license}
						onChange={this.handleChangeFilter('license')}
					/>
				</Field>
				<Field>
					<CName
						value={filters.name}
						onChange={this.handleChangeFilter('name')}
					/>
				</Field>
			</Root>
		);
	}
}
