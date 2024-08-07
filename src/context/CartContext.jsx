import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  //estado global para el carrito
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito];

    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
    
    //para que no se agregue el prod doble
    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    } 
    setCarrito(nuevoCarrito);  
  }

  //funcion para que se actualice el valor del carrito
  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  //funcion para calcular el precio total del carrito
  const precioTotalDelCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  }

  //funcion para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  }

  return (
    <CartContext.Provider 
      value={ {
          carrito, 
          agregarAlCarrito, 
          cantidadEnCarrito, 
          precioTotalDelCarrito, 
          vaciarCarrito}}>
        {children}
    </CartContext.Provider> 
  );
}
