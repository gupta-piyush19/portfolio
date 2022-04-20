import React from "react";
import { projects } from "../config";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

const Projects = () => {
  return (
    <div id="projects" className="projects scroll-mt-20">
      <Title title={"projects"} />
      {/* <div className="grid gap-20 grid-cols-2 lg:grid-cols-1 lg:grid-flow-row mt-8"> */}
      <div className="flex flex-auto flex-wrap gap-8 lg:flex-col mt-8 justify-between">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
