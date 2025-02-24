import React, { useState, useEffect } from "react";
import IMG from "../../../../assets/imagesHUB";

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

export default CasaPaiva;
