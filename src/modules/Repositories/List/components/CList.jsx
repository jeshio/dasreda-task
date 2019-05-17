import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mediaDevices from 'src/styles/mediaDevices';

const Root = styled.div``;
const ListItem = styled.div`
	margin-bottom: 1rem;
	padding: 0.5rem 1.25rem;
`;
const Name = styled.h3`
	margin: 0;
	text-overflow: ellipsis;
	overflow: hidden;
`;
const Description = styled.p`
	padding: 0.5rem 1rem;
`;
const Footer = styled.div`
	color: #999;

	@media ${mediaDevices.mobileL} {
		display: flex;
		justify-content: space-between;
	}
`;

function CList({ loading, error, items, loadingComponent }) {
	if (loading) return loadingComponent;
	if (error) return `Ошибка загрузки! ${error.message}`;

	return (
		<Root>
			{items.map(
				({ id, name, description, url, license, createdAt, stars }) => (
					<ListItem key={id}>
						<Name>
							<a href={url} target="_blank" rel="noopener noreferrer">
								{name}
							</a>
						</Name>
						<Description>{description}</Description>
						<Footer>
							<div>
								<span>Лицензия {license || 'не установлена'}</span>, количество
								звёзд {stars}
							</div>
							<div>Создан {createdAt}</div>
						</Footer>
					</ListItem>
				)
			)}
		</Root>
	);
}

CList.propTypes = {
	loading: PropTypes.bool.isRequired,
	error: PropTypes.object,
	items: PropTypes.arrayOf(PropTypes.object),
	loadingComponent: PropTypes.node,
};

export default CList;
