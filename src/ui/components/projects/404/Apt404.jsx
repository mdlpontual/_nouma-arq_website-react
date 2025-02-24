import React, { useState, useEffect } from "react";
import IMG from "../../../../assets/imagesHUB";

const imgArr = [ IMG.apt404_01, IMG.apt404_02, IMG.apt404_03, IMG.apt404_04, IMG.apt404_05, IMG.apt404_06, 
    IMG.apt404_07, IMG.apt404_08, IMG.apt404_09
];

function Apto404() {
    return (
      <>
        <header>
            <section id="prjHeaderCon" className="container-fluid" style={{backgroundImage: `url(${imgArr[5]})`}}>
                <div id="prjHeaderRow" className="row">
                    <div id="prjHeaderCol" className="col">
                        <h1 id="prjTitle">
                            Apartamento 404
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
                </div>
                {/* <div id="prjTextRow" className="row">
                    <div id="prjTextCol" className="col-auto">
                        <p>some text</p>
                    </div>
                </div> */}
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

export default Apto404;