import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import './Cart.css'
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, totalPrice } = useCartContext()
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
                {cart.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </div>
            <div className="cartCheckout">
                <p><strong>Total:</strong> $ {totalPrice()}</p>
                <Link to="/checkout">
                    {' '}
                    <button className="btnCart">Checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart;