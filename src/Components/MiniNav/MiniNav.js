import React from "react";
// import Avatar from "../../Images/avatar.png";

import "./MiniNav.css";

const MiniNav = () => {
  return (
    <div className="MiniNav">
      <nav className="MiniNav-nav">
        <ul className="MiniNav-external-links">
          <li><a href="https://github.com/daniel-abbott" rel="external noopener noreferrer" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/daniel-abbott-dev/" rel="external noopener noreferrer" target="_blank">LinkedIn</a></li>
        </ul>
      </nav>
      {/* <img className="MiniNav-avatar" src={Avatar} alt="" /> */}
    </div>
  )
}

export default MiniNav;
