import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./system/utils/Layout.jsx";
import App from "./App.jsx";
import CasaPaiva from "./ui/components/projects/paiva/CasaPaiva.jsx";
import SeerrambiFlats from "./ui/components/projects/serrambi/SerrambiFlats.jsx";
import Apto404 from "./ui/components/projects/404/Apt404.jsx";
import Aurora1602 from "./ui/components/projects/aurora/Aurora1602.jsx";
import NotFoundPage from "./ui/components/NotFoundPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./scss/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "/", element: <App /> },
      { path: "/casaPaiva", element: <CasaPaiva /> },
      { path: "/seerrambiFlats", element: <SeerrambiFlats /> },
      { path: "/apto404", element: <Apto404 /> },
      { path: "/aurora1602", element: <Aurora1602 /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
