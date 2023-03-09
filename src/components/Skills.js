import React from "react";
import icon1 from "./../assets/1.png";
import icon2 from "./../assets/2.png";
import icon3 from "./../assets/3.png";
import icon4 from "./../assets/4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = -150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active1");
      } else {
        reveals[i].classList.remove("active1");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <section id="Skills">
      <section className="reveal skillList">
        <h2>
          <FontAwesomeIcon icon={faBookBookmark} /> Mes compétences
        </h2>
        <section>
          <h3>Frontend</h3>

          <p>HTML5 </p>
          <div className="bar">
            <div id="HTML" className="bar2" style={{ width: "95%" }}></div>
          </div>
          <p>CSS3 and SASS </p>
          <div className="bar">
            <div id="CSS3" className="bar2" style={{ width: "85%" }}></div>
          </div>
          <p>JAVASCRIPT</p>
          <div className="bar">
            <div className="bar2" style={{ width: "68%" }}></div>
          </div>
          <p>REACT JS </p>
          <div className="bar">
            <div className="bar2" style={{ width: "63%" }}></div>
          </div>
        </section>
        <section>
          <h3>Backend</h3>

          <p>NODE.JS + EXPRESS </p>
          <div className="bar">
            <div className="bar2" style={{ width: "67%" }}></div>
          </div>
        </section>
        <section>
          <h3>Base de donnée</h3>

          <p>MongoDB</p>
          <div className="bar">
            <div className="bar2" style={{ width: "70%" }}></div>
          </div>
        </section>
        <section>
          <h3>Divers</h3>
          <p>Windows</p>
          <div className="bar">
            <div className="bar2" style={{ width: "90%" }}></div>
          </div>
          <p>Ubuntu / Debian</p>
          <div className="bar">
            <div className="bar2" style={{ width: "70%" }}></div>
          </div>
          <p>Adobe Première Pro</p>
          <div className="bar">
            <div className="bar2" style={{ width: "65%" }}></div>
          </div>
        </section>
      </section>
      <section className="jc__center cv reveal">
        <article className="paragraphe">
          J'aie acquis et validé mes compétences grâce à la formation de
          Développeur Web avec Openclassrooms
          <span class="orange">
            {" "}
            première plateforme européenne de formation en ligne.{" "}
          </span>
          Après cela, je ne cesse d'acquérir de nouvelles connaissances en
          auhrefdidacte !
        </article>
        <article>
          <h2 className="textCenter">
            SEO : <br className="replace" />
            <span className="orange">S</span>
            earch <span className="orange">E</span>ngine{" "}
            <span className="orange">O</span>ptimisation
          </h2>

          <ul className="seoList">
            <div>
              <li>
                <img
                  src={icon1}
                  alt="icone d'ordinateur"
                  className="iconeSEO"
                ></img>
                <p>Recherche des bonnes pratiques en développement web</p>
              </li>

              <li>
                <img
                  src={icon2}
                  alt="icone de compteur de vitesse"
                  className="iconeSEO"
                ></img>
                <p>Optimiser la taille et la vitesse d’un site web</p>
              </li>
            </div>
            <div>
              <li>
                <img
                  src={icon3}
                  alt="icone d'un graphique haussier"
                  className="iconeSEO"
                ></img>
                <p>Optimiser le référencement d'un site web</p>
              </li>

              <li>
                <img
                  src={icon4}
                  alt="icone d'un oeil et de son"
                  className="iconeSEO"
                ></img>
                <p>Assurer l'accessibilité d'un site web</p>
              </li>
            </div>
          </ul>
        </article>
      </section>
    </section>
  );
};

export default Skills;
