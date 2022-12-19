import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

export const Imagenes = () => {
  return (
    <div className="background">
      <Container>
        <Link to="/marcas/SDS">
          <img
            src={
              "https://raw.githubusercontent.com/RamiroSB/imagenes/main/bannerSamsung2.png"
            }
            alt="Imagen LENOVO"
            className="stretch mt-3"
          ></img>
        </Link>
        <Link to="/marcas/SMO">
          <img
            src={
              "https://raw.githubusercontent.com/RamiroSB/imagenes/main/imagenSamsungGlobal.png"
            }
            alt="Imagen Samsung"
            className="stretch mt-3"
          ></img>
        </Link>
        <Link to="/marcas/SMO">
          <img
            src={
              "https://raw.githubusercontent.com/RamiroSB/imagenes/main/bannerSamsung.png"
            }
            alt="Imagen LENOVO"
            className="stretch mt-3"
          ></img>
        </Link>
        <img
          src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/muetra1.jpg?token=GHSAT0AAAAAABRG6YO7KKYL6KYWFV5FHQ3WYP5GTXQ"
          alt="imagenes nsx"
          className="stretch animate__backInLeft"
        ></img>
        <img
          src="https://www.solutionbox.com.ar/img/slider/slider/nsx2021.jpeg"
          alt="imagenes nsx"
          className="stretch"
        ></img>
        <img
          src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/muetra2.jpg?token=GHSAT0AAAAAABRG6YO6SPVEBINW3Q5J2MQQYP5GV3Q"
          alt="imagenes nsx"
          className="stretch"
        ></img>
      </Container>
    </div>
  );
};
