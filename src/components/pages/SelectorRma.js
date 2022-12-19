import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'

export const SelectorRma = () => {
  return (
    <Container  className='contAlt'>
        <div className='containerRmaButtons'>
            <Link to="/rma2" className="butn2">Devolucion Comercial</Link>
            <Link to="/rma3" className="butn2">RMA por articulo defectuoso</Link>
        </div>
    </Container>
  )
}
