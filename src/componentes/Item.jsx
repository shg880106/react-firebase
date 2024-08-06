import React from 'react'

function Item({producto}) {
  return (
    <div>      
      <img src={producto.imagen} alt={producto.titulo} />
      <h2>{producto.titulo}</h2>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>            
    </div>
  );
}

export default Item;
