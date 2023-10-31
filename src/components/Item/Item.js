import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    return (
        <Link to={'/item/' + item.id} className='text-decoration-none'>
            <div className='main-contenedor-productos'>
                <div className="card text-center">
                    <img src={item.imagen} alt={item.nombre} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">${item.precio}</p>
                        <button href="#" className="btn rounded-0">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item