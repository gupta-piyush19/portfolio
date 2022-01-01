import React from "react";
import { Link } from "gatsby";
const Footer = () => {
  return (
    <div className="footer text-xl m-auto w-full p-4 tracking-wide flex items-center justify-center gap-2 mt-6">
      Made with{" "}
      <Link to="https://www.gatsbyjs.com/">
        <img
          className="inline-block h-6"
          src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg"
          alt="Gatsby Icon"
        />
      </Link>{" "}
      and{" "}
      <Link to="https://tailwindcss.com/">
        <img
          className="inline-block h-6"
          src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          alt="Tailwind CSS Icon"
        />
      </Link>
    </div>
  );
};

export default Footer;
