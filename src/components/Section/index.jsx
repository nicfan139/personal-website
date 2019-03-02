import React from 'react';
import './index.scss';

const Section = (props) => {
	const { children, name, background, banner } = props;
	return (
		<div
			id={name}
			className="section"
			style={{
				background: banner && "linear-gradient(180deg, rgb(231, 29, 54) 30%, rgba(59,115,134,1) 100%)",
				backgroundColor: background
			}}
		>
			{children}
		</div>
	)
}

export default Section;