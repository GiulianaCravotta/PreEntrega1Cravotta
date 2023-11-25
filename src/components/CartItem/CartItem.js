import { useCartContext } from "../../Context/CartContext"
import './CartItem.css'

const CartItem = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='ItemCart'>
            <img src={product.imagen} alt={product.nombre} />
            <div className="itemDetails">
                <h5>{product.nombre}</h5>
                <p>Cantidad: {product.cantidad}</p>
                <p>${product.cantidad * product.precio}</p>
            </div>
            <div className="cartDelete">
                <button className="btnDelete" onClick={() => removeProduct(product.id)}>
                    <i className="material-symbols-outlined">
                        delete
                    </i>
                </button>
            </div>
        </div>
        
    )
}

export default CartItem