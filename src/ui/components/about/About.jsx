import React, { useState, useEffect } from "react";
import IMG from "../../../assets/imagesHUB";

function About() {
    return (
        <>
            <article id="aboutCon" className="container-fluid">
                <div id="mainLogoRow" className="row">
                    <div id="fullLogoCol" className="col-auto">
                        <img id="fullLogo" src={IMG.nouma_fullLogo_black} alt="nouma full logo" />
                    </div>
                </div>
                <div id="aboutTextRow" className="row">
                    <div id="textCol" className="col-auto">
                        <h3 id="textTitle">
                            arquitetura em contexto
                        </h3>
                        <p id="text">
                            A NOUMA é um pequeno escritório de arquitetura de Pernambuco, Brasil, especializado em projetos residenciais e design de interiores. 
                            Nossa missão é transformar os sonhos das famílias em realidade, convertendo problemas em soluções. 
                            <br/>
                            Nosso objetivo em cada projeto é alcançar a função e a estética ideais, indo além da terceira dimensão. Gostamos de chamar isso de o "template do Tesseract", 
                            onde o trabalho do designer nas três dimensões materiais deve seguir uma dimensão que não é material, a quarta dimensão abstrata.
                            <br/>
                            O Tesseract (ou Hipercubo) é um objeto geométrico teórico de quatro dimensões, matematicamente possível de existir, mas que nós, 
                            como seres humanos vivendo em um mundo tridimensional, não conseguimos visualizar plenamente.
                            <br/>
                            Na NOUMA, usamos a ideia do Tesseract como nosso lema, onde a quarta dimensão representa a dimensão humana. Nosso trabalho nas três dimensões materiais é guiado pelas aspirações humanas da dimensão abstrata. 
                            Cada necessidade e desejo do cliente influencia diretamente o desenvolvimento dos nossos projetos, e nós, como arquitetos, buscamos ser operadores transparentes entre o sonho e o produto final.
                        </p>
                    </div>
                </div>
            </article>
        </>
    );
}

export default About;