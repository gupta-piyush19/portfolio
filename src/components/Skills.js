import React from "react";
import Capsule from "./Capsule";
import Title from "./Title";
import { skillObj } from "../config";

const Skills = () => {
  return (
    <div id="skills" className="skills scroll-mt-20">
      <Title title={"skills"} />
      <div>
        {Object.entries(skillObj).map(([category, skillArr], idx) => (
          <div
            key={idx}
            className="mt-4 mb-4 flex whitespace-nowrap gap-2 sm:gap-6 flex-col sm:flex-row"
          >
            <div className="">{category}:</div>
            <div className="flex flex-wrap gap-2">
              {skillArr.map((text, idx2) => (
                <Capsule key={idx2} text={text} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
