import React, { useEffect, useState } from 'react'
import './Detalles.css'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter, NavBar } from '../../components'



const Detalles = () => {
  
    const {id} = useParams()
    console.log(id)


    const {getProductById, addProductCart, isInCart, getProductCardById} = useCustomContext()

    const [productDetalle, setProductDetalle] = useState(isInCart(id) ? getProductCardById(id) : getProductById(id) )
    
  

  return (

    <div className='Fondo'>

      <NavBar/>

      <div className='ContenedorDetalles'> 

          <div className='ContenedorImagen'>
              <img src={productDetalle.imagen} alt="Producto" />
              <p> $ {productDetalle.precio} </p>
          </div>

          <div className='ContenedorTexto'>
            <h1>{productDetalle.nombre}</h1>
            <p>{productDetalle.descripcion}</p>

            {
            isInCart(id) 
            ? 
            <Counter initialValue={productDetalle.quantity} stock={productDetalle.stock} id={productDetalle.id}/> 
            : 
            <Counter initialValue={1} stock={productDetalle.stock} id={productDetalle.id}/>
            }
            

          </div>

      </div>






    </div>
  )

}


export default Detalles