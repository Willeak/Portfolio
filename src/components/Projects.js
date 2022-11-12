import React from "react";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import github from "./../assets/github.png";
import projet1 from "./../assets/github/Booki.webp";
import projet2 from "./../assets/github/ohmyfood.webp";
import projet3 from "./../assets/github/panthere.webp";
import projet4 from "./../assets/github/Kanap.webp";
import projet5 from "./../assets/github/Piiquante.webp";
import projet6 from "./../assets/github/Groupomania.webp";
import projet7 from "./../assets/github/WeAlert.webp";
import projet8 from "./../assets/github/BotDiscord.webp";

const Projects = () => {
  return (
    <section id="Projects">
      <section className="reveal">
        <h2>
          <FontAwesomeIcon icon={faDiagramProject} /> Mon portfolio
        </h2>
        <div className="projects">
          <article className="Card">
            <img src={projet1} alt="Projet 1" className="ImgCard"></img>
            <div className="description">
              <h4>Booki</h4>
              <div>
                <ExternalLink href="https://willeak.github.io/" target="_blank">
                  <FontAwesomeIcon icon={faLink} className="icon LinkGit" />
                </ExternalLink>
                <ExternalLink
                  href="https://github.com/Willeak/Willeak.github.io"
                  target="_blank"
                >
                  <img
                    src={github}
                    alt="logo github"
                    className="icon LinkGit"
                  ></img>
                </ExternalLink>
              </div>
              <p>
                Réalisation d'un site de réservation en ligne avec conformité de
                la maquette et responsive desktop, tablet, mobile.
              </p>
            </div>
          </article>
          <article className="Card">
            <img src={projet2} alt="Projet 1" className="ImgCard"></img>
            <div className="description">
              <h4>Ohmyfood</h4>{" "}
              <div>
                <ExternalLink
                  href="https://willeak.github.io/ohmyfood/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLink} className="icon LinkGit" />
                </ExternalLink>
                <ExternalLink
                  href="https://github.com/Willeak/ohmyfood"
                  target="_blank"
                >
                  <img
                    src={github}
                    alt="logo github"
                    className="icon LinkGit"
                  ></img>
                </ExternalLink>
              </div>
              <p>
                Réalisation d'un site de restaurations avec conformité de la
                maquette et effets CSS graphiques avancés SASS.
              </p>
            </div>
          </article>
          <article className="Card">
            <img src={projet3} alt="Projet 1" className="ImgCard"></img>
            <div className="description">
              <h4>Panthère</h4>{" "}
              <div>
                <ExternalLink
                  href="https://willeak.github.io/La_Panthere/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLink} className="icon LinkGit" />
                </ExternalLink>
                <ExternalLink
                  href="https://github.com/Willeak/La_Panthere"
                  target="_blank"
                >
                  <img
                    src={github}
                    alt="logo github"
                    className="icon LinkGit"
                  ></img>
                </ExternalLink>
              </div>
              <p>
                Optimiser un site web existant grâce au SEO (Search Engine
                Optimization), référence et accessibilité.
              </p>
            </div>
          </article>
          <article className="Card">
            <img src={projet4} alt="Projet 1" className="ImgCard"></img>
            <div className="description">
              <h4>Kanap</h4>{" "}
              <div>
                <ExternalLink
                  href="https://github.com/Willeak/Kanap"
                  target="_blank"
                >
                  <img
                    src={github}
                    alt="logo github"
                    className="icon LinkGit"
                  ></img>
                </ExternalLink>
              </div>
              <p>
                Réalisation du Frontend du site de vente de canapé avec un plan
                de test, sous le language javascript, ainsi que données issues
                de sources externes.
              </p>
            </div>
          </article>
          <article className="Card">
            <img src={projet5} alt="Projet 1" className="ImgCard"></img>
            <div className="description">
              <h4>Piiquante</h4>{" "}
              <div>
                <ExternalLink
                  href="https://github.com/Willeak/Piiquante"
                  target="_blank"
                >
                  <img
                    src={github}
                    alt="logo github"
                    className="icon LinkGit"
                  ></img>
                </ExternalLink>
              </div>
              <p>
                Réalisayion du Backend du site de références de saute piquantes
                avec stockage de données sécurisé.
              </p>
            </div>
          </article>
          <article className="Card">
            <img src={projet6} alt="Projet 1" className="ImgCard"></img>
            <div className="description">
              <h4>Groupomania</h4>{" "}
              <div>
                <ExternalLink
                  href="https://github.com/Willeak/Groupomania"
                  target="_blank"
                >
                  <img
                    src={github}
                    alt="logo github"
                    className="icon LinkGit"
                  ></img>
                </ExternalLink>
              </div>
              <p>
                Création complète d'une application web de réseau social
                d'entreprise (comprenant le Frontend, Backend et BDD MongoDB),
                avec système d'authentification sécurisé, envoie de données et
                de fichiers.
              </p>
            </div>
          </article>
        </div>
        <h3>Autres projets :</h3>
        <section className="projects">
          <article className="Card">
            <img src={projet7} alt="Projet 1" className="ImgCard"></img>
            <div className="description">
              <h4>WeAlert</h4>{" "}
              <div>
                <ExternalLink href="" target="_blank">
                  <img
                    src={github}
                    alt="logo github"
                    className="icon LinkGit"
                  ></img>
                </ExternalLink>
              </div>
              <p>
                Réalisation d'une extension chrome, basé sur l'API de twitch.tv
                afin d'obtenir des informations sur une diffusion en direct.
              </p>
            </div>
          </article>
          <article className="Card">
            <img src={projet8} alt="Projet 1" className="ImgCard"></img>
            <div className="description">
              <h4>Bot Discord</h4>
              <p>En cours de développement...</p>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
};

export default Projects;
