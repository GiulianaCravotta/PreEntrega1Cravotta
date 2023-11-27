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

    const agregarProducto = (producto, cantidad) => {
        setCart((prevCart) => {
            if (prevCart.some((item) => item.id === producto.id)) {
                return prevCart.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                );
            } else {
                return [...prevCart, { ...producto, cantidad }];
            }
        });
    };

    const precioTotal = () => {
        return cart.reduce((prev, producto) => prev + producto.cantidad * producto.precio, 0);
    };

    const totalProductos = () =>
        cart.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);

    const vaciarCart = () => setCart([]);

    const isInCart = (id) => cart.some((producto) => producto.id === id);

    const removeProduct = (id) => setCart((prevCart) => prevCart.filter((producto) => producto.id !== id));

    return (
        <CartContext.Provider
            value={{cart,vaciarCart,isInCart,removeProduct,agregarProducto,precioTotal,totalProductos}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
