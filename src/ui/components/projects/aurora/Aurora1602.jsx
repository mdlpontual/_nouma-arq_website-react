import React, { useState, useEffect } from "react";
import IMG from "../../../../assets/imagesHUB";
import { Link } from "react-router-dom";

const imgArr = [ IMG.aurora1602_01, IMG.aurora1602_02, IMG.aurora1602_03, IMG.aurora1602_04, IMG.aurora1602_05 ];

function Aurora1602() {
    return (
      <>
        <header>
            <section id="prjHeaderCon" className="container-fluid" style={{backgroundImage: `url(${imgArr[0]})`}}>
                <div id="prjHeaderRow" className="row">
                    <div id="prjHeaderCol" className="col">
                        <h1 id="prjTitle">
                            Aurora 1602
                        </h1>
                    </div>
                </div>
            </section>
        </header>
        <main>
            <section id="preImgsCon" className="container-fluid">
                <div id="preImgsRow" className="row">
                    <div id="preImgsCol" className="col-auto">
                        <img id="miniTessSymb" src={IMG.tessSymbol_black} alt="simbolo tesserato pequeno"  />
                    </div>
                    <div id="prjTextCol" className="col-auto">
                        <div id="prjTextElm">
                            <h4>Projeto de Decoração e Marcenaria para Apartamento.</h4>
                            <h4>135m²</h4>
                            <h4>2020-2021</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section id="imgsCon" className="container-fluid">
                {imgArr.map((img, i) => (
                        <div id="imgsRow" className="row" key={i}>
                            <img id="prjIMG" className="col-auto" src={imgArr[i]} alt="imagem projeto" />
                        </div>
                    )
                )}
            </section>
        </main>
        <footer>
            <section id="prjFooterCon" className="container-fluid">
                <div id="backBtnRow" className="row">
                    <Link to={'/'}>
                        <h4 id="backBtn" className="btn">Página Inicial</h4>
                    </Link>
                </div>
                <div id="prjFooterRow" className="row">
                    <div id="prjFooterCol" className="col-auto">
                        <h4>NOUMA Arquitetura</h4>
                        <h5>copyright - 2025</h5>
                    </div>
                </div>
            </section>
        </footer>
      </>
    )
}

export default Aurora1602;