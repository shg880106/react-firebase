import data from '../data/data.json';

const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {      
    const item = data.find((el) => el.id === id);

    if (item) {
        resolve(item);
    } else {
        reject({
            error: "No se encontró el producto"
        })
    }
  })
}

export default pedirItemPorId