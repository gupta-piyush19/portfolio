import React from "react";
import Capsule from "./Capsule";

const ProjectCard = ({ project }) => {
  const { title, description, "Tech stack": Techs, links } = project;
  return (
    <div className="project-card shadow-lg">
      <div>
        <div></div>
        <div>
          <div>
            <span>{title}</span>
          </div>
          <div>
            <span>{description}</span>
          </div>
          <div>
            Tech Stack:{" "}
            <div className="flex flex-wrap">
              {Techs.map((tech, idx) => (
                <Capsule key={idx} text={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
