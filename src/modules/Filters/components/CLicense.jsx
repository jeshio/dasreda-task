import React from 'react';
import PropTypes from 'prop-types';
import { SelectPicker } from 'rsuite';

function CLicense({ value, onChange, licenses }) {
	return (
		<SelectPicker
			data={licenses.map(({ name, key }) => ({
				value: key,
				label: name,
			}))}
			placeholder="Лицензия..."
			onChange={onChange}
			value={value}
			style={{ width: '100%' }}
		/>
	);
}

CLicense.propTypes = {
	licenses: PropTypes.arrayOf(PropTypes.object),
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default CLicense;
