import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Button } from 'react-bootstrap'
import "./DetalleItemsStyle.css"
import Swal from 'sweetalert2/dist/sweetalert2.js'


export const DetalleItems = () => {

  const {itemId} = useParams ()

  const [marca, setMarca] = useState([])

  useEffect(() => {
    obtenerDatos()
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  const obtenerDatos = async () => {
    const datos = await fetch(`https://www.solutionbox.com.pa/api/articulos?sku=${itemId}`)
    const marcas = await datos.json()
    setMarca(marcas)
  }


  //Evento con sweetalert que lanza error al ver el precio de un producto
    const eventoClick = () =>{
      Swal.fire({
          icon: 'error',
          title: '',
          text: 'Debes estar registrado para visualizar el valor del producto',
        })
  }

//Variable con imagen placeholder para mostrar con el ternario cuando el producto no tiene img cargada
  let img = 'https://via.placeholder.com/550/b8b6b6/000000/?text=PRODUCTO-SIN-IMAGEN'

  return (
    <Container className='my-5'>
          <Row>   
          {
          marca && marca.map( 
            (index)=> (
                <div className='contenedorDetalle' style={{width: "80rem"}} key={index.Alias}>
                  <h2>Producto: {index.Nombre}</h2>
                  <hr/>
                  <div>
                    <div className='contenedorImagenDetalle'>
                      <img src={index.Imagen ? process.env.PUBLIC_URL + "/articulos/" + index.Imagen : img} alt='PRODUCTO SIN IMAGEN' /* className='imgProd' *//>
                    </div>
                      <hr/>
                      
                        <div>
                            <p><b>Marca: </b>{index.Marca}</p>
                            <p style={{textTransform: 'uppercase'}}><b>PM:</b> {index.Produc_Manager != null ? index.Produc_Manager : "La marca no tiene PM asignado"}</p>
                            <p><b>Garantia: </b> Este producto tiene garantia de {index.Garantia_meses} meses</p>
                            <p><b>SKU:</b> {index.Alias}</p>
                            <p><b>Stock:</b> {index.Stock > 0 ? index.Stock + " unidades ": "No hay stock disponible del producto"}</p>
                            <Button variant='danger' className='btn-sm ml-3 botonComprar' onClick={eventoClick} >VER PRECIO</Button>
                            {/* <p><b>Precio:</b> {index.Precio <= 0 ? "El precio no se encuentra disponible actualmente" : index.Precio} </p>
                            <p><b>Moneda: </b>{index.Moneda}</p> */}
                           {/*  <p><b>Cantidad:</b> </p>
                            <input type="number" name="cant_" id="cant" min="1" max={index.Stock} pattern="^[0-9]+" className='inputCantidad'></input>
                            <Button variant='danger' className='botonComprar'>Login</Button> */}
                        </div>


                        <hr/>
                        <p type="button" data-bs-toggle="collapse" data-bs-target="#infoProducto" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa-solid fa-arrow-down"> Descripcion del producto <i className="fa-solid fa-arrow-down"> </i> </i>
                        </p>
                            <div  className="collapse" id="infoProducto">
                                <ul>
                                <p>{index.Descripcion_corta != null ? index.Descripcion_corta : "El PM aun no ha cargado la descripción del producto, por favor pongase en contacto para mas información"}</p>
                                </ul>
                            </div>

                        <hr/>
                        <p type="button" data-bs-toggle="collapse" data-bs-target="#medidasProducto" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa-solid fa-arrow-down"> Packaging <i className="fa-solid fa-arrow-down"> </i> </i>
                        </p>
                            <div  className="collapse" id="medidasProducto">
                                <ul>
                                    <p>{index.Peso && index.Alto && index.Ancho && index.Profundo == null ? "Consulte" :  "Información de packaging del producto no disponible"}</p>
                                </ul>
                            </div>
                    </div>
                 </div>
              ))
            }
        </Row>
    </Container>
  )
}