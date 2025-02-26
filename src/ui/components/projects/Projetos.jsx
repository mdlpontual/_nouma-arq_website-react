import React, { useState, useEffect } from "react";
import IMG from "../../../assets/imagesHUB";
import { Link } from "react-router-dom";

function Projetos() {
    return (
        <>
            <section id="projectsCon" className="container-fluid">
                <div id="projTitleRow" className="row">
                    <h1 id="projTitle" className="col-auto">
                        PROJETOS
                    </h1>
                </div>
                <div id="cardsRow" className="row">
                    <div id="card" className="col-3" style={{backgroundImage: `url(${IMG.jumbotron_16})`}}>
                        <Link to={'/casaPaiva'}>
                            <div id="projectTitle">
                                <h5>Casa Paiva</h5>
                            </div>
                        </Link>
                    </div>
                    <div id="card" className="col-3" style={{backgroundImage: `url(${IMG.jumbotron_22})`}}>
                        <Link to={'/seerrambiFlats'}>
                            <div id="projectTitle">
                                <h5>Serrambi Flats</h5>
                            </div>
                        </Link>
                    </div>
                    <div id="card" className="col-3" style={{backgroundImage: `url(${IMG.jumbotron_01})`}}>
                        <Link to={'/apto404'}>
                            <div id="projectTitle">
                                <h5>Apartamento 404</h5>
                            </div>
                        </Link>
                    </div>
                    <div id="card" className="col-3" style={{backgroundImage: `url(${IMG.aurora1602_03})`}}>
                        <Link to={'/aurora1602'}>
                            <div id="projectTitle">
                                <h5>Aurora 1602</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projetos;