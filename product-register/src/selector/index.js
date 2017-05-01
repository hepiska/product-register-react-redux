export const filterProducts = (products, keyword) => (
  products.filter(product => product.name.includes(keyword))
);
