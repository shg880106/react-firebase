import React from 'react'
import { useState, useEffect } from 'react';

function TextH2() {

  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  //useEffect, recive dos parametros, funcion y array
  useEffect( () => {
    console.log("Componente montado");
  });

  return (
    <div>
      <input 
        type="text"
        onChange={handleText} />
      <p>{text}</p>
    </div>
  );
}

export default TextH2;

// montaje => mounting
// actualizacion => updating
// desmontaje => unmouting
