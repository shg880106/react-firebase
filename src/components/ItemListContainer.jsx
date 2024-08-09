import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  //para mostrar el titulo en dependencia de la categoria
  const [titulo, setTitulo] = useState("Productos");

  // cogiendo la categoria de un producto
  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, "productos");

    //query para filtrar por categoria mientras categoria tenga parametros    
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          })
        );
      })

  }, [categoria])
  
  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer

