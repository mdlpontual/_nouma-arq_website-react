import React, { useState, useEffect } from "react";
import IMG from "../../../../assets/imagesHUB";
import { Link } from "react-router-dom";

function Menu({ setIsMenuOpen, currentPage }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [setIsMenuOpen]);

    return (
        <>
            <div id="secMenuInnerFrame" className="col"></div>
            <menu id="secMenuCol" className="col">
                <div id="secMenuSymb" className="row">
                    <img id="secMenuNomaSymbol" 
                        className="col-auto" 
                        src={IMG.menuYellowIcon} 
                        onClick={() => setIsMenuOpen(false)}
                        alt="nouma symbol and menu button" />
                </div>
                <nav id="secMenuNav" className="row">
                    <ul id="secMenuList" className="col">
                        <li>
                            <Link to={'/'}><h2 id="hpLi">PÁGINA INICIAL</h2></Link>
                            <h2 id="notAnAnchor">PROJETOS</h2>
                            <Link to={'/casaPaiva'}><h2 id={currentPage === "paiva" ? "activeProjLi" : "projLi"}>CASA PAIVA</h2></Link>
                            <Link to={'/seerrambiFlats'}><h2 id={currentPage === "serrambi" ? "activeProjLi" : "projLi"}>SERRAMBI FLATS</h2></Link>
                            <Link to={'/apto404'}><h2 id={currentPage === "apto404" ? "activeProjLi" : "projLi"}>APARTAMENTO 404</h2></Link>
                            <Link to={'/aurora1602'}><h2 id={currentPage === "aurora" ? "activeProjLi" : "projLi"}>AURORA 1602</h2></Link>
                        </li>
                    </ul>
                </nav>
                <address id="secMenuFooter" className="row">
                    <h6 id="followUs">follow us:</h6>
                    <h5>
                        <a href="https://www.instagram.com/noumaarquitetura/">Instagram </a>
                        <a id="separator">|</a>
                        <a href="https://br.pinterest.com/noumaarquitetura/"> Pinterest</a>
                    </h5>
                </address>
            </menu>
        </>
    );
}

export default Menu;