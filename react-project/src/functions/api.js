import axios from "axios";

const products = async (state) => {
  const peticion = await axios.get("https://api.escuelajs.co/api/v1/products");
  state(peticion.data);
};

const clothesProducts = async (state) => {
  const peticion = await axios.get("https://api.escuelajs.co/api/v1/categories/1/products");
  state(peticion.data);
};

export { products, clothesProducts };
