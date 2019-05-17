import React from 'react';
import { Container, Content } from 'rsuite';
import { Grid } from 'rsuite';
import * as Repositories from 'src/modules/Repositories';

const Main = props => {
	return (
		<Container>
			<Content>
				<Grid>
					<Repositories.List />
				</Grid>
			</Content>
		</Container>
	);
};

export default Main;
