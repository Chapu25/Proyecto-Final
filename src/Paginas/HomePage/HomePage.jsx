import React, { useEffect, useState } from 'react'
import './HomePage.css'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, NavBar, Footer } from '../../components'



const HomePage = () => {

    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState('')
    const [max, setMax] = useState(20000)
    const [min, setMin] = useState(0)
    const [currentProducts, setCurrentProducts] = useState(products)
    
    useEffect(() =>{
        setCurrentProducts(products.filter(
            producto => producto.nombre.toLocaleLowerCase().includes(searchProduct.toLocaleLowerCase()) && producto.precio >= min && producto.precio <= max
            ))
    },[searchProduct, max, min])

return (

<div className='Fondo'>

        <NavBar/>

        <h1 className='TituloLista'>Lista De Productos:</h1>

            <div className='ContenedorSecundario'>

                <div className='ContenedorPadreProductos'>
                    
                        {
                        currentProducts.length > 0 
                        ?
                        currentProducts.map( producto => (
                        <ProductCard producto = {producto} key={producto.id}/>
                        ))
                        :
                        <h1>No Se Encontro Ningun Producto</h1>
                        }
                    

                </div>


                <div className='ContenedorPadreFiltrado'>

                    <h1>FILTRO</h1>

                        <div className='ContenedorFiltroTexto'>
                            <h2>Buscar Un Producto</h2>
                            <input type="text" placeholder='Buscar Aqui' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value) } />
                        </div>


                        <div className='ContenedorFiltroPrecio'>
                            <h2>Precio</h2>
                            <div className='PrecioInputs'>
                                <label htmlFor="">Precio Min:</label>
                                <input type="text" value={min} onChange={(e) => setMin(Number(e.target.value))}/>
                                
                                <label htmlFor="">Precio Max:</label>
                                <input type="text" value={max} onChange={(e) => setMax(Number(e.target.value))}/>
                            </div>
                        </div>
                </div>

            </div>

        
        <Footer/>

</div>

)

}

export default HomePage