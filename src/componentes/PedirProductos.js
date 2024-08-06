import data from '../data/data.json';

const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    resolve(data)
  });
};

export default pedirProductos;