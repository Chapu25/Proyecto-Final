import React from 'react'
import './Footer.css'
import { BsWhatsapp, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";



const Footer = () => {



return (

    <div className='Footer-Container'>

        <div className='Contenedor1'>
            <h2>Seguinos:</h2>
            <div className='ContenedorHijo1'>
                <span> <BsWhatsapp/> </span>
                <span> <BsInstagram/> </span>
                <span> <BsFacebook/> </span>
                <span> <BsTwitter/> </span>
            </div>
        </div>

        <div className='Contenedor2'>
            <img src="https://i.pinimg.com/736x/af/c2/43/afc243082eaea81a115e3f70e29b6b68.jpg" alt="Logo" />
        </div>

        <div className='Contenedor3'>
        <h2>Metodos de Pagos:</h2>
            <div className='ContenedorLogo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/200px-MasterCard_early_1990s_logo.svg.png" alt="MasterCard" />
                <img src="https://w7.pngwing.com/pngs/49/82/png-transparent-credit-card-visa-logo-mastercard-bank-mastercard-blue-text-rectangle.png" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Logo_Naranja.png" alt="Tarjeta Naranja" />
                <img src="https://www.sitepro.com.ar/web/wp-content/uploads/2022/08/Mercado-pago-1024x267.png" alt="Mercado Pago" />
            </div>
        </div>
    </div>

)
}

export default Footer