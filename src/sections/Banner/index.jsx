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
					Building websites and webapps for fun.
				</p>
				<div className="banner-contact-links">
					{ /* Email */ }
					<ContactLink
						href="mailto:nic@nicolasfan.co"
						title="Reach out by email!"
						iconClass="fas fa-envelope"
						text="nic@nicolasfan.co"
					/>

					{ /* LinkedIn */ }
					<ContactLink
						href="https://www.linkedin.com/in/nicolasfan"
						title="Connect on LinkedIn!"
						iconClass="fab fa-linkedin"
						text="linkedin.com/in/nicolasfan"
					/>

					{ /* GitHub */ }
					<ContactLink
						href="https://www.github.com/nicfan139"
						title="View GitHub profile!"
						iconClass="fab fa-github"
						text="nicfan139"
					/>

					{ /* GitLab */ }
					<ContactLink
						href="https://www.gitlab.com/nicfan139"
						title="View GitLab profile!"
						iconClass="devicon-gitlab-plain colored"
						text="@nicfan139"
					/>

					{ /* CodePen */ }
					<ContactLink
						href="https://codepen.io/nicfan139"
						title="View code snippets on CodePen!"
						iconClass="fab fa-codepen"
						text="@nicfan139"
					/>
				</div>
			</div>
		</div>
	)
}

export default Banner;