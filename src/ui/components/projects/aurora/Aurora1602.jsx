import React, { useState, useEffect } from "react";
import IMG from "../../../../assets/imagesHUB";

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

export default Aurora1602;