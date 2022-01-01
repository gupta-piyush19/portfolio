import React from "react";
import { projects } from "../config";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

const Projects = () => {
  return (
    <div id="projects" className="projects scroll-mt-20">
      <Title title={"projects"} />
      <div className="grid gap-20  grid-flow-row mt-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
