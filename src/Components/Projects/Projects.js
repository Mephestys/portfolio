import React from "react";
import ProjectCard from "./ProjectCard";

import "./Projects.css";

import QuizzerImage from "../../Images/Quizzer.PNG";
import ShooterGameImage from "../../Images/shootergame.gif";

const projectList = {
  Quizzer: {
    image: QuizzerImage,
    link: "https://quizzer.rocks/",
    description: "A simple web application for teachers to create quizzes and distribute them to students."
  },
  ShooterGame: {
    image: ShooterGameImage,
    link: "https://github.com/Mephestys/ShooterGameProject",
    description: "An in-development, unnamed top-down shooter, being built in the Godot engine."
  }
}

const Projects = () => {
  return (
    <div className="Projects">
    {Object.entries(projectList).map((project, i) => {
      return (
        <ProjectCard 
          key={i}
          title={project[0]}
          image={project[1].image}
          description={project[1].description}
          link={project[1].link}
          />
      )
    })}
  </div>
  )
}

export default Projects;
