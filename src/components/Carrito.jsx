import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { MdRemoveShoppingCart, MdShoppingCartCheckout } from "react-icons/md";


const Carrito = () => {

  const {carrito, precioTotalDelCarrito, vaciarCarrito} = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className='container'>      
      <h1 className='main-title'>Carrito</h1>
      {
        carrito.map((prod) => (
          <div key={prod.id}>
            <h3>{prod.titulo}</h3>
            <p>Precio unitario: $ {prod.precio}</p>              
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio total: $ {prod.precio * prod.cantidad}</p>
            <br />
          </div>            
        ))
      }
      
      {
        carrito.length > 0 ?
        <>
          <h2>Precio total: $ {precioTotalDelCarrito()}</h2>
          <button className="vaciar-carrito" onClick={handleVaciar}><MdRemoveShoppingCart /> Vaciar</button>
          <button className="finalizar-compra"><Link to="/checkout"><MdShoppingCartCheckout />Finalizar compra</Link></button>
        </> :
        <h2>El carrito está vacío!</h2>

      }
    </div>
  )
}

export default Carrito
