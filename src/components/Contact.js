import React from "react";
import { ExternalLink } from "react-external-link";
const Contact = () => {
  return (
    <section id="Contact">
      <h2>Me contacter</h2>
      <p>Vous souhaitez discuter avec moi sur de futur projet ?</p>
      <p class="text1">
        Si vous êtes à la recherche d'un développeur web talentueux et passionné
        pour réaliser votre projet, ne cherchez plus ! Je suis à votre
        disposition pour discuter de vos besoins en développement web et pour
        vous offrir des solutions personnalisées, adaptées à vos objectifs.
        <br />
        <br />
        Avec mes compétences en programmation, mon expérience et mon engagement
        à fournir un travail de qualité, je suis convaincu que je peux vous
        aider à créer une présence en ligne efficace et réussie. Contactez-moi
        dès maintenant pour en discuter davantage !
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
