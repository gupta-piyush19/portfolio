import React from "react";
import Capsule from "./Capsule";

const ProjectCard = ({ project }) => {
  const { title, description, "Tech stack": Techs, links } = project;
  return (
    <div className="flex project-card shadow-lg rounded-xl overflow-hidden flex-col lg:flex-row max-w-[340px] lg:max-w-none m-auto">
      <div className="group object-cover flex-[5] overflow-hidden relative">
        <img
          className={`group-hover:scale-110 transition-all duration-300 border-2 border-red-100 w-full h-full ${
            links["Live"] && "group-hover:opacity-30"
          } block `}
          src={
            require(`../images/${title.split(" ").join("-").toLowerCase()}.png`)
              .default
          }
          alt={title}
        />
        {links["Live"] && (
          <div
            className={`middle absolute top-2/4 left-2/4 opacity-0 group-hover:opacity-100 -translate-x-2/4 -translate-y-2/4 transition-all duration-300 `}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={links["Live"]}
              className="py-2 px-4 font-medium bg-red-100 rounded-md"
            >
              view
            </a>
          </div>
        )}
      </div>
      <div className="px-5 py-4 flex-[7]">
        <div className=" flex justify-between items-center">
          <div>
            <span className="text-2xl block font-semibold mb-2">{title}</span>
          </div>
          <div className="flex gap-2 items-center">
            {Object.entries(links).map(([key, value], idx) => (
              <a
                key={idx}
                href={value}
                className="py-1 px-4 border-2 font-bold border-gray-600  hover:bg-red-100 rounded-md"
              >
                {key}
              </a>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <span>{description}</span>
        </div>
        <div className="">
          <span className="block font-medium mb-2">Tech Stack</span>
          <span className="flex flex-wrap gap-2">
            {Techs.map((tech, idx) => (
              <Capsule key={idx} text={tech} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
