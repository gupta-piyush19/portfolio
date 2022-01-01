import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth font-primaryFont max-w-6xl m-auto">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
