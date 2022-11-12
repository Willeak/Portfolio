import React, { useEffect, useState } from "react";
import { TextScramble } from "@a7sc11u/scramble";
import { HashLink as Link } from "react-router-hash-link";

const Me = () => {
  const handleComplete = () => {
    console.log("scramble is done");
  };

  setTimeout(function () {
    const Screen = document.getElementById("Me");
    let HeightScreen = window.innerHeight - 50;
    Screen.style.height = HeightScreen + "px";
  }, 50);

  // const [width, setWidth]   = useState(window.innerWidth);
  const [Height, setHeight] = useState(window.innerHeight);
  console.log(window.innerHeight);
  const updateDimensions = () => {
    // setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section id="Me">
      <div>
        <TextScramble
          className="hi"
          as="p"
          play={true}
          speed={0.4}
          scramble={8}
          step={1}
          stepInterval={1}
          seed={3}
          seedInterval={10}
          onComplete={handleComplete}
          text="Bonjour,"
        />
        <TextScramble
          className="name"
          as="p"
          play={true}
          speed={0.4}
          scramble={8}
          step={1}
          stepInterval={1}
          seed={3}
          seedInterval={100}
          onComplete={handleComplete}
          text="je suis DUCATEZ Calvin"
        />
        <div className="marquee-w">
          <div className="marquee Lastica">
            <span>Developpeur Web</span>
          </div>
          <div className="marquee marquee2 Lastica">
            <span>Developpeur Web</span>
          </div>
        </div>
        <div className="circleMe"></div>
        <p className="descME">
          Passionné par l'informatique et les nouvelles technologies, j'ai
          réalisé une formation de "Développeur intégrateur Web" avec{" "}
          <span className="blue">React.js</span>
          <br />
          <br />
          Venez consulter{" "}
          <Link to="#Projects" className="orange">
            Mon portfolio
          </Link>{" "}
          et découvrir mon profil !
        </p>
      </div>
      <div className="decor">
        <div className="stick"></div>
        <div className="circle"></div>
        <div className="circle2"></div>
        <div className="circle"></div>
        <div className="stick"></div>
      </div>
      <div id="arrow">
        <p>↑</p>
        <p>↓</p>
      </div>
    </section>
  );
};

export default Me;
