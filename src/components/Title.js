import { Link } from "gatsby";
import React from "react";

const Title = ({ title }) => {
  return (
    <div className="mt-16 text-5xl capitalize font-semibold tracking-wide mb-4">
      <a href={`/#${title.toLowerCase()}`}>{title}</a>
    </div>
  );
};

export default Title;
