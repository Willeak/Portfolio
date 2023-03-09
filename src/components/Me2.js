import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import CV from "./../CV/CV_DUCATEZ_Calvin_DevWeb.pdf";

const Me2 = () => {
  const downloadTxtFile = (e) => {
    e.preventDefault();
    window.open(CV);
  };

  return (
    <section className="Me2">
      <section>
        <h2>Qui suis-je ?</h2>
        <p class="Moi">
          je suis Calvin Ducatez, 25 ans, Développeur web passionné dans la
          région du Pas-de-Calais à Béthune. J'ai réalisé une formation de
          "Développeur intégrateur Web" de niveau Bac +2 avec Openclassrooms en
          autodidacte de mars 2022 à novembre 2022. <br />
          Ayant terminé et obtenue mon diplôme, je cherche activement un poste
          pour exercer en tant que Développeur Web !<br />
          <br />
          vous pouver consulter mes compétences et mes projets ci-dessous, sinon
          téléchargez mon CV !
        </p>
        <button onClick={downloadTxtFile}>
          <FontAwesomeIcon icon={faDownload} />
          Télécharger mon CV
        </button>
      </section>
      <section className="cardQualification hover-shadow">
        <div id="ani" className="reflect"></div>
        <FontAwesomeIcon icon={faGraduationCap} />
        <h2>Développeur intégrateur Web</h2>
        <h3>Diplôme de niveau 5 (bac +2) obtenue</h3>
        <p>
          Certification professionnelle enregistrée au Répertoire National des
          Certifications Professionnelles au
          <span class="orange">niveau 5</span>.
        </p>
      </section>
    </section>
  );
};

export default Me2;
