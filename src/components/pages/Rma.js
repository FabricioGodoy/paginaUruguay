import React, { useState } from 'react'

import Swal from 'sweetalert2/dist/sweetalert2.js'

export const Rma = () => {

    const [values, setValues] = useState({
        nombre: '',
        razonSocial: '',
        factura: '',
        fechaFactura: '',
        email: '',
        vendedor: '',
        marca: '',
        problema: '',
        telefono: '',
        nSerie: '',
        macId: '',
        nCliente: '',
        rmaGrandstream: ''
    })

    const handleInputChange = (e) => {        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = () => {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado correctamente!',
            text: 'Muchas gracias por su mensaje, nos estaremos comunicando a la brevedad',
          }).then(function() {
            window.location = "index.html";
        });
          
    }



    return (

        <>
            {
                    <div className="my-5 formulario">
                        <h2>Formulario de solicitud de RMA</h2>
                        <hr/>
                        <form action="https://www.solutionbox.com.pa/mail/rma" method="POST" onSubmit={handleSubmit}> 

                        <p className='formP'>Nombre y Apellido</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="nombre"
                                value={values.nombre}
                                className="textForm"
                                type="text"
                                placeholder="Nombre y Apellido"
                                required
                                
                            />

                            <p className='formP'>Razon Social</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="razonSocial"
                                value={values.razonSocial}
                                className="textForm"
                                type="text"
                                placeholder="Ingrese su Razon Social"
                                required
                            />

                            <p className='formP'>Numero de Cliente</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="nCliente"
                                value={values.nCliente}
                                className="textForm"
                                type="number"
                                placeholder="Numero de cliente en Solution Box"
                                required
                            />

                            <p className='formP'>Teléfono</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="telefono"
                                value={values.telefono}
                                className="textForm"
                                type="number"
                                placeholder="Ingrese su numero de telefono"
                                required
                            />

                            <p className='formP'>Email</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="email"
                                value={values.email}
                                className="textForm"
                                type="email"
                                placeholder="Ingrese su e-mail"
                                autoComplete='off'
                                required
                            />

                            <p className='formP'>Factura</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="factura"
                                value={values.factura}
                                className="textForm"
                                type="number"
                                placeholder="Ingrese el numero de Factura"
                                required
                            />

                            <p className='formP'>Fecha de la Factura</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="fechaFactura"
                                value={values.fechaFactura}
                                className="textForm"
                                type="date"
                                placeholder="Fecha de la factura"
                                autoComplete='off'
                                required
                            />

                            <p className='formP'>Vendedor</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="vendedor"
                                value={values.vendedor}
                                className="textForm"
                                type="text"
                                placeholder="Indique su vendedor"
                                autoComplete='off'
                                required
                            />

                            <p className='formP'>Marca del producto</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="marca"
                                value={values.marca}
                                className="textForm"
                                type="text"
                                placeholder="Marca del producto"
                                autoComplete='off'
                                required
                            />

                            <p className='formP'>Numero de serie</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="nSerie"
                                value={values.nSerie}
                                className="textForm"
                                type="number"
                                placeholder="Ingrese el numero de serie del producto"
                                required
                            />

                            <p className='formP'>MAC ID</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="macId"
                                value={values.macId}
                                className="textForm"
                                type="text"
                                placeholder="Ingrese el MAC ID"
                            />

                            <p className='formP'>(LLenar unicamente para RMA GRANDSTREAM)</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="rmaGrandstream"
                                value={values.rmaGrandstream}
                                className="textForm"
                                type="text"
                                placeholder="Ingrese el numero de ticket aprobado"
                            />

                            <textarea style={{height:"5%"}}
                                onChange={handleInputChange}
                                name="problema"
                                value={values.problema}
                                className="textForm"
                                type="text"
                                placeholder="Describa su problema"
                                rows= "2"
                                autoComplete='off'
                                required
                            />

                            <button type="submit" className="butn">Enviar</button>
                        </form>
                    </div>
            }
        </>
    )
}