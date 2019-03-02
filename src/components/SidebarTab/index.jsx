import React from 'react';
import './index.scss';
import propTypes from 'prop-types';

class SidebarTab extends React.Component {
	render() {
		const { section, label, onTabClick, active } = this.props;
		return (
			<div
				id={`tab-${section}`}
				onClick={() => onTabClick(section)}
				className={ active ? "sidebar-tab tab-active" : "sidebar-tab"}>
				{ label }
			</div>
		)
	}
}

SidebarTab.propTypes = {
	section: propTypes.string.isRequired,
	label: propTypes.string.isRequired,
	onTabClick: propTypes.func.isRequired,
}

export default SidebarTab;