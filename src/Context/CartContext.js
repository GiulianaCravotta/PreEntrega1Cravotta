import React, { useState, useContext, useEffect } from 'react';

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addProduct = (item, cantidad) => {
        setCart((prevCart) => {
            if (prevCart.some((producto) => producto.id === item.id)) {
                return prevCart.map((producto) =>
                    producto.id === item.id
                        ? { ...producto, cantidad: producto.cantidad + cantidad }
                        : producto
                );
            } else {
                return [...prevCart, { ...item, cantidad }];
            }
        });
    };

    const totalPrice = () => {
        return cart.reduce((prev, product) => prev + product.cantidad * product.precio, 0);
    };

    const totalProducts = () =>
        cart.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.some((producto) => producto.id === id);

    const removeProduct = (id) => setCart((prevCart) => prevCart.filter((producto) => producto.id !== id));

    return (
        <CartContext.Provider
            value={{cart,clearCart,isInCart,removeProduct,addProduct,totalPrice,totalProducts}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
