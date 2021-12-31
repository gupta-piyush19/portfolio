import React from "react";
import Title from "./Title";
import { experience } from "../config";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div id="experience" className="experience scroll-mt-20">
      <Title title={"experience"} />
      <div className="">
        {experience.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
