import React from 'react';
import './index.scss';
import propTypes from 'prop-types';

const SidebarTab = ({ section, label, onTabClick, active }) => (
	<div
		id={`tab-${section}`}
		onClick={() => onTabClick(section)}
		className={ active ? "sidebar-tab tab-active" : "sidebar-tab"}
	>
		{label}
	</div>
);

SidebarTab.propTypes = {
	section: propTypes.string.isRequired,
	label: propTypes.string.isRequired,
	onTabClick: propTypes.func.isRequired,
}

export default SidebarTab;