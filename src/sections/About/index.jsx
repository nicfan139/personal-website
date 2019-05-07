import React from 'react';
import './index.scss';
import ProfilePic from '../../assets/images/profile_pic.jpg';

const About = () => {
	return (
		<div className="about">
			<h2 className="section-title">
				About me
			</h2>
      <div className="about-details">
        <img src={ProfilePic} alt="Me!" className="about-img"/>
        <div className="about-text">
          <p>
          	I'm a web developer based in Montreal, Canada. I build highly interactive websites and webapps based around the <a href="https://jamstack.org" target="_blank" rel="noopener noreferrer">JAMstack</a> (mostly with React.js) for a living. With a former background in business, I made the switch to programming and I've had a blast so far with this new career path!
          </p>
          <p>
          	Originally from Hong Kong, I've had the opportunity to live various places: including Malaysia, England and Australia! When I'm not coding on the computer, you'll probably find me playing soccer, indulging in video games, or aimlessly surfing through the internet.
          </p>
          <p>
          	I'm currently building enterprise-level software solutions for <a href="https://yap.cx" target="_blank" rel="noopener noreferrer">YAP Exchange</a>. However, I'm always open to collaborate on new exciting projects!
          </p>
        </div>
      </div>
		</div>
	)
}

export default About;