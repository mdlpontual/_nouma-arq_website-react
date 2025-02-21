import React, { useState, useEffect } from "react";
import IMG from "../../../assets/imagesHUB";

function Projetos() {
    return (
        <>
            <section id="projectsCon" className="container-fluid">
                <div id="projTitleRow" className="row">
                    <h1 id="projTitle" className="col-auto">
                        projetos
                    </h1>
                </div>
                <div id="cardsRow" className="row">
                    <div id="dummyCard" className="col-3">
                        <div id="card">
                            <img src={IMG.jumbotron_15} />
                        </div>
                    </div>
                    <div id="dummyCard" className="col-3">
                        <div id="card">
                            <img src={IMG.jumbotron_24} />
                        </div>
                    </div>
                    <div id="dummyCard" className="col-3">
                        <div id="card">
                        <img src={IMG.jumbotron_02} />
                        </div>
                    </div>
                    <div id="dummyCard" className="col-3">
                        <div id="card">
                        <img src={IMG.jumbotron_10} />
                        </div>  
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projetos;