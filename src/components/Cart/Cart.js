import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import './Cart.css'
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, precioTotal } = useCartContext()
    if (cart.length === 0) {
        return (
            <>
                <div className="EmptyCart">
                    <div className="CartMessage">El carrito de compras está vacío.</div>
                </div>
                <Link to="/" className="btnCart">
                    Seguir comprando
                </Link>
            </>
        )
    }
    return (
        <div className="cartContainer">
            <div className="cartItems">
                {cart.map((producto) => (
                    <CartItem key={producto.id} product={producto} />
                ))}
            </div>
            <div className="cartCheckout">
                <p><strong>Total:</strong> $ {precioTotal()}</p>
                <Link to="/checkout">
                    {' '}
                    <button className="btnCart">Checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart;