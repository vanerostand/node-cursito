import productsData from '.products.json';

export const getAllProducts = () => {
  return productsData;
}

export const getProductById = (id) => {
  return productsData.find((product) => product.id === id);
}

export const createProduct = (product) => {
  productsData.push(product);
}

export const updateProduct = (id, product) => {
  const index = productsData.findIndex((product) => product.id === id);
  productsData[index] = product;
}
