import React, { useState } from 'react'
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ item }) {
  
  const [IrAlCarrito, setIrAlCarrito] = useState(false);
  const { agregarProducto } = useCartContext()
  const onAddToCart = (cantidad) => {
    setIrAlCarrito(true);
    agregarProducto(item, cantidad)

  }
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
          {IrAlCarrito ? <Link to='/cart' className='btn' >Terminar compra</Link> : <ItemCount stock={item.stock} initialCount={0} onAddToCart={onAddToCart} />}
        </div>
      </div>
    </div>
  )
}


export default ItemDetail