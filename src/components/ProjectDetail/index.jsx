import React from 'react';
import './index.scss';
import propTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

class ProjectDetail extends React.Component {
	state = {
		showDetails: false
	}

	toggleDetails = () => {
		this.setState({ showDetails: !this.state.showDetails });
	}

	render() {
		const { showDetails } = this.state;
		const {
			projectName,
			projectTagline,
			projectDesc,
			projectUrl,
			repoUrl,
			backgroundImgUrl
		} = this.props;
		return (
				<div className="project-container">
					<div
						title={`"${projectTagline}"`}
						className="project-img"
						style={{ backgroundImage: `url(${backgroundImgUrl})` }}
					>
						<div
							onClick={() => this.toggleDetails()}
							className="project-img-hover"
						>
							More details about&nbsp;
							<strong>{projectName}</strong>...
						</div>
					</div>
					{ showDetails && (
						<div className="project-text">
							<span
								onClick={() => this.toggleDetails()}
								className="closeBtn"
							>
								<i className="far fa-times-circle"></i>
							</span>
							<h3 className="project-name">
								{projectName}
							</h3>
							<div className="project-details">
								<p className="project-desc">
									<Markdown>
										{projectDesc}
									</Markdown>
								</p>
							</div>
							<div className="project-links">
								<a
									href={projectUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="button"
								>
									<i className="fas fa-eye"></i>&nbsp;
									View site
								</a>
								{ /* Show if repository link for project exists */
									repoUrl && (
									<a
										href={repoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="button"
									>
										<i className="fas fa-file-code"></i>&nbsp;
										View repo
									</a>
								)}
							</div>
						</div>
					)}
				</div>
		)
	}
}

ProjectDetail.propTypes = {
	projectName: propTypes.string.isRequired,
	projectDesc: propTypes.string.isRequired,
	projectUrl: propTypes.string.isRequired,
	backgroundImgUrl: propTypes.string.isRequired
}

export default ProjectDetail;