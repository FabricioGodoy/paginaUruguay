import React, { useState } from "react";
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const RmaItemFallado = () => {
    const [selectedOption, setSelectedOption] = useState(null);


  return (
      <Container>
          <div className="form-group">
            <h2>CONDICIONES DE RMA</h2>
            <select
              className="form-select"
              onChange={(e) => setSelectedOption(e.target.value)}
            >
                <option >Seleccione la marca...</option>

                <option value="5">ARUBA</option>
                <option value="30">AMD</option>
                <option value="6">CAMBIUM NETWORKS</option>
                <option value="9">GRANDSTREAM</option>
                <option value="5">HEWLETT PACKARD SERVERS</option>
                <option value="5">HEWLETT PACKARD SERVICES</option>
                <option value="5">HEWLETT PACKARD STORAGE</option>
                <option value="13">HUAWEI</option>
                <option value="13">HUAWEI SEGURIDAD</option>
                <option value="15">INTEL</option>
                <option value="16">JABRA</option>
                <option value="17">LENOVO</option>
                <option value="26">MERCUSYS</option>
                <option value="20">MIKROTIK</option>
                <option value="22">QNAP</option>
                <option value="31">SAMSUNG</option>
                <option value="26">TP-LINK</option>
                <option value="27">UBIQUITI</option>
                <option value="28">YEALINK</option>
                <option value="29">YEASTAR</option>
                
            </select>
          </div>

          {selectedOption === "5" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA HEWLETT PACKARD - Networking and servers</b><br/>
              Garantía del producto: 12 meses.<br/>
              La garantía es gestionada por la marca a través de los servicios técnicos autorizados de cada país.<br/><br/>
              <a href="https://www.hp.com/us-en/contact-hp/phone-assist.html" className="butn3">CLICK AQUI</a>
              </p>
            </div>
          )}

        {selectedOption === "6" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA CAMBIUM NETWORKS</b><br/>
              La garantia es gestionada a traves de la marca<br/><br/>
              <a href="https://www.cambiumnetworks.com/support/contact-support/" className="butn3">CLICK AQUI</a>
              </p>
            </div>
          )}

          {selectedOption === "26" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA TP LINK </b><br/>
              Garantía del producto: 12 meses.<br/>
              La garantía se gestiona a través de Solution Box
              </p>
              <div className="text-center">
                  <Link to="/rma2" className="butn3">Click aqui para gestionar RMA</Link>
              </div>
            </div>
          )}

          {selectedOption === "9" && (
            <div className="form-group">
              <p className="text-left">
              {/* <img src="https://www.solutionbox.com.do/images/carrusel/grandstream.png" alt="grandstream"/><br/> */}
              <b>Condiciones RMA GRANDSTREAM</b><br/>
                Garantía del producto: 12 meses.<br/>
                Estimado cliente, usted debe reportar el caso a través del siguiente link <a href="https://helpdesk.grandstream.com ">CLICK AQUI</a> <br/>
                Si usted tiene preguntas acerca de cómo crear un caso en Grandstream Helpdesk, contactese a la siguiente dirección de email: <a href="mailto:rma@solutionbox.com.pa">CLICK AQUI</a><br/>
                Una vez aprobado que el ticket es aprobado por Grandstream, podrá consultar el estado ingresando el número de ticket en el campo "descripción del problema" del formulario de RMA.
              </p>
              <div className="text-center">
                  <Link to="/rma2" className="butn3">Click aqui para gestionar RMA</Link>
              </div>
            </div>
          )}

        {selectedOption === "27" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA UBIQUITI</b><br/>
                Garantía del producto 12 meses.<br/>
                La garantía se gestiona a través de Solution Box<br/>
                </p>
              <div className="text-center">
                  <Link to="/rma2" className="butn3">Click aqui para gestionar RMA</Link>
              </div>
            </div>
          )}

        {selectedOption === "16" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA JABRA</b><br/>
              Productos con cable e inalámbricos: dos (2) años desde la fecha de compra de los productos<br/>
                BIZ 2400 y Engage 50: tres (3) años desde la fecha de compra de los productos<br/>
                Componentes consumibles y accesorios eximidos de Garantía<br/>
                </p>
              <div className="text-center">
                  <Link to="/rma2" className="butn3">Click aqui para gestionar RMA</Link>
              </div>
            </div>
          )}

        {selectedOption === "13" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA HUAWEI</b><br/>
              Garantía del producto: 12 meses.<br/>
                La Garantía se gestiona a través de Solution Box
                </p>
              <div className="text-center">
                  <Link to="/rma2" className="butn3">Click aqui para gestionar RMA</Link>
              </div>
            </div>
          )}

        {selectedOption === "15" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA INTEL</b><br/>
              Garantía del producto: 12 meses.<br/>
                La Garantía se gestiona a través de Solution Box
                </p>
              <div className="text-center">
                  <Link to="/rma2" className="butn3">Click aqui para gestionar RMA</Link>
              </div>
            </div>
          )}

        {selectedOption === "17" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA LENOVO</b><br/>
                Garantía del producto: de 12 a 36 meses, dependiendo del producto<br/>
                DOA SOLUTION BOX 10 días de fecha factura<br/>
                Posterior a los 10 días directo con la marca.<br/>
                Soporte: soportegaran@lenovo.com<br/>
                </p>
              <div className="text-center">
                  <Link to="/rma2" className="butn3">Click aqui para gestionar DOA (Dentro de los 10 dias)</Link>
              </div>
            </div>
          )}

        {selectedOption === "20" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA MIKROTIK</b><br/>
              Garantía del producto: 10 meses.<br/>
                La garantía se gestiona a través de Solution Box
                </p>
              <div className="text-center">
                  <Link to="/rma2" className="butn3">Click aqui para gestionar RMA</Link>
              </div>
            </div>
          )}

        {selectedOption === "22" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA QNAP</b><br/>
              Garantía del producto: 10 meses.<br/>
                La garantía se gestiona a través de Solution Box
                </p>
              <div className="text-center">
                  <Link to="/rma2" className="butn3">Click aqui para gestionar RMA</Link>
              </div>
            </div>
          )}

        {selectedOption === "28" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA YEALINK</b><br/>
              Garantía del producto: 24 meses.<br/>
                La garantía se gestiona a través de Yealink<br/><br/>
                <a href="https://ticket.yealink.com/" className="butn3">CLICK AQUI</a>
                </p>
            </div>
          )}

        {selectedOption === "29" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA YEASTAR</b><br/>
              Enviar email a support@yeastar.zendesk.com Solicitando RMA con los siguientes datos.<br/>
                Nombre del equipo<br/>
                MAC ID<br/>
                Descripción breve del problema<br/>
                Una vez que el RMA es aprobado por Yeastar, usted podrá proceder a tramitar el RMA con Solution
                </p>
            </div>
          )}

        {selectedOption === "30" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA AMD</b><br/>
              Garantia oficial de 12 meses directo con AMD.<br/>
              Usted deberá reportar su caso al siguiente LINK <br/><br/>
              <a href="https://www.amd.com/en/support/kb/warranty-information/rma-form" className="butn3">CLICK AQUI</a>
                </p>
            </div>
          )}

        {selectedOption === "31" && (
            <div className="form-group">
              <p className="text-left">
              <b>Condiciones RMA SAMSUNG</b><br/>
              Garantia 12 meses<br/>
              La garantía directo con servicio técnico oficial<br/>
              Técnico: INNOTEK SERVICE II<br/>
              Email: <a href="recepción@innotekservice.com">recepción@innotekservice.com</a><br/>
              Telefono: 507-261-7340<br/><br/>

              Técnico: TCW Uruguay<br/>
              Email: <a href="lamaya@techcommwireless.com">lamaya@techcommwireless.com</a><br/>
              Telefono: 507-6515-3991<br/><br/>
                </p>
            </div>
          )}

      </Container>

  )
}