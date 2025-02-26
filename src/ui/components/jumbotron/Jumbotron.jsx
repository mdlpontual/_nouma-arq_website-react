/* import React, { useState, useEffect } from "react";
import IMG from "../../../assets/imagesHUB";
import Menu from "./menu/Menu";

const jumboIMG = [ 
  IMG.jumbotron_00, IMG.jumbotron_01, IMG.jumbotron_02, IMG.jumbotron_03, IMG.jumbotron_04,
  IMG.jumbotron_05, IMG.jumbotron_06, IMG.jumbotron_07, IMG.jumbotron_08, IMG.jumbotron_09,
  IMG.jumbotron_10, IMG.jumbotron_11, IMG.jumbotron_12, IMG.jumbotron_13, IMG.jumbotron_14,
  IMG.jumbotron_15, IMG.jumbotron_16, IMG.jumbotron_17, 
  IMG.jumbotron_20, IMG.jumbotron_21, IMG.jumbotron_22, IMG.jumbotron_23, IMG.jumbotron_24,
  IMG.jumbotron_25, IMG.jumbotron_26, IMG.jumbotron_27, IMG.jumbotron_28, IMG.jumbotron_29,
];

function Jumbotron() {
  const [currentIMG, setCurrentIMG] = useState(jumboIMG[Math.floor(Math.random() * jumboIMG.length)]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [symbolSrc, setSymbolSrc] = useState(IMG.nouma_onlySymbol_white);

  const handleMouseEnter = () => {
      setIsHovered(true);
      setTimeout(() => {
          setSymbolSrc(IMG.nouma_onlySymbol_green);
      }, 100); // Slight delay for smooth transition
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
      setTimeout(() => {
          setSymbolSrc(IMG.nouma_onlySymbol_white);
      }, 100); // Slight delay for smooth transition
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIMG(jumboIMG[Math.floor(Math.random() * jumboIMG.length)]);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="jumboCon" className="container-fluid" style={{backgroundImage: `url(${currentIMG})`}}>
        <div id={isMenuOpen ? "menuOpen" : "menuClosed"} className="row">
          {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
        </div>
        <div id="jumboFrame" className="row">
          <div id="jumboInnerFrame" className={`col ${isHovered || isMenuOpen ? "hovered-border" : ""}`}></div>
          <div id="jumboInnerLogo" className="col">
            <div id="symbRow" className="row">
              <img id="nomaSymbol" 
                   className="col-auto btn" 
                   src={symbolSrc}
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                   onClick={() => setIsMenuOpen(true)}
                   alt="nouma symbol and menu button"/>
            </div>
            <div id="nameRow" className="row">
              <img id="nomaName" className="col-auto" src={IMG.nouma_lineName_white} alt="nouma name" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Jumbotron; */

import React, { useState, useEffect, useRef } from "react";
import IMG from "../../../assets/imagesHUB";
import Menu from "./menu/Menu";

const jumboIMG = [
  IMG.jumbotron_00, IMG.jumbotron_01, IMG.jumbotron_02, IMG.jumbotron_03, IMG.jumbotron_04,
  IMG.jumbotron_05, IMG.jumbotron_06, IMG.jumbotron_07, IMG.jumbotron_08, IMG.jumbotron_09,
  IMG.jumbotron_10, IMG.jumbotron_11, IMG.jumbotron_12, IMG.jumbotron_13, IMG.jumbotron_14,
  IMG.jumbotron_15, IMG.jumbotron_16, IMG.jumbotron_17, 
  IMG.jumbotron_20, IMG.jumbotron_21, IMG.jumbotron_22, IMG.jumbotron_23, IMG.jumbotron_24,
  IMG.jumbotron_25, IMG.jumbotron_26, IMG.jumbotron_27, IMG.jumbotron_28, IMG.jumbotron_29,
];

function Jumbotron() {
  const [currentIMG, setCurrentIMG] = useState(jumboIMG[Math.floor(Math.random() * jumboIMG.length)]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [symbolSrc, setSymbolSrc] = useState(IMG.nouma_onlySymbol_white);
  const headerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      setSymbolSrc(IMG.nouma_onlySymbol_green);
    }, 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => {
      setSymbolSrc(IMG.nouma_onlySymbol_white);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIMG(jumboIMG[Math.floor(Math.random() * jumboIMG.length)]);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newImage = new Image();
    newImage.src = currentIMG;
    newImage.onload = () => setImageLoaded(true);
  }, [currentIMG]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imageLoaded) {
          entry.target.classList.add("fade-in-visible");
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, [imageLoaded]);

  return (
    <>
      <section ref={headerRef} id="jumboCon" className={`container-fluid fade-in ${imageLoaded ? "fade-in-visible" : ""}`} 
        style={{ backgroundImage: `url(${currentIMG})` }}>
        <div id={isMenuOpen ? "menuOpen" : "menuClosed"} className="row">
          {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
        </div>
        <div id="jumboFrame" className="row">
          <div id="jumboInnerFrame" className={`col ${isHovered || isMenuOpen ? "hovered-border" : ""}`}></div>
          <div id="jumboInnerLogo" className="col">
            <div id="symbRow" className="row">
              <img
                id="nomaSymbol"
                className="col-auto btn"
                src={symbolSrc}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsMenuOpen(true)}
                alt="nouma symbol and menu button"
              />
            </div>
            <div id="nameRow" className="row">
              <img id="nomaName" className="col-auto" src={IMG.nouma_lineName_white} alt="nouma name" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jumbotron;
