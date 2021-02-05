import React from 'react';
import './index.scss';

const About = () => (
	<div className="about">
		<h2 className="section-title">
			About me
		</h2>
    <div className="about-details">
      <div className="about-text">
        <p>
        	Hi there! I'm a Full-Stack Developer who builds highly interactive websites and webapps for a living (based around the <a href="https://jamstack.org" target="_blank" rel="noopener noreferrer">JAMstack</a>). Though, I do have a preference for all things Front-End - especially with React and TypeScript.
          With a former background in business, I made the switch to programming and I've had a blast so far with this new career path!
        </p>
        <p>
        	Originally from Hong Kong, I've had the opportunity to live various places: including Malaysia, England and Australia! When I'm not coding you'll probably find me playing soccer, indulging in video games, or aimlessly surfing through the internet.
        </p>
        <p>
        	I'm always open to new opportunities and ventures to enhance my skills as a web developer!
        </p>
      </div>
    </div>
	</div>
);

export default About;