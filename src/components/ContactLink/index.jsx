import React from 'react';
import './index.scss';
import propTypes from 'prop-types';

const ContactLink = (props) => {
	const toggleText = (toggle) => {
		const link = document.getElementById(props.id);
		const text = document.getElementById(`contact-text-${props.id}`);
		link.style.width = toggle === "expand" ? "200px" : "40px";
		text.style.color = toggle === "expand" ? "rgba(240,240,240,1)" : "rgba(240,240,240,0)";
	}

	return (
		<a
			id={props.id}
			href={props.href}
			target="_blank"
			rel="noopener noreferrer"
			className="contact-link"
			onMouseOver={() => toggleText("expand")}
			onMouseLeave={() => toggleText("hide")}
		>
			<i className={`${props.iconClass} contact-icon`}></i>
			<label id={`contact-text-${props.id}`} className="contact-text">
				{props.text}
			</label>
		</a>
	)
}

ContactLink.propTypes = {
	href: propTypes.string.isRequired,
	iconClass: propTypes.string.isRequired,
	text: propTypes.string.isRequired
}

export default ContactLink;