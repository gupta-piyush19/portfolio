import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Experience from "../components/Experience";

export default () => {
  return (
    <Layout>
      <main className="w-3/5 m-auto">
        <About />
        <Experience />
      </main>
    </Layout>
  );
};
