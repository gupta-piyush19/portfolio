import React from "react";
import Capsule from "./Capsule";
import Photo from "../images/blogic.png";

const ProjectCard = ({ project }) => {
  const { title, description, "Tech stack": Techs, links } = project;
  console.log(`../images/${title.split(" ").join("-").toLowerCase()}.png`);
  return (
    <div className="project-card shadow-lg">
      <div>
        <div>
          <img
            src={
              require(`../images/${title
                .split(" ")
                .join("-")
                .toLowerCase()}.png`).default
            }
            // src={Photo}
            alt={title}
          />
        </div>
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
