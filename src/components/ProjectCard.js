import React from "react";
import Capsule from "./Capsule";

const ProjectCard = ({ project }) => {
  const { title, description, "Tech stack": Techs, links } = project;
  return (
    <div className="project-card shadow-lg rounded-xl overflow-hidden pb-2">
      <div>
        <div>
          <img
            className=" hover:scale-110 transition-all duration-300 border-2 border-red-100"
            src={
              require(`../images/${title
                .split(" ")
                .join("-")
                .toLowerCase()}.png`).default
            }
            alt={title}
          />
        </div>
        <div className="px-5 py-2">
          <div>
            <span className="text-2xl block text-center font-semibold mb-2">
              {title}
            </span>
          </div>
          <div className="mb-3">
            <span>{description}</span>
          </div>
          <div className="">
            <span className="block text-center font-medium mb-2 underline underline-offset-2">
              Tech Stack
            </span>
            <span className="flex flex-wrap gap-2">
              {Techs.map((tech, idx) => (
                <Capsule key={idx} text={tech} />
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
