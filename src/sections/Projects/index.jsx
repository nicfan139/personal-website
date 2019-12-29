import React from 'react';
import './index.scss';
import { projectList } from './projectList';
import ProjectDetail from '../../components/ProjectDetail';

const Projects = () => (
	<div className="projects">
		<div className="projects-heading">
			<h2 className="projects-title">
				Projects
			</h2>
		</div>

		{ projectList.map(project => {
				return (
					<ProjectDetail
						key={`project-${project.name}`}
						projectName={project.name}
						projectTagline={project.tagline}
						projectDesc={project.desc}
						projectUrl={project.siteUrl}
						repoUrl={project.repoUrl}
						backgroundImgUrl={project.backgroundImgUrl}
					/>
				)
			})
		}
	</div>
);

export default Projects;