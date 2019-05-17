import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div``;
const ListItem = styled.div`
	margin-bottom: 1rem;
	padding: 0.5rem 1.25rem;
`;
const Name = styled.h3`
	margin: 0;
`;
const Description = styled.p`
	padding: 0.5rem 1rem;
`;
const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	color: #999;
`;

function CList({ loading, error, items }) {
	if (loading) return 'Загрузка...';
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
};

export default CList;
