import React from 'react';
import './index.scss';
import propTypes from 'prop-types';

const Button = (props) => {
	const { onClick, label } = props;
	return (
		<div
			onClick={() => onClick()}
			className="button">
			{ label }
		</div>
	)
}

Button.propTypes = {
	onClick: propTypes.func.isRequired,
	label: propTypes.string.isRequired
}

export default Button;