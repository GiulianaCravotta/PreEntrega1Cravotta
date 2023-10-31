import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../Json/Productos.json';
import ItemDetail from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(item => item.id === parseInt(id)))
            }, 2000)
        });
        promesa.then((data) => {
            setItems(data)
        })
    }, [id])
    return (
        <div>
            <ItemDetail item={items} />
        </div>
    )
}

export default ItemDetailContainer
