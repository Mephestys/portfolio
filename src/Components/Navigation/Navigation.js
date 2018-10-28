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
          <li><a href="#">About</a>&lt;</li>
          <li><a href="#">Projects</a>&lt;</li>
          <li><a href="#">Skills</a>&lt;</li>
          <li><a href="#">Contact</a>&lt;</li>
        </ul>
        <ul className="navigation-external-links">
          <li><a href="#">GitHub</a>&lt;</li>
          <li><a href="#">LinkedIn</a>&lt;</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;
