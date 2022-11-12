import React from "react";
import Linkedin from "./../assets/LinkedIn.webp";
import github from "./../assets/github.png";
import { HashLink as Link } from "react-router-hash-link";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ExternalLink
          href="https://www.linkedin.com/in/calvin-ducatez/"
          target="_blank"
          className="hoverLink"
        >
          <img src={Linkedin} alt="logo Linkedin" className="icon"></img>
          <h4 className="cool-link">Linkedin</h4>
        </ExternalLink>

        <ExternalLink
          href="https://github.com/Willeak"
          target="_blank"
          className="hoverLink"
        >
          <img src={github} alt="logo github" className="icon"></img>
          <h4 className="cool-link">Github</h4>
        </ExternalLink>

        <Link to="#Me" className="hoverLink">
          <FontAwesomeIcon
            icon={faArrowUp}
            className="arrowup cool-link icon"
          />
          <h4 className="desktop cool-link">Vers le haut</h4>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
