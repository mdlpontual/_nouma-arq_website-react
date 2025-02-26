import React, { useState, useEffect } from "react";
import IMG from "../../../../assets/imagesHUB";
import { Link } from "react-router-dom";

const imgArr = [ IMG.paiva_01, IMG.paiva_02, IMG.paiva_03, IMG.paiva_04, IMG.paiva_05, 
    IMG.paiva_06, IMG.paiva_07, IMG.paiva_08, IMG.paiva_09, IMG.paiva_10, IMG.paiva_11, 
    IMG.paiva_12, IMG.paiva_13, IMG.paiva_14, IMG.paiva_15, IMG.paiva_16, IMG.paiva_17, 
    IMG.paiva_18, IMG.paiva_19, IMG.paiva_20, IMG.paiva_21, IMG.paiva_22, 
    IMG.paiva_photo_01, IMG.paiva_photo_02, IMG.paiva_photo_03, IMG.paiva_photo_04, 
    IMG.paiva_photo_05, IMG.paiva_photo_06, IMG.paiva_photo_07, IMG.paiva_photo_08, 
    IMG.paiva_photo_09, IMG.paiva_photo_10, IMG.paiva_photo_11
];

function CasaPaiva() {
    return (
      <>
        <header>
            <section id="prjHeaderCon" className="container-fluid" style={{backgroundImage: `url(${IMG.jumbotron_00})`}}>
                <div id="prjHeaderRow" className="row">
                    <div id="prjHeaderCol" className="col">
                        <h1 id="prjTitle">
                            CASA PAIVA
                        </h1>
                    </div>
                </div>
            </section>
        </header>
        <body>
            <section id="preImgsCon" className="container-fluid">
                <div id="preImgsRow" className="row">
                    <div id="preImgsCol" className="col-auto">
                        <img id="miniTessSymb" src={IMG.tessSymbol_black} alt="simbolo tesserato pequeno"  />
                    </div>
                    <div id="prjTextCol" className="col-auto">
                        <h4>Residência na praia do Paiva - Pernambuco</h4>
                        <h4>530m²</h4>
                        <h4>2018-2023</h4>
                    </div>
                </div>
            </section>
            <section id="imgsCon" className="container-fluid">
                {imgArr.map((img, i) => (
                        <div id="imgsRow" className="row">
                            <img id="prjIMG" className="col-auto" src={imgArr[i]} alt="imagem projeto" />
                        </div>
                    )
                )}
            </section>
        </body>
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

export default CasaPaiva;
