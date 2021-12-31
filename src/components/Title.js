import { Link } from "gatsby";
import React from "react";

const Title = ({ title }) => {
  return (
    <Link to={`/#${title.toLowerCase()}`}>
      <div className="mt-16 text-5xl capitalize font-semibold tracking-wide mb-4">
        {title}
      </div>
    </Link>
  );
};

export default Title;
