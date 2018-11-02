import React from "react";
import ProjectCard from "./ProjectCard";

import "./Projects.css";

import QuizzerImage from "../../Images/Quizzer.PNG";
import ShooterGameImage from "../../Images/shootergame.gif";

const projectList = {
  Quizzer: {
    image: QuizzerImage,
    repoLink: "https://github.com/Lambda-School-Labs/CS10-quizzer",
    liveLink: "https://quizzer.rocks/",
    description: "A simple web application for teachers to create quizzes and distribute them to students.",
    longDescription: "Quizzer allows people to sign up and begin creating quizzes, which can be assigned to user-created classrooms and quickly distributed to a list of students through email, where students will be able to take the quiz and submit their results for the quiz creator to see.\n\nThis project is the work of myself and two others, built from the ground-up over the course of five weeks using a technology stack of our choosing. The app itself is React on the front-end, Django on the back-end, PostreSQL for the database, and GraphQL queries/mutations handling the communication.\n\nMy specific contributions include creating components such as the full classroom creation and editing section, implementing ApolloClient to handle GraphQL on the client-side, and building a continuous integration workflow, allowing the full project to automatically build and test through Codeship prior to deployment on Heroku.",
    status: "Deployed and live"
  },
  ShooterGame: {
    image: ShooterGameImage,
    repoLink: "https://github.com/daniel-abbott/ShooterGameProject",
    liveLink: "",
    description: "An in-development, unnamed top-down shooter, being built in the Godot engine.",
    longDescription: "This is a top-down twin-stick shooter I began work on, inspired somewhat by the old Alien Breed games. Currently very much a work-in-progress with effectively no art (as I can't draw), though it currently features: twin-stick movement and shooting, simple enemy 'AI' which moves towards the player relentlessly, colored 2D lighting and shadows, line-of-sight using shadowmaps, and no way to actually win yet.\n\nPlease note that there is no live deploy or compiled binaries available at this time, though all you need is a copy of the Godot engine to try it out!",
    status: "Work in progress"
  }
};

const Projects = () => {
  return (
    <div className="Projects">
    {Object.entries(projectList).map((project, i) => {
      return (
        <ProjectCard 
          key={i}
          project={project}
          />
      )
    })}
  </div>
  )
}

export default Projects;
