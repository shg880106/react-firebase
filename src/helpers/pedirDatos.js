import data from '../data/data.json';

const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve(data);
    }, 500)
  });
}

export default pedirDatos;