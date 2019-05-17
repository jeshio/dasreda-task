import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'rsuite';

function CLicense({ value, onChange }) {
	return <Input placeholder="Лицензия..." onChange={onChange} value={value} />;
}

CLicense.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default CLicense;
