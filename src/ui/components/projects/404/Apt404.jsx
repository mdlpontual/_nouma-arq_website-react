import React, { useState, useEffect } from "react";
import IMG from "../../../../assets/imagesHUB";
import { Link } from "react-router-dom";

const imgArr = [ IMG.apt404_01, IMG.apt404_02, IMG.apt404_03, IMG.apt404_04, IMG.apt404_05, IMG.apt404_06, 
    IMG.apt404_07, IMG.apt404_08, IMG.apt404_09
];

function Apto404() {
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => setFirstLoad(false), 10000); 
    }, []);
    
    return (
      <>
        <header>
            <section id="prjHeaderCon" className="container-fluid" 
                style={{ 
                    backgroundImage: `url(${imgArr[5]})`, 
                    opacity: firstLoad ? 0 : 1, 
                    transition: "opacity 1s ease-out"
                }}>
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
                    <div id="prjTextCol" className="col-auto">
                        <h4>Projeto de Reforma e Decoração para Apartamento.</h4>
                        <h4>93m²</h4>
                        <h4>2020-2021</h4>
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

export default Apto404;