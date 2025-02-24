import React, { useState, useEffect } from "react";
import IMG from "../../../../assets/imagesHUB";
import { Link } from "react-router-dom";

function Menu({ setIsMenuOpen }) {
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
            <div id="menuInnerFrame" className="col"></div>
            <menu id="menuCol" className="col">
                <div id="menuSymb" className="row">
                    <img id="menuNomaSymbol" 
                        className="col-auto btn" 
                        src={IMG.nouma_onlySymbol_green} 
                        onClick={() => setIsMenuOpen(false)}
                        alt="nouma symbol and menu button" />
                </div>
                <nav id="menuNav" className="row">
                    <ul id="menuList" className="col">
                        <li>
                            <h2>SOBRE</h2>
                        </li>
                        <li>
                            <h2>PROJETOS</h2>
                            <Link to={'/casaPaiva'}><h2 id="projLi">CASA PAIVA</h2></Link>
                            <Link to={'/seerrambiFlats'}><h2 id="projLi">FLATS SERRAMBI</h2></Link>
                            <Link to={'/apto404'}><h2 id="projLi">404</h2></Link>
                            <Link to={'/aurora1602'}><h2 id="projLi">AURORA 1602</h2></Link>
                        </li>
                        <li>
                            <h2>CONTATO</h2>
                        </li>
                    </ul>
                </nav>
                <address id="menuFooter" className="row">
                    <h5 id="followUs">follow us:</h5>
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