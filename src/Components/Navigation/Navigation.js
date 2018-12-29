import React from 'react';
import Avatar from '../../Images/avatar.png';

import Resume from '../../Files/DanielAbbott_resume.pdf';

import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <img className="navigation-avatar" src={Avatar} alt="" />
      <span className="navigation-avatar-name">Daniel Abbott</span>
      <nav>
        <ul className="navigation-internal-links">
          <li><a href="#About">About</a>&lt;</li>
          <li><a href="#Projects">Projects</a>&lt;</li>
          <li><a href="#Contrib">Contrib</a>&lt;</li>
          <li><a href="#Skills">Skills</a>&lt;</li>
          <li><a href="#Contact">Contact</a>&lt;</li>
        </ul>
        <ul className="navigation-external-links">
          <li><a href="https://github.com/daniel-abbott" rel="external noopener noreferrer" target="_blank">GitHub</a>&lt;</li>
          <li><a href={Resume} download="Daniel_Abbott_resume" rel="external noopener noreferrer" target="_blank">Resume</a>&lt;</li>
          <li><a href="https://www.linkedin.com/in/daniel-abbott-dev/" rel="external noopener noreferrer" target="_blank">LinkedIn</a>&lt;</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;
