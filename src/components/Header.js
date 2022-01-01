import React from "react";
import { Link } from "gatsby";
import { navLinks, author } from "../config";

const Header = () => {
  const { menu } = navLinks;
  return (
    <nav className="w-full m-auto p-4 sticky top-0 bg-white shadow-md z-10">
      <div className="container flex flex-row justify-between items-center">
        <div className="title text-2xl font-bold ">
          <Link to="/">{author}</Link>
        </div>
        <div className="links">
          {menu.map(({ name, url }, key) => (
            <Link
              className="text-lg font-bold px-3 py-2 rounded hover:bg-red-100 "
              key={key}
              to={url}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
