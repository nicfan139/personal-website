// React
import React from 'react';
import './index.scss';
import '../scss/custom.scss';
// Layout components
import Sidebar from '../components/Sidebar';
import Section from '../components/Section';
import Footer from '../components/Footer';
// Sections
import Banner from '../sections/Banner';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';

class Layout extends React.Component {
  render() {
    return (
      <div>
        { /* Sidebar */ }
        <Sidebar/>

        { /* Main content */ }
        <div id="content" className="content">
          { /* Banner */ }
          <Section name="banner" banner>
            <Banner/>
          </Section>

          <div id="main-body" className="main-body">
            { /* "About me" */ }
            <Section name="about" background="white">
              <About/>
            </Section>

            { /* "Skills" */ }
            <Section name="skills" background="whitesmoke">
              <Skills/>
            </Section>

            { /* "Projects" */ }
            <Section name="projects" background="white">
              <Projects/>
            </Section>

            { /* Footer */ }
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;