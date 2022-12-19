import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PedirDatosVendedores } from '../helpers/PedirDatosVendedores'
import { EmpleadosmapeoVendedores } from '../Empleadosmapeo/EmpleadosMapeoVendedores'


export const EmpleadosListaVentas = () => {
    const [loading, setLoading] = useState(false)
    const [empleados, setEmpleados] = useState ([])

    const { catId } = useParams ()

    /* Funcion para validar el staff, coincidiendo la propiedad category con la url  */
    
    useEffect(()=> {
        setLoading(true)
        PedirDatosVendedores()
            .then( (resp) => {
            if (!catId) {
                setEmpleados (resp)
            } else {
                setEmpleados ( resp.filter (persona => persona.category === catId))
            }
        })
        .catch( (error)=> {
            console.log(error)
        })
        .finally ( ()=> {
            setLoading(false)
        })
    }, [catId])
  
    /* Termina funcion que valida staff */

    /* retorna un ternario, en caso de que no este el mapeo muestra cargando */
    return (
             <>
                {loading 
                ? <p>Cargando...</p>
                : <EmpleadosmapeoVendedores empleadosVentas={empleados}/> 
                }
            </>
  )
}


