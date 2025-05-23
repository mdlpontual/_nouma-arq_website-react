import React, { useState, useEffect } from "react";
import IMG from "../../../assets/imagesHUB";
import { Link } from "react-router-dom";
import useFadeInOut from "../../../system/hooks/useFadeInOut";

function Projetos() {
    useFadeInOut(0.5);

    return (
        <>
            <section id="projectsCon" className="container-fluid">
                <div id="projTitleRow" className="row">
                    <h1 id="projTitle" className="col-auto">
                        PROJETOS
                    </h1>
                </div>
                <div id="cardsRow" className="row">
                    <div id="card" className="col-3 fade-in-target" style={{ "--delay": `${0 * 150}ms` }}>
                        <img src={IMG.jumbotron_16} alt="link Casa Paiva" loading="lazy" />
                        <Link to={'/casaPaiva'}>
                            <div id="projectTitle">
                                <h5>Casa Paiva</h5>
                            </div>
                        </Link>
                    </div>
                    <div id="card" className="col-3 fade-in-target" style={{ "--delay": `${1 * 150}ms` }}>
                        <img src={IMG.jumbotron_22} alt="link Serrambi" loading="lazy" />
                        <Link to={'/seerrambiFlats'}>
                            <div id="projectTitle">
                                <h5>Serrambi Flats</h5>
                            </div>
                        </Link>
                    </div>
                    <div id="card" className="col-3 fade-in-target" style={{ "--delay": `${2 * 150}ms` }}>
                        <img src={IMG.jumbotron_01} alt="link Apto 404" loading="lazy" />
                        <Link to={'/apto404'}>
                            <div id="projectTitle">
                                <h5>Apartamento 404</h5>
                            </div>
                        </Link>
                    </div>
                    <div id="card" className="col-3 fade-in-target" style={{ "--delay": `${3 * 150}ms` }}>
                        <img src={IMG.aurora1602_03} alt="link Aurora" loading="lazy" />
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