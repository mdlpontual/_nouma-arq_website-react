import React, { useState, useEffect } from "react";
import IMG from "../../../../assets/imagesHUB";

const imgArr = [ IMG.serrambi_01, IMG.serrambi_02, IMG.serrambi_03, IMG.serrambi_04, IMG.serrambi_05, IMG.serrambi_06, 
    IMG.serrambi_07, IMG.serrambi_08, IMG.serrambi_09, IMG.serrambi_10, IMG.serrambi_11, IMG.serrambi_12, IMG.serrambi_13, 
    IMG.serrambi_14, IMG.serrambi_15, IMG.serrambi_16, IMG.serrambi_17, IMG.serrambi_18
];

function SeerrambiFlats() {
    return (
      <>
        <header>
            <section id="prjHeaderCon" className="container-fluid" style={{backgroundImage: `url(${IMG.jumbotron_20})`}}>
                <div id="prjHeaderRow" className="row">
                    <div id="prjHeaderCol" className="col">
                        <h1 id="prjTitle">
                            SERRAMBI FLATS
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

export default SeerrambiFlats;