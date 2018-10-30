import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { link, title, image, description } = props;
  return (
    <a className="ProjectCard" href={link} rel="external noopener noreferrer" target="_blank">
      <img className="ProjectCard-image" src={image} alt="" />
      <span className="ProjectCard-details">
        <h4>{title}</h4>
        <p className="ProjectCard-content">{description}</p>
      </span>
    </a>
  )
}

export default ProjectCard;
