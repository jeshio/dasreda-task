import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'rsuite';

function CLicense({ value, onChange }) {
	return (
		<div>
			<Input
				style={{ width: 300 }}
				placeholder="Лицензия..."
				onChange={onChange}
				value={value}
			/>
		</div>
	);
}

CLicense.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default CLicense;
