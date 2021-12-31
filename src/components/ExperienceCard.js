import React from "react";
import Capsule from "./Capsule";

const ExperienceCard = ({ exp }) => {
  const { place, designation, duration, description } = exp;
  return (
    <div className="shadow-md rounded-md p-4 mb-4">
      <div className="flex items-start justify-between mb-2">
        <div>
          <div>
            <span className="font-bold text-2xl">{place}</span>
          </div>
          <div>
            <span className="text-lg text-gray-600">{designation}</span>
          </div>
        </div>
        <Capsule text={duration} />
      </div>
      <div className="ml-2">
        {description.map((desc) => (
          <p>✅ {desc}</p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
