import React,{createContext, useContext, useState} from 'react'


const Context = createContext()

    
const ContextProvider = ( {children} ) => {

    const products = [
        {   
            imagen: 'https://brindarte.ar/user/images/PRODUCTOS/BEBIDAS%20BLANCAS/fernet750ml.jpg',
            nombre:'Fernet',
            precio: 2800,
            id: 1,
            stock: 8,
            descripcion: 'El fernet es una bebida alcohólica amarga de color oscuro y aroma intenso, elaborada a partir de varios tipos de hierbas (mirra, ruibarbo, manzanilla, cardamomo y azafrán, entre otras ), que son maceradas en alcohol de uva, filtradas y añejadas en toneles de roble durante un período que oscila entre 6 y 12 meses. '
        },

        {   
            imagen: 'https://vanniyomwineliquorstore.com/wp-content/uploads/2018/12/cq5dam.web_.1280.1280-600x800.jpeg',
            nombre:'Smirnoff',
            precio: 1800,
            id: 2,
            stock: 8,
            descripcion: 'Smirnoff es un vodka de origen ruso, de 37,5% alc./vol., obtenido por triple destilación del alcohol de grano, y filtrado por carbón. Se trata de una variante con sabor, cuya pureza y neutralidad pretenden resaltar el sabor de la fruta, y que es comercializado como ideal para preparar exóticas mezclas. '
        },

        {   
            imagen: 'https://brindarte.ar/user/images/PRODUCTOS/BEBIDAS%20BLANCAS/absolutblue.jpg',
            nombre:'Absolut',
            precio: 3600,
            id: 3,
            stock: 8,
            descripcion: 'Absolut Vodka es una marca de vodka de origen sueco, propiedad del grupo Pernod Ricard. Su origen se remonta a 1879 y durante décadas formó parte del grupo Vin & Sprit. Es la tercera marca de bebida blanca más consumida a nivel mundial.'
        },

        {   
            imagen: 'https://drinksmate.kiwi/images/product/156027007499314.jpg',
            nombre:'Red Label',
            precio: 7600,
            id: 4,
            stock: 8,
            descripcion: 'Johnnie Walker Red Label se destaca por su carácter e intensidad, por sus notas especiadas que estallan con sabores vibrantes y ahumados. Es una mezcla que combina whiskies ligeros de la costa este escocesa y whiskies ahumados y oscuros de la costa oeste, creando una extraordinaria profundidad de sabor.'
        },

        {   
            imagen: 'https://cdn.powered-by-nitrosell.com/product_images/26/6463/large-1516329602660-11.jpg',
            nombre:'Bombay',
            precio: 9000,
            id: 5,
            stock: 8,
            descripcion: 'Ginebra Bombay Original es una ginebra de 40º de alcohol fabricada en Inglaterra. El sabor de esta ginebra es el de una ginebra clásica, ligeramente seca y con un sutil acabado a enebro.'
        },

        {   
            imagen: 'https://www.distribuidoraelescoces.com/database/articulos/fotos/359/JAGERMEISTER_CAJA%206%20X%20750cc_1.jpg',
            nombre:'Jagermeister',
            precio: 9600,
            id: 6,
            stock: 8,
            descripcion: 'Jägermeister es un licor de hierbas endulzado, pero con un toque amargo, el cual tiene 35% de contenido alcohólico. Es muy popular en Baja Sajonia en la ciudad de Wolfenbüttel (Alemania). En esta ciudad se encuentra la raíz de la empresa que la comercializa: Mast-Jägermeister SE.'
        },

        {   
            imagen: 'https://brindarte.ar/user/images/PRODUCTOS/BEBIDAS%20BLANCAS/martiniblanco.jpg',
            nombre:'Martini',
            precio: 1400,
            id: 7,
            stock: 8,
            descripcion: 'El martini más conocido a nivel mundial es el seco, compuesto de ginebra con un toque de vermú. Suele servirse en copa de cóctel, adornado con una aceituna cruzada. Existen numerosas variantes del martini, que se distinguen por contener: vodka, gin o dry vermouth.'
        },

        {   
            imagen: 'https://brindarte.ar/user/images/PRODUCTOS/BEBIDAS%20BLANCAS/gancia.jpg',
            nombre:'Gancia',
            precio: 1300,
            id: 8,
            stock: 8,
            descripcion: 'Americano Gancia Aperitivo es un aperitivo que se caracteriza por la presencia de sabores herbáceos y cítricos que se combinan con los del vino blanco y el alcohol. El sabor amargo de las hierbas se mezcla con el dulzor del azúcar logrando una bebida amable, agradable de beber, equilibrada y de gran personalidad.'
        },

        {   
            imagen: 'https://brindarte.ar/user/images/PRODUCTOS/BEBIDAS%20BLANCAS/jackdanielsold.jpg',
            nombre:"Jack Daniel's",
            precio: 13800,
            id: 9,
            stock: 8,
            descripcion: '"Jack Daniels" es una destilería y marca de whiskey estadounidense de Tennessee. La diferencia más notable es que el whisky Tennessee es filtrado en carbón de arce sacarino, dándole un sabor y aroma distintivos.'
        },

        {   
            imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/871/106/products/corona-botella-grande-710ml1-00a663c71ec7acfd8915715019271010-640-0.jpg',
            nombre:"Cerveza Corona",
            precio: 850,
            id: 10,
            stock: 8,
            descripcion: 'Cerveza clara y brillante, de espuma blanca y consistente. Destacan sus ligeras notas afrutadas, resultado de la fermentación. De cuerpo medio, fresca, balanceada y muy fácil de beber. En boca es moderadamente dulce y recuerda al sabor del cereal.'
        },

        {   
            imagen: 'https://drinksmate.kiwi/images/product/156009765749542.jpg',
            nombre:"Heineken",
            precio: 700,
            id: 11,
            stock: 8,
            descripcion: 'Heineken® es una cerveza única, y desde 1873 hasta la fecha conserva la misma calidad, principios e ingredientes.'
        },

        {   
            imagen: 'https://lasalasdc.com/wp-content/uploads/2022/05/CervezaBudweiser.png',
            nombre:"Budweiser",
            precio: 630,
            id: 12,
            stock: 8,
            descripcion: 'Budweiser es una de las cervezas más icónicas e internacionales. Esta American Lager se mantiene fiel a su receta original de 1876. Además de la malta y el lúpulo, el ingrediente clave es el arroz, que le aporta ese frescor característico y sabor ligero.'
        },

    ]


    const getProductById = (id) => {
        return products.find ( producto => producto.id == id)
    }

    const getProductCardById = (id) => {
        return cart.find ( producto => producto.id == id)
    }


    const [cart, setCart] = useState([])
    

    const isInCart = (id) => cart.some (producto => producto.id == id )


    const addProductCart = (id,quantity) => {

        if(isInCart (id) ){
            setCart(cart.map(product => {
                if(product.id == id ){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart([...cart, {...getProductById(id), quantity: quantity} ])
        }
    }


    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    }
    


return (
    <Context.Provider value={ {products, getProductById, cart, addProductCart, isInCart, getProductCardById, getTotal} }>
        {children}
    </Context.Provider>
)

}


export const useCustomContext = () => useContext(Context)

export default ContextProvider