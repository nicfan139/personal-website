import React from 'react';
import './index.scss';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const LangIcon = (props) => (
	<Grid item xs={6} sm={4} md={3}>
		<div className="lang-icon-container">
			{ props.langImg && (
				<img
					src={props.langImg}
					alt={props.langImgAlt}
					className="lang-img"
				/>
			)}
			{ props.langIcon && <i className={`${props.langIcon} lang-icon`}></i> }
			<span className="lang-text">{props.langName}</span>
		</div>
	</Grid>
)

LangIcon.propTypes = {
	langName: propTypes.string.isRequired
}

export default LangIcon;