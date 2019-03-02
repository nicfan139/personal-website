import React from 'react';
import './index.scss';
import propTypes from 'prop-types';

const ContactLink = (props) => (
	<a
		href={props.href}
		target="_blank"
		rel="noopener noreferrer"
		title={props.title}
		className="contact-link"
	>
		<i className={`${props.iconClass} contact-icon`}></i>
	</a>
)

ContactLink.propTypes = {
	href: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	iconClass: propTypes.string.isRequired
}

export default ContactLink;