import React, { useState, useEffect } from "react";
import IMG from "../../../assets/imagesHUB";
import useFadeInOut from "../../../system/hooks/useFadeInOut";

function About() {
    useFadeInOut(0);

    return (
        <>
            <article id="aboutCon" className="container-fluid">
                <div id="mainLogoRow" className="row">
                    <div id="fullLogoCol" className="col-auto fade-in-target" style={{ "--delay": `${0 * 100}ms` }}>
                        <img id="fullLogo" src={IMG.nouma_fullLogo_black} alt="nouma full logo" />
                    </div>
                </div>
                <div id="aboutTextRow" className="row">
                    <div id="textCol" className="col-auto">
                        <img src={IMG.tessSymbol_white} className="fade-in-target" style={{ "--delay": `${1 * 100}ms` }} alt="simbolo tesserato"/>
                        <h3 id="textTitle" className="fade-in-target" style={{ "--delay": `${2 * 100}ms` }}>
                            Arquitetura em Contexto
                        </h3>
                        <p id="text" className="fade-in-target" style={{ "--delay": `${3 * 100}ms` }}>
                            NOUMA é um pequeno escritório de arquitetura situado em Recife, Pernambuco. Somos especializados em projetos residenciais e design de interiores, 
                            e nossa missão é transformar as ideias dos nossos clientes em realidade por meio da solução eficiente de problemas.<br/>
                            <br/>
                            Nosso objetivo é alcançar estética e funcionalidade ideais em cada projeto, indo além das três dimensões materiais. Gostamos de chamar isso de template "Tesserato", 
                            onde o trabalho do projetista precisa seguir a batuta da única dimensão não material: a abstrata quarta dimensão.<br/>
                            <br/>
                            O Tesserato (ou Hypercubo) é uma forma geométrica conceitual em quatro dimensões, humanamente impossível de ser desenhada ou explicada corretamente, 
                            mas matematicamente real e possível de existir. <br/>
                            <br/>
                            Nós da NOUMA usamos o conceito do Tesserato como nossa principal filosofia de trabalho, 
                            onde a quarta dimensão representa a "dimensão humana" – aquela que não pode ser desenhada nem explicada, apenas sentida.<br/>
                            <br/>
                            Nosso trabalho nas três dimensões materiais é guiado pelas aspirações humanas da quarta dimensão. Cada necessidade e desejo do cliente influencia a forma como nossos projetos são desenvolvidos, 
                            e nós, como arquitetos, buscamos ser um operador transparente entre sonho e o produto final.
                        </p>
                    </div>
                </div>
            </article>
        </>
    );
}

export default About;