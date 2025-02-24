import React from "react";
import IMG from "../../assets/imagesHUB";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
      <>
        <div id="notFoundCon" className="container-fluid">
          <div id="notFoundRow" className="row">
            <div id="notFoundCol" className="col-auto">
              <h1>Página não Encontrada</h1>
              <Link to={'/'}><h4>voltar</h4></Link>
            </div>
            <div id="notFoundLogoCol" className="col-auto">
              <img id="notFoundLogo" src={IMG.nouma_fullLogo_green} alt="nouma logo" />
            </div>
          </div>
        </div>  
      </>
    )
}

export default NotFoundPage;