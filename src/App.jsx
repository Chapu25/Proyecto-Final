import React from 'react'
import './App.css'
import { Carrito, Detalles, Formulario, HomePage } from './Paginas'
import { NavLink, Route, Routes } from 'react-router-dom'



function App() {

  

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/detalle/:id' element={<Detalles/>}/>
          <Route path='/carrito' element={<Carrito/>} />
          <Route path='/contacto' element={<Formulario/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
