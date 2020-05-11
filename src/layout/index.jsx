// React
import React from 'react';
import './index.scss';
import '../scss/custom.scss';
// Layout components
import { Sidebar, Section } from 'components';
// Sections
import Banner from '../sections/Banner';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';

const Layout = () => (
  <div>
    {/* Sidebar */}
    <Sidebar/>

    {/* Main content */}
    <div id="content" className="content">
      {/* Banner */}
      <Section name="banner" banner>
        <Banner/>
      </Section>

      <div id="main-body" className="main-body">
        {/* "About me" */}
        <Section name="about" background="white">
          <About/>
        </Section>

        {/* "Skills" */}
        <Section name="skills" background="whitesmoke">
          <Skills/>
        </Section>

        {/* "Projects" */}
        <Section name="projects" background="white">
          <Projects/>
        </Section>
      </div>
    </div>
  </div>
);

export default Layout;