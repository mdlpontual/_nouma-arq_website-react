import React, { useState, useEffect } from "react";
import IMG from "../../../assets/imagesHUB";

function About() {
    return (
        <>
            <article id="aboutCon" className="container-fluid">
                <div id="mainLogoRow" className="row">
                    <div id="fullLogoCol" className="col-auto">
                        <img id="fullLogo" src={IMG.nouma_fullLogo_black} alt="nouma full logo" />
                    </div>
                </div>
                <div id="aboutTextRow" className="row">
                    <div id="textCol" className="col-auto">
                        <img src={IMG.tessSymbol_white} alt="simbolo tesserato"/>
                        <h3 id="textTitle">
                            Architecture in Context
                        </h3>
                        <p id="text">
                            NOUMA is a small architecture office from Pernambuco, Brasil. We are specialized in residential civil projects and interior design, 
                            and our mission is to transform families dreams into reality, by changing problems into solutions.<br/>
                            <br/>
                            Our goal in every project is to reach the ideal function and aesthetics beyond the third dimension. We like to call this the "Tesseract" template, 
                            where the designer's work on the three material dimensions needs to follow the one dimension that is not material, the abstract fourth one.<br/>
                            <br/>
                            The Tesseract (or Hypercube) is a theoretical 4D geometrical object that is mathematically possible to exist, but we as humans, 
                            living in a 3D world, cannot fathom how it would look like in real life.<br/>
                            <br/>
                            We at NOUMA use the idea of the Tesseract as our motto, where the fourth dimension is the "human" dimension. Our craft in the three material 
                            dimensions is guided by the human aspirations of the abstract dimension. The client's every necessity and desire influences the way that our 
                            projects are developed, and we as architects try to be a transparent operator between the dream and the final product.
                        </p>
                    </div>
                </div>
            </article>
        </>
    );
}

export default About;