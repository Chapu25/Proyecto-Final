import React from 'react'
import './ProductCartCard.css'




const ProductCartCard = ({producto}) => {



return (
    <div className='CartaDeProductosCarrito'>

        <img src= {producto.imagen} alt="" />
        <h2> {producto.nombre} </h2>
        <h2> $ {producto.precio} </h2>
        <p>Cantidad: {producto.quantity}</p>
        
    </div>
)
}



export default ProductCartCard