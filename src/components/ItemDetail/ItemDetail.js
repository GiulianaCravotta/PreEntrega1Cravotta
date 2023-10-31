import React from 'react'
import './ItemDetail.css';
function ItemDetail({ item }) {
  return (
    <div className='product-card'>
      <div className='row product'>
        <div className='col-md-7'>
          <img src={item.imagen} alt={item.nombre} className="card-img" />
        </div>
        <div className='col-md-5 card-content'>
          <h2 className="card-title">{item.nombre}</h2>
          <p className="card-text">Cantidad: {item.stock}</p>
          <p className="card-text">${item.precio}</p>
          <button href="#" className="btn rounded-0">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail