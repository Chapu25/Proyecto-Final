import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'

const Counter = ({initialValue, stock, id}) => {

    const {addProductCart} = useCustomContext()

    const [quantity, setQuantity] = useState(initialValue)


    const onClickAddProduct = () => {
        addProductCart(id,quantity)
        Swal.fire(
            'Muchas Gracias',
            'Usted Añadió Un Producto Al Carrito',
            'success'
        )
    }


return (

    <>
        <div>
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
            <span style={{fontSize:'18px'}}>{quantity}</span>
            <button onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1 )} >+</button>
        </div>
            <button onClick={onClickAddProduct}>Añadir Al Carrito</button>
    </>

)
}

export default Counter