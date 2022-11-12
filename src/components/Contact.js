import React from "react";
import { ExternalLink } from "react-external-link";
const Contact = () => {
  return (
    <section id="Contact">
      <h2>Me contacter</h2>
      <p>Vous souhaitez discuter avec moi sur de futur projet ?</p>
      <p className="text1">
        N'hésitez pas à me contacter si vous souhaitez collaborer avec moi, ou
        simplement discuter
      </p>
      <div className="email hoverLink ">
        <ExternalLink href="mailto:cducatez.pro@gmail.com" target="_blank">
          <div className="circleContact"></div>
          <p className="cool-link">cducatez.pro@gmail.com</p>
        </ExternalLink>
      </div>
    </section>
  );
};

export default Contact;
