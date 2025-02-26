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
                        <h5>Recife, Pernambuco </h5>
                        <h5>Brasil</h5>
                    </div>
                    <div id="phoneCol" className="col-auto">
                        <img src={IMG.phoneIcon} alt="phone number"/>
                        <h5>+55 (81) 9.8180.5440</h5>
                    </div>
                    <div id="emailCol" className="col-auto">
                        <img src={IMG.letterIcon} alt="email"/>
                        <h5>projetos@nouma.com.br</h5>
                    </div>
                </div>
                <div id="followRow" className="row">
                    <h5 id="followUs">follow us:</h5>
                    <h5>
                        <a href="https://www.instagram.com/noumaarquitetura/">Instagram </a>
                        <a id="separator">|</a>
                        <a href="https://br.pinterest.com/noumaarquitetura/"> Pinterest</a>
                    </h5>
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