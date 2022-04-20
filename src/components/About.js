import React from "react";
import Title from "./Title";
import { profileTitle, profileDescription } from "../config";
import Photu from "../images/Me.jpeg";
import Contact from "./Contact";

const About = () => {
  return (
    <div id="about" className="about scroll-mt-20 ">
      <Title title={"about"} />
      <div className="grid md:grid-flow-col gap-6 items-center">
        <div className="profile-image h-56 w-56 left-0 rounded-full overflow-hidden object-cover m-auto">
          <img src={Photu} alt="Piyush" className="w-full h-full" />
        </div>
        <div className="profile-info ">
          <div className="mb-5">
            <span className="text-4xl font-bold">{profileTitle}</span>
          </div>
          <div>
            {profileDescription.map((desc, idx) => (
              <p key={idx} className="font-medium mb-3">
                {desc}
              </p>
            ))}
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default About;
