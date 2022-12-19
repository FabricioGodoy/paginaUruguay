import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './EmpleadosmapeoStyle.css'

export const Empleadosmapeo = ({empleados}) => {
  return (
    <Container className='my-5'>
          <h2>Staff Solution Box Uruguay</h2>
        <hr/>
        <Row>

          {/* Mapeo del array de objetos, iterando y mostrando cada propiedad */}

        {empleados.map( (persona)=> (
                    <div key={persona.id} className='card' id='cuerpo' style={{width: "16rem", margin: "10px", textAlign: "center"}}>
                        <img src={persona.img} className='imagenPersona' alt="Foto empleado/a"/>
                            <div className='card-body'>
                                <h4 className='personaNombre'>{persona.nombre}</h4>
                                <p className='personaCargo mt-3'>{persona.cargo}</p>
                                {/* <hr/>
                                <p className='personaCorreo'>{persona.correo}</p>
                                <p>{persona.movil}</p> */}
                            </div>
                    </div>
                ))
            }
        </Row>
    </Container>
  )
}
