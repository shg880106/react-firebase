import React, { useState } from 'react'
import TextH2 from './TextH2';

function Text() {

  const [show, setShow] = useState(false);

  const handelShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <button 
        onClick={handelShow}>
        {show ? "Ocultar" : "Mostrar"}
      </button>
      {show  && <TextH2 />}
    </div>
  )
}

export default Text;