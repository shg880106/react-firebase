import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, doc, runTransaction } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {

  const [pedidoId, setPedidoId] = useState("");

  const { carrito, precioTotalDelCarrito, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const actualizarStock = async (pedido) => {

      try {
        // Iniciar una transacción para asegurar la atomicidad
        await runTransaction(db, async (transaction) => {

          for (let index = 0; index < pedido.productos.length; index++) {

            const producto = pedido.productos[index];

            // Obtener la referencia al documento del producto
            const productoRef = doc(db, 'productos', producto.id);

            // Obtener el documento del producto
            const productoDoc = await transaction.get(productoRef);

            if (!productoDoc.exists()) {
              throw new Error(`El producto con ID ${producto.id} no existe.`);
            }

            // Obtener el stock actual
            const stockActual = productoDoc.data().stock;

            // Calcular el nuevo stock
            const nuevoStock = stockActual - producto.cantidad;

            if (nuevoStock < 0) {
              throw new Error(`No hay suficiente stock para el producto con ID ${producto.id}.`);
            }

            // Actualizar el stock en el documento del producto
            transaction.update(productoRef, { stock: nuevoStock });
          }
        });

      console.log('Pedido procesado exitosamente y stock actualizado.');
    } catch (error) {
      console.error('Error al procesar el pedido:', error.message);
    }
  }


  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotalDelCarrito()
  }

  const pedidosRef = collection(db, "pedidos");

  addDoc(pedidosRef, pedido)
    .then((doc) => {
      actualizarStock(pedido);
      setPedidoId(doc.id);
      vaciarCarrito();      
    }) 
}

if (pedidoId) {
  return (
    <div className='container'>
      <h1 className='main-title'>Muchas gracias por su pedido</h1>
      <br />
      <p>Tu número de pedido es: <strong>{pedidoId}</strong></p>
    </div>
  )
}

return (
  <div className='container'>
    <h1 className='main-title'>Finalizar compra</h1>
    <form className='formulario' onSubmit={handleSubmit(comprar)}>

      <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
      <input type="phone" placeholder='Ingresa tu número de teléfono' {...register("telefono")} />
      <input type="email" placeholder='Ingresa tu email' {...register("email")} />

      <button className="finalizar-compra" type='sumbit'>Comprar</button>

    </form>
  </div>
)
}

export default Checkout
