import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'


const ProductCard = ({producto}) => {
  
  return (

    <div className='CartaDeProductos'>

        <img src= {producto.imagen} alt="" />
        <h2> {producto.nombre} </h2>
        <h2> $ {producto.precio} </h2>
        <button> <Link className='link' to={'/detalle/' + producto.id}> Ver Detalle </Link> </button>
        
    </div>
  )
}

export default ProductCard