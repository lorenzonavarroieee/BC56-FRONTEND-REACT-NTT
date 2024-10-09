import { getProducts } from './services/products-api';
import './style.css'
import { createProductCard } from './utils/product-utils';

export const products = await getProducts();

products.products.map((element) => {
  createProductCard(element);
})