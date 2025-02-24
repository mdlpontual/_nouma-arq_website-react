import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
      <>
        <h1 style={{color: "black"}}>Page not found</h1>
        <Link to={'/'}><h5>voltar</h5></Link>
      </>
    )
}

export default NotFoundPage;