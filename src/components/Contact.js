import React from "react";
import Title from "./Title";
import { socialMedia } from "../config";

const Contact = () => {
  return (
    <div id="contact" className="contact scroll-mt-20">
      <Title title={"contact"} />
      <div className="text-xl mb-2">You can find me on</div>
      <div className="contact-links flex gap-4 ">
        {socialMedia.map((site, idx) => (
          <span key={idx} className="">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={site.url}
              title={site.name}
            >
              <img
                src={site.icon}
                className="h-14 inline shadow-lg border-2 border-red-100 grayscale hover:grayscale-0 transition-all duration-300 p-1 hover:scale-125"
                alt={site.name}
              />
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Contact;
