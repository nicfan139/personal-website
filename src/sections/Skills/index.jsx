import React from 'react';
import './index.scss';
import IconBackground from '../../components/IconBackground';
import Grid from '@material-ui/core/Grid';
import LangIcon from '../../components/LangIcon';
import gatsbyLogo from '../../assets/logos/gatsby.svg';
import reduxLogo from '../../assets/logos/redux.svg';

const Skills = () => {
	return (
		<div className="skills">
			<IconBackground iconClass="fas fa-terminal"/>

			<h2 className="section-title">
				Skills
			</h2>

			<div className="skills-container">
				{ /* Front-end skills */ }
				<h3 className="skills-title">
					Front-end
				</h3>
				<Grid container spacing={24}>
					<LangIcon
						langIcon="devicon-html5-plain colored"
						langName="HTML"
					/>
					<LangIcon
						langIcon="devicon-css3-plain colored"
						langName="CSS"
					/>
					<LangIcon
						langIcon="devicon-sass-original colored"
						langName="SASS/SCSS"
					/>
					<LangIcon
						langIcon="devicon-bootstrap-plain colored"
						langName="Bootstrap"
					/>
					<LangIcon
						langIcon="devicon-javascript-plain colored"
						langName="JavaScript"
					/>
					{/*
					<LangIcon
						langIcon="devicon-jquery-plain colored"
						langName="jQuery"
					/>
					*/}
					<LangIcon
						langIcon="devicon-react-original colored"
						langName="React.js"
					/>
					<LangIcon
						langImg={reduxLogo}
						langImgAlt="Redux logo"
						langName="Redux"
					/>
					<LangIcon
						langImg={gatsbyLogo}
						langImgAlt="Gatsby.js logo"
						langName="Gatsby.js"
					/>
					{/*
					<LangIcon
						langIcon="devicon-typescript-plain colored"
						langName="TypeScript"
					/>
					*/}
				</Grid>

				<br/>

				{ /* Back-end skills */ }
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
	)
}

export default Skills;