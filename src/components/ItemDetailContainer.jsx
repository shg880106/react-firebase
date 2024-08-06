import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = ( {itemID} ) => {
  
  const [item, setItem] = useState(null);

  useEffect(() => {
    pedirItemPorId(itemID)
      .then((res) => {
        setItem(res);
      })
  }, [])

  return (
    <div>
      {item && <ItemDetail item={item} />}
      
    </div>
  )
}

export default ItemDetailContainer;
