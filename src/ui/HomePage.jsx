import React, { useState, useEffect } from "react";
import IMG from "../assets/imagesHUB";
import Jumbtron from "./components/jumbotron/Jumbotron";
import About from "./components/about/About";

function HomePage() {
  return (
    <>
      <header>
        <Jumbtron />
      </header>
      <body>
        <About />
      </body>
    </>
  )
}

export default HomePage;