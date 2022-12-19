import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Empleadosmapeo } from '../Empleadosmapeo/Empleadosmapeo'
import { PedirDatos } from '../helpers/PedirDatos'

export const EmpleadosLista = () => {
    const [loading, setLoading] = useState(false)
    const [empleados, setEmpleados] = useState ([])

    const { catId } = useParams ()

    /* Funcion para validar el staff, coincidiendo la propiedad category con la url  */
    
    useEffect(()=> {
        setLoading(true)
        PedirDatos()
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
                : <Empleadosmapeo empleados={empleados}/> 
                }
            </>
  )
}


