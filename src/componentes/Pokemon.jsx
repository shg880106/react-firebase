import React, { useEffect, useState } from 'react'

function Pokemon() {

  const [pokemon, setPokemon] = useState();

  const [id, setId] = useState(1);

  const handleAnterior = () => {
    if (id > 1){
      setId(id - 1);
    }     
  };
  
  const handleSiguiente = () => {
    setId(id + 1);
  };

  //para que se ejecute el fetch solo cuando se monta el componente
  //el [id] es para que se actualice cuando el id cambie y se actualice el componente
  useEffect(() => {
    //funciona como una promesa
    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setPokemon(data);
      })
  }, [id]); 

  return (
    <div>{
        pokemon && 
        <div>
          <h2>{pokemon.name}</h2>
          <p>{pokemon.id}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <br></br>
          { 
            id > 1 ? <button onClick={handleAnterior}>Anterior</button> : <button disabled>Anterior</button>
          }          
          <button onClick={handleSiguiente}>Siguiente</button>
        </div>
      }
    </div>
  );
}

export default Pokemon;
