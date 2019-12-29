import React, { useState } from 'react';
import './index.scss';
import propTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const ProjectDetail = ({
		projectName,
		projectDesc,
		projectUrl,
		repoUrl,
		backgroundImgUrl
	}) => {
		const [expandImg, toggleExpand] = useState(false);
		return (
			<div className="project-container">
				<div className="project-details">
					<div className="project-actions">
						{/* Project clickable thumbnail */}
						<div
							className="project-img"
							style={{ backgroundImage: `url(${backgroundImgUrl})` }}
						>
							<div
								onClick={() => toggleExpand(true)}
								className="project-img-hover"
							>
								<i className="fas fa-expand" />&nbsp;&nbsp;Expand image
							</div>
						</div>

						{/* Project links */}
						<div className="project-links">
							{/* Show if site link for project exists */}
							{ projectUrl && (
								<a
									title="Link will open in a new tab"
									href={projectUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="button"
								>
									<i className="fas fa-eye" />&nbsp;
									View site
								</a>
							)}
							{/* Show if repository link for project exists */}
							{ repoUrl && (
								<a
									title="Link will open in a new tab"
									href={repoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="button"
								>
									<i className="fas fa-file-code" />&nbsp;
									View repo
								</a>
							)}
						</div>
					</div>

					<div className="project-text">
						{/* Project name */}
						<h3 className="project-name">
							{projectName}
						</h3>

						{/* Project description */}
						<p className="project-desc">
							<Markdown>
								{projectDesc}
							</Markdown>
						</p>
					</div>
				</div>

				{/* Modal displaying more details about the project */}
				{ expandImg && (
					<div className="project-modal">
						{/* Close modal button */}
						<span
							onClick={() => toggleExpand(false)}
							className="closeBtn"
						>
							<i className="far fa-times-circle" />
						</span>

						{/* Image */}
						<div
							className="project-frame"
							style={{
								backgroundImage: `url(${backgroundImgUrl})`
							}}
						/>
					</div>
				)}
			</div>
		)
}

ProjectDetail.propTypes = {
	projectName: propTypes.string.isRequired,
	projectDesc: propTypes.string.isRequired,
	projectUrl: propTypes.string.isRequired,
	backgroundImgUrl: propTypes.string.isRequired
}

export default ProjectDetail;