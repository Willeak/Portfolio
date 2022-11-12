import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  setTimeout(function () {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");
    console.log(sections);

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
      // Get current scroll position
      let scrollY = window.pageYOffset;

      // Now we loop through sections to get height, top and ID values for each
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".navigation a[class*=" + sectionId + "]")
            .classList.add("active");
        } else {
          document
            .querySelector(".navigation a[class*=" + sectionId + "]")
            .classList.remove("active");
        }
      });
    }
  }, 100);

  return (
    <header>
      <nav className="navigation link">
        <Link to="#Me" className="Me link active">
          <span>A propos</span>
        </Link>
        <Link to="#Skills" className="Skills link">
          <span>Mes compétences</span>
        </Link>
        <br className="replace" />
        <Link to="#Projects" className="Projects link">
          <span>Mon portfolio</span>
        </Link>
        <Link to="#Contact" className="Contact link">
          <span>Me contacter</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
