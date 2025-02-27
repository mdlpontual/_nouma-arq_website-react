import React, { useState, useEffect } from "react";
import IMG from "../assets/imagesHUB";
import Jumbtron from "./components/jumbotron/Jumbotron";
import About from "./components/about/About";
import Projetos from "./components/projects/Projetos";
import Contact from "./components/contact/Contact";

function HomePage() {
  return (
    <>
      <header>
        <Jumbtron />
      </header>
      <main>
        <About />
        <Projetos />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  )
}

export default HomePage;