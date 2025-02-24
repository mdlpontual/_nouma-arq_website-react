import React, { useState, useEffect } from "react";
import IMG from "../../../assets/imagesHUB";
import { Link } from "react-router-dom";

const paivaIMG = [ IMG.paiva_03, IMG.paiva_06, IMG.paiva_11, IMG.paiva_12, IMG.paiva_18, IMG.paiva_20, IMG.paiva_21 ];
const serrambiIMG = [ IMG.serrambi_00, IMG.serrambi_02, IMG.serrambi_04, IMG.serrambi_05, IMG.serrambi_08, IMG.serrambi_17, IMG.serrambi_18 ];
const aptoIMG = [ IMG.apt404_01, IMG.apt404_02, IMG.apt404_04, IMG.apt404_06, IMG.apt404_07 ];
const auroraIMG = [ IMG.aurora1602_01, IMG.aurora1602_02, IMG.aurora1602_03, IMG.aurora1602_04, IMG.aurora1602_05 ];

function Projetos() {
    const [paivaSlideIMG, setPaivaSlideIMG] = useState(paivaIMG[0]);
    const [serrambiSlideIMG, setSerrambiSlideIMG] = useState(serrambiIMG[0]);
    const [aptoSlideIMG, setAptoSlideIMG] = useState(aptoIMG[0]);
    const [auroraSlideIMG, setAuroraSlideIMG] = useState(auroraIMG[0]);

    const randomInterval_01 = Math.floor(Math.random() * 100000);
    const randomInterval_02 = Math.floor(Math.random() * 100000);
    const randomInterval_03 = Math.floor(Math.random() * 100000);
    const randomInterval_04 = Math.floor(Math.random() * 100000);

    useEffect(() => {
        const interval = setInterval(() => {
            setPaivaSlideIMG(paivaIMG[Math.floor(Math.random() * paivaIMG.length)]);
        }, randomInterval_01);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setSerrambiSlideIMG(serrambiIMG[Math.floor(Math.random() * serrambiIMG.length)]);
        }, randomInterval_02);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setAptoSlideIMG(aptoIMG[Math.floor(Math.random() * aptoIMG.length)]);
        }, randomInterval_03);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setAuroraSlideIMG(auroraIMG[Math.floor(Math.random() * auroraIMG.length)]);
        }, randomInterval_04);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section id="projectsCon" className="container-fluid">
                <div id="projTitleRow" className="row">
                    <h1 id="projTitle" className="col-auto">
                        PROJETOS
                    </h1>
                </div>
                <div id="cardsRow" className="row">
                    <div id="card" className="col-3" style={{backgroundImage: `url(${paivaSlideIMG})`}}>
                        <Link to={'/casaPaiva'}>
                            <div id="projectTitle">
                                <h5>Casa Paiva</h5>
                            </div>
                        </Link>
                    </div>
                    <div id="card" className="col-3" style={{backgroundImage: `url(${serrambiSlideIMG})`}}>
                        <Link to={'/seerrambiFlats'}>
                            <div id="projectTitle">
                                <h5>Serrambi Flats</h5>
                            </div>
                        </Link>
                    </div>
                    <div id="card" className="col-3" style={{backgroundImage: `url(${aptoSlideIMG})`}}>
                        <Link to={'/apto404'}>
                            <div id="projectTitle">
                                <h5>404</h5>
                            </div>
                        </Link>
                    </div>
                    <div id="card" className="col-3" style={{backgroundImage: `url(${auroraSlideIMG})`}}>
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