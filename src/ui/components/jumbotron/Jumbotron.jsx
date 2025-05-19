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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [symbolSrc, setSymbolSrc] = useState(IMG.nouma_onlySymbol_white);
  const [imgA, setImgA] = useState(currentIMG);
  const [imgB, setImgB] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIMG = jumboIMG[Math.floor(Math.random() * jumboIMG.length)];
      if (activeIndex === 0) {
        setImgB(nextIMG);
        setActiveIndex(1);
      } else {
        setImgA(nextIMG);
        setActiveIndex(0);
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [activeIndex]);

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

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-target, .fade-out-target');
  
    elements.forEach((el, index) => {
      el.dataset.index = index;
    });
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('fade-out-target')) {
              entry.target.classList.add('fade-out-filter');
            } else {
              entry.target.classList.add('fade-in-up');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0
      }
    );
  
    elements.forEach(el => observer.observe(el));
  
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section id="jumboCon" className="container-fluid">
        <div id="jumboFilter" className="fade-out-target"></div>
        <div id="jumboImageWrapper">
          <img
            className={`jumbo-img ${activeIndex === 0 ? "visible" : "hidden"}`}
            src={imgA}
            alt="background A"
            loading="lazy"
          />
          <img
            className={`jumbo-img ${activeIndex === 1 ? "visible" : "hidden"}`}
            src={imgB}
            alt="background B"
            loading="lazy"
          />
        </div>
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
              <img id="noumaName" className="col-auto" src={IMG.nouma_lineName_white} alt="nouma name" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Jumbotron;