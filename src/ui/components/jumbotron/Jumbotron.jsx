import React, { useState, useEffect } from "react";
import IMG from "../../../assets/imagesHUB";
import Menu from "./menu/Menu";
import useFadeInOut from "../../../system/hooks/useFadeInOut";

const jumboIMG = [ 
  IMG.jumbotron_00, IMG.jumbotron_01, IMG.jumbotron_02, IMG.jumbotron_03, IMG.jumbotron_04,
  IMG.jumbotron_05, IMG.jumbotron_06, IMG.jumbotron_07, IMG.jumbotron_08, IMG.jumbotron_09,
  IMG.jumbotron_10, IMG.jumbotron_11, IMG.jumbotron_12, IMG.jumbotron_13, IMG.jumbotron_14,
  IMG.jumbotron_15, IMG.jumbotron_16, IMG.jumbotron_17, 
  IMG.jumbotron_20, IMG.jumbotron_21, IMG.jumbotron_22, IMG.jumbotron_23, IMG.jumbotron_24,
  IMG.jumbotron_25, IMG.jumbotron_26, IMG.jumbotron_27, IMG.jumbotron_28, IMG.jumbotron_29,
];

function getRandomImg(exclude) {
  let img;
  do {
    img = jumboIMG[Math.floor(Math.random() * jumboIMG.length)];
  } while (img === exclude);
  return img;
}

function Jumbotron() {
  const [imgA, setImgA] = useState(() => jumboIMG[Math.floor(Math.random() * jumboIMG.length)]);
  const [imgB, setImgB] = useState(() => getRandomImg(imgA));
  const [activeIndex, setActiveIndex] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [symbolSrc, setSymbolSrc] = useState(IMG.nouma_onlySymbol_white);

  useFadeInOut(0);

  useEffect(() => {
    let localIndex = 0;
    const interval = setInterval(() => {
      const nextIMG = getRandomImg(localIndex === 0 ? imgA : imgB);
      if (localIndex === 0) {
        setImgB(nextIMG);
        setActiveIndex(1);
        localIndex = 1;
      } else {
        setImgA(nextIMG);
        setActiveIndex(0);
        localIndex = 0;
      }
    }, 15000); // adjust interval as needed

    return () => clearInterval(interval);
  }, [imgA, imgB]);

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
  
  return (
    <>
      <section id="jumboCon" className="container-fluid">
        <div id="jumboFilter" className="fade-out-target"></div>
        <div id="jumboImageWrapper">
          <img
            className={`jumbo-img ${activeIndex === 0 ? "visible" : "hidden"}`}
            src={imgA}
            alt="background A"/>
          <img
            className={`jumbo-img ${activeIndex === 1 ? "visible" : "hidden"}`}
            src={imgB}
            alt="background B"/>
        </div>
        <div id={isMenuOpen ? "menuOpen" : "menuClosed"} className="row">
          {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
        </div>
        <div id="jumboFrame" className="row">
          <div id="jumboInnerFrame" className={`col ${isHovered || isMenuOpen ? "hovered-border" : ""}`}></div>
          <div id="jumboInnerLogo" className="col">
            <div id="symbRow" className="row">
              <img id="nomaSymbol" 
                   className="col-auto" 
                   src={symbolSrc}
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                   onClick={() => setIsMenuOpen(true)}
                   alt="nouma symbol and menu button"/>
            </div>
            <div id="nameRow" className="row">
              <img id="noumaNameLine" className="col-auto" src={IMG.nouma_lineName_white} alt="nouma name" />
              <img id="noumaNameWrap" className="col-auto" src={IMG.nouma_onlyNameRight_white} alt="nouma name" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Jumbotron;