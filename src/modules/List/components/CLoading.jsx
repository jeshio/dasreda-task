import React from 'react';
import styled from 'styled-components';
import Spinner from 'src/modules/UIComponents/Spinner';

const Root = styled.div`
	text-align: center;
	padding: 3rem 0;
`;

const CLoading = props => {
	return (
		<Root>
			<Spinner />
			Загрузка списка репозиториев...
		</Root>
	);
};

export default CLoading;
