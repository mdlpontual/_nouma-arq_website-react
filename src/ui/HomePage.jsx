import React, { useState, useEffect } from "react";
import IMG from "../assets/imagesHUB";
import Menu from "./components/Menu";

const jumboIMG = [ 
  IMG.jumbotron_00, IMG.jumbotron_01, IMG.jumbotron_02, IMG.jumbotron_03, IMG.jumbotron_04,
  IMG.jumbotron_05, IMG.jumbotron_06, IMG.jumbotron_07, IMG.jumbotron_08, IMG.jumbotron_09,
  IMG.jumbotron_10, IMG.jumbotron_11, IMG.jumbotron_12, IMG.jumbotron_13, IMG.jumbotron_14,
  IMG.jumbotron_15, IMG.jumbotron_16, IMG.jumbotron_17, 
  IMG.jumbotron_20, IMG.jumbotron_21, IMG.jumbotron_22, IMG.jumbotron_23, IMG.jumbotron_24,
  IMG.jumbotron_25, IMG.jumbotron_26, IMG.jumbotron_27, IMG.jumbotron_28, IMG.jumbotron_29,
];

function HomePage() {
  const [currentIMG, setCurrentIMG] = useState(jumboIMG[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIMG(jumboIMG[Math.floor(Math.random() * jumboIMG.length)]);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header id="jumboCon" className="container-fluid" style={{backgroundImage: `url(${currentIMG})`}}>
        {<menu id="menu" className="row">
          <Menu />
        </menu>}
        <div id="jumboFrame" className="row">
          <div id="jumboInnerFrame" className={`col ${isHovered ? "hovered-border" : ""}`}></div>
          <div id="jumboInnerLogo" className="col">
            <div id="symbRow" className="row">
              <img id="nomaSymbol" 
                  className="col-auto btn" 
                  src={!isHovered ? IMG.nouma_onlySymbol_white : IMG.nouma_onlySymbol_green} 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  alt="nouma symbol and menu button" />
            </div>
            <div id="nameRow" className="row">
              <img id="nomaName" className="col-auto" src={IMG.nouma_lineName_white} alt="nouma name" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HomePage;