import React, { useState, useEffect } from "react";
import IMG from "../../assets/imagesHUB";

function Menu() {
    return (
        <>
            <div id="menuInnerFrame" className="col"></div>
            <div id="menuCol" className="col">
                <div id="menuSymb" className="row">
                    <img id="menuNomaSymbol" 
                        className="col-auto btn" 
                        src={IMG.nouma_onlySymbol_black} 
                        alt="nouma symbol and menu button" />
                </div>
            </div>
        </>
    );
}

export default Menu;