import React from 'react';
import './index.scss';
import { mtlSkyline } from 'images';

const Section = ({ children, name, background, banner }) => (
	<div
		id={name}
		className="section"
		style={{
			background: banner && `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7) 100%), url(${mtlSkyline})`,
			backgroundColor: background
		}}
	>
		{children}
	</div>
)

export default Section;