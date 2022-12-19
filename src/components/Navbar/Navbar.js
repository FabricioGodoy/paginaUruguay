import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  /* Form, FormControl, */ Button,
  Container
} from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";

import Swal from "sweetalert2/dist/sweetalert2.js";

const loginForm = () => {
  Swal.fire({
    title: "Ingrese a su cuenta",
    html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: "Sign in",
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector("#login").value;
      const password = Swal.getPopup().querySelector("#password").value;
      if (!login || !password) {
        Swal.showValidationMessage(`Please enter login and password`);
      }
      return { login: login, password: password };
    }
  }).then((result) => {
    Swal.fire({
      icon: "error",
      title: "",
      text: "Pongase en contacto con el Digital Business Manager (martin_anusic@solutionbox.com.ar) de Solution Box"
    });
  });
};

export default class Barra1 extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg" className="barra">
          <Container fluid>
            <Navbar.Brand href="/">
              {" "}
              <Link to="/">
                <img
                  src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/sbox-logo-Uruguay.png"
                  alt="Logo de la pagina"
                  className="setlogo"
                ></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ height: "100%" }}>
                <NavDropdown title="MARCAS" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Link to="/marcas/ARU" className="dropdown-item mod">
                      ARUBA NETWORKS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/ARW" className="dropdown-item mod">
                      ARUBA WIRELESS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/CN" className="dropdown-item mod">
                      CAMBIUM NETWORKS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/GRA" className="dropdown-item mod">
                      GRANDSTREAM
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/ITO" className="dropdown-item mod">
                      ITOKII
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/065" className="dropdown-item mod">
                      MIKROTIK
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/QNP" className="dropdown-item mod">
                      QNAP
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/SDS" className="dropdown-item mod">
                      SAMSUNG DISPLAY
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/SMO" className="dropdown-item mod">
                      SAMSUNG MONITORS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/SAN" className="dropdown-item mod">
                      SANGOMA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/UBI" className="dropdown-item mod">
                      UBIQUITI
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/WAT" className="dropdown-item mod">
                      WATCHGUARD
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/YEA" className="dropdown-item mod">
                      YEALINK
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/marcas/YVC" className="dropdown-item mod">
                      YEALINK VIDEO
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="NOSOTROS" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    {" "}
                    <Link to="nuestraempresa" className="dropdown-item mod">
                      LA EMPRESA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <Link to="contacto" className="dropdown-item mod">
                      CONTACTO
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <Link to="trabajaconnosotros" className="dropdown-item mod">
                      TRABAJA CON NOSOTROS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="pdf/Anticorrupcion.pdf"
                    target="_blank"
                  >
                    POLITICA ANTICORRUPCION
                  </NavDropdown.Item>
                    {" "}
                    {/*  <Link to="/empleados" className="dropdown-item mod">
                      STAFF */}
                    <NavDropdown title="STAFF" id="navbarScrollingDropdown" className="navBarStaff">
                      <NavDropdown.Item><Link to="/EmpleadosGerentes" className="dropdown-item mod">Gerentes</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/EmpleadosPM" className="dropdown-item mod">Product Manager</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/EmpleadosVentas" className="dropdown-item mod">Vendedores</Link></NavDropdown.Item>
                    </NavDropdown>
                    {/*   </Link> */}
                </NavDropdown>

                <NavDropdown title="EVENTOS" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Link to="/capacitaciones" className="dropdown-item mod">
                      CAPACITACIONES
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg"
                    target="_blank"
                  >
                    ON DEMAND
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="LINKS UTILES" id="navbarScrollingDropdown">
                  {/* <NavDropdown.Item> <Link to="newsletter" className='dropdown-item mod'>SUCRIBITE A NUESTRO NEWSLETTER</Link></NavDropdown.Item> */}
                  {/* <NavDropdown.Item href="https://www.solutionbox.com.ar/info-impositiva">LEGAJO IMPOSITIVO</NavDropdown.Item> */}
                  <NavDropdown.Item>
                    <Link to="/rma" className="dropdown-item mod">
                      RMA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="http://www.solutionboxusa.com/downloads/catalogo-SB-Group.pdf"
                    target="_blank"
                  >
                    CATALOGO DIGITAL
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="SEDES" id="navbarScrollingDropdown">
                  <NavDropdown.Item
                    href="https://www.solutionbox.com.ar/"
                    target="_blank"
                  >
                    <img
                      src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/argentina.png"
                      alt="Bandera Arg"
                      className="setBanderas"
                    ></img>
                    ARGENTINA
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://www.solutionboxusa.com/"
                    target="_blank"
                  >
                    <img
                      src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/estadosunidos.png"
                      alt="Bandera USA"
                      className="setBanderas"
                    ></img>
                    USA
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://www.solutionbox.com.pa/"
                    target="_blank"
                  >
                    <img
                      src="https://github.com/RamiroSB/imagenes/blob/main/panama.png?raw=true"
                      alt="Bandera Uruguay"
                      className="setBanderas"
                    ></img>
                    PANAMA
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="http://www.solutionbox.com.sv/"
                    target="_blank"
                  >
                    <img
                      src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/elsalvador.png"
                      alt="Bandera El Salvador"
                      className="setBanderas"
                    ></img>
                    EL SALVADOR
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://www.solutionbox.com.do/"
                    target="_blank"
                    className="dominicana"
                  >
                    <img
                      src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/Republicadominicana.png"
                      alt="Bandera Rep.Dominicana"
                      className="setBanderas"
                    ></img>
                    R.DOMINICANA
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://www.solutionbox.cr/"
                    target="_blank"
                  >
                    <img
                      src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/costarica.png"
                      alt="Bandera Costa Rica"
                      className="setBanderas"
                    ></img>
                    COSTA RICA
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://www.solutionbox.com.hk/"
                    target="_blank"
                  >
                    <img
                      src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/hongkong.png"
                      alt="Bandera Hong Kong"
                      className="setBanderas"
                    ></img>
                    HONG KONG
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="http://www.solutionbox.com.hn/"
                    target="_blank"
                  >
                    <img
                      src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/honduras.png"
                      alt="Bandera Honduras"
                      className="setBanderas"
                    ></img>
                    HONDURAS
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="http://www.solutionbox.com.gt/"
                    target="_blank"
                  >
                    <img
                      src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/guatemala.png"
                      alt="Bandera Guatemala"
                      className="setBanderas"
                    ></img>
                    GUATEMALA
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="http://www.solutionbox.com.py/"
                    target="_blank"
                  >
                    <img
                      src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/paraguay.png"
                      alt="Bandera Paraguay"
                      className="setBanderas"
                    ></img>
                    PARAGUAY
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              {/* <Form className="d-flex barritaForm">
                <FormControl
                  type="search"
                  placeholder="Busque su producto"
                  className="me-2 barritab"
                  aria-label="Search"
                />
                <Button variant="outline-danger">Buscar</Button>
              </Form> */}

              <Nav>
                <div className="contenedorLogin">
                  <Button
                    variant="outline-danger"
                    className="botonLoguearse"
                    onClick={loginForm}
                  >
                    Login
                  </Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
