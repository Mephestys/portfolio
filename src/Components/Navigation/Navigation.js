import React from 'react';
import Avatar from '../../Images/avatar.jpg'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-avatar-wrapper"><img className="navigation-avatar" src={Avatar} alt="" /></div>
      <span className="navigation-avatar-name">Daniel Abbott</span>
      <nav>
        <ul className="navigation-internal-links">
          <li><a href="#About">About</a>&lt;</li>
          <li><a href="#Projects">Projects</a>&lt;</li>
          <li><a href="#Skills">Skills</a>&lt;</li>
          <li><a href="#Contact">Contact</a>&lt;</li>
        </ul>
        <ul className="navigation-external-links">
          <li><a href="https://github.com/Mephestys" rel="external noopener noreferrer" target="_blank">GitHub</a>&lt;</li>
          <li><a href="https://www.linkedin.com/in/daniel-abbott-19a1a1137/" rel="external noopener noreferrer" target="_blank">LinkedIn</a>&lt;</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;
