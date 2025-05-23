import React, { useState, useEffect } from "react";
import IMG from "../../../assets/imagesHUB";

function Contact() {
    return (
        <>
            <section id="contactCon" className="container-fluid">
                <div id="tessSymbolRow" className="row">
                    <div id="tessSymbol" className="col-auto">
                        <img src={IMG.tessSymbol_black} alt="simbolo tesserato"/>
                    </div>
                </div>
                <div id="contactsRow" className="row">
                    <div id="adressCol" className="col-auto">
                        <img src={IMG.placeIcon} alt="adress tag"/>
                        <h6>Recife, Pernambuco </h6>
                        <h6>Brasil</h6>
                    </div>
                    <div id="phoneCol" className="col-auto">
                        <img src={IMG.phoneIcon} alt="phone number"/>
                        <h6>+55 (81) 9.8180.5440</h6>
                    </div>
                    <div id="emailCol" className="col-auto">
                        <img src={IMG.letterIcon} alt="email"/>
                        <h6>projetos@nouma.com.br</h6>
                    </div>
                </div>
                <div id="followRow" className="row">
                    <h6 id="followUs">follow us:</h6>
                    <h6>
                        <a href="https://www.instagram.com/noumaarquitetura/">Instagram </a>
                        <a id="separator">|</a>
                        <a href="https://br.pinterest.com/noumaarquitetura/"> Pinterest</a>
                    </h6>
                </div>
                <div id="footerRow" className="row">
                    <div id="footerCol" className="col-auto">
                        <h4>NOUMA Arquitetura</h4>
                        <h5>copyright - 2025</h5>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;