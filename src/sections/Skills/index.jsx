import React from 'react';
import './index.scss';
import Grid from '@material-ui/core/Grid';
import { LangIcon } from 'components';
import { skillsList } from './skillsList';

const Skills = () => (
	<div className="skills">
		<h2 className="section-title">
			Skills
		</h2>

		<div className="skills-container">
			{/* Front-end skills */}
			<h3 className="skills-title">
				Front-end
			</h3>
			<Grid container spacing={24}>
				{ skillsList.map(({ langName, langIcon, langImg, langImgAlt }, index) => {
						if (langImg) {
							return (
								<LangIcon
									key={`skill-${langName}`}
									langName={langName}
									langImg={langImg}
									langImgAlt={langImgAlt}
								/>
							)
						}
						return (
							<LangIcon
								key={`skill-${langName}`}
								langName={langName}
								langIcon={langIcon}
							/>
						)
				}
				)}
			</Grid>

			<br/>

			{/* Back-end skills */}
			<h3 className="skills-title">
				Back-end
			</h3>
			<Grid container spacing={24}>
				<LangIcon
					langIcon="devicon-rails-plain colored"
					langName="Ruby on Rails"
				/>
				<LangIcon
					langIcon="devicon-postgresql-plain colored"
					langName="PostgreSQL"
				/>
				<LangIcon
					langIcon="devicon-nodejs-plain colored"
					langName="Node.js"
				/>
				<LangIcon
					langIcon="devicon-express-original colored"
					langName="Express"
				/>					
			</Grid>
		</div>
	</div>
);

export default Skills;