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

import React, { useState, useEffect } from "react";
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
  const [loaded, setLoaded] = useState(false); // New state to track loading
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [symbolSrc, setSymbolSrc] = useState(IMG.nouma_onlySymbol_white);

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
    const preloadImage = new Image();
    preloadImage.src = currentIMG;
    preloadImage.onload = () => setLoaded(true); // Set as loaded when image is ready

    const interval = setInterval(() => {
      setLoaded(false); // Reset loading state before switching
      const newImg = jumboIMG[Math.floor(Math.random() * jumboIMG.length)];
      const img = new Image();
      img.src = newImg;
      img.onload = () => {
        setCurrentIMG(newImg);
        setLoaded(true);
      };
    }, 15000);
    
    return () => clearInterval(interval);
  }, [currentIMG]);

  return (
    <>
      <section id="jumboCon" className="container-fluid" 
                style={{
                  backgroundImage: `url(${currentIMG})`,
                  opacity: loaded ? 1 : 0,  // Only show image once it's loaded
                  transition: "opacity 1s ease-in-out"
                }}>
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

export default Jumbotron;
