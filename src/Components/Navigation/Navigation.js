import React from 'react';
import Avatar from '../../Images/avatar.jpg'
import './Navigation.css'

const Navigation = () => {
  return (
    <section className="navigation">
      <span className="navigation-avatar-wrapper"><img className="navigation-avatar" src={Avatar} alt="" /></span>
      <span>Daniel Abbott</span>
      <nav>
        <ul>
          <li><a href="#">About</a>&lt;</li>
          <li><a href="#">Projects</a>&lt;</li>
          <li><a href="#">Skills</a>&lt;</li>
          <li><a href="#">Contact</a>&lt;</li>
        </ul>   
      </nav>
    </section>
  )
}

export default Navigation;
