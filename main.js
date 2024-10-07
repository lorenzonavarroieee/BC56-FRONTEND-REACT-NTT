import './style.css'
import { getAndSkipProducts, getProducts } from './src/services/productApi.js'


const products = await getProducts();
const grid = document.getElementById('list-id')

products.products.forEach((element) => {
  let div = document.createElement('div');
  
  //image
  const imageItem = document.createElement('img')
  imageItem.src = element.thumbnail
  div.appendChild(imageItem)

  const content = document.createTextNode(element.title);
  div.appendChild(content);

  //description
  const descriptionItem = document.createElement('p')
  const description = document.createTextNode(element.description)
  div.appendChild(description)


  //price
  // const priceItem = document.createElement('p')
  // const price = document.

  grid.appendChild(div)
})

