import React from 'react'
import "./Form2style.css"

import Swal from 'sweetalert2/dist/sweetalert2.js'

export const Form2 = () => {

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
    <div className="content">

        <h1 className='logo'>Contacta<span>nos</span></h1>

        <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
                <h3>Contacto</h3>

                <form action="https://www.solutionbox.com.pa/mail/contacto" method="POST" onSubmit={handleSubmit}> 
                    <p>
                        <label>Nombre y Apellido</label>
                        <input type="text" name="nombre" required/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" required/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="tel" name="telefono" required/>
                    </p>
                    <p>
                        <label>Producto de interes</label>
                        <input type="text" name="interes" required/>
                    </p>
                    <p className="block">
                        <label>Mensaje</label> 
                        <textarea name="mensaje" rows="1" required></textarea>
                    </p>

                    <button type="submit" className='enviaConsulta' id='botonSubmit'>Enviar</button>

                </form>
            </div>
            <div className="contact-info">
                <h4>Mas informacion</h4>
                <ul>
                    <li><i className="fas fa-map-marker-alt"></i> Horario: Lunes a Viernes de 8.30 a 18.30hs</li>
                    <li><i className="fas fa-phone"></i> Teléfono: (+507) 202-6400</li>
                    <li><i className="fas fa-envelope-open-text"></i> E-mail: info@solutionbox.com.pa</li>
                </ul>
                <p>Dirección</p>
                <p>Ave. Ricardo J. Alfaro Edificio Golden Point Tower Piso 22, Oficina 17 </p>
            </div>
        </div>

    </div>

)
}
