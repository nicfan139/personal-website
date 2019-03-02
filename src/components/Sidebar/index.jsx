import React from 'react';
import './index.scss';
import SidebarTab from '../SidebarTab';

class Sidebar extends React.Component {
	componentDidMount() {
		// Highlight active tab on page load
		this.scrollPosition();
		// Highlight active tab when the user scrolls 
		document.getElementById("content").addEventListener("scroll", () => this.scrollPosition());
	}

	scrollPosition = () => {
		// Get position values for each section
		const bannerPosition = document.getElementById("banner").getBoundingClientRect().top;
		const aboutPosition = document.getElementById("about").getBoundingClientRect().top;
		const skillsPosition = document.getElementById("skills").getBoundingClientRect().top;
		const projectsPosition = document.getElementById("projects").getBoundingClientRect().top;

		// Change active tab on the sidebar as the user scrolls down the page
		if (bannerPosition < 100) { this.setNewActiveTab("banner") }
		if (aboutPosition < 100) { this.setNewActiveTab("about") }
		if (skillsPosition < 100) { this.setNewActiveTab("skills") }
		if (projectsPosition < 100) { this.setNewActiveTab("projects") }
	}

	onTabClick = (section) => {
		this.viewSection(section);
		this.setNewActiveTab(section);
	}

	viewSection = (section) => {
		document.getElementById(section).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}

	setNewActiveTab = (selectedTab) => {
		this.removeCurrentActiveTab();
		const newActiveTab = document.getElementById(`tab-${selectedTab}`);
		newActiveTab.classList.add("tab-active");
	}

	removeCurrentActiveTab = () => {
		const tabs = document.querySelectorAll(".sidebar-tab");
		tabs.forEach((tab) => { tab.classList.remove("tab-active") });
	}

	render() {
		const sections = [
			{ section: "banner", label: "Welcome" },
			{ section: "about", label: "About me" },
			{ section: "skills", label: "Skills" },
			{ section: "projects", label: "Projects" },
		]
		return (
			<div className="sidebar">
				<div className="sidebar-tabs-container">
					{ sections.map(obj => {
							return (
								<SidebarTab
									key={obj.section}
									section={obj.section}
									label={obj.label}
									onTabClick={this.onTabClick}
								/>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default Sidebar;