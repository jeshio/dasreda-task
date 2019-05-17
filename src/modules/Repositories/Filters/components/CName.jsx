import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'rsuite';

function CName({ value, onChange }) {
	return (
		<Input
			style={{ width: 300 }}
			placeholder="Название..."
			onChange={onChange}
			value={value}
		/>
	);
}

CName.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default CName;
