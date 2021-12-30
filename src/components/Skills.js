import React from "react";
import Capsule from "./Capsule";
import Title from "./Title";

const Skills = () => {
  const skillObj = {
    web: [
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
    ],
    texttt: ["html", "html", "html", "html"],
  };
  //   const arr = ["html", "html", "html", "html", "html", "html"];
  return (
    <div>
      {Object.entries(skillObj).map(([category, skillArr], idx) => (
        <div key={idx} className="flex flex-row gap-6 mt-4 mb-4">
          <div className="w-8">{category}:</div>
          <div className="flex flex-wrap gap-2">
            {skillArr.map((text, idx2) => (
              <Capsule key={idx2} text={text} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
