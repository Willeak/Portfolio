import React from "react";
import Skills from "../components/Skills";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Me from "../components/Me";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Me2 from "../components/Me2";
import Contact from "../components/Contact";

const home = () => {
  return (
    <div>
      <Cursor />
      <Header />
      <Me />
      <Me2 />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default home;
