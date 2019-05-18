import React from 'react';
import { Container, Content } from 'rsuite';
import { Grid } from 'rsuite';
import * as Modules from 'src/modules';

const Presentation = props => {
	return (
		<Container>
			<Content>
				<Grid>
					<Modules.Filters />
					<Modules.List />
				</Grid>
			</Content>
		</Container>
	);
};

Presentation.propTypes = {};

export default Presentation;
