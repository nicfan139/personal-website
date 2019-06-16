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
			projectDesc,
			projectUrl,
			repoUrl,
			backgroundImgUrl
		} = this.props;
		return (
			<div className="project-container">
				{ /* Project clickable thumbnail */ }
				<div
					className="project-img"
					style={{ backgroundImage: `url(${backgroundImgUrl})` }}
				>
					<div
						onClick={() => this.toggleDetails()}
						className="project-img-hover"
					>
						More details about&nbsp;<strong>{projectName}</strong>...
					</div>
				</div>

				{ /* Modal displaying more details about the project */ }
				{ showDetails && (
					<div className="project-text">
						{ /* Close modal button */ }
						<span
							onClick={() => this.toggleDetails()}
							className="closeBtn"
						>
							<i className="far fa-times-circle"></i>
						</span>

						{ /* Image */ }
						<img
							src={backgroundImgUrl}
							alt={projectName}
							className="project-frame"
						/>

						{ /* Project name */ }
						<h3 className="project-name">
							{projectName}
						</h3>

						{ /* Project description */ }
						<div className="project-details">
							<p className="project-desc">
								<Markdown>
									{projectDesc}
								</Markdown>
							</p>
						</div>

						{ /* Project links */ }
						<div className="project-links">
							{ /* Show if site link for project exists */ }
							{ projectUrl && (
								<a
									href={projectUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="button"
								>
									<i className="fas fa-eye"></i>&nbsp;
									View site
								</a>
							)}
							{ /* Show if repository link for project exists */ }
							{ repoUrl && (
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