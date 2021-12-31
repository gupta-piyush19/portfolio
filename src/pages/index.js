import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default () => {
  return (
    <Layout>
      <main className="w-3/5 m-auto">
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </Layout>
  );
};
