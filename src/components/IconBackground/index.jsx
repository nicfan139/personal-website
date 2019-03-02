import React from 'react';
import './index.scss';
import propTypes from 'prop-types';

const IconBackground = ({iconClass}) => {
	return (
		<i className={`${iconClass} iconBackground`}></i>
	)
}

IconBackground.propTypes = {
	iconClass: propTypes.string.isRequired
}

export default IconBackground;