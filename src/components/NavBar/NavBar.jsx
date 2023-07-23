import React, { useState } from 'react'
import './NavBar.css'
import { AiFillHome, AiOutlineMenu,AiFillContacts } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { NavLink, Route, Routes } from 'react-router-dom'


const NavBar = () => {


    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };


return (

    <div className='ContenedorDelNavbar'>

        <div className='Contenedor-1'>
            <img src="https://i.pinimg.com/736x/af/c2/43/afc243082eaea81a115e3f70e29b6b68.jpg" alt="Logo" />
            <h4>CRAFT BEER</h4>
        </div>

        <div className='Contenedor-2'>
            <input type="search" placeholder='Buscar Aqui' />
        </div>

        <div className={`Contenedor-3 ${isMenuOpen ? 'active' : ''}`}>
            <NavLink className={ ({isActive}) => isActive ? 'red' : 'white' } to={'/'}> <AiFillHome/> </NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'red' : 'white' } to={'/carrito'}> <BsFillCartFill/> </NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'red' : 'white' } to={'/contacto'}> <AiFillContacts/> </NavLink>
        </div>

        <div className='hamburger'>
            <AiOutlineMenu onClick={handleMenuToggle}/>
        </div>  

    </div>
)

}

export default NavBar