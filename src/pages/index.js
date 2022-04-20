import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const App = () => {
  return (
    <Layout>
      <div className="px-8 lg:w-4/5 m-auto">
        <About />
        <Experience />
        <Skills />
        <Projects />
      </div>
    </Layout>
  );
};

export default App;
