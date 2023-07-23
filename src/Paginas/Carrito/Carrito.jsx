import React from 'react'
import './Carrito.css'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Footer, NavBar, ProductCard, ProductCartCard } from '../../components'

const Carrito = () => {

    const {cart, getTotal} = useCustomContext()
    console.log(getTotal())

  return (


    <div className='ContenedorFondoCarrito'>

        <NavBar/>

        <div className='ContenedorPrincipalCarrito'>

          <div className='CarritoCartas'> 
            {cart.map ( producto => (
              <ProductCartCard  producto = {producto} key={producto.id}/>
              ))}
          </div>

          <div className='total'>Total a Pagar: ${getTotal()}</div>

        </div>
        
    </div>
  )
}

export default Carrito