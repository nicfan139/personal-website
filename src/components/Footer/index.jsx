import React from 'react';
import './index.scss';

const Footer = () => {
	return (
		<div className="footer">
			&copy; Nicolas Fan { new Date().getFullYear() }
		</div>
	)
}

export default Footer;