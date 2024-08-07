import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { TbShoppingCartFilled } from "react-icons/tb";

const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/carrito">
      <TbShoppingCartFilled /> 
        <span className='numerito'> {cantidadEnCarrito()}</span>
      </Link>
    </div>
  )
}

export default CartWidget
