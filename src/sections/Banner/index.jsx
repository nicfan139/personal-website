import React from 'react';
import './index.scss';
import ContactLink from '../../components/ContactLink';

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner-content">
				<h1 className="banner-title">
					Nicolas Fan
				</h1>
				<p className="banner-subtitle">
					A pragmatic developer who brings your ideas to life. 
				</p>
				<div className="banner-contact-links">
					{ /* LinkedIn */ }
					<ContactLink
						href="https://www.linkedin.com/in/nicolasfan"
						title="Connect on LinkedIn!"
						iconClass="fab fa-linkedin"
					/>

					{ /* GitHub */ }
					<ContactLink
						href="https://www.github.com/nicfan139"
						title="View GitHub profile!"
						iconClass="fab fa-github"
					/>

					{ /* GitLab */ }
					<ContactLink
						href="https://www.gitlab.com/nicfan139"
						title="View GitLab profile!"
						iconClass="devicon-gitlab-plain colored"
					/>

					{ /* CodePen */ }
					<ContactLink
						href="https://codepen.io/nicfan139"
						title="View code snippets on CodePen!"
						iconClass="fab fa-codepen"
					/>
				</div>
			</div>
		</div>
	)
}

export default Banner;