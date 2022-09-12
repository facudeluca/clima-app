import React from 'react'
import "./error.css"

function Error() {
  return (
    <div className='error'>
        <img src='/error.png' alt='error'/>
        <h2>¡Ups! Parece que la ciudad que intentaste buscar no se ha encontrado. <br/> Intenta nuevamente</h2>
    </div>
  )
}

export default Error