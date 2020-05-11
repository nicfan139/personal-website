import React from 'react';
import './index.scss';
import { ContactLink } from 'components';

const Banner = () => (
	<div className="banner">
		<div className="banner-content">
			<h1 className="banner-title">
				Nicolas Fan
			</h1>
			<p className="banner-subtitle">
				Intermediate web developer based in Montreal, Canada
			</p>
			<div className="banner-contact-links">
				{/* LinkedIn */}
				<ContactLink
					id="linkedin"
					href="https://www.linkedin.com/in/nicolasfan"
					iconClass="fab fa-linkedin"
					text="Connect on LinkedIn!"
				/>

				{/* GitHub */}
				<ContactLink
					id="github"
					href="https://www.github.com/nicfan139"
					iconClass="fab fa-github"
					text="View GitHub profile!"
				/>

				{/* GitLab */}
				<ContactLink
					id="gitlab"
					href="https://www.gitlab.com/nicfan139"
					iconClass="devicon-gitlab-plain colored"
					text="View GitLab profile!"
				/>

				{/* CodePen */}
				<ContactLink
					id="codepen"
					href="https://codepen.io/nicfan139"
					iconClass="fab fa-codepen"
					text="View code snippets on CodePen!"
				/>
			</div>
		</div>
	</div>
);

export default Banner;