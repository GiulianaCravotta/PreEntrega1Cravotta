import React, { useState } from "react";
import './Checkout.css';
import { useCartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from 'firebase/firestore';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [ordenId, setOrdenId] = useState('');

  const validateForm = () => {
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError('Por favor completa todos los campos');
      return false;
    }

    if (email !== emailConfirmacion) {
      setError('Los campos de email no coinciden');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const total = totalPrice();
      console.log('Total Price:', total);

      const orden = {
        items: cart.map((producto) => ({
          id: producto.id,
          nombre: producto.nombre,
          cantidad: producto.cantidad,
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email,
      };

      const db = getFirestore();

      await Promise.all(
        orden.items.map(async (productoOrden) => {
          const productoRef = doc(db, 'products', productoOrden.id);

          const productoDoc = await getDoc(productoRef);
          const stockActual = productoDoc.data().stock;

          await updateDoc(productoRef, {
            stock: stockActual - productoOrden.cantidad,
          });
        })
      );

      const ordenDocRef = await addDoc(collection(db, 'orders'), orden);

      setOrdenId(ordenDocRef.id);
      clearCart();
    } catch (error) {
      console.error('Error:', error);
      setError('Error en el proceso de compra');
    } finally {
      setNombre('');
      setApellido('');
      setTelefono('');
      setEmail('');
      setEmailConfirmacion('');
    }
  };

  return (
    <>
      <p className="checkout-title">checkout.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-checkout">
            <input
              placeholder="Nombre"
              className="input-checkout"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <input
              placeholder="Apellido"
              className="input-checkout"
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />

            <input
              placeholder="Telefono"
              className="input-checkout"
              type="number"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />

            <input
              placeholder="Email"
              className="input-checkout"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Email Confirmation"
              className="input-checkout"
              type="email"
              value={emailConfirmacion}
              onChange={(e) => setEmailConfirmacion(e.target.value)}
            />

            {error && <p className="error-campos">{error}</p>}
            <br />
            {ordenId && (
              <p className="orden">
                ¡Gracias por tu compra! <br /> <br />Tu número de orden es: {' '}
                {ordenId}{' '}
              </p>
            )}
            <br />

            <div className="checking">
              <button className="btn-checkout" type="submit">
                Finalizar Compra
              </button>
            </div>
            <br />
            <div>
              <Link to="/">
                <button className="btn-checkout">Volver al Home</button>
              </Link>
            </div>
          </div>


          <div>
            {cart.map((producto) => (
              <div className="item-checkout" key={producto.id}>
                <img src={producto.imagen} alt={producto.nombre} />
                <div className="itemDetails">
                  <h5>{producto.nombre}</h5>
                  <p>Cantidad: {producto.cantidad}</p>
                  <p>${producto.cantidad * producto.precio}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </form>
    </>
  );
};

export default Checkout;
